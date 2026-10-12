import { MAIN_PHONE, SHOWROOM } from "../data";

const STEPS = [
  {
    code: "01",
    title: "Zavolejte nebo napište",
    text: "Stačí pár vět o prostoru, který řešíte — podlaha, stěny, dveře nebo výroba na míru.",
  },
  {
    code: "02",
    title: "Domluvte si návštěvu showroomu",
    text: `Showroom na adrese ${SHOWROOM.street}, Praha 10 nemá pevnou otevírací dobu. Termín si domluvte telefonicky.`,
  },
  {
    code: "03",
    title: "Proberte podklad a představy",
    text: "Společně projdete, co se do vašeho interiéru hodí a co je potřeba zvážit předem.",
  },
];

export function Steps() {
  return (
    <section id="jak-zacit" aria-labelledby="kroky-title" className="py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <p className="label">Jak začít</p>
        <h2 id="kroky-title" className="mt-2 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Od prvního telefonátu k vzorku na zemi.
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.code} className="card p-6">
              <span className="font-mono text-sm text-orech">Krok {s.code}</span>
              <h3 className="mt-2 text-2xl leading-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8">
          <a href={`tel:${MAIN_PHONE.tel}`} className="btn-primary">
            Domluvit návštěvu: {MAIN_PHONE.display}
          </a>
        </p>
      </div>
    </section>
  );
}
