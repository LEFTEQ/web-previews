import type { CSSProperties } from "react";

type Lane = {
  num: string;
  name: string;
  desc: string;
  cta: string;
};

const lanes: Lane[] = [
  {
    num: "01",
    name: "Bowling",
    desc: "Osm drah, dětské zarážky a bezedná limonáda k letnímu balíčku. Přijďte s partou i s dětmi \u2014 zaházet, ne trénovat na profíky.",
    cta: "Rezervovat dráhu",
  },
  {
    num: "02",
    name: "Squash",
    desc: "Dva kurty a k tomu stolní tenis. Hodinu odpálíte stres, druhou si dáte něco k pití v restauraci hned vedle.",
    cta: "Rezervovat kurt",
  },
  {
    num: "03",
    name: "Tanec",
    desc: "Salsa & Latino i společenské tance. Kurzy, tančírny a workshopy \u2014 od úplných začátečníků po ty, co už umí vést i řídit.",
    cta: "Vybrat kurz",
  },
  {
    num: "04",
    name: "Virtuální realita",
    desc: "Beat Saber a další. Nasadíte brýle, zmizíte z Olomouce na hodinu a vrátíte se zpocení jako po tréninku.",
    cta: "Rezervovat VR",
  },
  {
    num: "05",
    name: "Společenské akce",
    desc: "Firemní večírek, rodinná sešlost nebo svatba. Catering, který v referencích chválí i pořadatelé kongresů.",
    cta: "Poptat akci",
  },
  {
    num: "06",
    name: "Pronájem sálu",
    desc: "Celý sál pro vaši aktivitu, a když dorazíte zdaleka, přespíte v partnerském BEST Hotelu Garni kousek vedle.",
    cta: "Zjistit volné termíny",
  },
];

type Hours = { day: string; time: string; hot?: boolean };

const hours: Hours[] = [
  { day: "Pondělí", time: "14\u201320" },
  { day: "Úterý", time: "14\u201322" },
  { day: "Středa", time: "14\u201322" },
  { day: "Čtvrtek", time: "10\u201300", hot: true },
  { day: "Pátek", time: "14\u201300", hot: true },
  { day: "Sobota", time: "10\u201300", hot: true },
  { day: "Neděle", time: "10\u201320" },
];

type Review = { text: string; name: string; role: string };

const reviews: Review[] = [
  {
    text: "Při zajištění cateringu oceňuji pružnou komunikaci a vstřícné jednání. Jídlo bylo vždy výborné a dodáno v přesném množství i čase. Mohu vřele doporučit.",
    name: "Kateřina Skopalová",
    role: "catering na míru",
  },
  {
    text: "Děkuji celému týmu BEST za catering na kongresu Pohyb a zdraví. Profesionální, vstřícní, pružní \u2014 a jídlo opravdu výtečné. Příští rok se na vás obrátíme znovu.",
    name: "Ing. Nela Adamová",
    role: "kongres v Olomouci",
  },
  {
    text: "Bowlingový turnaj pro třicet hostů proběhl přesně podle domluvy. Oba rauty sklidily úspěch, obsluha s námi vydržela do ranních hodin. Za rok jedeme zase.",
    name: "Jan Kučera",
    role: "Leviat s.r.o.",
  },
];

export default function Page() {
  return (
    <main className="bc">
      <header className="bc-top">
        <a className="bc-mark" href="#" aria-label="BEST Sportcentrum, úvodní stránka">
          <span className="bc-mark-best">BEST</span>
          <span className="bc-mark-sub">Sportcentrum · Olomouc</span>
        </a>
        <a className="bc-call" href="tel:+420773313314">
          +420 773 313 314
        </a>
      </header>

      <section className="bc-hero" aria-labelledby="bc-hero-title">
        <div className="bc-hero-grid" aria-hidden="true">
          <div className="bc-pins">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="bc-pin"
                style={{ "--i": i } as CSSProperties}
              />
            ))}
          </div>
        </div>

        <p className="bc-eyebrow">Zábava na jednom místě od roku 2010</p>
        <h1 id="bc-hero-title" className="bc-hero-title">
          <span className="bc-line">Zaházet,</span>
          <span className="bc-line bc-line-out">zatančit,</span>
          <span className="bc-line">zůstat</span>
          <span className="bc-line bc-accent">na večeři.</span>
        </h1>
        <p className="bc-hero-lede">
          Šest způsobů, jak strávit večer pod jednou střechou v Olomouci \u2014 od
          bowlingové dráhy přes squash a tančírnu až po virtuální realitu. A když
          vyhládne, restaurace je hned vedle.
        </p>
        <div className="bc-hero-actions">
          <a className="bc-btn bc-btn-solid" href="#rezervace">
            Rezervovat online
          </a>
          <a className="bc-btn bc-btn-ghost" href="#nabidka">
            Prohlédnout nabídku
          </a>
        </div>
      </section>

      <section className="bc-section" id="nabidka" aria-labelledby="bc-nabidka-title">
        <div className="bc-section-head">
          <p className="bc-kicker">Šest drah zábavy</p>
          <h2 id="bc-nabidka-title">Vyberte si, čím dnes večer začnete</h2>
        </div>
        <ul className="bc-lanes">
          {lanes.map((l) => (
            <li key={l.num} className="bc-lane">
              <span className="bc-lane-num" aria-hidden="true">
                {l.num}
              </span>
              <div className="bc-lane-body">
                <h3>{l.name}</h3>
                <p>{l.desc}</p>
                <a className="bc-lane-cta" href="#rezervace">
                  {l.cta}
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bc-section bc-trust" id="rezervace" aria-labelledby="bc-trust-title">
        <div className="bc-section-head">
          <p className="bc-kicker">Kdy dorazit a co říkají ti, co už byli</p>
          <h2 id="bc-trust-title">Otevřeno až do půlnoci, catering i na kongresy</h2>
        </div>

        <div className="bc-trust-grid">
          <div className="bc-hours" aria-labelledby="bc-hours-title">
            <h3 id="bc-hours-title">Otevírací doba</h3>
            <table className="bc-hours-table">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className={h.hot ? "bc-hot" : undefined}>
                    <th scope="row">{h.day}</th>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="bc-hours-note">
              Ve čtvrtek až sobotu se hraje a tančí do půlnoci. Rezervaci vyřídíme
              na <a href="tel:+420773313314">773 313 314</a> nebo{" "}
              <a href="mailto:office@best-sportcentrum.cz">e-mailem</a>.
            </p>
          </div>

          <div className="bc-reviews">
            <h3 className="bc-sr">Reference zákazníků</h3>
            {reviews.map((r) => (
              <figure key={r.name} className="bc-review">
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <span className="bc-review-name">{r.name}</span>
                  <span className="bc-review-role">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
