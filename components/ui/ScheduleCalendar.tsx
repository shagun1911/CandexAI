"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
];

const MEETING_TYPES = [
  { id: "discovery", label: "Discovery Call", duration: "30 min", icon: "search" },
  { id: "demo", label: "Platform Demo", duration: "45 min", icon: "monitor" },
  { id: "technical", label: "Technical Deep-Dive", duration: "60 min", icon: "settings" },
];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const days = last.getDate();
  const pad = Array.from({ length: startPad }, () => null);
  const dayNums = Array.from({ length: days }, (_, i) => i + 1);
  return [...pad, ...dayNums];
}

const GLASS = {
  background: "rgba(255,255,255,0.65)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.78)",
  boxShadow: "0 16px 48px rgba(58,111,248,0.08)",
} as const;

export default function ScheduleCalendar() {
  const today = new Date();
  const [meetingType, setMeetingType] = useState("discovery");
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "time" | "form">("date");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleString("default", { month: "long", year: "numeric" });
  const days = getDaysInMonth(year, month);

  const isSelected = (day: number | null) =>
    !!selectedDate && day != null && selectedDate.getDate() === day &&
    selectedDate.getMonth() === month && selectedDate.getFullYear() === year;

  const isToday = (day: number | null) =>
    day != null && today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

  const isPast = (day: number | null) => {
    if (day == null) return true;
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(today);
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const isWeekend = (day: number | null) => {
    if (day == null) return false;
    const dow = new Date(year, month, day).getDay();
    return dow === 0 || dow === 6;
  };

  const handleSelectDate = (day: number | null) => {
    if (!day || isPast(day) || isWeekend(day)) return;
    setSelectedDate(new Date(year, month, day));
    setSelectedTime(null);
    setStep("time");
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const selectedMeeting = MEETING_TYPES.find(m => m.id === meetingType)!;

  if (submitted) {
    return (
      <div className="rounded-3xl p-10 text-center" style={GLASS}>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
          style={{ background: "linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}
        >
          <Icon name="check" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">You&apos;re all set!</h3>
        <p className="text-slate-500 leading-relaxed mb-2">
          {selectedMeeting.label} confirmed for{" "}
          <span className="font-semibold text-slate-700">
            {selectedDate!.toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime}
          </span>
        </p>
        <p className="text-slate-500 text-sm mb-8">
          A calendar invite will be sent to <span className="font-semibold text-slate-700">{email}</span> within 5 minutes.
        </p>
        <div
          className="rounded-2xl p-5 text-left"
          style={{ background: "rgba(58,111,248,0.06)", border: "1px solid rgba(58,111,248,0.12)" }}
        >
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-semibold text-slate-800">What happens next:</span> Our team will review your message and prepare specific insights for your industry before the call. Expect a confirmation email with a meeting link shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl overflow-hidden" style={GLASS}>
      {/* Meeting type selector */}
      <div className="p-6" style={{ borderBottom: "1px solid rgba(148,163,184,0.15)" }}>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Meeting Type</p>
        <div className="flex flex-col gap-2">
          {MEETING_TYPES.map(m => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMeetingType(m.id)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
              style={{
                background: meetingType === m.id ? "rgba(58,111,248,0.1)" : "rgba(255,255,255,0.5)",
                border: `1.5px solid ${meetingType === m.id ? "rgba(58,111,248,0.35)" : "rgba(255,255,255,0.7)"}`,
              }}
            >
              <Icon name={m.icon} size={16} />
              <div className="flex-1">
                <p className="font-semibold text-slate-800 text-sm">{m.label}</p>
              </div>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: meetingType === m.id ? "rgba(58,111,248,0.15)" : "rgba(148,163,184,0.15)", color: meetingType === m.id ? "#3A6FF8" : "#94a3b8" }}
              >
                {m.duration}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Step: Date picker */}
      {(step === "date" || step === "time" || step === "form") && (
        <div className="p-6" style={{ borderBottom: "1px solid rgba(148,163,184,0.15)" }}>
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month - 1))}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.75)" }}
              aria-label="Previous month"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-bold text-slate-800">{monthLabel}</span>
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month + 1))}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.75)" }}
              aria-label="Next month"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {WEEKDAYS.map(d => (
              <div key={d} className="text-center text-[10px] font-bold text-slate-400 uppercase py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              const past = isPast(day);
              const weekend = isWeekend(day);
              const disabled = past || weekend || day == null;
              const sel = isSelected(day);
              const tod = isToday(day);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectDate(day)}
                  disabled={disabled}
                  className="h-9 w-full rounded-xl text-sm font-medium transition-all"
                  style={{
                    visibility: day == null ? "hidden" : "visible",
                    background: sel
                      ? "linear-gradient(135deg,#3A6FF8,#6ea0ff)"
                      : tod
                      ? "rgba(58,111,248,0.08)"
                      : "transparent",
                    color: sel ? "#fff" : disabled ? "#cbd5e1" : "#334155",
                    cursor: disabled ? "not-allowed" : "pointer",
                    border: tod && !sel ? "1.5px solid rgba(58,111,248,0.4)" : "1.5px solid transparent",
                    fontWeight: tod ? 700 : 500,
                  }}
                >
                  {day ?? ""}
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-slate-400 mt-3 text-center">Weekends unavailable · Shown in IST</p>
        </div>
      )}

      {/* Step: Time slots */}
      {selectedDate && (
        <div className="p-6" style={{ borderBottom: step === "form" ? "1px solid rgba(148,163,184,0.15)" : "none" }}>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            {selectedDate.toLocaleDateString("default", { weekday: "long", month: "short", day: "numeric" })}
          </p>
          <div className="flex flex-wrap gap-2">
            {TIME_SLOTS.map(time => (
              <button
                key={time}
                type="button"
                onClick={() => handleSelectTime(time)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: selectedTime === time ? "linear-gradient(135deg,#3A6FF8,#6ea0ff)" : "rgba(255,255,255,0.6)",
                  border: `1px solid ${selectedTime === time ? "transparent" : "rgba(255,255,255,0.75)"}`,
                  color: selectedTime === time ? "#fff" : "#475569",
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step: Booking form */}
      {step === "form" && selectedDate && selectedTime && (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Your Details</p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1.5">Full Name *</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Shubham Sharma"
                required
                className="w-full h-11 px-3.5 rounded-xl text-sm text-slate-700 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(148,163,184,0.25)" }}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-slate-500 mb-1.5">Company</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Your company"
                className="w-full h-11 px-3.5 rounded-xl text-sm text-slate-700 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(148,163,184,0.25)" }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1.5">Work Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full h-11 px-3.5 rounded-xl text-sm text-slate-700 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(148,163,184,0.25)" }}
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-semibold text-slate-500 mb-1.5">Your Role</label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={e => setRole(e.target.value)}
              placeholder="e.g. CTO, Head of AI, VP Engineering"
              className="w-full h-11 px-3.5 rounded-xl text-sm text-slate-700 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(148,163,184,0.25)" }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-500 mb-1.5">What would you like to explore? <span className="text-slate-400 font-normal">(optional)</span></label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. We process 10,000 documents/month and want to automate review..."
              rows={3}
              className="w-full px-3.5 py-3 rounded-xl text-sm text-slate-700 outline-none transition-all resize-none"
              style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(148,163,184,0.25)" }}
            />
          </div>

          {/* Summary */}
          <div
            className="rounded-xl px-4 py-3 flex items-center justify-between"
            style={{ background: "rgba(58,111,248,0.06)", border: "1px solid rgba(58,111,248,0.12)" }}
          >
            <div>
              <p className="text-xs text-slate-500">
                {selectedMeeting.icon} {selectedMeeting.label} · {selectedMeeting.duration}
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {selectedDate.toLocaleDateString("default", { weekday: "short", month: "short", day: "numeric" })} &nbsp;·&nbsp; {selectedTime}
              </p>
            </div>
            <button
              type="button"
              onClick={() => { setStep("date"); setSelectedDate(null); setSelectedTime(null); }}
              className="text-xs text-slate-600 font-semibold hover:text-blue-600"
            >
              Change
            </button>
          </div>

          <button
            type="submit"
            disabled={!name.trim() || !email.trim()}
            className="w-full h-12 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg,#3A6FF8,#6ea0ff)", boxShadow: "0 4px 16px rgba(58,111,248,0.3)" }}
          >
            Confirm Meeting →
          </button>

          <p className="text-[10px] text-center text-slate-400">
            By booking, you agree to our privacy policy. We never spam.
          </p>
        </form>
      )}
    </div>
  );
}
