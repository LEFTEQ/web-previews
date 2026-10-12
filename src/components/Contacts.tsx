import { ADDRESSES, EMAIL, PEOPLE } from "../data";
import StratumDivider from "./StratumDivider";
import LearnLink from "./LearnLink";
import { PinIcon } from "./Icons";

export default function Contacts() {
  return (
    <section id="kontakty" aria-labelledby="kontakty-h" className="bg-loess-deep">
      <StratumDivider id="kontakty" variant="clay" from="#E9E1D3" to="#D3C6AE" stroke="#8A6A4A" hatch="#8A6A4A" />
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-4 md:px-10 md:pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/80">06 · Podloží · kontakty</p>
        <h2 id="kontakty-h" className="font-display mt-6 text-[clamp(1.5rem,6vw,4rem)] font-extrabold uppercase leading-[0.98]">
          Kontakty
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em]">ZVČ, s.r.o.</h3>
            <ul className="mt-4 border-t border-ink/30">
              {PEOPLE.map((p) => (
                <li key={p.tel} className="border-b border-ink/30 py-4">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-ink/80">{p.role} · mobilní telefon</p>
                  <LearnLink href={p.tel} ariaLabel={`Zavolat – ${p.name}, ${p.role}: ${p.phone}`} className="tabular mt-1 whitespace-nowrap text-xl font-semibold">
                    {p.phone}
                  </LearnLink>
                </li>
              ))}
              <li className="border-b border-ink/30 py-4">
                <p className="text-lg font-semibold">E-mail</p>
                <LearnLink href={`mailto:${EMAIL}`} className="mt-1 text-xl font-semibold">
                  {EMAIL}
                </LearnLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em]">Adresy</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {ADDRESSES.map((a) => (
                <div key={a.label} className="border border-ink bg-loess p-5">
                  <div className="flex items-center gap-2 text-clay">
                    <PinIcon />
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink">{a.label}</span>
                  </div>
                  <address className="mt-3 text-lg not-italic leading-snug">
                    {a.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <LearnLink
                    href={`https://mapy.cz/zakladni?q=${encodeURIComponent(a.query)}`}
                    external
                    ariaLabel={`${a.label} na Mapy.cz (otevře se v novém okně)`}
                    className="mt-4 text-[15px] font-semibold"
                  >
                    Zobrazit na Mapy.cz
                  </LearnLink>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
              Sídlo firmy a kancelář jsou dvě různé adresy. Poštu posílejte na korespondenční adresu kanceláře.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
