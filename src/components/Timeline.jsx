import { timeline } from "../data/content.js";

export default function Timeline() {
  return (
    <ol className="mt-12">
      {timeline.map((item, i) => {
        const last = i === timeline.length - 1;
        return (
          <li
            key={item.title + item.date}
            className="grid grid-cols-[72px_24px_1fr_auto] gap-x-4 md:grid-cols-[110px_28px_1fr_auto] md:gap-x-6"
          >
            {/* left: status label */}
            <span
              className={`pt-px text-right text-[11px] font-semibold uppercase tracking-[0.08em] ${
                item.current ? "text-primary" : "text-outline"
              }`}
            >
              {item.status}
            </span>

            {/* rail + dot */}
            <span className="relative flex justify-center">
              <span
                className={`z-10 mt-1.5 h-2.5 w-2.5 rounded-full ${
                  item.current
                    ? "bg-primary ring-4 ring-primary/15"
                    : "border border-outline bg-surface"
                }`}
              />
              {!last && (
                <span className="absolute top-3 bottom-0 w-px bg-outline-variant/40" />
              )}
            </span>

            {/* content */}
            <div className={last ? "pb-1" : "pb-10"}>
              <h3
                className={`editorial text-xl md:text-2xl ${
                  item.current ? "text-on-surface" : "text-on-surface"
                }`}
              >
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-on-surface-variant">
                {item.detail}
              </p>
            </div>

            {/* right: date */}
            <span className="pt-px text-right text-xs uppercase tracking-[0.08em] text-outline">
              {item.date}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
