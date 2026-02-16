import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScheduleCalendar from "@/components/ui/ScheduleCalendar";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule a <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Meeting</span>
          </h1>
          <p className="text-xl text-gray-600">Pick a date and time that works for you</p>
        </div>
        <ScheduleCalendar />
      </main>
      <Footer />
    </div>
  );
}
