// Abstract, code-drawn thumbnails so the page ships zero image bytes. Swap for real screenshots via next/image.
export default function ProjectThumb({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <svg viewBox="0 0 320 200" aria-hidden="true">
        <rect x="16" y="16" width="288" height="22" rx="5" fill="var(--line)" />
        <rect x="16" y="50" width="136" height="134" rx="8" fill="color-mix(in srgb, var(--accent) 30%, var(--surface))" />
        <rect x="164" y="50" width="140" height="14" rx="4" fill="var(--line)" />
        <rect x="164" y="72" width="100" height="10" rx="4" fill="var(--line)" />
        <rect x="164" y="98" width="62" height="20" rx="5" fill="var(--accent)" />
        <rect x="164" y="132" width="64" height="52" rx="6" fill="var(--line)" />
        <rect x="240" y="132" width="64" height="52" rx="6" fill="var(--line)" />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 320 200" aria-hidden="true">
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect key={`${r}-${c}`} x={22 + c * 58} y={22 + r * 42} width="46" height="30" rx={c % 2 ? 15 : 6}
              fill={(r + c) % 4 === 0 ? "var(--accent)" : (r + c) % 3 === 0 ? "var(--signal)" : "var(--line)"} />
          ))
        )}
      </svg>
    );
  }
  if (variant === 3) {
    const rows = [["✓", "checkout.spec.ts", 0.9], ["✓", "login.spec.ts", 0.6], ["✓", "search.spec.ts", 0.75], ["✓", "profile.spec.ts", 0.5], ["●", "booking.spec.ts", 0.3]] as const;
    return (
      <svg viewBox="0 0 320 200" aria-hidden="true">
        {rows.map(([m, name, w], i) => (
          <g key={name} transform={`translate(22 ${26 + i * 32})`}>
            <text x="0" y="12" fontFamily="var(--font-mono)" fontSize="13" fill={m === "✓" ? "var(--good)" : "var(--accent)"}>{m}</text>
            <text x="20" y="12" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)">{name}</text>
            <rect x="150" y="3" width="126" height="10" rx="5" fill="var(--line)" />
            <rect x="150" y="3" width={126 * w} height="10" rx="5" fill={m === "✓" ? "var(--signal)" : "var(--accent)"} />
          </g>
        ))}
      </svg>
    );
  }
  if (variant === 4) {
    const steps = ["ID", "Selfie", "Verify", "Done"];
    return (
      <svg viewBox="0 0 320 200" aria-hidden="true">
        <line x1="50" x2="270" y1="100" y2="100" stroke="var(--line)" strokeWidth="4" />
        <line x1="50" x2="196" y1="100" y2="100" stroke="var(--accent)" strokeWidth="4" />
        {steps.map((s, i) => (
          <g key={s} transform={`translate(${50 + i * 73.3} 100)`}>
            <circle r="16" fill={i < 3 ? "var(--accent)" : "var(--surface)"} stroke={i < 3 ? "var(--accent)" : "var(--line)"} strokeWidth="3" />
            <text y="42" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)">{s}</text>
          </g>
        ))}
      </svg>
    );
  }
  const pts = [150, 132, 140, 104, 116, 84, 96, 66, 78, 52, 60, 40];
  const d = pts.map((y, i) => `${i ? "L" : "M"}${20 + i * 25.5},${y}`).join(" ");
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      {[50, 90, 130, 170].map((y) => <line key={y} x1="20" x2="300" y1={y} y2={y} stroke="var(--line)" strokeWidth="1" />)}
      <path d={`${d} L300.5,170 L20,170 Z`} fill="color-mix(in srgb, var(--signal) 22%, transparent)" />
      <path d={d} fill="none" stroke="var(--signal)" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="300.5" cy="40" r="5" fill="var(--signal)" />
    </svg>
  );
}
