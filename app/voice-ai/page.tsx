"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SMOOTHING = 0.7;
const VOLUME_SENSITIVITY = 2.5;

export default function VoiceAIPage() {
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
    smoothedLevelRef.current =
      SMOOTHING * smoothedLevelRef.current + (1 - SMOOTHING) * raw;
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
      if (audioContextRef.current?.state !== "closed") {
        audioContextRef.current?.close();
      }
      analyserRef.current = null;
      audioContextRef.current = null;
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
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
      } catch (e) {
        if (!cancelled) setMicActive(false);
      }
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
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Header />

      {/* Soft gradient background */}
      <main className="flex-1 flex flex-col min-h-[calc(100vh-4rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#f5f5f7] to-gray-100/90 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" aria-hidden />

        {/* Top bar: timer + expand */}
        <div className="relative z-10 flex items-center justify-end px-6 py-4">
          <span className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-mono text-sm tabular-nums">00:00</span>
          <button
            type="button"
            className="p-2.5 rounded-full bg-white/80 border border-gray-200/80 text-gray-600 hover:bg-white hover:border-gray-300 transition-colors"
            aria-label="Expand"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Center: 3D-style blue orb + text + controls */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-8">
          {/* 3D blue orb - voice-reactive when mic on */}
          <div
            ref={orbRef}
            className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-8 voice-orb-container ${micActive ? "voice-orb-listening" : ""}`}
            style={
              micActive
                ? {
                    transform: `scale(${orbScale})`,
                    transition: "transform 0.08s ease-out",
                  }
                : undefined
            }
          >
            <div
              className="absolute inset-0 rounded-full voice-orb-glow"
              style={
                micActive
                  ? {
                      transform: `scale(${orbGlowScale})`,
                      opacity: orbGlowOpacity,
                      transition: "transform 0.08s ease-out, opacity 0.08s ease-out",
                    }
                  : undefined
              }
            />
            <div className="absolute inset-0 rounded-full voice-orb-base" />
            <div className="absolute inset-0 rounded-full voice-orb-shine" />
            <div className="absolute inset-0 rounded-full voice-orb-facets" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight">
            Voice Agent
          </h2>
          <p className="text-gray-500 text-sm mb-1">Your CandexAI voice assistant</p>
          <p className="text-gray-400 text-sm max-w-md text-center mb-10">
            Discover the capabilities of conversational agents powered by CandexAI. Tap the mic to start.
          </p>

          {/* Control buttons: language, mic, mute */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center"
              aria-label="Language"
            >
              <span className="text-lg" aria-hidden>🌐</span>
            </button>
            <button
              type="button"
              onClick={() => setMicActive((a) => !a)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                micActive
                  ? "bg-gray-900 text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              }`}
              aria-label={micActive ? "Stop listening" : "Start listening"}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.07.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.07-.6-.39-1.14-1-1.14z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                muted
                  ? "bg-gray-400 text-white"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Scoped styles for the 3D orb */}
      <style jsx>{`
        .voice-orb-container {
          animation: orb-float 8s ease-in-out infinite;
        }
        .voice-orb-container.voice-orb-listening {
          animation: none;
        }
        .voice-orb-glow {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(59, 130, 246, 0.35) 0%,
            rgba(99, 102, 241, 0.2) 40%,
            transparent 70%
          );
          filter: blur(12px);
          transform: scale(1.15);
          animation: orb-glow-pulse 4s ease-in-out infinite;
        }
        .voice-orb-container.voice-orb-listening .voice-orb-glow {
          animation: none;
        }
        .voice-orb-base {
          background: radial-gradient(
            circle at 35% 35%,
            #eff6ff 0%,
            #bfdbfe 15%,
            #60a5fa 35%,
            #3b82f6 50%,
            #2563eb 65%,
            #1d4ed8 85%,
            #1e40af 100%
          );
          box-shadow:
            inset -8px -12px 24px rgba(0, 0, 0, 0.25),
            inset 8px 12px 28px rgba(255, 255, 255, 0.35),
            0 20px 50px -15px rgba(37, 99, 235, 0.45);
          animation: orb-rotate 20s linear infinite;
        }
        .voice-orb-shine {
          background: radial-gradient(
            circle at 40% 30%,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.25) 25%,
            transparent 50%
          );
          box-shadow: inset 2px 2px 20px rgba(255, 255, 255, 0.4);
          animation: orb-rotate 20s linear infinite reverse;
        }
        .voice-orb-facets {
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(255, 255, 255, 0.15) 0deg,
            transparent 60deg,
            rgba(0, 0, 0, 0.08) 120deg,
            transparent 180deg,
            rgba(255, 255, 255, 0.12) 240deg,
            transparent 300deg
          );
          animation: orb-rotate 25s linear infinite;
        }
        @keyframes orb-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes orb-glow-pulse {
          0%, 100% { opacity: 0.9; transform: scale(1.15); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes orb-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <Footer />
    </div>
  );
}
