import { STRATA } from "../data";
import SectionModel from "./SectionModel";

export default function Overview() {
  return (
    <section id="prehled" aria-labelledby="prehled-h" className="bg-loess">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/80">Řez nabídkou · legenda</p>
          <h2 id="prehled-h" className="font-display mt-4 text-[clamp(1.6rem,5vw,3.5rem)] font-extrabold uppercase leading-[0.98]">
            Čtyři vrstvy práce v terénu
          </h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed">
            Nabídka je seřazená jako půdní profil: od zemních prací přes vodní stavby a demolice až po dopravu
            materiálu. Vyberte vrstvu, která odpovídá vaší zakázce.
          </p>
          <ol className="mt-8 border-t border-ink/30">
            {STRATA.map((s) => (
              <li key={s.id} className="border-b border-ink/30">
                <a href={`#${s.id}`} className="group flex items-center gap-4 py-3.5">
                  <span className="h-5 w-5 shrink-0 border border-ink" style={{ background: s.swatch }} aria-hidden="true" />
                  <span className="font-mono text-xs">{s.index}</span>
                  <span className="text-lg font-semibold group-hover:underline">{s.label}</span>
                  <span className="ml-auto font-mono text-xs text-ink/70">{s.items.length} pol.</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <SectionModel />
        </div>
      </div>
    </section>
  );
}
