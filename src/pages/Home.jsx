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
        <p className="mt-8 max-w-xl text-on-surface-variant">
          {profile.shortBio}
        </p>
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

      <section className="border-t border-outline-variant/30 pb-24">
        <div className="shell">
          <h1 className="editorial text-5xl text-on-surface pt-16 pb-10">
            Most Recent Project
          </h1>

          <Link
            to="/projects"
            className="group relative block overflow-hidden rounded border border-outline-variant/40"
          >
            <div className="aspect-[16/7] w-full">
              <img
                src="/images/sec4.png"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-surface-container/95 via-surface-container/60 to-transparent p-8 md:p-12">
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
