const CAJE = [
  {
    kategorie: "Zelené čaje",
    kod: "lu cha",
    priklad: "Long Jing, Sencha Fukamushi, Bi Luo Chun",
    popis:
      "Nálev 70–80 °C, krátké louhování. Svěží, trávové tóny — čaj, kterým u nás většina hostů začíná.",
    teplota: "75 °C",
  },
  {
    kategorie: "Oolongy",
    kod: "wu long",
    priklad: "Tie Guan Yin, Dong Ding, Da Hong Pao",
    popis:
      "Polozelené čaje na víc nálevů. Připravujeme v kung-fu setu — malá konvička, malé šálky, hodně času.",
    teplota: "90 °C",
  },
  {
    kategorie: "Pu-erhy",
    kod: "pu er",
    priklad: "Sheng i shu, koláče z Yunnanu, ročníky k dokoupení",
    popis:
      "Zemité, zrající čaje z lisovaných koláčů. Krájíme přímo před vámi, list si můžete odnést domů.",
    teplota: "95 °C",
  },
  {
    kategorie: "Černé a bílé",
    kod: "hong / bai",
    priklad: "Darjeeling, Keemun, Bai Mu Dan, Yin Zhen",
    popis:
      "Od plných assamských nálevů po jemné stříbrné jehly. K nim domácí zákusky a datle plněné ořechy.",
    teplota: "85 °C",
  },
];

const RITUAL = [
  {
    krok: "Vyberete si z lístku",
    text: "Přes šedesát sypaných čajů, u každého původ a doporučená příprava. Poradíme, i když jdete na čaj poprvé.",
  },
  {
    krok: "Čaj připravíme u stolu",
    text: "Konvička, miska na přelévání, přesýpací hodiny. Většina čajů vydrží tři až pět nálevů — nikam nespěcháte.",
  },
  {
    krok: "Zůstanete, jak dlouho chcete",
    text: "Nízké sezení na polštářích i běžné stoly, tlumené světlo, vodní dýmky ve vyhrazené části. Wi-fi máme, ale málokdo ji tu potřebuje.",
  },
];

export default function Page() {
  return (
    <main className="tea">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="Philadelphia — čajovna Pardubice">
            <span className="brand-mark" aria-hidden="true">
              茶
            </span>
            <span className="brand-word">
              Philadelphia<span className="brand-sub">čajovna · Pardubice</span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Voda 85&nbsp;°C.</span>
            <span className="line l2">Tři minuty ticha.</span>
            <span className="line l3">
              A čaj, který <em>voní přes celé náměstí</em>.
            </span>
          </h1>

          <p className="hero-lead">
            Čajovna na náměstí Republiky v&nbsp;Pardubicích. Sypané čaje z&nbsp;Číny,
            Japonska, Indie i&nbsp;Tchaj-wanu, připravované v&nbsp;konvičce přímo
            u&nbsp;vašeho stolu — od roku, kdy tu ještě jezdila tramvaj vzpomínek.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420466612153">
              Zavolat a&nbsp;rezervovat stůl
            </a>
            <a className="btn btn-ghost" href="#listek">
              Prohlédnout čajový lístek
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>náměstí Republiky 2686, Pardubice</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>denně 14–22, pátek a sobota do půlnoci</dd>
            </div>
            <div>
              <dt>V lístku</dt>
              <dd>60+ sypaných čajů · vodní dýmky · domácí zákusky</dd>
            </div>
          </dl>
        </div>

        {/* signature: stoupající pára z misky */}
        <div className="steam" aria-hidden="true">
          <svg viewBox="0 0 400 640" preserveAspectRatio="xMidYMax meet">
            <path
              className="steam-line s1"
              d="M200 600 C 150 520, 260 470, 205 380 C 155 300, 250 250, 200 160 C 165 95, 220 60, 200 10"
            />
            <path
              className="steam-line s2"
              d="M245 600 C 300 510, 200 460, 255 370 C 305 290, 215 240, 260 150 C 292 88, 240 55, 258 12"
            />
            <path
              className="steam-line s3"
              d="M155 600 C 110 530, 205 480, 152 395 C 105 320, 190 265, 148 180 C 120 122, 168 80, 150 30"
            />
            <ellipse className="steam-bowl" cx="200" cy="618" rx="96" ry="18" />
          </svg>
        </div>
      </header>

      {/* ===== ČAJOVÝ LÍSTEK ===== */}
      <section className="menu" id="listek" aria-labelledby="menu-h">
        <div className="section-head">
          <p className="eyebrow">Z čajového lístku</p>
          <h2 id="menu-h">Čtyři cesty, kterými se u nás dá jít</h2>
          <p className="section-lead">
            Lístek řadíme podle zpracování listu, ne podle zemí — od nejsvěžejších
            zelených po zemité pu-erhy. U&nbsp;každého čaje je teplota vody, kterou
            dodržujeme na stupeň.
          </p>
        </div>

        <ol className="menu-grid">
          {CAJE.map((c) => (
            <li className="tea-card" key={c.kategorie}>
              <div className="tea-card-top">
                <span className="tea-temp">{c.teplota}</span>
                <span className="tea-kod">{c.kod}</span>
              </div>
              <h3>{c.kategorie}</h3>
              <p className="tea-priklad">{c.priklad}</p>
              <p className="tea-popis">{c.popis}</p>
            </li>
          ))}
        </ol>

        <p className="menu-note">
          Všechny čaje prodáváme i&nbsp;sypané s&nbsp;sebou — navážíme od 25&nbsp;g,
          k&nbsp;tomu poradíme přípravu doma.
        </p>
      </section>

      {/* ===== RITUÁL / O NÁS ===== */}
      <section className="ritual" aria-labelledby="ritual-h">
        <div className="section-head">
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 id="ritual-h">Čaj tu není nápoj na cestu</h2>
          <p className="section-lead">
            Philadelphia je v&nbsp;Pardubicích přes patnáct let. Za tu dobu se
            u&nbsp;nás vystřídaly generace studentů, první rande i&nbsp;šachové
            turnaje — a&nbsp;pořád platí tři stejné kroky.
          </p>
        </div>

        <ol className="ritual-steps">
          {RITUAL.map((r, i) => (
            <li key={r.krok}>
              <span className="ritual-num" aria-hidden="true">
                {i + 1}. nálev
              </span>
              <h3>{r.krok}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ol>

        <figure className="ritual-quote">
          <blockquote>
            „Sednete si na polštáře, dostanete konvičku a&nbsp;hodiny — a&nbsp;najednou
            je půl desáté večer. Nejlepší místo v&nbsp;Pardubicích, kde nechat telefon
            v&nbsp;kapse.“
          </blockquote>
          <figcaption>— stálý host, chodí na Tie Guan Yin každé úterý</figcaption>
        </figure>
      </section>
    </main>
  );
}
