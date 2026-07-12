import type { ReactNode } from "react";

type Listing = {
  kod: string;
  druh: string;
  nazev: string;
  lokalita: string;
  parametry: string;
  cena: string;
  rezim: "prodej" | "pronajem";
};

const listings: Listing[] = [
  {
    kod: "01",
    druh: "Činžovní dům",
    nazev: "Bytový dům se šesti byty a restaurací",
    lokalita: "Brno — Křížkovského",
    parametry: "cihlová stavba · zastavěno 189 m² · pozemek 260 m² · řadový",
    cena: "49 500 000 Kč",
    rezim: "prodej",
  },
  {
    kod: "02",
    druh: "Byt 4+kk",
    nazev: "Mezonet v novostavbě, výtah i garáž",
    lokalita: "Brno — Křenová",
    parametry: "110 m² · 5. podlaží · sklep · parkování · osobní vlastnictví",
    cena: "28 000 Kč / měs.",
    rezim: "pronajem",
  },
  {
    kod: "03",
    druh: "Rodinný dům 3+1",
    nazev: "Klidné bydlení v cihlovém řadovém domě",
    lokalita: "Brno — Míčkova",
    parametry: "65 m² · cihlová stavba · pozemek 187 m² · dobrý stav",
    cena: "25 000 Kč / měs.",
    rezim: "pronajem",
  },
  {
    kod: "04",
    druh: "Kancelář",
    nazev: "Kancelářský prostor v klidné části",
    lokalita: "Brno — Černovice, U Svitavy",
    parametry: "22 m² · samostatný vstup · klidná lokalita",
    cena: "3 592 Kč / měs.",
    rezim: "pronajem",
  },
  {
    kod: "05",
    druh: "Rodinný dům",
    nazev: "Dům k přestavbě, prostor pro vlastní vizi",
    lokalita: "Svatobořice — Mistřín, Vrbátky",
    parametry: "obytných 94 m² · pozemek 167 m² · před rekonstrukcí",
    cena: "1 160 000 Kč",
    rezim: "prodej",
  },
];

const kroky: { cislo: string; titulek: string; text: string }[] = [
  {
    cislo: "01",
    titulek: "Sejdeme se u vaší nemovitosti",
    text: "Projdeme byt, dům i pozemek na místě. Řekneme si, komu ho chceme prodat a za kolik — bez zbytečných slibů.",
  },
  {
    cislo: "02",
    titulek: "Připravíme prodej na míru",
    text: "Fotky, popis, právní servis i inzerce. Vy máte jednoho člověka, který to za vás celé odřídí.",
  },
  {
    cislo: "03",
    titulek: "Dotáhneme to k podpisu",
    text: "Provedeme vás jednáním, smlouvou i katastrem. Zařídíme i hypotéku a financování pro kupující.",
  },
];

