"use client";

import { useState, useEffect } from "react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8fafc] transition-opacity duration-500 ease-out"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
        aria-hidden={!visible}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="loader-orb" aria-hidden />
          <p className="text-sm font-medium text-slate-500 tracking-wide">candexAi</p>
        </div>
      </div>
      <style jsx>{`
        .loader-orb {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%);
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.25);
          animation: loader-pulse 1.2s ease-in-out infinite;
        }
        @keyframes loader-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.25); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(99, 102, 241, 0); }
        }
      `}</style>
      {children}
    </>
  );
}
