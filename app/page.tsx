import type { ReactNode } from "react";

const PHONE_PATRIK = "739 900 660";
const PHONE_MARTIN = "731 721 847";
const EMAIL = "autopro.pardubice@email.cz";

const steps = [
  {
    n: "01",
    title: "Vyrovnání plechu",
    text: "Promáčkliny a záhyby srovnáme kladivem, planžetou i vytahováním na lepené trny — bez zbytečné výměny celého dílu, když to jde opravit.",
  },
  {
    n: "02",
    title: "Tmel a broušení",
    text: "Plochu vytmelíme, přebrousíme od hrubého po jemný papír do hladka a připravíme pod základ. Přechody musí zmizet.",
  },
  {
    n: "03",
    title: "Lakování",
    text: "Odstín namícháme přesně na váš lak a nastříkáme v prostředí zbaveném prachu. Barvu poznáte od zbytku karoserie leda podle čistoty.",
  },
  {
    n: "04",
    title: "Kompletace a předání",
    text: "Díly smontujeme zpět, vůz umyjeme a vyleštíme a předáme vám ho hotový. Náhradní auto máte po celou dobu opravy.",
  },
];

const services = [
  { title: "Pneuservis", text: "Přezutí, vyvážení i uskladnění sezonních pneumatik." },
  { title: "Servis klimatizace", text: "Plnění, kontrola těsnosti a dezinfekce výparníku." },
  { title: "Diagnostika závad", text: "Vyčteme chyby z řídicí jednotky a řekneme, co s tím." },
  { title: "Autodíly a doplňky", text: "Vybereme a doporučíme správný díl pro váš vůz." },
  { title: "Náhradní vozidlo", text: "Po dobu opravy vám půjčíme auto, ať nestojíte." },
  { title: "Výkup a prodej vozů", text: "Občas prodáme i celé vozidlo — po naší kontrole a opravě." },
];

