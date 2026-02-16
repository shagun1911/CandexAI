"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: readonly Item[] }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openId === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <span
                className={`accordion-icon shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${isOpen ? "open" : ""}`}
                aria-hidden
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: isOpen ? 400 : 0 }}
              aria-hidden={!isOpen}
            >
              <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
