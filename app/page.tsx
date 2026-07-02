export const metadata = {
  title: "PLOTY KINCL s.r.o. — Ploty, brány a oplocení | Ostrava a Hlučín",
  description:
    "Výroba a výstavba plotů na míru v Ostravě a okolí. Vlastní zámečnická dílna od roku 1991, automatické brány, průmyslové oplocení, garážová vrata.",
  openGraph: {
    title: "PLOTY KINCL — Ploty a brány, Ostrava",
    description:
      "Plot postavený jednou. Vlastní zámečnická dílna, komponenty vlastní výroby, montáž v Ostravě a okolí.",
    locale: "cs_CZ",
    type: "website",
  },
};

// SVG dekor: rytmus plotového pole — sloupky a výplň, odvozeno z reálné konstrukce plotu
function FenceField({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 240"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* sloupky */}
      {[20, 220, 420, 620].map((x) => (
        <rect key={x} x={x - 7} y={12} width="14" height="228" fill="var(--ocel)" />
      ))}
      {/* čepičky sloupků */}
      {[20, 220, 420, 620].map((x) => (
        <rect key={"c" + x} x={x - 11} y={4} width="22" height="8" rx="2" fill="var(--zinek)" />
      ))}
      {/* vodorovné rámy */}
      <rect x="13" y="44" width="614" height="8" fill="var(--zinek)" />
      <rect x="13" y="196" width="614" height="8" fill="var(--zinek)" />
      {/* svislá výplň — laťování / profily */}
      {Array.from({ length: 30 }, (_, i) => 40 + i * 20).map((x) =>
        x % 200 < 185 && x % 200 > 15 ? (
          <rect key={"p" + x} x={x - 3} y={58} width="6" height="132" fill="var(--zinek)" opacity="0.55" />
        ) : null
      )}
    </svg>
  );
}

const sluzby = [
  {
    kod: "KOVANÉ RÁMY",
    nazev: "Ploty na míru pro rodinné domy",
    text: "Zaměříme pozemek, navrhneme konstrukci a plot vyrobíme v naší dílně v Hlučíně. Žárově zinkované rámy, výplň dle vašeho výběru — laťování, tahokov, svařovaná síť. Plot, který nebudete za pět let natírat.",
  },
  {
    kod: "POHON + AUTOMATIKA",
    nazev: "Automatické brány a vjezdy",
    text: "Posuvné i křídlové brány s pohonem, ovládané dálkově nebo z telefonu. Bránu vyrobíme, usadíme, zapojíme a seřídíme — a když se za deset let něco zadrhne, přijedeme my, ne anonymní servis.",
  },
  {
    kod: "PRŮMYSL",
    nazev: "Průmyslové oplocení a předělovací systémy",
    text: "Oplocení areálů, vnitřní dělicí systémy hal, vstupní branky s přístupovým systémem. Stavíme pro firmy z Ostravska, které potřebují areál zabezpečit rychle a bez výluky provozu.",
  },
  {
    kod: "VRATA + DVEŘE",
    nazev: "Garážová vrata",
    text: "Dodáváme a montujeme sekční garážová vrata a dveřní systémy od renomovaných výrobců. Vybereme s vámi typ podle garáže a rozpočtu, změříme a namontujeme včetně pohonu.",
  },
  {
    kod: "ATYP",
    nazev: "Zámečnická výroba na zakázku",
    text: "Zábradlí, branky, mříže, konstrukce, které v katalogu nenajdete. Vlastní dílna znamená, že „takhle to vyrobit nejde“ u nás neuslyšíte — nakreslíme, svaříme, pozinkujeme.",
  },
];

