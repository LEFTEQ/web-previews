import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veselá botička — dětská obuv, Olomouc",
  description:
    "Prodejna dětské obuvi na Švýcarském nábřeží v Olomouci. Změříme dětskou nožku, doporučíme správnou velikost a ušetříme vám zkoušení naslepo. Značková zdravotní obuv pro první krůčky i školáky.",
  openGraph: {
    title: "Veselá botička — dětská obuv, Olomouc",
    description:
      "Změříme nožku, poradíme velikost, obujeme správně. Dětská obuv na Švýcarském nábřeží v Olomouci.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Dětské botičky v prodejně Veselá botička" }],
  },
};

const sizes = [
  { eu: "17–22", cm: "10,5–14,0", note: "první krůčky" },
  { eu: "23–27", cm: "14,3–16,3", note: "batolata" },
  { eu: "28–33", cm: "16,7–21,0", note: "školka" },
  { eu: "34–40", cm: "21,3–26,0", note: "škola" },
];

const hours = [
  { day: "Pondělí", time: "9:00–12:00 / 13:00–18:00" },
  { day: "Úterý", time: "9:00–12:00 / 13:00–18:00" },
  { day: "Středa", time: "9:00–12:00 / 13:00–18:00" },
  { day: "Čtvrtek", time: "9:00–12:00 / 13:00–18:00" },
  { day: "Pátek", time: "9:00–12:00 / 13:00–18:00" },
  { day: "Sobota", time: "9:00–12:00", half: true },
  { day: "Neděle", time: "zavřeno", closed: true },
];

const services = [
  {
    n: "01",
    title: "Změříme nožku",
    body: "Délku i šířku měříme na míru — sedačka, přístroj a zkušené oko. Poznáme, kolik místa noha potřebuje k růstu, a řekneme vám to na milimetr.",
  },
  {
    n: "02",
    title: "Vybereme správnou velikost",
    body: "Každá značka střihne kopyto jinak. Poradíme, která bota sedne na úzkou i vysokou nožku, aby palec neseděl ve špičce a pata nevyklouzávala.",
  },
  {
    n: "03",
    title: "Vyzkoušíme a obujeme",
    body: "Dítě si v botách projde po prodejně, my hlídáme, jak našlapuje. Domů jdete s botami, které opravdu sedí — ne s odhadem podle čísla na krabici.",
  },
];

export default function Page() {
  return (
    <main className="vb">
      <header className="vb-top">
        <a className="vb-mark" href="#" aria-label="Veselá botička, úvod">
          <span className="vb-mark-vesela">Veselá</span>
          <span className="vb-mark-boticka">botička</span>
        </a>
        <nav className="vb-nav" aria-label="Hlavní navigace">
          <a href="#jak">Jak to u nás chodí</a>
          <a href="#velikosti">Velikosti</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
        <a className="vb-callbtn" href="tel:+420608310129">Zavolat</a>
      </header>

      <section className="vb-hero">
        <div className="vb-hero-copy">
          <p className="vb-eyebrow">Prodejna dětské obuvi · Olomouc</p>
          <h1 className="vb-h1">
            Než ji koupíte,<br />
            <em>změříme</em> nožku.
          </h1>
          <p className="vb-lede">
            Dětská noha roste po pěti milimetrech a bota, která tlačí, se pozná pozdě.
            Na Švýcarském nábřeží proto každou nožku nejdřív změříme a teprve pak
            vybíráme. Odejdete s botami, které sedí — ne s číslem, které možná vyjde.
          </p>
          <div className="vb-hero-actions">
            <a className="vb-primary" href="tel:+420608310129">
              Zavolat · 608 310 129
            </a>
            <a className="vb-secondary" href="#prodejna">Kde nás najdete</a>
          </div>
          <dl className="vb-hero-facts">
            <div>
              <dt>Rozsah</dt>
              <dd>17–40 EU</dd>
            </div>
            <div>
              <dt>Měření</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Olomouc, nábřeží</dd>
            </div>
          </dl>
        </div>
        <figure className="vb-hero-media">
          <img
            src="/hero.webp"
            alt="Řada dětských botiček připravených k vyzkoušení v prodejně Veselá botička"
            width={900}
            height={1100}
          />
          <figcaption>Botička k botičce — od prvních capáčků po školní tenisky.</figcaption>
        </figure>
      </section>

      <section id="jak" className="vb-section vb-services">
        <div className="vb-section-head">
          <p className="vb-eyebrow">Jak to u nás chodí</p>
          <h2 className="vb-h2">Tři kroky ke správné botě</h2>
          <p className="vb-section-lede">
            Neprodáváme boty z regálu do tašky. Vezmeme si na dítě čas — protože
            špatná bota v pěti letech se pozná až na kotnících ve dvaceti.
          </p>
        </div>
        <ol className="vb-steps">
          {services.map((s) => (
            <li key={s.n} className="vb-step">
              <span className="vb-step-n" aria-hidden="true">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <figure className="vb-services-media">
          <img
            src="/section-1.webp"
            alt="Měření dětské nožky a výběr obuvi v prodejně"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section id="velikosti" className="vb-section vb-sizes">
        <div className="vb-section-head">
          <p className="vb-eyebrow">Co u nás obujete</p>
          <h2 className="vb-h2">Od prvních krůčků po školu</h2>
        </div>
        <table className="vb-sizetable">
          <caption className="vb-visually-hidden">
            Orientační tabulka velikostí — evropské číslo, délka nohy v centimetrech a věková fáze.
          </caption>
          <thead>
            <tr>
              <th scope="col">EU</th>
              <th scope="col">Délka nohy</th>
              <th scope="col">Fáze</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((row) => (
              <tr key={row.eu}>
                <td className="vb-eu">{row.eu}</td>
                <td>{row.cm} cm</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="vb-sizes-note">
          Nejste si jistí velikostí? Přineste dítě — změříme obě nožky, protože
          bývají rozdílné, a doporučíme přesně to, co potřebuje.
        </p>
      </section>

      <section id="prodejna" className="vb-section vb-shop">
        <figure className="vb-shop-media">
          <img
            src="/section-2.webp"
            alt="Prodejna Veselá botička na Švýcarském nábřeží v Olomouci"
            width={1000}
            height={800}
          />
        </figure>
        <div className="vb-shop-copy">
          <p className="vb-eyebrow">Prodejna a otevírací doba</p>
          <h2 className="vb-h2">Švýcarské nábřeží, Olomouc</h2>
          <p className="vb-section-lede">
            Najdete nás na nábřeží Moravy, kousek od centra. Přijďte klidně bez
            objednání — na měření i vyzkoušení si vždycky uděláme čas.
          </p>

          <div className="vb-contact">
            <a className="vb-contact-row" href="tel:+420608310129">
              <span>Telefon</span>
              <strong>+420 608 310 129</strong>
            </a>
            <a className="vb-contact-row" href="mailto:info@veselaboticka.cz">
              <span>E-mail</span>
              <strong>info@veselaboticka.cz</strong>
            </a>
            <div className="vb-contact-row">
              <span>Adresa</span>
              <strong>Švýcarské nábřeží 802/6, 779 00 Olomouc</strong>
            </div>
          </div>

          <table className="vb-hours">
            <caption className="vb-visually-hidden">Otevírací doba prodejny</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className={h.closed ? "is-closed" : ""}>
                  <th scope="row">{h.day}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
