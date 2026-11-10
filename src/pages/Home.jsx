import { Link } from "react-router-dom";
import { profile, stats, projects } from "../data/content.js";
import SectionLabel from "../components/SectionLabel.jsx";
import Tag from "../components/Tag.jsx";
import Timeline from "../components/Timeline.jsx";

export default function Home() {
  const featured = projects[0];

  return (
    <>
      <section className="shell items-start pt-20 pb-24 md:grid md:grid-cols-[1fr_300px] md:gap-12 md:pt-15 md:pb-22">
        <div>
          <SectionLabel>{profile.title}</SectionLabel>
          <h1 className="editorial mt-6 max-w-4xl text-5xl leading-[1.05] text-on-surface md:text-4xl">
            {profile.tagline[0]}{" "}
            <span className="text-primary">{profile.tagline[1]}</span>{" "}
            {profile.tagline[2]}
          </h1>
          <p className="mt-8 max-w-xl text-on-surface-variant">
            {profile.intro}
          </p>
          {profile.shortBio.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-xl text-on-surface-variant"
            >
              {paragraph}
            </p>
          ))}
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
        </div>

        {/* Graduation photo; fades to the hiking photo on hover or focus. */}
        <div
          tabIndex={0}
          className="group relative mx-auto mt-14 aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded border border-outline-variant/40 md:mt-6"
        >
          <img
            src="/images/bryan-graduation.webp"
            alt="Bryan smiling and holding a diploma at graduation"
            className="h-full w-full object-cover object-[50%_58%]"
          />
          <img
            src="/images/bryan-hiking.webp"
            alt="Bryan hiking through a mountain meadow"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100"
          />
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