const duvody = [
  {
    rok: "1991",
    titul: "Začátek řemesla",
    text: "Firma působí na trhu od roku 1991. Za tu dobu jsme postavili stovky plotů po celém Ostravsku — a víme, které konstrukce vydrží zdejší zimy a které ne.",
  },
  {
    rok: "2011",
    titul: "Specializace na oplocení",
    text: "Soustředili jsme se čistě na výstavbu oplocení, automatické brány a průmyslové předělovací systémy. Děláme jednu věc a děláme ji pořádně.",
  },
  {
    rok: "2015",
    titul: "PLOTY KINCL s.r.o.",
    text: "Rodinná firma Ing. Michala Kincla se sídlem a dílnou v Hlučíně. Jednáte přímo s majitelem — od zaměření po předání hotového plotu.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* ============ HERO ============ */}
      <header className="pk-hero">
        <div className="pk-hero-top">
          <div className="pk-wordmark" aria-label="Ploty Kincl s.r.o.">
            <span className="pk-wordmark-ploty">PLOTY</span>
            <span className="pk-wordmark-kincl">KINCL</span>
          </div>
          <p className="pk-hero-loc">
            Ostrava · Hlučín — vlastní zámečnická dílna od r. 1991
          </p>
        </div>

        <h1 className="pk-hero-h1">
          <span className="pk-h1-line pk-h1-a">Plot postavíme</span>
          <span className="pk-h1-line pk-h1-b">jednou.</span>
          <span className="pk-h1-line pk-h1-c">Pak už jen slouží.</span>
        </h1>

        <p className="pk-hero-sub">
          Vyrábíme a stavíme ploty, automatické brány a průmyslové oplocení pro
          Ostravu a okolí. Komponenty si vyrábíme sami v dílně v Hlučíně —
          proto vydrží déle než sériové zboží z katalogu.
        </p>

        <div className="pk-hero-cta">
          <a className="pk-btn pk-btn-solid" href="tel:+420603000000">
            Zavolat Ing. Kinclovi
          </a>
          <a className="pk-btn pk-btn-line" href="mailto:info@plotykincl.cz">
            Poslat poptávku e‑mailem
          </a>
        </div>

        {/* signature: plotové pole vyrůstající ze spodní hrany hero */}
        <FenceField className="pk-hero-fence" />
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="pk-sluzby" aria-labelledby="sluzby-h">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Co vyrábíme a stavíme</p>
          <h2 id="sluzby-h" className="pk-h2">
            Od zaměření pozemku po poslední pant
          </h2>
        </div>

        <ul className="pk-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="pk-karta">
              <span className="pk-karta-kod">{s.kod}</span>
              <h3 className="pk-karta-h3">{s.nazev}</h3>
              <p className="pk-karta-p">{s.text}</p>
            </li>
          ))}
          <li className="pk-karta pk-karta-dilna">
            <span className="pk-karta-kod">DÍLNA HLUČÍN</span>
            <h3 className="pk-karta-h3">Proč vlastní výroba</h3>
            <p className="pk-karta-p">
              Sériový plot je kompromis. My svařujeme rámy z plnostěnných
              profilů a necháváme je žárově zinkovat — plot pak stojí desítky
              let bez nátěru a bez dalších investic.
            </p>
          </li>
        </ul>
      </section>

      {/* ============ DŮVĚRA / HISTORIE ============ */}
      <section className="pk-duvera" aria-labelledby="duvera-h">
        <div className="pk-section-head">
          <p className="pk-eyebrow pk-eyebrow-light">Rodinná firma z Hlučína</p>
          <h2 id="duvera-h" className="pk-h2 pk-h2-light">
            Přes třicet let víme o plotech téměř vše
          </h2>
        </div>

        <ol className="pk-linka">
          {duvody.map((d) => (
            <li key={d.rok} className="pk-linka-bod">
              <span className="pk-linka-rok">{d.rok}</span>
              <div className="pk-linka-obsah">
                <h3 className="pk-linka-h3">{d.titul}</h3>
                <p className="pk-linka-p">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pk-citat">
          <blockquote>
            „Cílem je navrhnout plot přesně podle představ zákazníka tak, aby
            mu dlouhá léta sloužil bez dalších investic do údržby. Proto si
            komponenty vyrábíme sami — na kvalitě materiálu se šetřit nedá.“
          </blockquote>
          <figcaption>
            Ing. Michal Kincl, majitel — U Cihelny 230/3, Hlučín
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
