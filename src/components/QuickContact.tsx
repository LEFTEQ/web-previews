import { EMAIL, PEOPLE } from "../data";
import LearnLink from "./LearnLink";

export default function QuickContact() {
  return (
    <section aria-labelledby="rychly-kontakt-h" className="on-dark bg-ink text-loess">
      <div className="hazard" aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 md:py-10">
        <h2 id="rychly-kontakt-h" className="font-mono text-[11px] uppercase tracking-[0.16em] text-hazard">
          Rychlý kontakt
        </h2>
        <ul className="mt-5 grid gap-6 md:grid-cols-3 md:gap-8">
          {PEOPLE.map((p) => (
            <li key={p.tel} className="border-l-2 border-hazard pl-4">
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="text-sm text-loess/80">{p.role}</p>
              <LearnLink
                href={p.tel}
                ariaLabel={`Zavolat – ${p.name}, ${p.role}: ${p.phone}`}
                className="tabular mt-2 whitespace-nowrap text-xl font-semibold md:text-2xl"
              >
                {p.phone}
              </LearnLink>
            </li>
          ))}
          <li className="border-l-2 border-loess/40 pl-4">
            <p className="text-lg font-semibold">E-mail</p>
            <p className="text-sm text-loess/80">poptávky a podklady</p>
            <LearnLink href={`mailto:${EMAIL}`} className="mt-2 text-xl font-semibold md:text-2xl">
              {EMAIL}
            </LearnLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
