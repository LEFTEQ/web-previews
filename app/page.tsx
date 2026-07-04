import type { CSSProperties } from "react";

export const metadata = {
  title: "Revize HK — elektrorevize a montáže, Hradec Králové",
  description:
    "Odborné revize elektrických zařízení, hromosvodů a rozvaděčů v Hradci Králové a okolí. Od roku 2000. Protokol, který obstojí u inspekce.",
};

type Service = {
  code: string;
  title: string;
  desc: string;
  detail: string;
};

const services: Service[] = [
  {
    code: "NN",
    title: "Revize nízkého napětí",
    desc: "Rozvaděče, instalace v halách, kanceláře i byty. Změříme izolační stavy, dotáhneme protokol tak, aby prošel u inspekce.",
    detail: "do 1000 V",
  },
  {
    code: "VN",
    title: "Revize vysokého napětí",
    desc: "Trafostanice a rozvodny pro průmyslové areály. Termín domluvíme na odstávku, ať výroba stojí co nejkratší dobu.",
    detail: "nad 1000 V",
  },
  {
    code: "Ex",
    title: "Prostředí s nebezpečím výbuchu",
    desc: "Provozy, kde jiskra znamená problém. Revize zařízení v zóně Ex podle platných norem, s jasným závěrem.",
    detail: "zóny Ex",
  },
  {
    code: "⌁",
    title: "Hromosvody a uzemnění",
    desc: "Zkontrolujeme jímací soustavu, svody i zemniče. Změříme přechodové odpory a řekneme rovnou, co opravit.",
    detail: "LPS",
  },
  {
    code: "⚙",
    title: "Elektromontáže a opravy",
    desc: "Nová instalace, přeložka rozvaděče, oprava po revizní závadě. Uděláme to a rovnou vystavíme výchozí revizi.",
    detail: "instalace",
  },
  {
    code: "50",
    title: "Školení dle vyhlášky 50",
    desc: "Vyškolíme vaše elektromontéry podle vyhlášky 50/1978 Sb. Prezenčně, s protokolem a osvědčením.",
    detail: "§ 50/1978",
  },
];

type Cred = { label: string; body: string };

const creds: Cred[] = [
  {
    label: "Technická inspekce ČR",
    body: "Osvědčení E1A i E1B k provádění revizí vyhrazených elektrických zařízení.",
  },
  {
    label: "Ministerstvo obrany",
    body: "Oprávnění k montážím, opravám a revizím určených elektrických zařízení ve vojenských objektech.",
  },
  {
    label: "Od roku 2000",
    body: "Navazujeme na QUICK TEAM s.r.o. Zúžili jsme portfolio na to, co umíme nejlíp — revize a montáže.",
  },
];

export default function Page() {
  return (
    <main className="rv">
      <header className="rv-top">
        <a className="rv-mark" href="#top" aria-label="Revize HK — úvod">
          <span className="rv-mark__r">R</span>
          <span className="rv-mark__word">EVIZE</span>
          <span className="rv-mark__hk">HK</span>
        </a>
        <div className="rv-top__meta">
          <span>Hradec Králové</span>
          <span className="rv-dot" aria-hidden="true">·</span>
          <span>Po–Pá 8–17</span>
        </div>
        <a className="rv-call" href="tel:+420732935539">
          Zavolat 732 935 539
        </a>
      </header>

      <section id="top" className="rv-hero" aria-labelledby="rv-hero-title">
        <div className="rv-hero__grid" aria-hidden="true">
          <div className="rv-phase rv-phase--l1">L1</div>
          <div className="rv-phase rv-phase--l2">L2</div>
          <div className="rv-phase rv-phase--l3">L3</div>
          <div className="rv-phase rv-phase--pen">PEN</div>
        </div>

        <div className="rv-hero__inner">
          <p className="rv-eyebrow">
            <span className="rv-eyebrow__pip" aria-hidden="true" />
            Revize elektrických zařízení · od roku 2000
          </p>
          <h1 id="rv-hero-title" className="rv-hero__title">
            <span className="rv-hero__line">Protokol, který</span>
            <span className="rv-hero__line rv-hero__line--em">obstojí</span>
            <span className="rv-hero__line">u inspekce.</span>
          </h1>
          <p className="rv-hero__lede">
            Odborné elektrorevize pro haly, rozvaděče, trafostanice i hromosvody
            v&nbsp;Hradci Králové a&nbsp;okolí. Přijedeme, změříme, a&nbsp;dostanete
            revizní zprávu, kterou nemusíte druhý den obhajovat.
          </p>
          <div className="rv-hero__cta">
            <a className="rv-btn" href="tel:+420732935539">
              Objednat revizi
            </a>
            <a className="rv-btn rv-btn--ghost" href="mailto:info@revizehk.cz">
              info@revizehk.cz
            </a>
          </div>
        </div>

        <ul className="rv-hero__strip" aria-label="Rozsah revizí">
          <li>nízké napětí</li>
          <li>vysoké napětí</li>
          <li>prostředí Ex</li>
          <li>stroje &amp; spotřebiče</li>
          <li>armádní objekty</li>
        </ul>
      </section>

      <section className="rv-sec" aria-labelledby="rv-svc-title">
        <div className="rv-sec__head">
          <p className="rv-kicker">Co pro vás uděláme</p>
          <h2 id="rv-svc-title">Šest věcí, na které máme razítko</h2>
          <p className="rv-sec__intro">
            Držíme se toho, co umíme nejlíp. Každou položku vám doložíme
            oprávněním i&nbsp;hotovým protokolem.
          </p>
        </div>

        <ul className="rv-cards">
          {services.map((s, i) => (
            <li
              className="rv-card"
              key={s.title}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="rv-card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="rv-card__title">{s.title}</h3>
              <p className="rv-card__desc">{s.desc}</p>
              <span className="rv-card__tag">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rv-trust" aria-labelledby="rv-trust-title">
        <div className="rv-trust__lead">
          <p className="rv-kicker rv-kicker--light">Proč nám lidé věří</p>
          <h2 id="rv-trust-title">
            Papíry v&nbsp;pořádku. <br />
            Termín, který platí.
          </h2>
          <p className="rv-trust__body">
            Revize HK, s.r.o. sídlí ve Vocelově ulici v&nbsp;Hradci Králové.
            Specializujeme se na průmyslové areály a&nbsp;velké rozvaděče —
            tam, kde musí revize sedět do puntíku a&nbsp;odstávka nesmí trvat
            déle, než je nutné.
          </p>
        </div>

        <dl className="rv-creds">
          {creds.map((c) => (
            <div className="rv-cred" key={c.label}>
              <dt>{c.label}</dt>
              <dd>{c.body}</dd>
            </div>
          ))}
        </dl>

        <address className="rv-contact">
          <span className="rv-contact__where">
            Revize HK, s.r.o. · Vocelova 1135/4, 500&nbsp;02 Hradec Králové
          </span>
          <a href="tel:+420732935539">+420 732 935 539</a>
          <a href="mailto:info@revizehk.cz">info@revizehk.cz</a>
        </address>
      </section>
    </main>
  );
}
