import { profile, projects } from '../data/content.js'
import SectionLabel from '../components/SectionLabel.jsx'
import Tag from '../components/Tag.jsx'

export default function Work() {
  return (
    <>
      <section className="shell pt-20 pb-16 md:pt-28">
        <h1 className="editorial text-5xl text-on-surface md:text-6xl">
          Selected Works
        </h1>
        <p className="mt-6 max-w-xl text-on-surface-variant">
          A curated collection of full-stack and machine learning projects,
          combining rigorous engineering with clean, considered interfaces.
        </p>
      </section>

      <section className="shell pb-28">
        <div className="grid gap-px overflow-hidden rounded border border-outline-variant/40 bg-outline-variant/30 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`flex flex-col bg-surface-container p-8 md:p-10 ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <div
                className={`mb-8 rounded bg-gradient-to-br from-surface-high via-surface-container to-surface-lowest ${
                  i === 0 ? 'aspect-[16/6]' : 'aspect-[16/9]'
                }`}
              />
              <SectionLabel>{p.category}</SectionLabel>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h2 className="editorial text-2xl text-on-surface md:text-3xl">
                  {p.title}
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
          More projects on{' '}
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
  )
}
