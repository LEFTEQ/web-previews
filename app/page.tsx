import type { CSSProperties } from "react";

const ECG =
  "M0 24 H66 L76 24 L86 24 L93 6 L102 42 L111 14 L118 24 L150 24 L159 18 L167 31 L173 24 H240";

function Pulse({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 48"
      preserveAspectRatio="none"
      role="img"
      aria-label="Křivka tepu"
    >
      <path className="pulse-base" d={ECG} pathLength={1} />
      <path className="pulse-line" d={ECG} pathLength={1} />
    </svg>
  );
}

const serviceGroups = [
  {
    label: "Diagnostika",
    note: "Vidíme, co bolí — hned u nás na pracovišti",
    items: [
      { t: "Ultrasonografie", d: "Zobrazení orgánů a měkkých tkání ultrazvukem." },
      { t: "RTG přímo u nás", d: "Rentgen na klinice, bez převozu vašeho mazlíčka jinam." },
      { t: "Endoskopické vyšetření", d: "Šetrný pohled dovnitř bez rozsáhlé operace." },
      { t: "Kardiologické vyšetření", d: "Kompletní vyšetření srdce a krevního oběhu." },
      { t: "Progesteron do 10 minut", d: "Z odběru na místě, včetně T4, TSH a cortisolu." },
    ],
  },
  {
    label: "Zákroky a léčba",
    note: "Od plánované operace po pooperační péči",
    items: [
      { t: "Chirurgické zákroky", d: "Standardní i specializované operace a následná péče." },
      { t: "Interní medicína", d: "Diagnostika onemocnění a jejich cílená léčba." },
      { t: "Rehabilitace", d: "Návrat do pohybu a rychlejší zotavení po zákroku." },
    ],
  },
  {
    label: "Komu se věnujeme",
    note: "Psům, kočkám i těm netradičním",
    items: [
      { t: "Non-stop pohotovost", d: "Pá–Ne nonstop, Po–Čt do 23:00. Ošetříme kdykoli." },
      { t: "Exotická zvířata", d: "Péči o exoty vede MVDr. Kateřina Bohatá." },
      { t: "Psi a kočky", d: "Od prvního štěněte po ohleduplnou seniorní péči." },
    ],
  },
];

const reviews = [
  {
    quote: "Vždy si udělá čas",
    text: "Za posledních 8 let nám společně prošlo rukama přes 800 psů a koček a jen díky těmto doktorům dostali druhou šanci na nový život.",
    author: "Lucie Nollová",
    role: "předsedkyně spolku Tlapky na cestě z.s.",
  },
  {
    quote: "Vřele doporučuji",
    text: "Chodíme sem od štěňátka a je to jedna z nejlepších veterinárních ordinací v Brně a širokém okolí. Pan Hladík je kapacita a je vidět, že rozumí tomu, co dělá.",
    author: "Petra Kolísková",
    role: "majitelka psa, Brno",
  },
  {
    quote: "Obětavost a péče",
    text: "Děkuji MVDr. Lutovské, MVDr. Michalu Hladíkovi a MVDr. Slavomíru Hladíkovi za péči, kterou věnují našim pejskům. Jste k dispozici, kdykoli vás potřebujeme.",
    author: "Šárka Klinerová",
    role: "stálá klientka",
  },
];

const clinics = [
  {
    name: "Oblá",
    part: "Nový Lískovec",
    address: "Oblá 75a, Brno",
    phone: "+420 547 241 113",
    tel: "+420547241113",
    hours: [
      ["Po–Čt", "9–13 · 14–19"],
      ["Pátek", "9–13 · 14–18"],
      ["Sobota", "9–12"],
    ],
    extra: "Instagram @veterinarniklinika_obla",
  },
  {
    name: "Zvěřinova",
    part: "Černovice",
    address: "Zvěřinova 23, Brno",
    phone: "+420 739 376 293",
    tel: "+420739376293",
    hours: [
      ["Po–Pá", "9–12 · 14–18"],
      ["Sobota", "přesunuto na Oblou"],
    ],
    extra: "Druhá ordinace týmu Hladík v Brně",
  },
];