export default function Page(): ReactNode {
  return (
    <main className="ap">
      <header className="ap-head">
        <div className="ap-head__wrap">
          <a className="ap-brand" href="#top" aria-label="AUTOPRO Pardubice, úvod">
            <span className="ap-brand__word">
              AUTO<span className="ap-brand__pro">PRO</span>
            </span>
            <span className="ap-brand__tag">autoklempířství · Pardubice</span>
          </a>
          <a className="ap-call ap-call--head" href={`tel:+420${PHONE_PATRIK.replace(/\s/g, "")}`}>
            <span className="ap-call__label">Zavolat</span>
            <span className="ap-call__num">{PHONE_PATRIK}</span>
          </a>
        </div>
      </header>

      <section className="ap-hero" id="top">
        <img
          className="ap-hero__img"
          src="/hero.webp"
          alt="Automobil po karosářské opravě a lakování v dílně AUTOPRO Pardubice"
        />
        <div className="ap-hero__veil" aria-hidden="true" />
        <div className="ap-hero__inner">
          <p className="ap-eyebrow ap-eyebrow--light ap-anim" style={{ animationDelay: "0.05s" }}>
            <span className="ap-tick" aria-hidden="true" />
            Autoklempířství &amp; autoservis — Dubina, od roku 2012
          </p>
          <h1 className="ap-hero__title">
            <span className="ap-anim" style={{ animationDelay: "0.14s" }}>Rovnáme plech,</span>
            <span className="ap-anim ap-hero__title--accent" style={{ animationDelay: "0.24s" }}>
              vracíme lesk.
            </span>
          </h1>
          <p className="ap-hero__lead ap-anim" style={{ animationDelay: "0.36s" }}>
            Vyrovnáme promáčkliny, opravíme vůz po nehodě, nalakujeme přesně na odstín a vrátíme
            vám ho jako nový. Po celou dobu opravy jezdíte v náhradním autě.
          </p>
          <div className="ap-hero__actions ap-anim" style={{ animationDelay: "0.48s" }}>
            <a className="ap-btn ap-btn--amber" href={`tel:+420${PHONE_PATRIK.replace(/\s/g, "")}`}>
              Zavolat Patrikovi {PHONE_PATRIK}
            </a>
            <a className="ap-btn ap-btn--ghost" href={`mailto:${EMAIL}`}>
              Napsat na e-mail
            </a>
          </div>
          <p className="ap-hero__meta ap-anim" style={{ animationDelay: "0.58s" }}>
            Areál čerpací stanice MOL · Jana Zajíce · Pardubice-Dubina
          </p>
        </div>
      </section>

      <section className="ap-process" aria-labelledby="proc-h">
        <div className="ap-process__grid">
          <div className="ap-process__intro">
            <p className="ap-eyebrow">
              <span className="ap-tick" aria-hidden="true" />
              Jak probíhá oprava
            </p>
            <h2 id="proc-h" className="ap-h2">
              Čtyři kroky od bouračky<br />zpátky ke krasavci
            </h2>
            <p className="ap-lead">
              Karosářskou práci děláme postupně a poctivě — každý krok má svůj čas. Tady je přesně
              to, čím váš plechový krasavec u nás projde.
            </p>
            <img
              className="ap-process__photo"
              src="/section-1.webp"
              alt="Karosář vyrovnává a připravuje plech vozu v dílně AUTOPRO Pardubice"
            />
          </div>

          <ol className="ap-rail">
            {steps.map((s) => (
              <li className="ap-rail__item" key={s.n}>
                <span className="ap-rail__num">{s.n}</span>
                <span className="ap-rail__of">/ 04</span>
                <div className="ap-rail__body">
                  <h3 className="ap-rail__title">{s.title}</h3>
                  <p className="ap-rail__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="ap-services">
          <p className="ap-eyebrow">
            <span className="ap-tick" aria-hidden="true" />
            A ještě k tomu
          </p>
          <h2 className="ap-h2 ap-h2--sm">Komplexní péče o jeden vůz na jednom místě</h2>
          <ul className="ap-services__list">
            {services.map((sv) => (
              <li className="ap-card" key={sv.title}>
                <h3 className="ap-card__title">{sv.title}</h3>
                <p className="ap-card__text">{sv.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-trust" aria-labelledby="trust-h">
        <div className="ap-trust__grid">
          <img
            className="ap-trust__photo"
            src="/section-2.webp"
            alt="Zázemí a dílna autoservisu AUTOPRO v Pardubicích-Dubině"
          />
          <div className="ap-trust__body">
            <p className="ap-eyebrow">
              <span className="ap-tick" aria-hidden="true" />
              Kdo se o váš vůz stará
            </p>
            <h2 id="trust-h" className="ap-h2">Od roku 2012 v Dubině</h2>
            <p className="ap-lead">
              Nabízíme komplexní péči o vaše plechové krasavce — od karosářských oprav a lakování
              přes diagnostiku a pneuservis až po servis klimatizace. Poradíme s výběrem dílu i s
              koupí ojetého vozu a najdeme řešení, které dává smysl vaší peněžence.
            </p>
            <p className="ap-note">
              Autodíly a vybavení dílen odebíráme jako partner firmy PRODAPA s.r.o. — kvalitní díly
              máme rychle po ruce.
            </p>

            <div className="ap-people">
              <a className="ap-person" href={`tel:+420${PHONE_PATRIK.replace(/\s/g, "")}`}>
                <span className="ap-person__name">Patrik Nespěšný</span>
                <span className="ap-person__num">{PHONE_PATRIK}</span>
              </a>
              <a className="ap-person" href={`tel:+420${PHONE_MARTIN.replace(/\s/g, "")}`}>
                <span className="ap-person__name">Martin Janura</span>
                <span className="ap-person__num">{PHONE_MARTIN}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="ap-where">
          <div className="ap-where__head">
            <p className="ap-eyebrow">
              <span className="ap-tick" aria-hidden="true" />
              Kde nás najdete
            </p>
            <h3 className="ap-where__addr">
              AUTOPRO Pardubice s.r.o.<br />
              areál čerpací stanice MOL, Jana Zajíce, Pardubice-Dubina
            </h3>
          </div>
          <p className="ap-where__nav">
            Od Pardubic směr Holice — těsně před kruhovým objezdem odbočte doprava a objeďte budovu.
            Zaparkujete přímo u dílny.
          </p>
        </div>
      </section>
    </main>
  );
}
