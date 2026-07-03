// FALK spol. s r.o. — zateplování, ploché střechy, okna a dveře, fasády — Plzeň
// Design: „Vrstvy pláště" — signature prvek odvozený ze skladby zateplené fasády/střechy
// (nosná konstrukce → izolace → hydroizolace → finální plášť). Vrstvený motiv nese hero
// i strukturu sekcí. Paleta: šedá ocel + izolační stříbrná + signální oranž pojistné fólie.

export default function Page() {
  return (
    <main className="falk">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-row">
            <span className="wordmark" aria-label="FALK">
              FALK<span className="wordmark-dot" aria-hidden="true" />
            </span>
            <span className="brand-note">stavební společnost · Plzeň · od 1991</span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Budovu obalíme</span>
            <span className="line l2">
              vrstvu <em>po</em> vrstvě.
            </span>
          </h1>

          <p className="hero-lead">
            Zateplené fasády, ploché střechy a hliníková okna pro bytové,
            administrativní i&nbsp;průmyslové budovy. Kompletní dodávka a&nbsp;montáž
            vlastními lidmi — projdeme s&nbsp;vámi skladbu, spočítáme úsporu
            a&nbsp;dílo předáme se&nbsp;zárukou, kterou držíme.
          </p>

          <ul className="hero-facts" aria-label="Fakta o firmě">
            <li><strong>33&nbsp;let</strong> na stavbách v&nbsp;Plzni a&nbsp;okolí</li>
            <li><strong>50</strong> vlastních řemeslníků a&nbsp;techniků</li>
            <li><strong>ISO&nbsp;9001</strong> a&nbsp;<strong>14001</strong> certifikace</li>
          </ul>
        </div>

        {/* Signature: řez skladbou zatepleného pláště — vrstvy s reálnými popisky */}
        <div className="skladba" role="img" aria-label="Schéma skladby zatepleného pláště budovy: nosná konstrukce, tepelná izolace, hydroizolace, finální plášť">
          <div className="vrstva v4"><span className="vrstva-label"><i>04</i> finální plášť — omítka / panel</span></div>
          <div className="vrstva v3"><span className="vrstva-label"><i>03</i> hydroizolace — fólie / asfalt</span></div>
          <div className="vrstva v2"><span className="vrstva-label"><i>02</i> tepelná izolace — EPS / minerální vata</span></div>
          <div className="vrstva v1"><span className="vrstva-label"><i>01</i> nosná konstrukce — zdivo / ocel</span></div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <span className="eyebrow">Tři vrstvy pláště, tři řemesla</span>
          <h2 id="sluzby-h">Co pro vaši budovu uděláme</h2>
        </div>

        <div className="sluzby-grid">
          <article className="sluzba">
            <div className="sluzba-marker sm-strecha" aria-hidden="true" />
            <h3>Ploché střechy</h3>
            <p>
              Fóliové i&nbsp;asfaltové střechy, skladby přitížené kamenivem,
              plechové krytiny a&nbsp;TR&nbsp;plechy. Doplníme záchytný systém pro
              bezpečnou údržbu a&nbsp;všechny klempířské prvky.
            </p>
            <ul className="sluzba-body">
              <li>fóliové a asfaltové hydroizolace</li>
              <li>střechy přitížené kamenivem</li>
              <li>záchytné systémy a klempířina</li>
            </ul>
          </article>

          <article className="sluzba">
            <div className="sluzba-marker sm-okno" aria-hidden="true" />
            <h3>Okna a dveře</h3>
            <p>
              Hliníkové systémy oken a&nbsp;dveří pro rodinné domy, průmyslové
              haly i&nbsp;administrativu. Pomůžeme vybrat profil, který vydrží
              provoz a&nbsp;dává ekonomický smysl.
            </p>
            <ul className="sluzba-body">
              <li>hliníková okna a vstupní dveře</li>
              <li>průmyslové vraty a portály</li>
              <li>návrh profilu podle provozu budovy</li>
            </ul>
          </article>

          <article className="sluzba">
            <div className="sluzba-marker sm-fasada" aria-hidden="true" />
            <h3>Fasády a opláštění</h3>
            <p>
              Zateplené obvodové pláště: sendvičové panely, skládané pláště,
              ocelové konstrukce i&nbsp;celoprosklené fasády. Montujeme podle
              norem, s&nbsp;kvalifikovanými pracovníky.
            </p>
            <ul className="sluzba-body">
              <li>sendvičové panely a skládané pláště</li>
              <li>prosklené fasády</li>
              <li>ocelové konstrukce</li>
            </ul>
          </article>
        </div>

        <p className="sluzby-pozn">
          Nejste si jistí skladbou? Přijedeme na stavbu, změříme a&nbsp;navrhneme
          řešení včetně rozpočtu — v&nbsp;Plzni obvykle do&nbsp;týdne.
        </p>
      </section>

      {/* ================= DŮVĚRA / O NÁS ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <span className="eyebrow eyebrow-invert">Od roku 1991 v Plzni</span>
            <h2 id="duvera-h">Firma, která u&nbsp;díla zůstane i&nbsp;po předání</h2>
            <p>
              FALK vznikl v&nbsp;roce 1991 jako stavební firma s&nbsp;úzkou
              specializací — ploché střechy, okna, dveře a&nbsp;fasádní opláštění.
              Nerozptylujeme se; tři řemesla děláme pořádně, s&nbsp;vlastními lidmi
              a&nbsp;vlastní technikou.
            </p>
            <p>
              Záruky u&nbsp;nás nejsou papír do&nbsp;šuplíku. Jsme finančně stabilní
              firma s&nbsp;padesáti zaměstnanci a&nbsp;obratem kolem 200&nbsp;milionů
              korun ročně — když se za&nbsp;deset let něco stane, budeme tu
              a&nbsp;přijedeme to opravit.
            </p>
          </div>

          <dl className="duvera-cisla">
            <div className="cislo">
              <dt>Založeno</dt>
              <dd>1991</dd>
            </div>
            <div className="cislo">
              <dt>Zaměstnanců</dt>
              <dd>≈ 50</dd>
            </div>
            <div className="cislo">
              <dt>Roční obrat</dt>
              <dd>200 mil. Kč</dd>
            </div>
            <div className="cislo">
              <dt>Certifikace</dt>
              <dd>ISO 9001 / 14001</dd>
            </div>
          </dl>
        </div>

        <div className="reference" aria-label="Reference">
          <h3 className="reference-h">Naposledy jsme obalili</h3>
          <ul className="reference-list">
            <li className="ref">
              <span className="ref-typ">Plochá střecha</span>
              <span className="ref-nazev">Bytový dům, Plzeň-Slovany</span>
              <span className="ref-detail">fóliová hydroizolace 1 400 m², záchytný systém</span>
            </li>
            <li className="ref">
              <span className="ref-typ">Fasáda</span>
              <span className="ref-nazev">Výrobní hala, Borská pole</span>
              <span className="ref-detail">sendvičové panely, ocelová konstrukce, vrata</span>
            </li>
            <li className="ref">
              <span className="ref-typ">Okna a dveře</span>
              <span className="ref-nazev">Administrativní budova, centrum Plzně</span>
              <span className="ref-detail">hliníkové systémy, 120 výplní, prosklený parter</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
