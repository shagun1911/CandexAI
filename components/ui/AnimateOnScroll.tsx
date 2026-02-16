"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Add 'reveal-fade-only' for no translate, only opacity */
  fadeOnly?: boolean;
  /** Root margin (e.g. "0px 0px -60px 0px") to trigger earlier/later */
  rootMargin?: string;
};

export default function AnimateOnScroll({ children, className = "", fadeOnly, rootMargin = "0px 0px -40px 0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${fadeOnly ? "reveal-fade-only" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
