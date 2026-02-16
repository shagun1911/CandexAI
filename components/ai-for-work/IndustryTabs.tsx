"use client";

import { useState } from "react";
import Link from "next/link";

type Industry = { id: string; label: string; active?: boolean };
type CaseStudy = {
  eyebrow: string;
  headline: string;
  stats: readonly { value: number; suffix: string; label: string }[];
  moreStories: { label: string; href: string };
  workWithUs: { label: string; href: string };
};

export default function IndustryTabs({
  industries,
  caseStudy,
}: {
  industries: readonly Industry[];
  caseStudy: CaseStudy;
}) {
  const [activeId, setActiveId] = useState(industries.find((i) => i.active)?.id ?? industries[0].id);
  const [contentKey, setContentKey] = useState(0);

  const handleTab = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setContentKey((k) => k + 1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            onClick={() => handleTab(ind.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeId === ind.id
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/80 text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {ind.label}
          </button>
        ))}
      </div>

      <div
        key={contentKey}
        className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm tab-content-reveal"
      >
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">{caseStudy.eyebrow}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
          {caseStudy.headline}
        </h2>
        <div className="flex flex-wrap gap-8 md:gap-12 mb-8">
          {caseStudy.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-gray-900">
                {s.value}
                {s.suffix}
              </span>
              <span className="text-gray-600">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={caseStudy.moreStories.href}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            {caseStudy.moreStories.label}
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </Link>
          <Link
            href={caseStudy.workWithUs.href}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            {caseStudy.workWithUs.label}
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
