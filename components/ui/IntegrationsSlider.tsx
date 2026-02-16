"use client";

const LOGO_SIZE = 32;
const CDN = "https://cdn.simpleicons.org";

const PLATFORMS: Array<{
  name: string;
  logoSrc?: string;
  customLogo?: React.ReactNode;
}> = [
  {
    name: "Twilio",
    customLogo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.638 0-8.4 3.762-8.4 8.4s3.762 8.4 8.4 8.4 8.4-3.762 8.4-8.4-3.762-8.4-8.4-8.4zm0 2.4a6 6 0 110 12 6 6 0 010-12zm0 1.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z"
          fill="#F22F46"
        />
      </svg>
    ),
  },
  { name: "WhatsApp", logoSrc: `${CDN}/whatsapp/25D366` },
  {
    name: "Gmail",
    customLogo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L2.455 4.64 12 9.818l9.545-5.182-1.382-1.382c.065-.045.137-.082.21-.118.582-.29 1.236-.09 1.527.491.29.582.09 1.236-.491 1.527-.12.06-.246.106-.373.145L24 5.457z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Google Drive",
    customLogo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden>
        <path d="M7.71 3.5L1.15 15h3.28l1.4-2.5h6.34l1.4 2.5h3.28L12.29 3.5H7.71z" fill="#0066DA" />
        <path d="M16.29 3.5L9.71 15h3.28l1.4-2.5h6.34l1.4 2.5h3.28L22.85 3.5h-6.56z" fill="#00AC47" />
        <path d="M22.85 3.5l-6.56 11.5h3.28l1.4-2.5h6.34l1.4 2.5h3.28L22.85 3.5z" fill="#FBBC05" />
      </svg>
    ),
  },
  { name: "Meta", logoSrc: `${CDN}/meta/0668E1` },
  {
    name: "Perplexity",
    customLogo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#1B1F24" />
        <text x="12" y="16.5" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">P</text>
      </svg>
    ),
  },
  {
    name: "MCP",
    customLogo: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        aria-hidden
      >
        <rect width="24" height="24" rx="4" fill="#1B1F24" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          MCP
        </text>
      </svg>
    ),
  },
];

function SliderCard({
  name,
  logoSrc,
  customLogo,
}: {
  name: string;
  logoSrc?: string;
  customLogo?: React.ReactNode;
}) {
  return (
    <div className="flex-shrink-0 w-36 h-24 rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-2 shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-center w-10 h-10 shrink-0 [&_svg]:size-8 [&_img]:size-8">
        {customLogo ? (
          customLogo
        ) : logoSrc ? (
          <img
            src={logoSrc}
            alt=""
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="object-contain w-8 h-8"
          />
        ) : null}
      </div>
      <span className="text-sm font-medium text-gray-600">{name}</span>
    </div>
  );
}

export default function IntegrationsSlider() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex integrations-slider-track w-max gap-6">
        {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
          <SliderCard
            key={`${p.name}-${i}`}
            name={p.name}
            logoSrc={p.logoSrc}
            customLogo={p.customLogo}
          />
        ))}
      </div>
    </div>
  );
}
