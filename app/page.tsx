export default function Page() {
  const sklad = [
    {
      kod: "OKN",
      nazev: "Nová plastová okna",
      popis: "Běžné rozměry ihned skladem. Bílá i dekor, dvojsklo a trojsklo. Odvezete si je ještě dnes.",
      stav: "skladem",
    },
    {
      kod: "OKZ",
      nazev: "Okna na objednávku",
      popis: "Plastová okna přesně podle vašich rozměrů. Zaměříte, my objednáme — obvykle do 3 týdnů.",
      stav: "na míru",
    },
    {
      kod: "BAZ",
      nazev: "Bazarová okna a dveře",
      popis: "Plastová i dřevěná okna z výkupu za zlomek ceny nových. Nabídka se mění každý týden.",
      stav: "bazar",
    },
    {
      kod: "DLA",
      nazev: "Dlažba",
      popis: "Hladká, tryskaná, vymývaná i pryžová. Zbytkové palety se slevou — ptejte se na skladu.",
      stav: "skladem",
    },
    {
      kod: "DVE",
      nazev: "Dveře",
      popis: "Vnitřní, vchodové i balkonové. Nové kusy vedle bazarových — vyberete podle rozpočtu.",
      stav: "skladem",
    },
    {
      kod: "VYK",
      nazev: "Výkup a komise",
      popis: "Zbylo vám ze stavby? Vykoupíme okna, dveře i dlažbu, nebo je prodáme v komisi za vás.",
      stav: "vykupujeme",
    },
  ];

  return (
    <main className="sc">
      {/* ================= HERO ================= */}
      <section className="sc-hero" aria-label="Stavební bazar STAVCAMI Brno">
        <header className="sc-topbar">
          <div className="sc-wordmark" aria-label="STAVCAMI">
            <span className="sc-wordmark-stav">STAV</span>
            <span className="sc-wordmark-cami">CAMI</span>
          </div>
          <p className="sc-topbar-note">
            Skalní 733/3, Brno-Bosonohy · po–pá 7:30–17:00, so 8:00–12:00
          </p>
        </header>

        <div className="sc-hero-grid">
          <div className="sc-hero-copy">
            <p className="sc-hero-eyebrow">Stavební bazar · Brno-Bosonohy</p>
            <h1 className="sc-hero-title">
              <span className="sc-hero-line sc-hero-line-1">Okna, dveře</span>
              <span className="sc-hero-line sc-hero-line-2">a&nbsp;dlažba</span>
              <span className="sc-hero-line sc-hero-line-3">
                <em>na paletě,</em>
              </span>
              <span className="sc-hero-line sc-hero-line-4">ne v&nbsp;katalogu.</span>
            </h1>
            <p className="sc-hero-lead">
              Nové i bazarové stavební zboží fyzicky na skladě. Přijedete, prohlédnete,
              naložíte. A když vám ze stavby něco zbylo — vykoupíme to.
            </p>
            <div className="sc-hero-actions">
              <a className="sc-btn sc-btn-primary" href="tel:+420602701555">
                Zavolat na sklad — 602 701 555
              </a>
              <a className="sc-btn sc-btn-ghost" href="#sklad">
                Co je právě skladem
              </a>
            </div>
          </div>

          {/* Signature: skladová cedule / paletový štítek */}
          <aside className="sc-tag" aria-label="Dnešní stav skladu">
            <div className="sc-tag-hole" aria-hidden="true" />
            <p className="sc-tag-head">SKLADOVÝ ŠTÍTEK</p>
            <dl className="sc-tag-rows">
              <div className="sc-tag-row">
                <dt>Zboží</dt>
                <dd>okna · dveře · dlažba</dd>
              </div>
              <div className="sc-tag-row">
                <dt>Stav</dt>
                <dd className="sc-tag-stamp">SKLADEM</dd>
              </div>
              <div className="sc-tag-row">
                <dt>Výdej</dt>
                <dd>dnes, na počkání</dd>
              </div>
              <div className="sc-tag-row">
                <dt>Platba</dt>
                <dd>hotově i kartou</dd>
              </div>
            </dl>
            <p className="sc-tag-foot">Skalní 733/3 · 642 00 Brno</p>
          </aside>
        </div>

        <div className="sc-hero-strip" aria-hidden="true">
          <span>NOVÉ</span>
          <span>·</span>
          <span>BAZAR</span>
          <span>·</span>
          <span>VÝKUP</span>
          <span>·</span>
          <span>KOMISE</span>
          <span>·</span>
          <span>NOVÉ</span>
          <span>·</span>
          <span>BAZAR</span>
          <span>·</span>
          <span>VÝKUP</span>
          <span>·</span>
          <span>KOMISE</span>
        </div>
      </section>

      {/* ================= SKLAD ================= */}
      <section className="sc-sklad" id="sklad" aria-labelledby="sklad-h">
        <div className="sc-section-head">
          <h2 id="sklad-h">Co u nás najdete</h2>
          <p>
            Nabídka bazaru se mění podle toho, co zrovna vykoupíme. Než pojedete,
            zavolejte na sklad — řekneme vám, co přesně leží na paletách.
          </p>
        </div>

        <ul className="sc-cards">
          {sklad.map((item) => (
            <li className="sc-card" key={item.kod}>
              <div className="sc-card-top">
                <span className="sc-card-kod">{item.kod}</span>
                <span className={"sc-card-stav sc-stav-" + item.stav.replace(" ", "")}>
                  {item.stav}
                </span>
              </div>
              <h3>{item.nazev}</h3>
              <p>{item.popis}</p>
            </li>
          ))}
        </ul>

        <p className="sc-sklad-note">
          Nová plastová okna a dveře objednáte i v našem e-shopu. Pro bazar, výkup a
          komisi ale platí jediné číslo: <a href="tel:+420547253254">547 253 254</a>{" "}
          (kancelář) nebo <a href="tel:+420602701555">602 701 555</a> (sklad, na SMS
          nereagujeme).
        </p>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="sc-duvera" aria-labelledby="duvera-h">
        <div className="sc-duvera-grid">
          <div className="sc-duvera-copy">
            <h2 id="duvera-h">Kamenný sklad, ne jen výdejna</h2>
            <p>
              STAVCAMI s.r.o. provozuje stavební bazar v Brně-Bosonohách. Všechno
              zboží máme fyzicky na dvoře a ve skladu — okno si otevřete, dlažbu
              potěžkáte, dveře si prohlédnete z obou stran. Žádné objednávání
              naslepo.
            </p>
            <p>
              Za pultem potkáte Ondřeje Miča a Denise Kolkopa. Poradí s výběrem,
              spočítají výkup a domluví komisní prodej. Platit můžete hotově i
              kartou Visa, MasterCard a Maestro.
            </p>
          </div>

          <div className="sc-duvera-fakta">
            <div className="sc-fakt">
              <h3>Otevírací doba</h3>
              <table className="sc-hodiny">
                <tbody>
                  <tr>
                    <th scope="row">po–pá (letní čas)</th>
                    <td>7:30–17:00</td>
                  </tr>
                  <tr>
                    <th scope="row">po–pá (zimní čas)</th>
                    <td>8:00–16:00</td>
                  </tr>
                  <tr>
                    <th scope="row">sobota</th>
                    <td>8:00–12:00</td>
                  </tr>
                  <tr>
                    <th scope="row">neděle a svátky</th>
                    <td>zavřeno</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sc-fakt">
              <h3>Kde nás najdete</h3>
              <p>
                Skalní 733/3, Brno-Bosonohy, 642 00. Kousek od sjezdu z D1,
                s autem zajedete až ke skladu.
              </p>
            </div>
            <div className="sc-fakt">
              <h3>Odvoz zařídíme</h3>
              <p>
                Nemáte dodávku? Domluvíme autodopravu s hydraulickou rukou do 6
                i do 12 tun — naloží a složí přímo u vás na stavbě.
              </p>
            </div>
            <div className="sc-fakt">
              <h3>Firma s historií</h3>
              <p>
                Na trhu od roku 2007. IČ 27732690, zapsáno u Krajského soudu
                v Brně, sp. zn. C 55359.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
