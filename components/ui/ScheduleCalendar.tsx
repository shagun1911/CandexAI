"use client";

import { useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const days = last.getDate();
  const pad = Array.from({ length: startPad }, (_, i) => null);
  const dayNums = Array.from({ length: days }, (_, i) => i + 1);
  return [...pad, ...dayNums];
}

export default function ScheduleCalendar() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleString("default", { month: "long", year: "numeric" });
  const days = getDaysInMonth(year, month);

  const prevMonth = () => setViewDate(new Date(year, month - 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1));

  const handleSelectDate = (day: number | null) => {
    if (day == null) return;
    setSelectedDate(new Date(year, month, day));
    setSelectedTime(null);
  };

  const isSelected = (day: number | null) => {
    if (!selectedDate || day == null) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  };

  const isToday = (day: number | null) => {
    if (day == null) return false;
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

  const isPast = (day: number | null) => {
    if (day == null) return true;
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(today);
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
      {/* Calendar */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <button
            type="button"
            onClick={prevMonth}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-900">{monthLabel}</span>
          <button
            type="button"
            onClick={nextMonth}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {WEEKDAYS.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-gray-500 py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectDate(day)}
                disabled={day == null || isPast(day)}
                className={`
                  h-10 rounded-lg text-sm font-medium transition-colors
                  ${day == null ? "invisible" : ""}
                  ${isPast(day) ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}
                  ${isToday(day) ? "ring-2 ring-violet-500 ring-inset" : ""}
                  ${isSelected(day) ? "bg-violet-600 text-white hover:bg-violet-700" : ""}
                `}
              >
                {day ?? ""}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time + booking form */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-1">
            {selectedDate
              ? selectedDate.toLocaleDateString("default", { weekday: "long", month: "short", day: "numeric" })
              : "Select a date"}
          </h3>
          {selectedDate && (
            <div className="flex flex-wrap gap-2 mt-3">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                    ${selectedTime === time
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
              placeholder="you@company.com"
              required
            />
          </div>
          {submitted ? (
            <div className="p-4 rounded-xl bg-green-50 text-green-800 text-sm">
              Meeting requested. We’ll send a calendar invite to {email}.
            </div>
          ) : (
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              className="w-full h-12 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Schedule meeting
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
