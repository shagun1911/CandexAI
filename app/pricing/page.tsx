import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Choose Your <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Perfect Plan</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          From simple websites to enterprise-grade platforms. We build solutions that scale with your business.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "$1,999", description: "For teams getting started with AI—focused scope and fast deployment.", popular: false },
            { name: "Professional", price: "$4,999", description: "For growing organizations—broader capabilities and integration support.", popular: true },
            { name: "Enterprise", price: "$8,999+", description: "For large-scale deployment—full platform, SLAs, and dedicated support.", popular: false },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 border-2 ${plan.popular ? "border-violet-500 bg-violet-50/50" : "border-gray-200"}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price} <span className="text-base font-normal text-gray-500">one-time</span></p>
              <Link href="/schedule" className="block w-full py-3 rounded-xl text-center font-semibold border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
