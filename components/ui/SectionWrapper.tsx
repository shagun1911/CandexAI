import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Optional background (e.g. white/90 for contrast) */
  variant?: "default" | "subtle" | "contrast";
};

const variants = {
  default: "",
  subtle: "bg-white/70 backdrop-blur-sm",
  contrast: "bg-white/90 backdrop-blur-sm border-t border-white/40",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  variant = "default",
}: Props) {
  return (
    <section
      id={id}
      className={`section-spacing relative z-10 ${variants[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
