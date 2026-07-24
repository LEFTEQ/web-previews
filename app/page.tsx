import { AiImage } from "./_ui";

const hours = [
  { day: "Pondělí", open: "08:00–19:00", today: false },
  { day: "Úterý", open: "08:00–19:00", today: false },
  { day: "Středa", open: "08:00–19:00", today: false },
  { day: "Čtvrtek", open: "08:00–19:00", today: false },
  { day: "Pátek", open: "08:00–19:00", today: true },
  { day: "Sobota", open: "08:00–13:00", today: false },
  { day: "Neděle", open: "Zavřeno", today: false },
];

// exponované časy: hodiny 8–19, hodnota 0–4(odhad návštěvnosti)
const busy = [
  { day: "Po", bars: [1, 2, 2, 3, 3, 2, 2, 3, 4, 4, 3, 1] },
  { day: "Út", bars: [1, 2, 2, 2, 3, 2, 2, 3, 4, 3, 2, 1] },
  { day: "St", bars: [1, 2, 3, 3, 3, 2, 2, 3, 4, 4, 3, 1] },
  { day: "Čt", bars: [1, 2, 2, 3, 3, 3, 2,3, 4, 4, 3, 1] },
  { day: "Pá", bars: [2, 3, 3, 4, 4, 3, 3, 4, 4, 4, 3, 2] },
  { day: "So", bars: [2, 3, 4, 4, 3, 2, 0, 0, 0, 0, 0, 0] },
  { day: "Ne", bars: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
];

const hourLabels = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function Page() {
  return (
    <main className="dm">
      {/* ============ HERO ============ */}
      <section className="dm-band dm-band--hero">
        <div className="dm-wrap dm-hero">
          <div className="dm-hero__text">
            <p className="dm-eyebrow">Prodejna · Liberec</p>
            <h1 className="dm-h1">
              Drogerie na&nbsp;Ukázkové.
              <span className="dm-h1__sub">Otevřeno dnes do 19:00.</span>
            </h1>

            <div className="dm-plates">
              <p className="dm-plate dm-plate--d1">
                <span className="dm-plate__label">Adresa</span>
                <span className="dm-plate__value">Ukázková 123, Liberec</span>
              </p>
              <p className="dm-plate dm-plate--d2">
                <span className="dm-plate__label">Dnes (pátek)</span>
                <span className="dm-plate__value">08:00–19:00</span>
              </p>
              <p className="dm-plate dm-plate--d3">
                <span className="dm-plate__label">Telefon na prodejnu</span>
                <span className="dm-plate__value">777 111 222</span>
              </p>
            </div>

            <div className="dm-actions">
              <a className="dm-btn dm-btn--primary" href="tel:+420777111222">
                Zavolat na prodejnu
              </a>
              <a
                className="dm-btn dm-btn--ghost"
                href="https://mapy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigovat k prodejně
              </a>
            </div>

            <p className="dm-receipt">
              Vyzvednutí objednávky u balicího pultu · Scan&amp;Go · Wi-Fi ·
              hrací koutek
            </p>
          </div>

          <div className="dm-hero__img">
            <AiImage
              src="/hero.webp"
              alt="Regály drogerie dm v Liberci s modrými cenovkovými lištami"
              className="dm-img dm-img--hero"
            />
          </div>
        </div>
      </section>

      {/* ============ SEKCE 1: kdy přijít + otevírací doba ============ */}
      <section className="dm-band dm-band--paper" id="kdy-prijit">
        <div className="dm-wrap">
          <header className="dm-head">
            <h2 className="dm-h2">
              <span className="dm-tick" aria-hidden="true" />
              Exponované časy
            </h2>
            <p className="dm-lead">
              Sedm dní jako sedm regálových lišt. Čím delší žlutý proužek, tím
              víc lidí u pokladen. Nejklidněji je hned po otevření a kolem
              poledne.
            </p>
          </header>

          <div className="dm-chart" role="img" aria-label="Graf návštěvnosti prodejny podle dnů a hodin: nejrušněji je v pátek mezi 15 a 18 hodinou, nejklidněji ráno v 8 hodin a v neděli je zavřeno.">
            <div className="dm-chart__scale" aria-hidden="true">
              {hourLabels.map((h) => (
                <span key={h} className="dm-chart__hour">
                  {h}
                </span>
              ))}
            </div>
            {busy.map((row) => (
              <div className="dm-rail" key={row.day}>
                <span className="dm-rail__day">{row.day}</span>
                <div className="dm-rail__track">
                  {row.bars.map((v, i) => (
                    <span
                      key={i}
                      className={"dm-bar dm-bar--" + v}
                      style={{ animationDelay: i * 35 + "ms" }}
                    />
                  ))}
                  {row.day === "Ne" ? (
                    <span className="dm-rail__closed">Zavřeno</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="dm-split">
            <div>
              <h3 className="dm-h3">
                <span className="dm-tick dm-tick--sm" aria-hidden="true" />
                Otevírací doba
              </h3>
              <table className="dm-hours">
                <caption className="dm-sr">
                  Otevírací doba prodejny dm Liberec, Ukázková 123
                </caption>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className={h.today ? "is-today" : undefined}>
                      <th scope="row">{h.day}</th>
                      <td>{h.open}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="dm-receipt">
                Poslední zákazník u pokladny 5 minut před zavírací dobou.
              </p>
            </div>

            <div className="dm-mapcard">
              <AiImage
                src="/section-1.webp"
                alt="Plánek okolí prodejny dm na Ukázkové ulici v Liberci"
                className="dm-img dm-img--map"
              />
              <div className="dm-mapcard__foot">
                <p className="dm-plate dm-plate--static">
                  <span className="dm-plate__label">Kde nás najdete</span>
                  <span className="dm-plate__value">Ukázková 123, Liberec</span>
                </p>
                <a
                  className="dm-btn dm-btn--primary dm-btn--full"
                  href="https://mapy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Otevřít mapu a navigovat
                </a>
                <p className="dm-receipt">
                  Mapu načteme až po kliknutí — stránka se díky tomu otevře
                  okamžitě.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEKCE 2: co na prodejně vyřídíte ============ */}
      <section className="dm-band dm-band--blue" id="na-prodejne">
        <div className="dm-wrap">
          <header className="dm-head">
            <h2 className="dm-h2 dm-h2--onblue">
              <span className="dm-tick" aria-hidden="true" />
              Co na prodejně vyřídíte
            </h2>
            <p className="dm-lead dm-lead--onblue">
              Devět regálových uliček, jedna pokladní zóna a balicí pult vzadu
              vpravo. Tady je, co za tu cestu do centra Liberce dostanete.
            </p>
          </header>

          <ul className="dm-cards">
            <li className="dm-card">
              <span className="dm-card__num">Sortiment</span>
              <h3 className="dm-card__h">Dekorativní kosmetika a péče</h3>
              <p>
                Líčení včetně miss sporty, péče o pleť a tělo, parfémy, vlasová
                kosmetika i Men&apos;s World. Testery máme rozbalené — zkoušet se
                smí.
              </p>
            </li>
            <li className="dm-card">
              <span className="dm-card__num">Domácnost</span>
              <h3 className="dm-card__h">Prací, úklid, XXL balení</h3>
              <p>
                Drogerie do koupelny i kuchyně, XXL balení za lepší cenu za kus
                a krmivo pro psy a kočky ve druhé uličce od vchodu.
              </p>
            </li>
            <li className="dm-card">
              <span className="dm-card__num">Miminka</span>
              <h3 className="dm-card__h">Péče o dítě a výživa</h3>
              <p>
                Plenky, kojenecká výživa a doplňky stravy. U regálu je přebalovací
                pult a hned vedle hrací koutek, ať se dá nakoupit v klidu.
              </p>
            </li>
            <li className="dm-card">
              <span className="dm-card__num">Vyzvednutí</span>
              <h3 className="dm-card__h">Expresní výdej do 60 minut</h3>
              <p>
                Objednávku z e-shopu vydáme u balicího pultu. Nad 1290 Kč je
                vyzvednutí i doprava zdarma pro přihlášené zákazníky.
              </p>
            </li>
            <li className="dm-card">
              <span className="dm-card__num">Placení</span>
              <h3 className="dm-card__h">Scan&amp;Go, karta i body</h3>
              <p>
                Načtěte zboží telefonem a projděte samoobslužnou pokladnou.
                Bereme hotovost, karty, active beauty body i dárkové poukázky.
              </p>
            </li>
            <li className="dm-card dm-card--green">
              <span className="dm-card__num">Vědomá volba</span>
              <h3 className="dm-card__h">Náhradní náplně a sběr</h3>
              <p>
                Refill balení k dm značkám, přírodní kosmetika a sběrný box na
                prázdné obaly hned za vchodem vpravo.
              </p>
            </li>
          </ul>

          <div className="dm-trust">
            <div className="dm-trust__img">
              <AiImage
                src="/section-2.webp"
                alt="Pokladní zóna prodejny dm s balicím pultem"
                className="dm-img dm-img--wide"
              />
            </div>
            <div className="dm-trust__text">
              <h3 className="dm-h3 dm-h3--onblue">
                <span className="dm-tick dm-tick--sm" aria-hidden="true" />
                Co říkají lidé od nás z Liberce
              </h3>
              <blockquote className="dm-quote">
                <p>
                  „Přišla jsem s objednávkou z e-shopu deset minut po SMS a
                  balíček už ležel připravený u pultu. Za tři minuty jsem byla
                  venku.“
                </p>
                <footer>Petra H., Liberec — Rochlice</footer>
              </blockquote>
              <blockquote className="dm-quote">
                <p>
                  „Chodím sem s kočárkem. Uličky jsou průjezdné a u hracího
                  koutku se dá nechat starší dítě, než vyberu plenky.“
                </p>
                <footer>Jan Ř., Liberec — Staré Město</footer>
              </blockquote>
              <p className="dm-receipt dm-receipt--onblue">
                Prodejna v provozu od roku2004 · 14 kolegyň a kolegů ·
                aktualizováno v lednu 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
