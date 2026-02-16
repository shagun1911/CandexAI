import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPage } from "@/lib/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPage.posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPage.posts.find((p) => p.id === slug);
  if (!post) return { title: "Blog | CandexAI" };
  return {
    title: `${post.title} | CandexAI Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPage.posts.find((p) => p.id === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {post.description}
        </p>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Enterprise AI is transforming how organizations operate. At CandexAI, we focus on privacy-first, 
            scalable AI that runs in your infrastructure. This insight explores {post.title.toLowerCase()} 
            and how it connects to secure, sovereign AI deployment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            For more resources, visit our <Link href="/use-cases" className="text-blue-600 hover:underline">use cases</Link>, 
            <Link href="/technology" className="text-blue-600 hover:underline ml-1">technology</Link>, and 
            <Link href="/documentation" className="text-blue-600 hover:underline ml-1">documentation</Link> pages.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
