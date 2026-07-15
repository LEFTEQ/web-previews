import type { ReactNode } from "react";

function Claw({ className, id }: { className?: string; id?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M8 56 C 30 40, 40 21, 50 4" strokeWidth="7" strokeLinecap="round" />
      <path d="M42 56 C 64 40, 74 21, 84 4" strokeWidth="7" strokeLinecap="round" />
      <path d="M76 56 C 98 40, 108 21, 118 4" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="divider" role="presentation">
      <Claw className="divider__claw wipe-x" />
      <span className="divider__rule wipe-x" />
      <span className="divider__tag">{label}</span>
    </div>
  );
}

function Card({
  index,
  title,
  body,
  action,
}: {
  index: string;
  title: string;
  body: string;
  action: string;
}) {
  return (
    <article className="card">
      <span className="card__idx">{index}</span>
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{body}</p>
      <span className="card__link">
        {action}
        <Claw className="card__claw" />
      </span>
    </article>
  );
}

function Tally({
  num,
  label,
  years,
  delay,
}: {
  num: string;
  label: string;
  years: string;
  delay: string;
}): ReactNode {
  return (
    <div className="tally">
      <span className="tally__num flip" style={{ animationDelay: delay }}>
        {num}
        <span className="tally__x">×</span>
      </span>
      <div className="tally__text">
        <b>{label}</b>
        <span>{years}</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <a className="skip" href="#nabidka">
        Přeskočit na nabídku
      </a>

      <header className="topbar" id="top">
        <a className="brand" href="#top" aria-label="Bílí Tygři Liberec – domů">
          <Claw className="brand__claw" />
          <span className="brand__name">
            Bílí Tygři<em>Liberec</em>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Zápasy</a>
          <a href="#nabidka">Permanentky</a>
          <a href="#nabidka">Fanshop</a>
          <a href="#tituly">Klub</a>
        </nav>
        <a className="btn btn--primary btn--sm" href="#nabidka">
          Permanentka
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__stripes" aria-hidden="true" />
          <Claw className="hero__mark" />
          <div className="hero__inner">
            <p className="hero__eyebrow rise" style={{ animationDelay: "80ms" }}>
              Hokejový klub · Home Credit Arena Liberec
            </p>
            <h1 className="hero__title" id="hero-title">
              <span className="hero__line rise" style={{ animationDelay: "180ms" }}>
                Bílí Tygři
              </span>
              <span
                className="hero__line hero__line--out rise"
                style={{ animationDelay: "300ms" }}
              >
                Liberec
              </span>
            </h1>
            <p className="hero__lead rise" style={{ animationDelay: "440ms" }}>
              Extraligový hokej pod Ještědem. Chyť si své místo na celou sezonu,
              nebo přijď na jeden zápas — všechny domácí bitvy hrajeme naživo
              v Home Credit Areně.
            </p>
            <div className="hero__cta rise" style={{ animationDelay: "560ms" }}>
              <a className="btn btn--primary" href="#nabidka">
                Koupit permanentku
              </a>
              <a className="btn btn--ghost" href="#nabidka">
                Program zápasů
              </a>
            </div>
            <dl className="hero__facts rise" style={{ animationDelay: "680ms" }}>
              <div>
                <dt>Kapacita arény</dt>
                <dd>7 500 diváků</dd>
              </div>
              <div>
                <dt>Domácí zápasy základní části</dt>
                <dd>26 večerů</dd>
              </div>
              <div>
                <dt>V nejvyšší soutěži</dt>
                <dd>od roku 2002</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="band band--offer" id="nabidka" aria-labelledby="offer-title">
          <Divider label="01 — Sezona 2025/26" />
          <div className="band__inner">
            <div className="band__head">
              <h2 className="band__title clip-wipe" id="offer-title">
                Přijď na zápas
              </h2>
              <p className="band__intro">
                Ať už chceš svoje sedadlo na celou sezonu, nebo jen jeden
                večer řevu v ochozech — máme pro tebe vstup.
              </p>
            </div>
            <div className="cards">
              <Card
                index="01"
                title="Permanentky"
                body="Tvoje místo na všech 26 domácích zápasů základní části. Jistota vstupu na play‑off a slevy u partnerů klubu."
                action="Vybrat permanentku"
              />
              <Card
                index="02"
                title="Vstupenky na zápas"
                body="Jednotlivé zápasy koupíš online během chvíle. Žádná fronta u pokladny, lístek rovnou do telefonu."
                action="Koupit vstupenku"
              />
              <Card
                index="03"
                title="Fanshop"
                body="Domácí i venkovní dresy, šály, čepice a tygří výbava pro každé počasí pod Ještědem."
                action="Do fanshopu"
              />
              <Card
                index="04"
                title="Tygří akademie"
                body="Hokejová průprava pro děti už od předškolního věku. První brusle i cesta k velkému hokeji."
                action="Přihlásit dítě"
              />
            </div>
          </div>
        </section>

        <section className="band band--titles" id="tituly" aria-labelledby="titles-title">
          <Divider label="02 — Proč Tygři" />
          <div className="band__inner">
            <div className="titles__grid">
              <div className="titles__lead">
                <h2 className="band__title clip-wipe" id="titles-title">
                  Tituly pod Ještědem
                </h2>
                <p className="band__intro">
                  Bílí Tygři hrají nejvyšší českou soutěž nepřetržitě od roku
                  2002. Domácí led v Home Credit Areně patří k nejhlučnějším
                  v celé Tipsport extralize — a trofeje to potvrzují.
                </p>
                <div className="tallies">
                  <Tally
                    num="1"
                    label="Mistr Tipsport extraligy"
                    years="2015/16"
                    delay="120ms"
                  />
                  <Tally
                    num="3"
                    label="Vicemistr extraligy"
                    years="2016/17 · 2018/19 · 2020/21"
                    delay="260ms"
                  />
                  <Tally
                    num="6"
                    label="Vítěz základní části"
                    years="2006 · 2007 · 2016 · 2017 · 2019 · 2020"
                    delay="400ms"
                  />
                </div>
              </div>
              <div className="quotes">
                <figure className="quote">
                  <blockquote>
                    „Permanentku si v Liberci beru už osm let. Sedím vždycky na
                    stejném místě pod kotlem a atmosféra na derby se nedá
                    popsat — musíš to zažít.“
                  </blockquote>
                  <figcaption>
                    <Claw className="quote__claw" />
                    Pavel H. — držitel permanentky, Vratislavice
                  </figcaption>
                </figure>
                <figure className="quote">
                  <blockquote>
                    „Vzali jsme kluka do Tygří akademie na první brusle.
                    Trenéři jsou lidi, co hokej žijí, a dětem to dávají
                    naplno.“
                  </blockquote>
                  <figcaption>
                    <Claw className="quote__claw" />
                    Lucie M. — maminka mladého hráče, Liberec
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
