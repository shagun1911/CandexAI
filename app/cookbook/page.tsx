"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  cookbookPage,
  cookbookCategories,
  cookbookRecipes,
  type CookbookCategoryId,
} from "@/lib/data/cookbook";

export default function CookbookPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CookbookCategoryId>("all");

  const filteredRecipes = useMemo(() => {
    if (selectedCategory === "all") return [...cookbookRecipes];
    return cookbookRecipes.filter((r) => r.categoryId === selectedCategory);
  }, [selectedCategory]);

  const { hero, filterLabel, moreComingSoon } = cookbookPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Filter by category */}
      <section className="py-8 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {filterLabel}
          </h2>
          <div className="flex flex-wrap gap-2">
            {cookbookCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe cards grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More recipes coming soon */}
      <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            {moreComingSoon.heading}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {moreComingSoon.description}
          </p>
          <Link
            href={moreComingSoon.ctaHref}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            {moreComingSoon.ctaLabel}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
