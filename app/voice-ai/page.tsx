"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SMOOTHING = 0.7;
const VOLUME_SENSITIVITY = 2.5;

/* ── Voice orb + mic logic (untouched) ─────────────────────────────────── */
function VoiceOrb() {
  const [micActive, setMicActive] = useState(false);
  const [muted, setMuted] = useState(false);
  const [voiceLevel, setVoiceLevel] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number>(0);
  const smoothedLevelRef = useRef(0);
  const orbRef = useRef<HTMLDivElement>(null);

  const tick = useCallback(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    const sum = data.reduce((a, b) => a + b, 0);
    const raw = Math.min(1, (sum / data.length / 255) * VOLUME_SENSITIVITY);
    smoothedLevelRef.current = SMOOTHING * smoothedLevelRef.current + (1 - SMOOTHING) * raw;
    setVoiceLevel(smoothedLevelRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!micActive) {
      setVoiceLevel(0);
      smoothedLevelRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (audioContextRef.current?.state !== "closed") audioContextRef.current?.close();
      analyserRef.current = null;
      audioContextRef.current = null;
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        const ctx = new AudioContext();
        audioContextRef.current = ctx;
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.6;
        source.connect(analyser);
        analyserRef.current = analyser;
        rafRef.current = requestAnimationFrame(tick);
      } catch { if (!cancelled) setMicActive(false); }
    })();
    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      audioContextRef.current?.close();
      analyserRef.current = null;
    };
  }, [micActive, tick]);

  const orbScale = 1 + voiceLevel * 0.35;
  const orbGlowScale = 1.1 + voiceLevel * 0.35;
  const orbGlowOpacity = 0.85 + voiceLevel * 0.25;

  return (
    <>
      <div
        ref={orbRef}
        className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-8 voice-orb-container ${micActive ? "voice-orb-listening" : ""}`}
        style={micActive ? { transform: `scale(${orbScale})`, transition: "transform 0.08s ease-out" } : undefined}
      >
        <div className="absolute inset-0 rounded-full voice-orb-glow"
          style={micActive ? { transform: `scale(${orbGlowScale})`, opacity: orbGlowOpacity, transition: "transform 0.08s ease-out, opacity 0.08s ease-out" } : undefined}
        />
        <div className="absolute inset-0 rounded-full voice-orb-base" />
        <div className="absolute inset-0 rounded-full voice-orb-shine" />
        <div className="absolute inset-0 rounded-full voice-orb-facets" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1 tracking-tight">Voice Agent</h2>
      <p className="text-slate-500 text-sm mb-1">Your CandexAI voice assistant</p>
      <p className="text-slate-400 text-sm max-w-md text-center mb-8">
        {micActive ? "Listening… speak naturally." : "Discover the capabilities of conversational agents powered by CandexAI. Tap the mic to start."}
      </p>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button type="button"
          className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
          style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
          aria-label="Language">
          <Icon name="globe" size={18} color="#3A6FF8" />
        </button>
        <button type="button" onClick={() => setMicActive((a) => !a)}
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
          style={micActive
            ? { background: "linear-gradient(135deg,#1e3a8a,#1d4ed8)", boxShadow: "0 0 0 6px rgba(58,111,248,0.2), 0 8px 24px rgba(37,99,235,0.35)" }
            : { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          aria-label={micActive ? "Stop listening" : "Start listening"}>
          <svg className="w-6 h-6" fill={micActive ? "#fff" : "#334155"} viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.07.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.07-.6-.39-1.14-1-1.14z" />
          </svg>
        </button>
        <button type="button" onClick={() => setMuted((m) => !m)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
          style={muted
            ? { background: "rgba(148,163,184,0.8)", backdropFilter: "blur(12px)" }
            : { background: "rgba(239,68,68,0.9)", boxShadow: "0 4px 12px rgba(239,68,68,0.3)" }}
          aria-label={muted ? "Unmute" : "Mute"}>
          <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        </button>
      </div>

      {/* Coming soon note */}
      <div className="mt-8 px-6 py-3 rounded-full text-xs font-semibold text-slate-800"
        style={{ background: "rgba(58,111,248,0.08)", border: "1px solid rgba(58,111,248,0.2)" }}>
        · Full voice agent integration coming soon
      </div>
    </>
  );
}

/* ── Waveform animation ─────────────────────────────────────────────────── */
function WaveformAnim() {
  const bars = [3, 5, 8, 6, 10, 8, 5, 9, 7, 4, 8, 6, 10, 7, 5, 8, 6, 4, 9, 7];
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {bars.map((h, i) => (
        <div key={i} className="rounded-full"
          style={{
            width: 3, height: h * 4,
            background: "linear-gradient(to top, #3A6FF8, #6ea0ff)",
            opacity: 0.7,
            animation: `voice-wave 1.4s ease-in-out infinite`,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Page data ─────────────────────────────────────────────────────────── */
const CAPABILITIES = [
  { icon: "microphone", title: "Real-Time Transcription", body: "Sub-second speech-to-text with 99.2% accuracy across Hindi, English, and 12 regional languages. Domain-specific vocabulary trained in." },
  { icon: "brain",      title: "Contextual Understanding", body: "The agent understands intent, not just words. It remembers the full conversation context and responds naturally — no scripted menus." },
  { icon: "lock",       title: "100% On-Premise", body: "No audio ever leaves your infrastructure. Transcription, NLU, and response generation all run on your servers. Fully air-gap compatible." },
  { icon: "zap",        title: "< 300ms Response Latency", body: "Enterprise-grade response speed. The agent speaks back within 300ms of the user finishing — conversation feels natural, not robotic." },
  { icon: "globe",      title: "12+ Languages", body: "Multilingual from day one. Switch mid-conversation. Dialect and accent-aware models trained on real enterprise audio data." },
  { icon: "document",   title: "Structured Output", body: "Every conversation produces structured data — extracted fields, SOAP notes, form fills, or tickets — ready for downstream systems." },
];

const USE_CASES = [
  {
    industry: "Healthcare",
    title: "Clinical Documentation at the Speed of Speech",
    body: "Physicians speak naturally during patient consultations. The Voice AI transcribes, structures into SOAP notes, and files directly into the EMR — reducing documentation time by 70%.",
    result: "70% less physician documentation time",
    img: "/images/voice-ai/healthcare.jpg",
    metrics: [["70%","Doc time saved"],["99.2%","Transcription accuracy"],["18","Sites deployed"]],
  },
  {
    industry: "Customer Service",
    title: "AI-Powered Call Centre That Never Sleeps",
    body: "Replace IVR trees with a conversational voice agent that understands customer intent, resolves queries end-to-end, and escalates intelligently — 24/7, across all languages.",
    result: "94% queries resolved autonomously",
    img: "/images/voice-ai/callcenter.jpg",
    metrics: [["94%","Auto-resolution rate"],["<300ms","Response latency"],["24/7","Always available"]],
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Speech Capture", body: "Audio is captured via browser mic, telephony API (Twilio/WebRTC), or direct hardware integration. Low-latency streaming begins immediately." },
  { step: "02", title: "On-Prem Transcription", body: "Our domain-fine-tuned ASR model converts audio to text in real-time. All processing happens within your infrastructure — zero cloud dependencies." },
  { step: "03", title: "Intent & Context AI", body: "A domain-expert NLU model interprets intent, extracts entities, and maintains full conversation context across multiple turns." },
  { step: "04", title: "Structured Response", body: "The agent generates a natural language response AND structured output (EMR note, CRM entry, ticket) simultaneously. Both delivered in under 300ms." },
];

const TECH_SPECS = [
  { name: "ASR Model", value: "Domain fine-tuned Whisper / custom" },
  { name: "Languages", value: "12+ (Hindi, English, Tamil, Telugu…)" },
  { name: "Transcription accuracy", value: "99.2% on domain audio" },
  { name: "End-to-end latency", value: "< 300ms" },
  { name: "Audio input", value: "WebRTC, Twilio, SIP, browser mic" },
  { name: "Deployment", value: "On-prem, private cloud, air-gapped" },
  { name: "Output formats", value: "SOAP notes, JSON, plain text, form fill" },
  { name: "Integrations", value: "EMR, CRM, ERP, ticketing via REST API" },
];

/* ── Main Page ─────────────────────────────────────────────────────────── */
export default function VoiceAIPage() {
  return (
    <div className="relative min-h-screen">
      {/* Site background */}
      <div className="fixed-bg-layer" aria-hidden>
        <div className="gradient-bg-base absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <Header />

      {/* ── Hero strip ──────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-6 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-5"
            style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> VOICE AI
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight mb-4">
            Conversational AI that<br />
            <span style={{ color:"#3A6FF8" }}>hears, understands, acts.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-6">
            Enterprise voice agents trained on your domain — deployed entirely within your infrastructure. 99.2% accuracy. Under 300ms latency. Zero data leaving your network.
          </p>
          <WaveformAnim />
        </div>
      </section>

      {/* ── Orb demo ────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl py-12 px-8 flex flex-col items-center"
            style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.78)", boxShadow:"0 20px 60px rgba(58,111,248,0.1)" }}>
            <VoiceOrb />
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[["99.2%","Transcription accuracy"],["<300ms","End-to-end latency"],["12+","Languages supported"],["100%","Audio stays on-prem"]].map(([v,l])=>(
            <div key={l} className="rounded-2xl p-5 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              <p className="text-2xl font-bold text-slate-800">{v}</p>
              <p className="text-xs text-slate-500 mt-1 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">What It Does</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              Not just speech-to-text.<br />End-to-end voice intelligence.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="p-7 rounded-2xl" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)", color:"#fff" }}><Icon name={c.icon} size={20} /></div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ───────────────────────────────────────────────────── */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Industry Applications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Voice AI in the real world</h2>
          </div>
          <div className="flex flex-col gap-6">
            {USE_CASES.map((u, idx) => (
              <div key={u.industry} className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 16px 40px rgba(58,111,248,0.07)" }}>
                <div className={`grid lg:grid-cols-5 ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`lg:col-span-2 relative ${idx % 2 === 1 ? "[direction:ltr]" : ""}`} style={{ minHeight:280 }}>
                    <Image src={u.img} alt={u.industry} fill className="object-cover" sizes="40vw" />
                    <div className="absolute inset-0" style={{ background:"linear-gradient(to right, transparent 50%, rgba(255,255,255,0.7) 100%)" }} />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background:"rgba(58,111,248,0.75)", backdropFilter:"blur(8px)" }}>{u.industry}</span>
                  </div>
                  <div className={`lg:col-span-3 p-8 md:p-10 ${idx % 2 === 1 ? "[direction:ltr]" : ""}`}>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">{u.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{u.body}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      {u.metrics.map(([v, l]) => (
                        <div key={l} className="rounded-xl p-3 text-center" style={{ background:"rgba(58,111,248,0.07)" }}>
                          <p className="font-bold text-slate-800 text-base">{v}</p>
                          <p className="text-slate-500 text-[10px] mt-0.5 leading-snug">{l}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/customer-stories" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors">
                      Read full case study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Under the Hood</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">How the Voice AI pipeline works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((h, i) => (
              <div key={h.step} className="p-7 rounded-2xl relative overflow-hidden" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="text-7xl font-black absolute top-2 right-3" style={{ color:"rgba(58,111,248,0.06)" }}>0{i+1}</div>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white text-xs font-bold mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>{h.step}</span>
                <h3 className="font-bold text-slate-800 mb-2">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical specs ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="px-8 py-6" style={{ borderBottom:"1px solid rgba(148,163,184,0.15)" }}>
              <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">Technical Specifications</p>
            </div>
            <div className="grid sm:grid-cols-2">
              {TECH_SPECS.map((s, i) => (
                <div key={s.name} className="flex justify-between gap-4 items-center px-8 py-4"
                  style={{ borderBottom: i < TECH_SPECS.length - 2 || (TECH_SPECS.length % 2 !== 0 && i === TECH_SPECS.length - 1) ? "1px solid rgba(148,163,184,0.1)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(148,163,184,0.1)" : "none" }}>
                  <span className="text-slate-500 text-sm">{s.name}</span>
                  <span className="text-slate-800 text-sm font-semibold text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Deploy Voice AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Ready to hear the difference?</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Book a 30-minute demo and hear CandexAI Voice AI on a real enterprise use case from your industry — running entirely within a private environment.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">
                Book a Voice AI Demo →
              </Link>
              <Link href="/features/search-data-ai" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Voice orb styles are defined in globals.css */}
    </div>
  );
}
