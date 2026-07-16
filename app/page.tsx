import type { ReactNode } from "react";

function Medallion({ stamp = false }: { stamp?: boolean }) {
  const teeth = Array.from({ length: 21 });
  return (
    <svg
      className={stamp ? "seal seal--stamp" : "seal"}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Pečeť Hostinského pivovaru Moritz"
    >
      <g>
        {teeth.map((_, i) => {
          const a = (i / 21) * Math.PI * 2;
          const cx = 60 + Math.cos(a) * 51;
          const cy = 60 + Math.sin(a) * 51;
          return <circle key={i} cx={cx} cy={cy} r="6" fill="#a4552a" />;
        })}
      </g>
      <circle cx="60" cy="60" r="50" fill="#a4552a" />
      <circle cx="60" cy="60" r="44" fill="#e2662a" />
      <circle cx="60" cy="60" r="40" fill="#f4e8cd" />
      <circle
        cx="60"
        cy="60"
        r="40"
        fill="none"
        stroke="#1b1410"
        strokeWidth="1.4"
        strokeDasharray="1.5 4"
        opacity="0.55"
      />
      <g fill="#1b1410">
        <path d="M39 47 Q60 33 81 47 L81 50 Q60 42 39 50 Z" />
        <circle cx="51" cy="58" r="1.8" />
        <circle cx="69" cy="58" r="1.8" />
        <path
          d="M60 63 C60 66 60 68 60 69"
          fill="none"
          stroke="#1b1410"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M60 70 C53 67 46 69 42 74 C48 77 56 74 60 71 C64 74 72 77 78 74 C74 69 67 67 60 70 Z" />
      </g>
    </svg>
  );
}

function Seam({ stamp = false }: { stamp?: boolean }) {
  return (
    <div className="seam" aria-hidden="true">
      <Medallion stamp={stamp} />
    </div>
  );
}

function Band({
  tone,
  children,
}: {
  tone: "cream" | "orange" | "hop";
  children: ReactNode;
}) {
  return (
    <section className={`band band--${tone}`}>
      <div className="band__inner">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero__pour" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Hostinský pivovar · Olomouc</p>
          <h1 className="wordmark">Moritz</h1>
          <p className="hero__lead">
            Vlastní nefiltrované pivo, chladné přímo z ležáckého tanku — a k
            němu poctivá česká kuchyně z čerstvých surovin. Uprostřed Olomouce,
            nekuřácky, odjakživa.
          </p>
          <ul className="hero__chips">
            <li>Nefiltrované</li>
            <li>Přímo z tanku</li>
            <li>Nekuřácká restaurace</li>
          </ul>
        </div>
      </header>

      <Seam stamp />

      <Band tone="cream">
        <p className="eyebrow">Nabídka</p>
        <h2 className="band__title">Co u nás načepujeme a uvaříme</h2>
        <div className="cards">
          <article className="card">
            <h3 className="card__head">Ze sklepa a z tanku</h3>
            <ul className="list">
              <li>
                <strong>Moritz 11°</strong> — světlý nefiltrovaný ležák, stáčený
                rovnou z ležáckého tanku
              </li>
              <li>
                <strong>Řezané a tmavé</strong> — podle právě dozrálé várky,
                zeptejte se, co teče dnes
              </li>
              <li>
                <strong>Nealko a domácí limonáda</strong> — pro řidiče i pro děti
              </li>
            </ul>
          </article>
          <article className="card">
            <h3 className="card__head">Z naší kuchyně</h3>
            <ul className="list">
              <li>
                <strong>Polední menu</strong> — každý všední den, s vývarem a
                několika hlavními jídly
              </li>
              <li>
                <strong>Česká klasika</strong> — svíčková, guláš na našem pivu,
                řízek
              </li>
              <li>
                <strong>Vždy z čerstvých surovin</strong> — vaříme ze základu, ne
                z pytlíku
              </li>
            </ul>
          </article>
        </div>
      </Band>

      <Seam />

      <Band tone="orange">
        <p className="eyebrow eyebrow--light">O pivovaru</p>
        <h2 className="band__title band__title--light">
          Pivo, které nemá k hostům daleko — zraje pár kroků od výčepu
        </h2>
        <p className="prose">
          Moritz je hostinský minipivovar: várnu i výčep máme pod jednou
          střechou v centru Olomouce. Pivo nefiltrujeme ani nepasterizujeme, aby
          si udrželo plnou chuť i přirozený zákal — takové, jaké dozrálo v tanku,
          takové vám ho natočíme.
        </p>
        <ul className="trust">
          <li>
            <span className="trust__k">Odjakživa</span>
            <span className="trust__v">Nekuřácká restaurace</span>
          </li>
          <li>
            <span className="trust__k">Bez filtrace</span>
            <span className="trust__v">Nefiltrované a nepasterizované</span>
          </li>
          <li>
            <span className="trust__k">V Olomouci</span>
            <span className="trust__v">Vaříme a stáčíme na místě</span>
          </li>
          <li>
            <span className="trust__k">Denně čerstvé</span>
            <span className="trust__v">Suroviny do kuchyně z trhu</span>
          </li>
        </ul>
      </Band>
    </main>
  );
}