function Znacka(): ReactNode {
  return (
    <span className="wordmark" aria-label="Realpart servis">
      <span className="wordmark-real">real</span>
      <span className="wordmark-part">part</span>
    </span>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <Znacka />
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#jak">Jak prodáváme</a>
          <a href="tel:+420604724137" className="topnav-tel">
            +420 604 724 137
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-copy">
          <p className="eyebrow">Realitní kancelář v Brně · od roku 2015</p>
          <h1 id="hero-nadpis">
            Realitka, která
            <br />
            <span className="hero-zvyr">vás podrží</span>
            <br />
            u každého podpisu.
          </h1>
          <p className="hero-lead">
            Prodej bytu nebo domu je hlavně o důvěře. Pracujeme podle vašeho
            plánu — ne podle šablony — a provedeme vás od prohlídky až po klíče
            v ruce.
          </p>
          <div className="hero-akce">
            <a href="#nabidka" className="btn btn-primar">
              Chci prodat nemovitost
            </a>
            <a href="#nabidka" className="btn btn-druhy">
              Prohlédnout nabídku
            </a>
          </div>
          <dl className="hero-fakta">
            <div>
              <dt>Působíme od</dt>
              <dd>2015</dd>
            </div>
            <div>
              <dt>Kde jsme doma</dt>
              <dd>Brno a okolí</dd>
            </div>
            <div>
              <dt>Voláte na</dt>
              <dd>604 724 137</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-obraz">
          <img
            src="/hero.webp"
            alt="Bytový dům v Brně z nabídky realitní kanceláře Realpart"
            width={960}
            height={1200}
            loading="eager"
          />
          <figcaption>Brno · aktuálně v nabídce</figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Aktuální nemovitosti</p>
          <h2 id="nabidka-nadpis">Co teď v Brně nabízíme</h2>
          <p className="sekce-uvod">
            Byty, domy, kanceláře i pozemky. Každou nemovitost známe osobně —
            proto u ní najdete konkrétní čísla, ne jen hezké fotky.
          </p>
        </div>

        <ul className="karty">
          {listings.map((item) => (
            <li key={item.kod} className="karta">
              <div className="karta-hlava">
                <span className="karta-kod">{item.kod}</span>
                <span
                  className={
                    "karta-stitek " +
                    (item.rezim === "prodej" ? "je-prodej" : "je-pronajem")
                  }
                >
                  {item.rezim === "prodej" ? "Prodej" : "Pronájem"}
                </span>
              </div>
              <p className="karta-druh">{item.druh}</p>
              <h3 className="karta-nazev">{item.nazev}</h3>
              <p className="karta-lokalita">{item.lokalita}</p>
              <p className="karta-parametry">{item.parametry}</p>
              <p className="karta-cena">{item.cena}</p>
            </li>
          ))}
          <li className="karta karta-cta">
            <p className="karta-druh">Nenašli jste to pravé?</p>
            <h3 className="karta-nazev">Řekněte nám, co hledáte</h3>
            <p className="karta-parametry">
              Zapíšeme si vaši poptávku a ozveme se, jakmile do nabídky přibude
              něco podle vašich představ.
            </p>
            <a href="tel:+420604724137" className="btn btn-primar btn-blok">
              Zavolat makléři
            </a>
          </li>
        </ul>
      </section>

      <section className="jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="jak-mrizka">
          <div className="jak-copy">
            <p className="eyebrow">Jak to u nás chodí</p>
            <h2 id="jak-nadpis">
              Jeden makléř, který to za&nbsp;vás celé odřídí
            </h2>
            <p className="sekce-uvod">
              Chystáte se prodat a nevíte, komu to svěřit? U nás nezůstanete na
              nic sami. Od první prohlídky až po předání klíčů máte vedle sebe
              jednoho člověka, který to zná.
            </p>

            <ol className="kroky">
              {kroky.map((k) => (
                <li key={k.cislo} className="krok">
                  <span className="krok-cislo">{k.cislo}</span>
                  <div>
                    <h3>{k.titulek}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="jak-plus">
              Kromě prodeje a pronájmu vám zařídíme i hypotéku a další finanční
              služby — ať máte všechno pod jednou střechou.
            </p>
          </div>

          <div className="jak-media">
            <figure className="jak-obraz">
              <img
                src="/section-1.webp"
                alt="Interiér nemovitosti nabízené kanceláří Realpart v Brně"
                width={720}
                height={520}
                loading="lazy"
              />
            </figure>
            <figure className="jak-obraz jak-obraz-mala">
              <img
                src="/section-2.webp"
                alt="Detail nemovitosti z portfolia Realpart Brno"
                width={720}
                height={520}
                loading="lazy"
              />
            </figure>
            <blockquote className="jak-citace">
              <p>
                „Prodej vaší nemovitosti bereme jako závazek — dokud není podpis
                na papíře, práce nekončí.“
              </p>
              <cite>Realpart servis, s.r.o. · Brno</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
