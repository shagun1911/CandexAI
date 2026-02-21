"use client";

import dynamic from "next/dynamic";

/**
 * Wraps the page with a client-only loader.
 * ssr: false guarantees ElegantLoader is NEVER server-rendered,
 * eliminating all hydration mismatches at the architectural level.
 */
const ElegantLoader = dynamic(() => import("./ElegantLoader"), {
  ssr: false,
  loading: () => null,
});

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ElegantLoader />
      {children}
    </>
  );
}
