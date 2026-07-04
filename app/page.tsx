import React from "react";

export default function Page() {
  return (
    <main className="oj">
      {/* HERO */}
      <header className="oj-hero">
        <nav className="oj-nav" aria-label="Hlavní navigace">
          <a className="oj-brand" href="#top" id="top">
            <span className="oj-mark" aria-hidden="true">
              <span className="oj-eye" />
            </span>
            <span className="oj-brandtext">
              <span className="oj-brandname">Jiráková</span>
              <span className="oj-brandsub">oční ordinace · Pardubice</span>
            </span>
          </a>
          <ul className="oj-navlinks">
            <li><a href="#pece">Péče</a></li>
            <li><a href="#duvera">O ordinaci</a></li>
            <li><a className="oj-navcall" href="tel:+420466512156">466 512 156</a></li>
          </ul>
        </nav>

        <div className="oj-herogrid">
          <div className="oj-herotext">
            <p className="oj-eyebrow">Oftalmologie pro děti i dospělé</p>
            <h1 className="oj-h1">
              Vidět <em>ostře</em>
              <br />
              je otázka péče.
            </h1>
            <p className="oj-lede">
              MUDr. Katarína Jiráková a její tým vyšetří vaše oči
              v ordinaci v Rokycanově ulici v Pardubicích. Od prohlídky
              zorného pole až po aplikaci kontaktních čoček — klidně, důkladně,
              bez spěchu.
            </p>
            <div className="oj-herocta">
              <a className="oj-btn" href="tel:+420466512156">Objednat se telefonicky</a>
              <a className="oj-btn oj-btn--ghost" href="mailto:jirakovaocni@seznam.cz">
                Napsat e-mail
              </a>
            </div>
            <dl className="oj-herofacts">
              <div>
                <dt>Kde</dt>
                <dd>Rokycanova 2798, Pardubice</dd>
              </div>
              <div>
                <dt>Objednání</dt>
                <dd>telefonicky po celý den</dd>
              </div>
            </dl>
          </div>

          <figure className="oj-herofig">
            <img
              src="/hero.webp"
              alt="Vyšetření zraku v oční ordinaci — pacient u přístroje s testovací tabulí"
              className="oj-heroimg"
              width={1200}
              height={1400}
            />
            <figcaption className="oj-herocaption">
              <span className="oj-line">Ř</span>
              <span className="oj-line">F P</span>
              <span className="oj-line">T O Z</span>
              <span className="oj-line">L P E D</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — PÉČE / SLUŽBY */}
      <section className="oj-section" id="pece" aria-labelledby="pece-h">
        <div className="oj-sectionhead">
          <p className="oj-eyebrow">Co u nás vyšetříme</p>
          <h2 className="oj-h2" id="pece-h">
            Řádek po řádku, jako na testovací tabuli.
          </h2>
        </div>

        <ol className="oj-services">
          <li className="oj-service">
            <span className="oj-optotype" aria-hidden="true">A</span>
            <div>
              <h3>Oční vyšetření dětí i dospělých</h3>
              <p>
                Kontrola zraku, měření dioptrií, nitrooční tlak a vyšetření
                očního pozadí. Vhodné i pro nejmenší pacienty.
              </p>
            </div>
          </li>
          <li className="oj-service">
            <span className="oj-optotype" aria-hidden="true">C</span>
            <div>
              <h3>Aplikace kontaktních čoček</h3>
              <p>
                Vybereme vhodný typ čoček, naučíme vás je nasazovat i pečovat
                o ně a nastavíme pravidelné kontroly.
              </p>
            </div>
          </li>
          <li className="oj-service">
            <span className="oj-optotype" aria-hidden="true">O</span>
            <div>
              <h3>Vyšetření zorného pole (perimetr)</h3>
              <p>
                Perimetry provádíme ve čtvrtek odpoledne pro objednané pacienty —
                základ pro posudek na řidičský průkaz.
              </p>
            </div>
          </li>
          <li className="oj-service">
            <span className="oj-optotype" aria-hidden="true">H</span>
            <div>
              <h3>Posudek na řidičský průkaz</h3>
              <p>
                Nové žádosti, rozšíření i prodloužení. Objednávejte se přes sestru
                s doporučením praktického nebo dětského lékaře. Nejprve zorné pole,
                poté vyšetření a vystavení posudku.
              </p>
            </div>
          </li>
        </ol>

        <figure className="oj-sectionfig">
          <img
            src="/section-1.webp"
            alt="Detail vyšetřovacích přístrojů v oční ordinaci"
            width={1200}
            height={800}
          />
        </figure>

        <aside className="oj-hours" aria-label="Ordinační hodiny">
          <h3 className="oj-hourstitle">Ordinační hodiny</h3>
          <table className="oj-hourstable">
            <caption className="oj-visually-hidden">
              Přehled ordinačních hodin v jednotlivých dnech
            </caption>
            <tbody>
              <tr><th scope="row">Pondělí</th><td>7:00–15:00</td></tr>
              <tr><th scope="row">Úterý</th><td>7:00–15:00</td></tr>
              <tr>
                <th scope="row">Středa</th>
                <td>7:00–15:00 · 16:00–19:00 <span>jen objednaní</span></td>
              </tr>
              <tr>
                <th scope="row">Čtvrtek</th>
                <td>7:00–12:00 · 13:00–17:00 <span>perimetr, jen objednaní</span></td>
              </tr>
              <tr><th scope="row">Pátek</th><td>7:00–12:00</td></tr>
            </tbody>
          </table>
          <p className="oj-hoursnote">
            Akutní stavy ošetřujeme Po–St 7:00–11:00, Čt–Pá 7:00–10:00.
            Poslední pacient 30 minut před koncem ordinační doby.
          </p>
        </aside>
      </section>

      {/* SEKCE 2 — DŮVĚRA / O NÁS */}
      <section className="oj-section oj-section--trust" id="duvera" aria-labelledby="duvera-h">
        <div className="oj-trustgrid">
          <figure className="oj-trustfig">
            <img
              src="/section-2.webp"
              alt="Interiér oční ordinace MUDr. Kataríny Jirákové v Pardubicích"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="oj-trusttext">
            <p className="oj-eyebrow">O ordinaci</p>
            <h2 className="oj-h2" id="duvera-h">
              Malá ordinace, na kterou se v Pardubicích spoléhají celé rodiny.
            </h2>
            <p>
              Ordinaci vede MUDr. Katarína Jiráková spolu se sestrou
              Šárkou Michálkovou. O pacienty se dále starají MUDr. Miriam
              Koďousková, MUDr. Pavel Vyhnálek a MUDr. Daniela Zdražilová.
              Děkujeme všem, kdo nás podpořili v soutěži Ordinace roku —
              vážíme si toho.
            </p>

            <div className="oj-pills">
              <span className="oj-pilltitle">Máme smlouvu se všemi pojišťovnami</span>
              <ul>
                <li>VZP (111)</li>
                <li>ZP MV ČR (211)</li>
                <li>VoZP (201)</li>
                <li>OZP (207)</li>
                <li>ČPZP (205)</li>
              </ul>
            </div>

            <div className="oj-contactcard">
              <h3>Jak se k nám objednat</h3>
              <p>
                Volejte <a href="tel:+420466512156">466 512 156</a> nebo
                {" "}<a href="tel:+420464007603">464 007 603</a> po celý den,
                případně napište na{" "}
                <a href="mailto:jirakovaocni@seznam.cz">jirakovaocni@seznam.cz</a>.
              </p>
              <address className="oj-address">
                MUDr. Katarína Jiráková s.r.o.<br />
                Rokycanova 2798, 530 02 Pardubice
              </address>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
