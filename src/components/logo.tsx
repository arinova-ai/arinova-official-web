export function ArinovaLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chat bubble outline only */}
      <path
        d="M32 4C16.536 4 4 14.745 4 28c0 7.442 4.164 14.1 10.7 18.536C14.1 51.2 10.4 57.6 8 60c0 0 9.6-1.6 16.8-6.4C26.8 54.2 29.36 54.6 32 54.6c15.464 0 28-10.745 28-24S47.464 4 32 4Z"
        stroke="#6366f1"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      {/* "Ai" text in indigo */}
      <text
        x="32"
        y="28"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#6366f1"
        letterSpacing="-0.5"
      >
        Ai
      </text>
    </svg>
  );
}
