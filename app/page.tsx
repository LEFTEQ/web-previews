const sluzby = [
  {
    kod: "DIAG",
    nazev: "Značková diagnostika",
    popis:
      "Připojíme vůz na diagnostiku Bosch a přečteme, co se v něm skutečně děje. Žádné hádání — konkrétní závada, konkrétní cena opravy předem.",
  },
  {
    kod: "MECH",
    nazev: "Kompletní opravy vozidel",
    popis:
      "Motor, brzdy, spojka, podvozek, elektrika. Opravíme jakoukoli značku a typ — od nefunkčního blinkru po výměnu celých agregátů.",
  },
  {
    kod: "PNEU",
    nazev: "Pneuservis a 3D geometrie",
    popis:
      "Přezutí, vyvážení, uskladnění. Geometrii měříme na 3D stanici — auto pak jede rovně a gumy nesjíždíte křivě.",
  },
  {
    kod: "KLIMA",
    nazev: "Servis klimatizace",
    popis:
      "Kontrola těsnosti, doplnění chladiva, dezinfekce. Aby vám v létě foukalo studeně a v zimě neběhala zamlžená skla.",
  },
  {
    kod: "LAK",
    nazev: "Lakovna a karosárna",
    popis:
      "Od odřeného nárazníku po opravu po nehodě. Lak namícháme přesně na kód barvy vašeho vozu.",
  },
  {
    kod: "OLEJ",
    nazev: "Oleje a náhradní díly",
    popis:
      "Montujeme díly od prověřených dodavatelů. Výměnu oleje a filtrů zapíšeme do servisní knížky — záruka výrobce zůstává.",
  },
];

const odtahKroky = [
  {
    cislo: "1",
    titulek: "Zavoláte",
    text: "+420 602 444 642. Řeknete, kde stojíte a co se stalo.",
  },
  {
    cislo: "2",
    titulek: "Přijedeme",
    text: "Moderním odtahovým vozem vás naložíme přímo na místě poruchy nebo nehody.",
  },
  {
    cislo: "3",
    titulek: "Odvezeme a opravíme",
    text: "K nám na Rokycanskou, nebo kam si budete přát. Půjčíme vám náhradní vůz, ať nezůstanete stát.",
  },
];

const oteviraci = [
  { den: "Pondělí", cas: "8:00 – 17:00" },
  { den: "Úterý", cas: "8:00 – 17:00" },
  { den: "Středa", cas: "8:00 – 17:00" },
  { den: "Čtvrtek", cas: "8:00 – 17:00" },
  { den: "Pátek", cas: "8:00 – 17:00" },
];

export default function Page() {
  return (
    <main className="zab">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-plate">ZÁBRAHA</span>
            <span className="wordmark-sub">Bosch Car Service · Plzeň</span>
          </div>
          <a className="hero-tel" href="tel:+420602444642">
            <span className="hero-tel-label">Odtahovka nonstop</span>
            <span className="hero-tel-num">602 444 642</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Autoservis a odtahová služba · Rokycanská 116, Plzeň-Doubravka</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Píchlá guma,</span>
            <span className="hero-title-line">rozsvícený motor,</span>
            <span className="hero-title-line hero-title-accent">nebo jen pravidelný servis.</span>
          </h1>
          <p className="hero-lead">
            Všechny značky, všechny opravy pod jednou střechou — od roku 1997.
            Diagnostika Bosch, vlastní lakovna, půjčíme vám náhradní auto.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602444642">
              Zavolat servis
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co všechno opravíme
            </a>
          </div>
        </div>

        {/* signature: servisní štítek */}
        <div className="hero-tag" role="note" aria-label="Provozní informace servisu">
          <span className="hero-tag-hole" aria-hidden="true" />
          <dl className="hero-tag-grid">
            <div>
              <dt>Provoz od</dt>
              <dd>1997</dd>
            </div>
            <div>
              <dt>Po–Pá</dt>
              <dd>8–17 h</dd>
            </div>
            <div>
              <dt>Odtah</dt>
              <dd>nonstop</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Zakázkový list</p>
          <h2 id="sluzby-h" className="section-title">
            Co u nás necháte spravit
          </h2>
          <p className="section-lead">
            Nejsme vybíraví — opravíme jakoukoli značku a typ vozidla. Cenu vám
            řekneme předem a bez oprav navíc, které jste neschválili.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.kod}>
              <span className="karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="sluzby-figure">
          <img
            src="/section-1.webp"
            alt="Mechanik při práci na zvednutém vozidle v dílně autoservisu Zábraha"
            className="figure-img"
          />
          <figcaption className="figure-cap">
            Dílna na Rokycanské — zvedáky, diagnostika Bosch a 3D geometrie pod
            jednou střechou.
          </figcaption>
        </figure>
      </section>

      {/* ================= ODTAH + DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-odtah">
          <div className="section-head section-head--light">
            <p className="section-eyebrow">Když zůstanete stát</p>
            <h2 id="duvera-h" className="section-title">
              Odtah řešíme na tři telefonáty méně, než čekáte
            </h2>
            <p className="section-lead">
              Stačí jeden — náš. Nehodu vyřídíme s pojišťovnou za vás: odtah,
              administrativa škodní události i kompletní oprava. Většina
              pojišťoven na trhu je náš smluvní partner.
            </p>
          </div>

          <ol className="kroky">
            {odtahKroky.map((k) => (
              <li className="krok" key={k.cislo}>
                <span className="krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <div>
                  <h3 className="krok-titulek">{k.titulek}</h3>
                  <p className="krok-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="duvera-onas">
          <figure className="onas-figure">
            <img
              src="/section-2.webp"
              alt="Budova autoservisu Tomáš Zábraha na Rokycanské třídě v Plzni"
              className="figure-img"
            />
          </figure>
          <div className="onas-text">
            <p className="section-eyebrow">O nás</p>
            <h3 className="onas-title">
              Rodinný servis na Rokycanské. Od roku 1997, ve vlastních prostorách
              od 2008.
            </h3>
            <p>
              Za tu dobu nám projely rukama tisíce aut — od škodovek přes
              dodávky po SUV. Jako Bosch Car Service pracujeme se stejným
              vybavením a postupy jako značkové servisy, jen bez značkových cen.
            </p>
            <p>
              Montujeme díly od prověřených dodavatelů, výměny zapisujeme do
              servisní knížky a k opravě po nehodě vám půjčíme náhradní vůz.
              Platit můžete hotově i kartou.
            </p>

            <div className="onas-kontakt">
              <div className="onas-blok">
                <h4 className="onas-blok-h">Kde nás najdete</h4>
                <p className="onas-adresa">
                  Rokycanská 1334/116
                  <br />
                  312 00 Plzeň – Doubravka
                </p>
                <p>
                  <a className="onas-link" href="tel:+420377329589">
                    377 329 589
                  </a>
                  <br />
                  <a className="onas-link" href="mailto:autozabraha@volny.cz">
                    autozabraha@volny.cz
                  </a>
                </p>
              </div>
              <div className="onas-blok">
                <h4 className="onas-blok-h">Otevírací doba</h4>
                <table className="doba">
                  <tbody>
                    {oteviraci.map((r) => (
                      <tr key={r.den}>
                        <th scope="row">{r.den}</th>
                        <td>{r.cas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
