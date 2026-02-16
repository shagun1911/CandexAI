import Link from "next/link";
import { footer } from "@/lib/data/footer";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo_CandexAI.png" alt="CandexAI" className="h-7 w-7 object-contain" width={28} height={28} />
              <span className="font-bold text-white text-lg tracking-tight">CandexAI</span>
            </div>
            <p className="text-sm mb-4">{footer.tagline}</p>
            <div className="flex gap-4 mb-4">
              {footer.social.map((s) => (
                <a key={s.name} href={s.href} className="text-gray-400 hover:text-white transition-colors" aria-label={s.name}>
                  {s.name === "LinkedIn" ? "in" : "ig"}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mohan Nagar, Jaipur, Rajasthan
              </p>
              <a href="mailto:infoCandexAI@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                infoCandexAI@gmail.com
              </a>
            </div>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-white mb-4">{col.heading}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="mailto:infoCandexAI@gmail.com" className="hover:text-white transition-colors">Email Us</Link></li>
              <li><Link href="/schedule" className="hover:text-white transition-colors">Book a Meeting</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>{footer.copyright}</span>
          <div className="flex flex-wrap justify-center gap-6">
            {footer.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
