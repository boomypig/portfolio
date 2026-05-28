import { Link } from "react-router-dom";
import { profile, stats, projects } from "../data/content.js";
import SectionLabel from "../components/SectionLabel.jsx";
import Tag from "../components/Tag.jsx";
import Timeline from "../components/Timeline.jsx";

export default function Home() {
  const featured = projects[0];

  return (
    <>
      <section className="shell pt-20 pb-24 md:pt-15 md:pb-22">
        <SectionLabel>{profile.title}</SectionLabel>
        <h1 className="editorial mt-6 max-w-4xl text-5xl leading-[1.05] text-on-surface md:text-4xl">
          {profile.tagline[0]}{" "}
          <span className="text-primary">{profile.tagline[1]}</span>{" "}
          {profile.tagline[2]}
        </h1>
        <p className="mt-8 max-w-xl text-on-surface-variant">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded bg-primary-container px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-on-primary transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded border border-outline px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-on-surface transition-colors hover:border-on-surface"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="shell pb-24">
        <h1 className="editorial text-5xl text-on-surface md:text-5xl pb-12">
          Most Recent Project
        </h1>
        <Link
          to="/projects"
          className="group relative block overflow-hidden rounded border border-outline-variant/40"
        >
          <div className="aspect-[16/7] w-full bg-gradient-to-br from-surface-high via-surface-container to-surface-lowest" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <SectionLabel>{featured.category}</SectionLabel>
            <h2 className="editorial mt-3 text-3xl text-on-surface md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm text-on-surface-variant">
              {featured.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </Link>
      </section>

      <section className="border-t border-outline-variant/30">
        <div className="shell grid gap-12 py-16 md:grid-cols-[auto_auto_1fr] md:items-start md:gap-20">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="editorial text-5xl text-on-surface md:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-on-surface-variant">
                {s.label}
              </p>
            </div>
          ))}
          <p className="border-outline-variant/40 text-on-surface-variant md:border-l md:pl-12">
            {profile.shortBio}
          </p>
        </div>
      </section>

      <section className="border-t border-outline-variant/30">
        <div className="shell py-20">
          <SectionLabel>// Journey</SectionLabel>
          <Timeline />
        </div>
      </section>
    </>
  );
}
