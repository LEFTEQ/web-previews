import type { CSSProperties } from "react";

export const metadata = {
  title: "Messenger — kurýrní služba v Praze, ještě týž den",
  description:
    "Kurýři Messenger v Praze doručí obálku, kytici i skříň. Vyzvednutí do 30 minut, doručení ještě dnes. Zavolejte nebo objednejte přepravu on-line.",
  openGraph: {
    title: "Messenger — kurýrní služba v Praze",
    description:
      "Po Praze doručíme klidně do 30 minut. Obálku, víno i skříň. 30 let na cestách.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Delivery = {
  time: string;
  label: string;
  item: string;
  route: string;
};

const dispatch: Delivery[] = [
  { time: "08:12", label: "vyzvednuto", item: "kytice pivoněk", route: "Vinohrady → Karlín" },
  { time: "08:41", label: "na cestě", item: "mobil ze servisu", route: "Smíchov → Dejvice" },
  { time: "09:03", label: "doručeno", item: "smlouva k podpisu", route: "Nové Město → Žižkov" },
  { time: "09:20", label: "vyzvednuto", item: "oběd z restaurace", route: "Vršovice → Pankrác" },
];

type Job = {
  no: string;
  title: string;
  body: string;
  cargo: string;
};

const jobs: Job[] = [
  {
    no: "01",
    title: "Rychle",
    body: "Vyplníte krátký formulář a kurýr vyráží. Po Praze doručujeme klidně do 30 minut od objednání, po Česku ještě týž den.",
    cargo: "obálka · balík · dokument",
  },
  {
    no: "02",
    title: "Bezpečně",
    body: "Křehké věci vozíme denně — kytice i láhve vína střežíme jako oko v hlavě. Nemusíte nic speciálně balit, vezmeme to klidně v igelitce.",
    cargo: "víno · kytice · sklo",
  },
  {
    no: "03",
    title: "Vstřícně",
    body: "Uděláme to, do čeho se jiným dopravcům nechce. Vyzvedneme mobil ze servisu, oběd z restaurace i deštník zapomenutý v kavárně.",
    cargo: "cokoliv, kdykoliv",
  },
  {
    no: "04",
    title: "Spolehlivě",
    body: "Čas, který u objednávky slíbíme, splníme. Za 30 let jsme si u desetitisíc zákazníků vybudovali pověst kurýrů, na které je spoleh.",
    cargo: "skříň · nábytek · paleta",
  },
];

type Zone = { name: string; note: string };

const zones: Zone[] = [
  { name: "Po Praze", note: "do 30 minut od objednání" },
  { name: "Meziměstsky", note: "Brno, Bratislava a dál — týž den" },
  { name: "Po celé EU", note: "zahraniční přeprava na míru" },
  { name: "Pro firmy", note: "pravidelné i hromadné rozvozy" },
];

export default function Page() {
  return (
    <main className="ms">
      <header className="ms-top">
        <a className="ms-mark" href="#" aria-label="Messenger, kurýrní služba">
          <span className="ms-mark-arrow" aria-hidden="true">→</span>
          <span className="ms-mark-word">Messenger</span>
        </a>
        <nav className="ms-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="ms-nav-call" href="tel:+420800100200">800 100 200</a>
        </nav>
      </header>

      <section className="ms-hero" aria-labelledby="hero-title">
        <div className="ms-hero-copy">
          <p className="ms-eyebrow">Kurýři v Praze · od roku 1994</p>
          <h1 id="hero-title">
            Bleskovou rychlostí přepravíme <em>obálku</em>, <em>víno</em> i <em>skříň</em>.
          </h1>
          <p className="ms-lede">
            Cokoliv, kdykoliv, kamkoliv — a ještě spolehlivě. Po Praze doručujeme
            klidně do 30 minut, po Česku ještě týž den.
          </p>
          <div className="ms-hero-cta">
            <a className="ms-btn" href="tel:+420800100200">
              Zavolat kurýra
            </a>
            <a className="ms-btn ms-btn-ghost" href="mailto:preprava@messenger.example?subject=Objednávka%20přepravy">
              Objednat e-mailem
            </a>
          </div>
          <p className="ms-hero-hint">Vyzvednutí do 30 minut · platba on-line i v hotovosti</p>
        </div>

        <div className="ms-hero-media">
          <img
            src="/hero.webp"
            alt="Kurýr Messenger na cestě ulicemi Prahy se zásilkou"
            className="ms-hero-img"
            width={880}
            height={720}
          />
          <div className="ms-ticket" aria-hidden="true">
            <span className="ms-ticket-no">№ 47 291</span>
            <span className="ms-ticket-line">Praha → Praha</span>
            <span className="ms-ticket-eta">ETA 24 min</span>
          </div>
        </div>
      </section>

      <section className="ms-live" aria-label="Dnešní rozvoz">
        <div className="ms-live-head">
          <span className="ms-live-dot" aria-hidden="true" />
          <span>Dnes na cestách</span>
        </div>
        <ul className="ms-live-list">
          {dispatch.map((d) => (
            <li key={d.time} className="ms-live-row">
              <span className="ms-live-time">{d.time}</span>
              <span className={`ms-live-tag ms-tag-${d.label.replace(/\s/g, "")}`}>{d.label}</span>
              <span className="ms-live-item">{d.item}</span>
              <span className="ms-live-route">{d.route}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="sluzby" className="ms-jobs" aria-labelledby="jobs-title">
        <div className="ms-section-head">
          <p className="ms-eyebrow">Jak to děláme</p>
          <h2 id="jobs-title">Zbavíme vás starostí s posíláním zásilek</h2>
        </div>
        <ol className="ms-job-grid">
          {jobs.map((j) => (
            <li key={j.no} className="ms-job">
              <span className="ms-job-no" aria-hidden="true">{j.no}</span>
              <h3>{j.title}</h3>
              <p>{j.body}</p>
              <span className="ms-job-cargo">{j.cargo}</span>
            </li>
          ))}
        </ol>

        <div className="ms-zones">
          <img
            src="/section-1.webp"
            alt="Kurýr Messenger předává zásilku před domem v centru Prahy"
            className="ms-zones-img"
            width={720}
            height={560}
          />
          <ul className="ms-zone-list">
            {zones.map((z) => (
              <li key={z.name} className="ms-zone">
                <span className="ms-zone-name">{z.name}</span>
                <span className="ms-zone-note">{z.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="duvera" className="ms-trust" aria-labelledby="trust-title">
        <div className="ms-trust-media">
          <img
            src="/section-2.webp"
            alt="Detail kurýrní brašny Messenger připravené k výjezdu"
            className="ms-trust-img"
            width={720}
            height={640}
          />
        </div>
        <div className="ms-trust-copy">
          <p className="ms-eyebrow">Důvěra na kilometry</p>
          <h2 id="trust-title">30 let na pražských ulicích, desetitisíce zásilek doručených včas</h2>
          <figure className="ms-quote">
            <blockquote>
              „Štěstí je důvěra v lidi a my vám věříme — protože cokoliv, kdykoliv,
              kamkoliv a ještě spolehlivě. To jsou slova, která vás vystihují.“
            </blockquote>
            <figcaption>
              <strong>Lucie Vacková</strong>
              <span>Komerční banka, a. s.</span>
            </figcaption>
          </figure>
          <div className="ms-stats">
            <div className="ms-stat">
              <span className="ms-stat-num">30 min</span>
              <span className="ms-stat-lab">běžné doručení po Praze</span>
            </div>
            <div className="ms-stat">
              <span className="ms-stat-num">1994</span>
              <span className="ms-stat-lab">rok, kdy jsme vyjeli poprvé</span>
            </div>
            <div className="ms-stat">
              <span className="ms-stat-num">10 000+</span>
              <span className="ms-stat-lab">zákazníků, kteří se vrací</span>
            </div>
          </div>
          <a className="ms-btn" href="tel:+420800100200">Zavolat kurýra</a>
        </div>
      </section>
    </main>
  );
}