export default function Page() {
  return (
    <main className="vh">
      <header className="vh-topbar">
        <a className="vh-mark" href="#" aria-label="Veterina Hladík, úvod">
          <span className="vh-mark-name">Veterina</span>
          <Pulse className="vh-mark-pulse" />
          <span className="vh-mark-strong">Hladík</span>
        </a>
        <a className="vh-emg" href="tel:+420777679000">
          <span className="vh-emg-dot" aria-hidden="true" />
          <span className="vh-emg-label">Pohotovost non-stop</span>
          <span className="vh-emg-num">+420 777 679 000</span>
        </a>
      </header>

      <section className="vh-hero" aria-labelledby="hero-title">
        <div className="vh-hero-text">
          <p className="vh-eyebrow vh-in" style={d(0)}>
            Veterinární ordinace · Brno
          </p>
          <h1 id="hero-title" className="vh-title vh-in" style={d(1)}>
            Když to nemůže počkat do rána, jsme u toho.
          </h1>
          <p className="vh-lede vh-in" style={d(2)}>
            Interní medicína, chirurgie a non-stop pohotovost pro psy, kočky
            i exoty. Dvě ordinace v Brně a tým, který u zvířat zůstává,
            dokud je potřeba.
          </p>
          <Pulse className="vh-hero-pulse vh-in" />
          <div className="vh-cta vh-in" style={d(3)}>
            <a className="vh-btn vh-btn-primary" href="tel:+420547241113">
              Objednat termín
            </a>
            <a className="vh-btn vh-btn-ghost" href="tel:+420777679000">
              Zavolat na pohotovost
            </a>
          </div>
          <ul className="vh-chips vh-in" style={d(4)}>
            <li>Dvě ordinace v Brně</li>
            <li>Non-stop o víkendu</li>
            <li>Psi · kočky · exoti</li>
          </ul>
        </div>
        <figure className="vh-hero-media vh-in" style={d(2)}>
          <img
            src="/hero.webp"
            alt="MVDr. Slavomír Hladík při vyšetření pejska v ordinaci"
            width={720}
            height={860}
            loading="eager"
          />
          <figcaption>Pá–Ne nonstop · Po–Čt do 23:00</figcaption>
        </figure>
      </section>

      <section className="vh-sec vh-services" aria-labelledby="sluzby-title">
        <div className="vh-sec-head">
          <div>
            <p className="vh-eyebrow vh-eyebrow-dark">Co u nás zvládneme</p>
            <h2 id="sluzby-title" className="vh-h2">
              Od preventivní prohlídky po noční operaci.
            </h2>
            <p className="vh-sec-lede">
              Diagnostiku i zákroky děláme pod jednou střechou — ultrazvuk,
              rentgen i odběry vyhodnotíme na místě, takže víme, jak dál,
              ještě než odejdete.
            </p>
          </div>
          <img
            className="vh-sec-img"
            src="/section-1.webp"
            alt="Vybavená veterinární ordinace během vyšetření zvířete"
            width={520}
            height={420}
            loading="lazy"
          />
        </div>

        <div className="vh-groups">
          {serviceGroups.map((g) => (
            <article className="vh-group" key={g.label}>
              <header className="vh-group-head">
                <h3>{g.label}</h3>
                <p>{g.note}</p>
              </header>
              <ul className="vh-group-list">
                {g.items.map((it) => (
                  <li key={it.t}>
                    <span className="vh-tick" aria-hidden="true" />
                    <div>
                      <strong>{it.t}</strong>
                      <span>{it.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="vh-sec vh-trust" aria-labelledby="duvera-title">
        <div className="vh-sec-head">
          <div>
            <p className="vh-eyebrow vh-eyebrow-dark">Proč nám lidé věří</p>
            <h2 id="duvera-title" className="vh-h2">
              Rodinný tým, který u vašich zvířat zůstává.
            </h2>
            <p className="vh-sec-lede">
              Ordinaci vede MVDr. Slavomír Hladík společně s MVDr. Michalem
              Hladíkem, MVDr. Lutovskou a kolegyněmi. Za osm let se u nás
              postaraly stovky psů a koček — mnozí z nich z útulků.
            </p>
          </div>
          <img
            className="vh-sec-img"
            src="/section-2.webp"
            alt="Veterinář z týmu Hladík se zvířecím pacientem"
            width={520}
            height={420}
            loading="lazy"
          />
        </div>

        <div className="vh-reviews">
          {reviews.map((r) => (
            <figure className="vh-review" key={r.author}>
              <blockquote>
                <span className="vh-review-q">„{r.quote}“</span>
                <p>{r.text}</p>
              </blockquote>
              <figcaption>
                <strong>{r.author}</strong>
                <span>{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="vh-clinics">
          {clinics.map((c) => (
            <article className="vh-clinic" key={c.name}>
              <header>
                <h3>
                  {c.name} <span>{c.part}</span>
                </h3>
                <p className="vh-clinic-addr">{c.address}</p>
              </header>
              <dl className="vh-clinic-hours">
                {c.hours.map(([d1, d2]) => (
                  <div key={d1}>
                    <dt>{d1}</dt>
                    <dd>{d2}</dd>
                  </div>
                ))}
              </dl>
              <p className="vh-clinic-extra">{c.extra}</p>
              <a className="vh-btn vh-btn-primary vh-btn-sm" href={`tel:${c.tel}`}>
                Objednat — {c.name}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function d(i: number): CSSProperties {
  return { animationDelay: `${0.08 * i + 0.05}s` };
}
