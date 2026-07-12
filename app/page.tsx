import type { CSSProperties } from "react";

export default function Page() {
  const layers = [
    {
      no: "01",
      title: "Nosná konstrukce",
      role: "Podklad",
      text: "Betonová deska nebo trapézový plech. Kontrolujeme spádování a rovinnost — bez správného spádu voda stojí a izolace nemá šanci.",
    },
    {
      no: "02",
      title: "Parozábrana",
      role: "Ochrana proti vlhkosti zevnitř",
      text: "Zabraňuje pronikání vodní páry z interiéru do skladby. Přeplátování a prostupy řešíme s důrazem na těsnost.",
    },
    {
      no: "03",
      title: "Tepelná izolace",
      role: "EPS / PIR ve spádu",
      text: "Spádové klíny navrhneme na míru, aby střecha odváděla vodu tam, kam má. Žádné kaluže, žádná zbytečná zátěž konstrukce.",
    },
    {
      no: "04",
      title: "Hydroizolační vrstva",
      role: "Fólie mPVC nebo asfaltové pásy",
      text: "Finální vrstva, na které vše stojí. Svary provádíme horkovzdušně a každý spoj kontrolujeme jehlou i zkušební jehlicí.",
    },
  ];

  const reasons = [
    {
      no: "1992",
      label: "Rok založení",
      title: "Přes 30 let na střechách",
      text: "Zakázky realizujeme od roku 1992 — v Brně, Praze i po celé republice. Za tu dobu jsme zvládli haly, bytové komplexy i rodinné domy.",
    },
    {
      no: "Ø",
      label: "Výběr materiálu",
      title: "Jen prověřené fólie a pásy",
      text: "Dlouhodobě pracujeme s předními výrobci hydroizolací a tepelných izolací. Materiál volíme podle stavby, ne podle skladu.",
    },
    {
      no: "✓",
      label: "Po dokončení",
      title: "Revize a kontrola pláště",
      text: "Střechu po realizaci nenecháme být. Provádíme revize a kontroly střešních plášťů, abyste zatékání odhalili dřív než škody.",
    },
  ];

  return (
    <main className="iz">
      <header className="iz-top">
        <a className="iz-brand" href="#" aria-label="Brněnské izolace, domovská stránka">
          <span className="iz-brand-mark" aria-hidden="true">
            <span className="iz-brand-slab" />
            <span className="iz-brand-slab" />
            <span className="iz-brand-slab" />
          </span>
          <span className="iz-brand-name">
            Brněnské<span className="iz-brand-thin"> izolace</span>
          </span>
        </a>
        <a className="iz-phone" href="tel:+420777713420">
          <span className="iz-phone-label">Volejte izolatéry</span>
          <span className="iz-phone-num">+420 777 713 420</span>
        </a>
      </header>

      <section className="iz-hero">
        <div className="iz-hero-media">
          <img
            src="/hero.webp"
            alt="Realizace hydroizolace ploché střechy — natavování a svařování izolační vrstvy"
            className="iz-hero-img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="iz-hero-body">
          <p className="iz-eyebrook">Izolatérství &nbsp;·&nbsp; Brno, Pražákova 60 &nbsp;·&nbsp; od 1992</p>
          <h1 className="iz-hero-title">
            Plochá střecha drží<br />
            jen tak dobře,<br />
            <span className="iz-hi">jak dobře je udělaný spoj.</span>
          </h1>
          <p className="iz-hero-lead">
            Děláme hydroizolace plochých střech a izolace proti zemní vlhkosti
            a radonu. Každý svar je horkovzdušně tažený a přezkoušený — protože
            u střechy se nechybuje na centimetry.
          </p>
          <div className="iz-hero-cta">
            <a className="iz-btn iz-btn-solid" href="#sluzby">Prohlédnout skladbu střechy</a>
            <a className="iz-btn iz-btn-ghost" href="tel:+420777713420">Zavolat na stavbu</a>
          </div>
        </div>
      </section>

      <section className="iz-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="iz-sec-head">
          <p className="iz-kicker">Skladba shora dolů</p>
          <h2 className="iz-h2" id="sluzby-h">Co všechno leží pod hydroizolací</h2>
          <p className="iz-sec-lead">
            Plochá střecha není jedna vrstva. Je to řez, kde na sobě záleží každé
            centimetr — od podkladu až po fólii, na kterou stoupne déšť. Takhle
            ho stavíme.
          </p>
        </div>

        <ol className="iz-layers">
          {layers.map((l) => (
            <li className="iz-layer" key={l.no}>
              <span className="iz-layer-no">{l.no}</span>
              <div className="iz-layer-txt">
                <p className="iz-layer-role">{l.role}</p>
                <h3 className="iz-layer-title">{l.title}</h3>
                <p className="iz-layer-body">{l.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="iz-services-extra">
          <img
            src="/section-1.webp"
            alt="Detail dokončené ploché střechy s hydroizolační fólií a napojením na atiku"
            className="iz-extra-img"
            width={1200}
            height={800}
          />
          <div className="iz-extra-txt">
            <p className="iz-kicker">Tři obory, jedna parta</p>
            <ul className="iz-tri">
              <li>
                <strong>Izolace plochých střech</strong>
                <span>Novostavby i rekonstrukce — komerční objekty, průmyslové haly, bytové domy i rodinné domy.</span>
              </li>
              <li>
                <strong>Izolace proti zemní vlhkosti a radonu</strong>
                <span>Spodní stavba pod zem — ochrana základů proti vlhkosti a proti pronikání radonu do interiéru.</span>
              </li>
              <li>
                <strong>Revize a kontrola střešních plášťů</strong>
                <span>Prohlídka stávající střechy, odhalení slabin a zatékání dřív, než napáchá škodu uvnitř.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="iz-trust" aria-labelledby="onas-h">
        <div className="iz-trust-inner">
          <div className="iz-trust-head">
            <p className="iz-kicker iz-kicker-light">O firmě</p>
            <h2 className="iz-h2 iz-h2-light" id="onas-h">
              Střechu vám nesvěří jen tak někdo. Vy nám můžete.
            </h2>
            <p className="iz-trust-lead">
              Brněnské izolace, spol. s r.o. jsou na trhu od roku 1992. Jednatel
              Rostislav Kuba i celá parta stojí za každou zakázkou — od haly na
              okraji Brna po rodinný dům. Sídlíme na Pražákově 60, ale jezdíme
              po celé republice.
            </p>
          </div>

          <div className="iz-reasons">
            {reasons.map((r) => (
              <article className="iz-reason" key={r.title}>
                <span className="iz-reason-no" aria-hidden="true">{r.no}</span>
                <p className="iz-reason-label">{r.label}</p>
                <h3 className="iz-reason-title">{r.title}</h3>
                <p className="iz-reason-text">{r.text}</p>
              </article>
            ))}
          </div>

          <figure className="iz-trust-figure">
            <img
              src="/section-2.webp"
              alt="Izolatér při práci na ploché střeše komerčního objektu v Brně"
              className="iz-trust-img"
              width={1400}
              height={900}
            />
            <figcaption className="iz-trust-cap">
              Realizace v Brně — komerční objekt, hydroizolace mPVC fólií.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
