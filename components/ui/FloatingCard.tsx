"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  float?: boolean;
  href?: string;
  as?: "div" | "article" | "section";
};

export default function FloatingCard({
  children,
  className = "",
  float = false,
  href,
  as: Component = "div",
}: Props) {
  const base =
    "floating-card rounded-[20px] p-6 " +
    (float ? " card-float-animate" : "") +
    " " +
    className;

  if (href) {
    return (
      <a href={href} className={`block ${base}`}>
        {children}
      </a>
    );
  }

  return <Component className={base}>{children}</Component>;
}
