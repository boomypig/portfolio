import { profile, projects } from "../data/content.js";
import SectionLabel from "../components/SectionLabel.jsx";
import Tag from "../components/Tag.jsx";

export default function Projects() {
  return (
    <>
      <section className="shell pt-20 pb-16 md:pt-12">
        <h1 className="editorial text-5xl text-on-surface md:text-6xl">
          Projects
        </h1>
        <p className="mt-6 max-w-xl text-on-surface-variant">
          A collection of full-stack and machine learning projects showcasing my
          engineering skills.
        </p>
      </section>

      <section className="shell pb-28">
        <div className="grid gap-px overflow-hidden rounded border border-outline-variant/40 bg-outline-variant/30 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`flex flex-col bg-surface-container p-8 md:p-10 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} on GitHub`}
                className={`group relative mb-8 block overflow-hidden rounded ${
                  p.image ? "aspect-[16/6]" : "aspect-[16/9]"
                }`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-surface-high via-surface-container to-surface-lowest transition duration-500 group-hover:scale-[1.04] group-hover:brightness-125" />
                )}
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded bg-surface-lowest/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-on-surface opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.96c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                  View on GitHub
                </span>
              </a>
              <SectionLabel>{p.category}</SectionLabel>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h2 className="editorial text-2xl text-on-surface md:text-3xl">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h2>
                <span className="shrink-0 text-xs uppercase tracking-[0.08em] text-outline">
                  {p.period}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-sm text-on-surface-variant">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-on-surface-variant">
          More projects on{" "}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-70"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </>
  );
}
