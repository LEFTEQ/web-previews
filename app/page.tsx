import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "Prevence",
      nazev: "Prohlídky a očkování",
      popis:
        "Roční preventivní prohlídka, kompletní vakcinace psů, koček i králíků a odčervení podle váhy a věku.",
    },
    {
      kod: "Cesty",
      nazev: "Čipování a europas",
      popis:
        "Mikročip s registrací do národního registru a vystavení pasu pro cestování po EU na počkání.",
    },
    {
      kod: "Sál",
      nazev: "Chirurgie a kastrace",
      popis:
        "Měkká chirurgie, kastrace a šetrné výkony pod inhalační anestezií s monitorací životních funkcí.",
    },
    {
      kod: "Zuby",
      nazev: "Stomatologie",
      popis:
        "Ultrazvukové odstranění zubního kamene, ošetření a extrakce zubů v jedné narkóze.",
    },
    {
      kod: "Obraz",
      nazev: "Ultrazvuk a RTG",
      popis:
        "Sonografie břicha a srdce, digitální rentgen — diagnóza ještě během vaší návštěvy.",
    },
    {
      kod: "Akut",
      nazev: "Akutní ošetření",
      popis:
        "Náhlé úrazy a zhoršení stavu řešíme přednostně. Zavolejte předem, ať na vás čekáme připraveni.",
    },
  ];

  const reference = [
    {
      text:
        "Fenku jsme přivezli v noci po srážce s autem. Doktor Mach nás okamžitě uklidnil i ošetřil. Dnes běhá jako dřív.",
      kdo: "Petra K., Ostrava-Poruba",
    },
    {
      text:
        "Náš kocour se bojí všeho. Tady ho zvládli odebrat krev tak klidně, že ani nemňoukl. Chodíme jen sem.",
      kdo: "Tomáš R., Ostrava-Hrabůvka",
    },
    {
      text:
        "Vysvětlí všechno srozumitelně, nic zbytečně nepředepisuje. Konečně veterinář, kterému věřím.",
      kdo: "Lucie M., Ostrava-Vítkovice",
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="MVDr. Ján Mach, veterinář Ostrava">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 24" width="40" height="24">
              <path d="M0 12 H10 L13 12 L16 4 L20 20 L24 8 L27 12 H40" />
            </svg>
          </span>
          <span className="brand-name">
            <strong>Mach</strong>vet
          </span>
        </a>
        <a className="top-call" href="tel:+420596123456">
          596&nbsp;123&nbsp;456
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Veterinární ordinace&nbsp;· Ostrava</p>
          <h1>
            Váš pes i kočka<br />
            v&nbsp;<span className="u">klidných</span> rukou.
          </h1>

          <div className="pulse" role="img" aria-label="Křivka tepu jako symbol péče o životní funkce">
            <svg viewBox="0 0 600 80" preserveAspectRatio="none">
              <path
                className="pulse-line"
                d="M0 40 H150 L172 40 L188 12 L208 68 L228 40 L246 30 L262 40 H360 L382 40 L398 16 L418 64 L438 40 H600"
              />
            </svg>
          </div>

          <p className="lede">
            Praktická i odborná péče o malá zvířata pod vedením
            MVDr.&nbsp;Jána&nbsp;Macha. Bez stresu, s&nbsp;časem na
            vysvětlení a s&nbsp;diagnostikou přímo v&nbsp;ordinaci.
          </p>

          <div className="hero-cta">
            <a className="btn" href="tel:+420596123456">Objednat na telefonu</a>
            <a className="btn ghost" href="mailto:ordinace@machvet.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="MVDr. Ján Mach při vyšetření zvířete ve své veterinární ordinaci v Ostravě"
          />
        </figure>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="sluzby-nadpis">Péče od prevence po sál</h2>
        </div>
        <ul className="karty">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas-grid">
          <div className="onas-text">
            <p className="eyebrow">O ordinaci</p>
            <h2 id="onas-nadpis">
              Jeden veterinář, který vaše zvíře skutečně zná
            </h2>
            <p>
              MVDr.&nbsp;Ján&nbsp;Mach se malým zvířatům věnuje přes
              patnáct let. V&nbsp;ostravské ordinaci ošetřuje psy, kočky,
              králíky i&nbsp;drobné hlodavce — od první vakcinace štěněte
              až po dlouhodobou péči o&nbsp;seniory.
            </p>
            <ul className="fakta">
              <li>
                <span>Po–Pá</span>
                <span>8:00–11:30&nbsp;a&nbsp;15:00–18:00</span>
              </li>
              <li>
                <span>Kde</span>
                <span>Ostrava, dostupné MHD i&nbsp;parkování u&nbsp;vchodu</span>
              </li>
              <li>
                <span>Akutně</span>
                <span>volejte předem, ošetříme přednostně</span>
              </li>
            </ul>
          </div>

          <ul className="reference">
            {reference.map((r) => (
              <li className="ref" key={r.kdo}>
                <p>„{r.text}“</p>
                <span className="ref-kdo">— {r.kdo}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
const _unused: CSSProperties = {};
