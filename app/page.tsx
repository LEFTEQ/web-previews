export const metadata = {
  title: "V klášteře — kavárna v Ústí nad Labem",
  description:
    "Kavárna V klášteře v Ústí nad Labem. Výběrová káva, domácí koláče a klid klášterních zdí. Otevřeno každý den, pár kroků od centra.",
  openGraph: {
    title: "V klášteře — kavárna v Ústí nad Labem",
    description:
      "Výběrová káva, domácí koláče a klid klášterních zdí v Ústí nad Labem.",
    type: "website",
    locale: "cs_CZ",
  },
};

const napoje = [
  { nazev: "Espresso", pozn: "výběrová zrna, aktuální pražení", cena: "55 Kč" },
  { nazev: "Flat white", pozn: "dvojité espresso, sametové mléko", cena: "75 Kč" },
  { nazev: "Filtrovaná káva", pozn: "V60 nebo batch, mění se každý týden", cena: "85 Kč" },
  { nazev: "Kakao z pravé čokolády", pozn: "hustší, než čekáte", cena: "70 Kč" },
  { nazev: "Domácí limonáda", pozn: "podle sezóny — bezinka, rebarbora, zázvor", cena: "65 Kč" },
];

const kDobru = [
  { nazev: "Koláč dne", pozn: "pečeme ráno, odpoledne už nebývá", cena: "65 Kč" },
  { nazev: "Mrkvový dort", pozn: "stálice, kterou nám nedovolíte vyřadit", cena: "85 Kč" },
  { nazev: "Croissant s máslem", pozn: "od pekaře z Ústí, dovoz každé ráno", cena: "55 Kč" },
];

export default function Page() {
  return (
    <main className="kl">
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="V klášteře — kavárna v Ústí nad Labem">
        <header className="hero-top">
          <span className="wordmark">
            V&nbsp;klášteře<span className="wordmark-dot">·</span>
            <span className="wordmark-sub">kavárna</span>
          </span>
          <span className="hero-loc">Ústí nad Labem</span>
        </header>

        <div className="hero-body">
          {/* Signature: klášterní klenba / arkáda vykreslená čistě CSS */}
          <div className="arches" aria-hidden="true">
            <span className="arch arch-1" />
            <span className="arch arch-2" />
            <span className="arch arch-3" />
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Ticho zdí,</span>
            <span className="hero-line hero-line-2">vůně kávy.</span>
          </h1>

          <p className="hero-lead">
            Kavárna ve starých klášterních prostorách kousek od centra Ústí.
            Pražíme si názor na dobrou kávu, pečeme koláče a necháváme vás
            v klidu sedět, jak dlouho chcete.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#menu">
              Co si dát
            </a>
            <a className="btn btn-ghost" href="#kavarna">
              Kde nás najdete
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>otevřeno denně</span>
          <span className="strip-sep">✦</span>
          <span>výběrová káva</span>
          <span className="strip-sep">✦</span>
          <span>domácí pečení</span>
          <span className="strip-sep">✦</span>
          <span>klášterní klid</span>
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section className="menu" id="menu" aria-labelledby="menu-h">
        <div className="menu-head">
          <p className="eyebrow">Lístek</p>
          <h2 id="menu-h">Krátký lístek, poctivé věci</h2>
          <p className="menu-intro">
            Nemáme dvacet druhů sirupů. Máme kávu, o které víme odkud je,
            a koláče, které ráno vytáhneme z trouby. To stačí.
          </p>
        </div>

        <div className="menu-cols">
          <div className="menu-col">
            <h3 className="menu-col-title">Z baru</h3>
            <ul className="menu-list">
              {napoje.map((p) => (
                <li key={p.nazev} className="menu-item">
                  <div className="menu-item-text">
                    <span className="menu-item-name">{p.nazev}</span>
                    <span className="menu-item-note">{p.pozn}</span>
                  </div>
                  <span className="menu-item-price">{p.cena}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-col">
            <h3 className="menu-col-title">Z trouby</h3>
            <ul className="menu-list">
              {kDobru.map((p) => (
                <li key={p.nazev} className="menu-item">
                  <div className="menu-item-text">
                    <span className="menu-item-name">{p.nazev}</span>
                    <span className="menu-item-note">{p.pozn}</span>
                  </div>
                  <span className="menu-item-price">{p.cena}</span>
                </li>
              ))}
            </ul>
            <p className="menu-note">
              Co je zrovna na pultu, píšeme každé ráno na tabuli u vchodu.
              Bezlepkovou variantu míváme, zeptejte se u baru.
            </p>
          </div>
        </div>
      </section>

      {/* ================= O KAVÁRNĚ ================= */}
      <section className="about" id="kavarna" aria-labelledby="about-h">
        <div className="about-inner">
          <div className="about-text">
            <p className="eyebrow eyebrow-light">Kavárna</p>
            <h2 id="about-h">Metr silné zdi a žádný spěch</h2>
            <p>
              Sedíte v prostorách bývalého kláštera — v létě je tu chládek,
              v zimě teplo od kamen a celý rok ticho, které v centru Ústí
              jinde nenajdete. Wi‑fi máme, ale nikdo vás nebude honit
              od stolu, i když si nad jednou kávou přečtete půlku knížky.
            </p>
            <p>
              Chodí k nám studenti s notebooky, maminky s kočárky i lidi,
              co si sem odskočí z práce na deset minut klidu. Pro všechny
              platí totéž: dobrá káva a nikam se nespěchá.
            </p>

            <ul className="about-refs">
              <li>
                <blockquote>
                  „Nejklidnější místo v Ústí. Flat white top a mrkvový dort
                  je povinnost.“
                </blockquote>
                <cite>— Markéta, chodí každou středu</cite>
              </li>
              <li>
                <blockquote>
                  „Konečně kavárna, kde se dá pracovat i jen tak koukat
                  do zdi. Té klášterní.“
                </blockquote>
                <cite>— Tomáš, štamgast od otevření</cite>
              </li>
            </ul>
          </div>

          <aside className="about-card" aria-label="Otevírací doba a kde nás najdete">
            <div className="card-arch" aria-hidden="true" />
            <h3>Kdy a kde</h3>
            <dl className="hours">
              <div className="hours-row">
                <dt>Po–Pá</dt>
                <dd>8.00–19.00</dd>
              </div>
              <div className="hours-row">
                <dt>So–Ne</dt>
                <dd>9.00–18.00</dd>
              </div>
            </dl>
            <p className="card-place">
              U bývalého kláštera, pět minut pěšky z Mírového náměstí,
              Ústí nad Labem. Kočárek i pes jsou vítáni.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
