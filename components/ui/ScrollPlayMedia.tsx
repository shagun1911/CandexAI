"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  videoSrc?: string | null;
  children: React.ReactNode;
  className?: string;
};

/**
 * When scrolled into view, video auto-plays (no play button).
 * When no videoSrc, children get .use-case-anim-visible for CSS animations.
 */
export default function ScrollPlayMedia({ videoSrc, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const video = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const nowInView = entry.isIntersecting;
        setInView(nowInView);
        if (video && videoSrc) {
          if (nowInView) video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <div ref={ref} className={className}>
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-xl"
          aria-label="Demo"
        />
      ) : (
        <div className={`w-full h-full rounded-xl overflow-hidden ${inView ? "use-case-anim-visible" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
