// PROFIMA INTERIERY — truhlářství & rekonstrukce panelových bytů, Praha
// Koncept: „Půdorys panelového bytu“ — signature prvkem je technický výkres bytového
// jádra vykreslený v SVG jako linková grafika (styl truhlářského/stavebního výkresu).
// Paleta odvozená z materiálů řemesla: dubová dýha, tmavý ořech, křídová bílá výkresu,
// modrá tesařská šňůrka (chalk line) jako akcent.

export default function Page() {
  return (
    <main className="pf">
      {/* ————— HLAVIČKA / WORDMARK ————— */}
      <header className="pf-top">
        <div className="pf-wordmark">
          <span className="pf-wordmark-main">PROFIMA</span>
          <span className="pf-wordmark-sub">interiéry · Praha · od 1995</span>
        </div>
        <a className="pf-top-tel" href="tel:+420601203023">
          <span className="pf-top-tel-label">Infolinka Po–Pá 10–18</span>
          <span className="pf-top-tel-num">601 203 023</span>
        </a>
      </header>

      {/* ————— HERO: typografický statement + výkres jádra ————— */}
      <section className="pf-hero" aria-labelledby="pf-hero-title">
        <div className="pf-hero-inner">
          <div className="pf-hero-copy">
            <p className="pf-eyebrow pf-reveal pf-d1">
              Rodinná truhlářská a stavební firma — vlastní řemeslníci, žádní subdodavatelé
            </p>
            <h1 id="pf-hero-title" className="pf-hero-title">
              <span className="pf-reveal pf-d2">Panelák zvenku,</span>
              <span className="pf-reveal pf-d3 pf-hero-em">nový byt uvnitř.</span>
            </h1>
            <p className="pf-hero-lead pf-reveal pf-d4">
              Kompletní rekonstrukce panelových bytů, bytových jader, koupelen
              a kuchyní v Praze. Od zaměření a návrhu dispozice až po závěrečný
              úklid — rukama jedné party, kterou vedeme už třicet let.
            </p>
            <div className="pf-hero-actions pf-reveal pf-d5">
              <a className="pf-btn pf-btn-solid" href="tel:+420601203023">
                Zavolat 601 203 023
              </a>
              <a className="pf-btn pf-btn-line" href="mailto:profima@iprofima.cz">
                Poslat půdorys e‑mailem
              </a>
            </div>
            <p className="pf-hero-note pf-reveal pf-d5">
              Cenovou nabídku vypracujeme zdarma a nezávazně — technik přijede přímo k vám.
            </p>
          </div>

          {/* Signature: technický výkres bytového jádra (linková grafika) */}
          <figure className="pf-hero-plan pf-reveal pf-d3" aria-hidden="true">
            <svg viewBox="0 0 420 520" className="pf-plan-svg" role="presentation" focusable="false">
              {/* rám výkresu */}
              <rect x="8" y="8" width="404" height="504" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="18" y="18" width="384" height="484" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
              {/* obvodové zdi bytu */}
              <g className="pf-plan-walls">
                <path d="M60 70 H360 V450 H60 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                {/* příčka jádra */}
                <path d="M60 250 H190 V450" fill="none" stroke="currentColor" strokeWidth="6" />
                {/* příčka kuchyně */}
                <path d="M240 70 V180" fill="none" stroke="currentColor" strokeWidth="6" />
              </g>
              {/* dveře — oblouky otevírání */}
              <g className="pf-plan-doors" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M130 250 A44 44 0 0 1 174 294" />
                <line x1="130" y1="250" x2="130" y2="294" />
                <path d="M240 138 A42 42 0 0 0 282 180" strokeDasharray="3 3" />
              </g>
              {/* vana */}
              <rect x="75" y="300" width="60" height="135" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="84" y="310" width="42" height="115" rx="18" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* umyvadlo */}
              <circle cx="160" cy="330" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* WC */}
              <ellipse cx="160" cy="405" rx="14" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="148" y="425" width="24" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* kuchyňská linka */}
              <path d="M246 76 H354 V170" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="300" y="84" width="46" height="34" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="270" cy="100" r="9" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="270" cy="128" r="9" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* skříň na míru — šrafovaná truhlařina */}
              <g className="pf-plan-hatch">
                <rect x="220" y="396" width="130" height="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M228 442 L266 396 M252 442 L290 396 M276 442 L314 396 M300 442 L338 396" stroke="currentColor" strokeWidth="0.75" />
              </g>
              {/* kóty */}
              <g className="pf-plan-dims" stroke="currentColor" strokeWidth="0.75">
                <line x1="60" y1="475" x2="360" y2="475" />
                <line x1="60" y1="468" x2="60" y2="482" />
                <line x1="360" y1="468" x2="360" y2="482" />
                <line x1="38" y1="70" x2="38" y2="450" />
                <line x1="31" y1="70" x2="45" y2="70" />
                <line x1="31" y1="450" x2="45" y2="450" />
              </g>
              <text x="210" y="492" textAnchor="middle" className="pf-plan-text">3 600</text>
              <text x="28" y="264" textAnchor="middle" className="pf-plan-text" transform="rotate(-90 28 264)">4 550</text>
              {/* popisky místností */}
              <text x="125" y="282" className="pf-plan-text">KOUPELNA</text>
              <text x="252" y="64" className="pf-plan-text">KUCHYNĚ</text>
              <text x="230" y="388" className="pf-plan-text">SKŘÍŇ NA MÍRU</text>
              {/* razítko výkresu */}
              <g className="pf-plan-stamp">
                <rect x="250" y="210" width="126" height="56" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="260" y="230" className="pf-plan-text">VÝKRES: BYTOVÉ JÁDRO</text>
                <text x="260" y="244" className="pf-plan-text">MĚŘÍTKO 1 : 25 · PRAHA</text>
                <text x="260" y="258" className="pf-plan-text">PROFIMA · REV. 1995–2026</text>
              </g>
            </svg>
            <figcaption className="pf-plan-caption">
              Každá zakázka začíná výkresem — technik zaměří byt přímo u vás.
            </figcaption>
          </figure>
        </div>

        {/* tesařská šňůrka — akcentní linka pod hero */}
        <div className="pf-chalkline" aria-hidden="true" />
      </section>

      {/* ————— SEKCE 1: CO PRO VÁS UDĚLÁME ————— */}
      <section className="pf-services" aria-labelledby="pf-services-title">
        <div className="pf-section-head">
          <h2 id="pf-services-title" className="pf-h2">
            Od bourání jádra po poslední dvířka
          </h2>
          <p className="pf-section-lead">
            Specializujeme se výhradně na panelové byty v Praze. Známe jejich
            konstrukce, rozvody i to, co se skrývá za umakartem — proto umíme
            říct přesnou cenu a držet slovo.
          </p>
        </div>

        <div className="pf-services-grid">
          <article className="pf-card">
            <div className="pf-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" role="presentation" focusable="false">
                <rect x="6" y="6" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M6 24 H24 V42" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <h3 className="pf-card-title">Kompletní rekonstrukce bytu</h3>
            <p className="pf-card-text">
              Celý byt od podlah po stropy — bourací práce, nové rozvody vody
              a elektřiny, podlahy, dveře, malby. Odvoz suti a závěrečný úklid
              jsou samozřejmostí, klíče přebíráte od hotového bytu.
            </p>
          </article>

          <article className="pf-card">
            <div className="pf-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" role="presentation" focusable="false">
                <rect x="10" y="8" width="28" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="16" y="14" width="10" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="20" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="pf-card-title">Bytová jádra a koupelny</h3>
            <p className="pf-card-text">
              Naše výhradní specializace od roku 1995. Umakartové jádro vybouráme
              a postavíme zděné — s novou dispozicí, obklady a zařízením podle
              vašeho výběru. Navrhneme, jak z metru čtverečního vytěžit maximum.
            </p>
          </article>

          <article className="pf-card">
            <div className="pf-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" role="presentation" focusable="false">
                <path d="M6 40 H42 M10 40 V22 H26 V40 M30 40 V14 H42" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="15" cy="31" r="2" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <h3 className="pf-card-title">Kuchyně a nábytek na míru</h3>
            <p className="pf-card-text">
              Truhlařina je náš základ. Kuchyňské linky, vestavěné skříně
              a nábytek vyrábíme na míru přesně do vašich zdí — do panelákových
              nik a šikmých koutů, kam žádná katalogová skříň nesedne.
            </p>
          </article>

          <article className="pf-card">
            <div className="pf-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" role="presentation" focusable="false">
                <path d="M8 40 L24 8 L40 40" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <line x1="15" y1="27" x2="33" y2="27" stroke="currentColor" strokeWidth="2" />
                <line x1="24" y1="8" x2="24" y2="27" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
            <h3 className="pf-card-title">Návrh dispozice a projekt</h3>
            <p className="pf-card-text">
              Poradíme s uspořádáním bytu dřív, než se začne bourat. Připravíme
              návrh dispozice i projekt — abyste přesně věděli, co dostanete
              a kolik to bude stát, ještě před první fakturou.
            </p>
          </article>
        </div>

        {/* postup zakázky — skutečná sekvence, proto číslování */}
        <ol className="pf-steps" aria-label="Jak zakázka probíhá">
          <li className="pf-step">
            <span className="pf-step-num">1</span>
            <div>
              <h3 className="pf-step-title">Technik přijede k vám</h3>
              <p className="pf-step-text">Zaměří byt na místě, nebo nám pošlete podklady e‑mailem či poštou.</p>
            </div>
          </li>
          <li className="pf-step">
            <span className="pf-step-num">2</span>
            <div>
              <h3 className="pf-step-title">Nabídka zdarma</h3>
              <p className="pf-step-text">Nezávazná cenová nabídka s rozpisem prací a materiálů — žádné položky navíc.</p>
            </div>
          </li>
          <li className="pf-step">
            <span className="pf-step-num">3</span>
            <div>
              <h3 className="pf-step-title">Závazný termín</h3>
              <p className="pf-step-text">Přesný termín potvrdíme ke konkrétní zakázce a držíme ho.</p>
            </div>
          </li>
          <li className="pf-step">
            <span className="pf-step-num">4</span>
            <div>
              <h3 className="pf-step-title">Předání s úklidem</h3>
              <p className="pf-step-text">Realizace vlastními řemeslníky, odvoz suti a předání uklizeného bytu.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* ————— SEKCE 2: PROČ NÁM PRAŽÁCI VĚŘÍ ————— */}
      <section className="pf-trust" aria-labelledby="pf-trust-title">
        <div className="pf-trust-inner">
          <div className="pf-trust-copy">
            <h2 id="pf-trust-title" className="pf-h2 pf-h2-light">
              Malá rodinná firma.<br />Velká zodpovědnost za každý spoj.
            </h2>
            <p className="pf-trust-lead">
              Nejsme zprostředkovatel, který zakázku přeprodá. Všechny práce
              — od bourání po truhlařinu — provádějí výhradně naši vlastní
              profesionální řemeslníci. Proto ručíme za výsledek my, ne někdo třetí.
            </p>
            <ul className="pf-trust-list">
              <li>
                <strong>Od roku 1995 v Praze.</strong> Tři dekády rekonstrukcí
                panelových bytů — Jižní Město, Prosek, Bohnice, Stodůlky i jinde.
              </li>
              <li>
                <strong>Autentické realizace.</strong> Veškeré fotografie v naší
                galerii jsou výhradně z našich vlastních zakázek — žádné fotobanky.
              </li>
              <li>
                <strong>Jedna parta od začátku do konce.</strong> Stejní lidé,
                kteří byt zaměří, ho také dokončí a předají.
              </li>
              <li>
                <strong>Cena předem, ne po termínu.</strong> Nezávazná nabídka
                zdarma; případné změny rozsahu s vámi vždy odsouhlasíme dopředu.
              </li>
            </ul>
          </div>

          <aside className="pf-trust-panel" aria-label="Firma v číslech">
            <div className="pf-fact">
              <span className="pf-fact-value">1995</span>
              <span className="pf-fact-label">rok založení — ryze česká rodinná firma</span>
            </div>
            <div className="pf-fact">
              <span className="pf-fact-value">100 %</span>
              <span className="pf-fact-label">prací vlastními řemeslníky, bez subdodávek</span>
            </div>
            <div className="pf-fact">
              <span className="pf-fact-value">Praha</span>
              <span className="pf-fact-label">výhradní specializace na zdejší panelové byty</span>
            </div>
            <div className="pf-fact pf-fact-contact">
              <span className="pf-fact-label">Infolinka Po–Pá 10–18</span>
              <a className="pf-fact-tel" href="tel:+420601203023">601 203 023</a>
              <a className="pf-fact-mail" href="mailto:profima@iprofima.cz">profima@iprofima.cz</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
