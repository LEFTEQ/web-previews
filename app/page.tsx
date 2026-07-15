import { UnrollStrip } from "./motion";

type Range = {
  id: string;
  name: string;
  material: string;
  pile: string;
  sire: string;
  cena: string;
  note: string;
  band: string;
  ink: string;
};

const ranges: Range[] = [
  {
    id: "01",
    name: "Zátěžové koberce",
    material: "100% polyamid",
    pile: "Smyčkový vlas",
    sire: "400 cm",
    cena: "od 259 Kč/m²",
    note: "Do kanceláří, chodeb a provozoven. Zátěžová třída 33 — vydrží roky chození.",
    band: "#55636b",
    ink: "#ece3d3",
  },
  {
    id: "02",
    name: "Bytové koberce",
    material: "Polypropylen",
    pile: "Střižený vlas SAXONY",
    sire: "400 / 500 cm",
    cena: "od 189 Kč/m²",
    note: "Měkký vlas pod nohy do ložnice i obýváku. Nařežeme přesně na váš rozměr.",
    band: "#c5342b",
    ink: "#ece3d3",
  },
  {
    id: "03",
    name: "Vinylové podlahy",
    material: "SPC s rigidním jádrem",
    pile: "Zámek Click, 5 mm",
    sire: "lamela 18 cm",
    cena: "od 449 Kč/m²",
    note: "Dekor dřeva i kamene, odolné vlhkosti. Poklademe plovoucím spojem bez lepení.",
    band: "#6b3f22",
    ink: "#ece3d3",
  },
  {
    id: "04",
    name: "PVC a lino",
    material: "Heterogenní PVC",
    pile: "Nášlapná vrstva 0,3 mm",
    sire: "200 / 300 / 400 cm",
    cena: "od 159 Kč/m²",
    note: "Rychlé a levné řešení do kuchyně či dětského pokoje. Z role rovnou k vám.",
    band: "#b3925f",
    ink: "#2b2824",
  },
];

const trust = [
  { k: "63", v: "prodejen po celé ČR" },
  { k: "1994", v: "na trhu s podlahami" },
  { k: "400 cm", v: "nejčastější šíře role" },
  { k: "0 Kč", v: "parkování u prodejny" },
];

export default function Page() {
  return (
    <main className="kb">
      <header className="kb-topbar">
        <a className="kb-brand" href="#" aria-label="Koberce BRENO — úvod">
          <span className="kb-brand__mark" aria-hidden="true" />
          <span className="kb-brand__name">BRENO</span>
          <span className="kb-brand__sub">Koberce&nbsp;·&nbsp;Podlahy</span>
        </a>
        <a className="kb-topbar__phone" href="tel:+420601302178">
          <span>Poradna prodejny</span>
          <strong>601 302 178</strong>
        </a>
      </header>

      <section className="kb-hero" aria-labelledby="kb-hero-title">
        <p className="kb-hero__eyebrow">
          Podlahářství Pardubice · Poděbradská 296
        </p>
        <h1 id="kb-hero-title" className="kb-hero__title">
          <span>Podlaha</span>
          <span className="kb-hero__accent">od role</span>
          <span>po pokoj</span>
        </h1>
        <p className="kb-hero__lead">
          Metrážové koberce, vinyl i PVC vám na prodejně v Pardubicích
          nařežeme na centimetr přesně — a rádi pomůžeme i s pokládkou
          u vás doma.
        </p>
        <div className="kb-hero__actions">
          <a className="kb-btn kb-btn--solid" href="#katalog">Prohlédnout podlahy</a>
          <a className="kb-btn kb-btn--ghost" href="#prodejna">Najít prodejnu</a>
        </div>
        <div className="kb-hero__rolls" aria-hidden="true">
          {ranges.map((r) => (
            <span
              key={r.id}
              className="kb-hero__roll"
              style={{ background: r.band }}
            />
          ))}
        </div>
      </section>

      <section className="kb-section" id="katalog" aria-labelledby="kb-katalog-title">
        <div className="kb-head">
          <p className="kb-head__eyebrow">Vzorník z prodejny</p>
          <h2 className="kb-head__title" id="kb-katalog-title">
            Čtyři role, ze kterých vybíráte
          </h2>
          <p className="kb-head__note">
            Každý pás níže je střižená hrana skutečné role — štítek nalevo
            drží materiál, vlas, šíři a cenu za metr čtvereční, přesně jako
            cedulka na regálu.
          </p>
        </div>

        <div className="kb-rack">
          {ranges.map((r, i) => (
            <UnrollStrip key={r.id} index={i}>
              <div className="kb-plate">
                <div className="kb-plate__id">
                  <span className="kb-plate__num">{r.id}</span>
                  <span className="kb-plate__tag">VZOREK</span>
                </div>
                <dl className="kb-specs">
                  <div>
                    <dt>Materiál</dt>
                    <dd>{r.material}</dd>
                  </div>
                  <div>
                    <dt>Vlas / jádro</dt>
                    <dd>{r.pile}</dd>
                  </div>
                  <div>
                    <dt>Šíře</dt>
                    <dd>{r.sire}</dd>
                  </div>
                  <div>
                    <dt>Cena</dt>
                    <dd className="kb-specs__price">{r.cena}</dd>
                  </div>
                </dl>
              </div>
              <div
                className="kb-band"
                style={{ "--band": r.band, "--ink": r.ink } as React.CSSProperties}
              >
                <div className="kb-band__inner">
                  <h3 className="kb-band__name">{r.name}</h3>
                  <p className="kb-band__note">{r.note}</p>
                </div>
              </div>
            </UnrollStrip>
          ))}
        </div>
      </section>

      <section className="kb-section kb-section--dark" id="prodejna" aria-labelledby="kb-prodejna-title">
        <div className="kb-head">
          <p className="kb-head__eyebrow">Kde nás najdete</p>
          <h2 className="kb-head__title" id="kb-prodejna-title">
            Prodejna Pardubice
          </h2>
        </div>

        <div className="kb-store">
          <div className="kb-store__card">
            <p className="kb-store__label">Adresa</p>
            <p className="kb-store__addr">
              Poděbradská 296<br />530 09 Pardubice
            </p>
            <p className="kb-store__hint">
              Vedle hypermarketu Albert v areálu Baumax. Autobusy 3, 7 a 11
              zastavují v zastávce Poděbradská. Parkování u prodejny zajištěno.
            </p>
            <div className="kb-store__contacts">
              <a href="tel:+420601302178">601 302 178</a>
              <a href="mailto:pardubice@breno.cz">pardubice@breno.cz</a>
            </div>
          </div>

          <div className="kb-store__hours">
            <p className="kb-store__label">Otevírací doba</p>
            <dl className="kb-hours">
              <div>
                <dt>Pondělí–pátek</dt>
                <dd>9:00–19:00</dd>
              </div>
              <div>
                <dt>Sobota a neděle</dt>
                <dd>9:00–18:00</dd>
              </div>
            </dl>
            <p className="kb-store__open">Otevřeno 7 dní v týdnu</p>
          </div>
        </div>

        <ul className="kb-trust">
          {trust.map((t) => (
            <li key={t.v} className="kb-trust__item">
              <span className="kb-trust__k">{t.k}</span>
              <span className="kb-trust__v">{t.v}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
