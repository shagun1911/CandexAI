import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { blogPage } from "@/lib/data/blog";

export const metadata = {
  title: "Blog & Insights | CandexAI – Secure, Scalable AI",
  description: "Expert perspectives on privacy-first AI, on-premise solutions, and enterprise innovation. CandexAI blog and insights.",
};

export default function BlogPage() {
  const { hero, posts } = blogPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Top Resources + Quick Links bar */}
      <section className="border-b border-gray-100 bg-gray-50/50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-x-12 gap-y-4 justify-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Top resources</p>
            <ul className="flex flex-wrap gap-4">
              {blogPage.topResources.map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Quick links</p>
            <ul className="flex flex-wrap gap-4">
              {blogPage.quickLinks.map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-16 md:py-14 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Latest insights</h2>
            <p className="text-gray-600">Expert perspectives on enterprise AI, security, and innovation.</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className={`block reveal-child reveal-stagger-${(i % 9) + 1} solution-card-hover rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-100/50 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center">
                      <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4 4v4m0 0v-4m0-4V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
