import { experience, arsenal } from '../data/content.js'
import SectionLabel from '../components/SectionLabel.jsx'
import Tag from '../components/Tag.jsx'

export default function Expertise() {
  return (
    <>
      <section className="shell pt-20 pb-15 md:pt-15">
        <h1 className="editorial max-w-3xl text-5xl leading-[1.1] text-on-surface md:text-4xl">
          A chronicle of my technical journey the work, the study, and the tools I reach for.
        </h1>
      </section>

      <section className="shell pb-15">
        <SectionLabel>// Professional History</SectionLabel>
        <div className="mt-10 divide-y divide-outline-variant/30 border-y border-outline-variant/30">
          {experience.map((e) => (
            <div
              key={e.role + e.period}
              className="grid gap-6 py-10 md:grid-cols-[auto_1fr_auto] md:gap-12"
            >
              <span className="hidden h-2 w-2 translate-y-3 rounded-full bg-primary md:block" />
              <div>
                <h2 className="editorial text-2xl text-on-surface md:text-3xl">
                  {e.role}
                </h2>
                <p className="mt-1 text-sm text-primary">
                  {e.org} · {e.location}
                </p>
                <ul className="mt-5 space-y-2">
                  {e.points.map((pt, i) => (
                    <li
                      key={i}
                      className="max-w-2xl text-sm text-on-surface-variant"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.08em] text-outline md:text-right">
                {e.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-28">
        <SectionLabel>// Technical Tools</SectionLabel>
        <div className="mt-12 grid gap-px overflow-hidden rounded border border-outline-variant/40 bg-outline-variant/30 md:grid-cols-3">
          {arsenal.map((a) => (
            <div key={a.title} className="bg-surface-container p-8 md:p-10">
              <h3 className="editorial text-2xl text-on-surface">{a.title}</h3>
              <p className="mt-3 text-sm text-on-surface-variant">{a.blurb}</p>
              <ul className="mt-6 space-y-2">
                {a.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
