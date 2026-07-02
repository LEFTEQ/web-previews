const ORDINACNI_HODINY = [
  { den: "Pondělí", cas: "7.30 – 18.00" },
  { den: "Úterý", cas: "7.30 – 18.00" },
  { den: "Středa", cas: "7.30 – 18.00" },
  { den: "Čtvrtek", cas: "7.30 – 16.00" },
  { den: "Pátek", cas: "7.30 – 14.00" },
];

const SLUZBY = [
  {
    kod: "D1",
    nazev: "Preventivní prohlídka",
    popis:
      "Dvakrát ročně, hradí pojišťovna. Zkontrolujeme zuby, dásně i starší výplně a rovnou domluvíme, co dál — bez čekání na další termín.",
    cas: "30 min",
  },
  {
    kod: "D2",
    nazev: "Dentální hygiena",
    popis:
      "Odstranění zubního kamene ultrazvukem, airflow pískování a nácvik čištění na vašich zubech, ne na modelu. Odcházíte s hladkými zuby a jasným plánem.",
    cas: "60 min",
  },
  {
    kod: "D3",
    nazev: "Ošetření kazu a výplně",
    popis:
      "Fotokompozitní výplně ve barvě vašeho zubu. Pracujeme s lupovými brýlemi a kofferdamem, takže výplň drží a nevidíte ji ani vy.",
    cas: "45 min",
  },
  {
    kod: "D4",
    nazev: "Korunky a můstky",
    popis:
      "Otisk skenujeme digitálně — žádná otiskovací hmota v puse. Celokeramické korunky vyrábí laboratoř tady v Hradci, obvykle do dvou týdnů.",
    cas: "2 návštěvy",
  },
  {
    kod: "D5",
    nazev: "Bolest a akutní ošetření",
    popis:
      "Bolí to teď? Volejte ráno mezi 7.30 a 8.00 — každý den držíme akutní okénka pro naše registrované pacienty.",
    cas: "tentýž den",
  },
];

const KROKY = [
  {
    krok: "První návštěva",
    text: "Vstupní vyšetření s rentgenem, mapa celého chrupu a plán ošetření s cenami černé na bílém. Nic nezačínáme, dokud nevíte, co a za kolik.",
  },
  {
    krok: "Ošetření",
    text: "Termíny plánujeme tak, aby na sebe navazovaly. Většinu běžné péče zvládneme do tří návštěv.",
  },
  {
    krok: "Recall",
    text: "Půl roku před další prohlídkou vám sami napíšeme SMS s termínem. Vy si jen potvrdíte čas.",
  },
];

export default function Page() {
  return (
    <main className="euc">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="EUC Klinika — zubní ordinace Hradec Králové">
        <div className="hero-top">
          <span className="wordmark">
            EUC<span className="wordmark-dot" aria-hidden="true" /> Klinika
          </span>
          <span className="hero-loc">Zubní ordinace · Hradec Králové</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Bříšská 300, u Fakultní nemocnice</p>
          <h1 className="hero-h1">
            <span className="hero-line hero-line-1">Zuby v pořádku.</span>
            <span className="hero-line hero-line-2">
              A vy to <em>víte</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Prevence, hygiena i akutní bolest na jednom místě. Objednáte se
            telefonem, termín potvrdíme do druhého dne. Bereme pacienty všech
            zdravotních pojišťoven.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+495123456">
              Zavolat 495 123 456
            </a>
            <a className="btn btn-ghost" href="mailto:zubni.hradec@eucklinika.cz">
              Napsat e-mail
            </a>
          </div>

          <p className="hero-acute">
            <strong>Akutní bolest?</strong> Volejte každý všední den 7.30–8.00,
            akutní okénka držíme denně.
          </p>
        </div>

        {/* Signature: "zubní kříž" — kvadrantový diagram chrupu, jak ho zná každá karta pacienta */}
        <div className="dental-chart" aria-hidden="true">
          <div className="dc-axis dc-axis-h" />
          <div className="dc-axis dc-axis-v" />
          <div className="dc-quadrant dc-q1">
            <span className="dc-num">18</span><span className="dc-num">17</span><span className="dc-num">16</span><span className="dc-num">15</span><span className="dc-num">14</span><span className="dc-num">13</span><span className="dc-num">12</span><span className="dc-num">11</span>
          </div>
          <div className="dc-quadrant dc-q2">
            <span className="dc-num">21</span><span className="dc-num">22</span><span className="dc-num">23</span><span className="dc-num">24</span><span className="dc-num">25</span><span className="dc-num">26</span><span className="dc-num">27</span><span className="dc-num">28</span>
          </div>
          <div className="dc-quadrant dc-q3">
            <span className="dc-num">48</span><span className="dc-num">47</span><span className="dc-num">46</span><span className="dc-num">45</span><span className="dc-num">44</span><span className="dc-num">43</span><span className="dc-num">42</span><span className="dc-num">41</span>
          </div>
          <div className="dc-quadrant dc-q4">
            <span className="dc-num">31</span><span className="dc-num">32</span><span className="dc-num">33</span><span className="dc-num">34</span><span className="dc-num">35</span><span className="dc-num">36</span><span className="dc-num">37</span><span className="dc-num">38</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás ošetříme</h2>
          <p className="section-lead">
            Pět věcí, se kterými k nám lidé chodí nejčastěji. Ceny hrazené
            pojišťovnou i nadstandard vám řekneme předem — na vstupním vyšetření
            dostanete plán ošetření písemně.
          </p>
        </div>

        <ul className="sluzby-list">
          {SLUZBY.map((s) => (
            <li key={s.kod} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="sluzba-text">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <span className="sluzba-cas">{s.cas}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / JAK TO U NÁS CHODÍ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-main">
            <h2 id="duvera-h">Jak to u nás chodí</h2>
            <p className="section-lead">
              Jsme součást sítě klinik EUC — za ordinací stojí zázemí největšího
              poskytovatele ambulantní péče v Česku. Pro vás to znamená: moderní
              vybavení, digitální rentgen s nízkou dávkou záření a lékaře, kteří
              mají čas vám věci vysvětlit.
            </p>

            <ol className="kroky">
              {KROKY.map((k, i) => (
                <li key={k.krok} className="krok">
                  <span className="krok-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{k.krok}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="reference">
              <p>
                „Po letech odkládání jsem se konečně objednala. Paní doktorka mi
                všechno ukázala na rentgenu a nikdo mě nestrašil. Tři návštěvy a
                mám hotovo.“
              </p>
              <footer>— Marie K., pacientka z Hradce Králové</footer>
            </blockquote>
          </div>

          <aside className="duvera-side" aria-label="Ordinační hodiny a praktické informace">
            <h3 className="side-title">Ordinační hodiny</h3>
            <table className="hodiny">
              <tbody>
                {ORDINACNI_HODINY.map((h) => (
                  <tr key={h.den}>
                    <th scope="row">{h.den}</th>
                    <td>{h.cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <dl className="fakta">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Bříšská 300, Hradec Králové — 5 minut pěšky od Fakultní nemocnice, parkování ve dvoře.</dd>
              </div>
              <div>
                <dt>Pojišťovny</dt>
                <dd>Smlouvy se všemi zdravotními pojišťovnami (111, 201, 205, 207, 211, 213).</dd>
              </div>
              <div>
                <dt>Objednání</dt>
                <dd>
                  <a href="tel:+495123456">495 123 456</a> nebo{" "}
                  <a href="mailto:zubni.hradec@eucklinika.cz">zubni.hradec@eucklinika.cz</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
