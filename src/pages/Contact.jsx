import { profile } from "../data/content.js";

const social = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export default function Contact() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
      <h1 className="editorial text-5xl text-on-surface md:text-7xl">
        Get in Contact!
      </h1>
      <p className="mt-8 max-w-md text-on-surface-variant">
        I'm currently open to internships and new opportunities — happy to talk
        through possible collaborations or just connect.
      </p>

      <a
        href={profile.links.email}
        className="mt-12 inline-flex items-center gap-3 rounded bg-primary-container px-7 py-4 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {profile.email}
      </a>

      <div className="mt-14 flex gap-10">
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-primary transition-opacity hover:opacity-70"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
