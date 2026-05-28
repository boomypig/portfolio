import { Link } from "react-router-dom";
import { profile } from "../data/content.js";

const social = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Email", href: profile.links.email },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/30">
      <div className="shell flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            to="/"
            className="editorial text-2xl tracking-tight text-on-surface"
          >
            {profile.wordmark}
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <ul className="flex flex-wrap gap-8">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm text-primary transition-opacity hover:opacity-70"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs uppercase tracking-[0.08em] text-outline">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
