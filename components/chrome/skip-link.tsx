export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[90] min-h-[44px] rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] shadow-[var(--shadow-lift)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
