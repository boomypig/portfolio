export default function Tag({ children }) {
  return (
    <span className="rounded bg-primary-container/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant">
      {children}
    </span>
  );
}
