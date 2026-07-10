import type { CSSProperties } from "react";

export const metadata = {
  title: "VSK Profi — vzduchotechnika a pneumatika Plzeň",
  description:
    "VSK Profi, s.r.o. — pneumatické prvky SMC, úprava stlačeného vzduchu a kompresory. Největší sklad na západě Čech, přes 500 produktů ihned k odběru. Plzeň.",
  openGraph: {
    title: "VSK Profi — vzduchotechnika a pneumatika Plzeň",
    description:
      "Pneumatika SMC, úprava vzduchu a kompresory. Přes 500 položek skladem v Plzni, technická podpora do 24 hodin.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Node = {
  id: string;
  psi: string;
  title: string;
  lead: string;
  items: string[];
};

const LINE: Node[] = [
  {
    id: "01",
    psi: "6–10 bar",
    title: "Stlačený vzduch",
    lead: "Kompresory ABAC, SCR a Black Wind. Pístové i šroubové, s monitorováním tlaku a náhradními díly skladem.",
    items: [
      "Pístové a šroubové kompresory",
      "Tlakové nádoby a rozvody",
      "Oleje, filtry a servisní díly",
    ],
  },
  {
    id: "02",
    psi: "třída 1",
    title: "Úprava vzduchu",
    lead: "Aby se vlhkost a olej nedostaly dál do stroje. Sušičky, filtry, odlučovače a odpouštěče kondenzátu.",
    items: [
      "Sušičky a cyklónové odlučovače",
      "Úpravné jednotky a regulátory tlaku",
      "Odpouštěče kondenzátu, olejovače",
    ],
  },
  {
    id: "03",
    psi: "500+ ks",
    title: "Pneumatika SMC",
    lead: "Konec cesty: válce, ventily a vakuová technika značky SMC. Přes 500 položek k okamžitému odběru z plzeňského skladu.",
    items: [
      "Pneumatické válce a lineární pohony",
      "Ventily a ventilové bloky",
      "Vakuové prvky, přísavky, ejektory",
    ],
  },
];

const PROOF: { num: string; label: string }[] = [
  { num: "500+", label: "produktů ihned k odběru" },
  { num: "2006", label: "na trhu od roku" },
  { num: "do 24 h", label: "odezva technické podpory" },
  { num: "3", label: "telefonní linky pro objednávky" },
];

const CONTACTS: { role: string; tel: string; href: string }[] = [
  { role: "Profilové systémy", tel: "+420 377 152 229", href: "tel:+420377152229" },
  { role: "Technická podpora", tel: "+420 377 152 222", href: "tel:+420377152222" },
  { role: "Evidence objednávek", tel: "+420 377 152 221", href: "tel:+420377152221" },
];

export default function Page() {
  return (
    <main className="vsk">
      <header className="vsk-top">
        <a className="vsk-brand" href="#" aria-label="VSK Profi — úvodní strana">
          <span className="vsk-brand-mark" aria-hidden="true">
            <span className="vsk-gauge" />
          </span>
          <span className="vsk-brand-word">
            VSK<span className="vsk-brand-thin">Profi</span>
          </span>
        </a>
        <p className="vsk-loc">Plzeň · západ Čech</p>
      </header>

      <section className="vsk-hero" aria-labelledby="hero-h">
        <div className="vsk-hero-copy">
          <p className="vsk-eyebrow">Vzduchotechnika &amp; pneumatika · SMC</p>
          <h1 id="hero-h">
            Stlačený vzduch,
            <br />
            <span className="vsk-hero-accent">který drží tlak.</span>
          </h1>
          <p className="vsk-hero-lead">
            Od kompresoru přes sušičku až po poslední ventil ve stroji. VSK Profi
            skládá celou vzduchovou trasu z dílů, které máme v Plzni skladem —
            a poradí vám, čím ji spojit.
          </p>
          <div className="vsk-hero-cta">
            <a className="vsk-btn" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <a className="vsk-btn vsk-btn-ghost" href="tel:+420377152222">
              Zavolat technikovi
            </a>
          </div>
        </div>
        <figure className="vsk-hero-fig">
          <img
            src="/hero.webp"
            alt="Pneumatické prvky a rozvody stlačeného vzduchu ze skladu VSK Profi"
            className="vsk-hero-img"
            width={1200}
            height={900}
          />
          <figcaption className="vsk-hero-tag">
            <span className="vsk-dot" aria-hidden="true" /> Sklad Plzeň · 500+ položek
          </figcaption>
        </figure>
      </section>

      <section className="vsk-proof" aria-label="Čísla o firmě">
        {PROOF.map((p) => (
          <div className="vsk-proof-cell" key={p.label}>
            <span className="vsk-proof-num">{p.num}</span>
            <span className="vsk-proof-label">{p.label}</span>
          </div>
        ))}
      </section>

      <section className="vsk-line" id="sortiment" aria-labelledby="line-h">
        <div className="vsk-line-head">
          <p className="vsk-eyebrow vsk-eyebrow-dark">Trasa vzduchu · tři úseky</p>
          <h2 id="line-h">
            Sledujeme vzduch od výtlaku kompresoru až do stroje.
          </h2>
          <p className="vsk-line-sub">
            Není to katalog náhodných krabic. Sortiment čteme jako potrubí —
            v každém úseku dodáme díl i to, co ho spojí s dalším.
          </p>
        </div>

        <ol className="vsk-nodes">
          {LINE.map((n) => (
            <li className="vsk-node" key={n.id}>
              <div className="vsk-node-meta">
                <span className="vsk-node-id">{n.id}</span>
                <span className="vsk-node-psi">{n.psi}</span>
              </div>
              <h3 className="vsk-node-title">{n.title}</h3>
              <p className="vsk-node-lead">{n.lead}</p>
              <ul className="vsk-node-items">
                {n.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="vsk-trust" aria-labelledby="trust-h">
        <figure className="vsk-trust-fig">
          <img
            src="/section-1.webp"
            alt="Regály plzeňského skladu VSK Profi s pneumatickými prvky a šroubením"
            className="vsk-trust-img"
            width={900}
            height={1100}
          />
        </figure>
        <div className="vsk-trust-copy">
          <p className="vsk-eyebrow vsk-eyebrow-dark">O firmě · od roku 2006</p>
          <h2 id="trust-h">
            Největší sklad pneumatiky na západě Čech — na dosah, ne na objednávku.
          </h2>
          <p>
            VSK Profi zásobuje plzeňské výrobní haly, servisy i řemeslníky od roku
            2006. Držíme přes pět set položek fyzicky skladem, takže standardní
            díl neputuje týden z centrálního skladu — vyzvednete si ho, nebo
            vyrazí ještě týž den.
          </p>
          <div className="vsk-trust-strip">
            <img
              src="/section-2.webp"
              alt="Detail nástrčného šroubení a hadic z nabídky VSK Profi"
              className="vsk-trust-strip-img"
              width={600}
              height={360}
            />
            <p className="vsk-trust-quote">
              „Přijedu s rozbitým válcem, odjedu s tím, co sedne. To u velkých
              e-shopů nedostanu.“
              <span className="vsk-trust-quote-src">— provozní údržbář, Plzeň-Skvrňany</span>
            </p>
          </div>

          <div className="vsk-contacts">
            <p className="vsk-contacts-head">Rychlý kontakt na člověka, ne na formulář:</p>
            <ul>
              {CONTACTS.map((c) => (
                <li key={c.role}>
                  <span className="vsk-contacts-role">{c.role}</span>
                  <a href={c.href} className="vsk-contacts-tel">
                    {c.tel}
                  </a>
                </li>
              ))}
            </ul>
            <a className="vsk-mail" href="mailto:info@vskprofi.cz">
              info@vskprofi.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
