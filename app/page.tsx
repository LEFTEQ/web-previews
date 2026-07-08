import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oční Optika Praha — brýle na míru a měření zraku optometristou",
  description:
    "Oční optika v Praze jako registrované zdravotnické zařízení: měření zraku optometristou bez poukazu od lékaře, brýle na míru včetně multifokálů, kontaktní čočky a opravy. Přijímáme benefity Sodexo, Unišek i Ticket.",
  openGraph: {
    title: "Oční Optika Praha — vidět ostře, cítit se dobře",
    description:
      "Změříme vám zrak přímo u nás a brýle zhotovíme na míru. Registrovaná optometrie v Praze.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    no: "Sph −8.00 → +6.00",
    title: "Měření zraku optometristou",
    text: "Vyšetření zraku a určení dioptrické korekce provedeme přímo u nás. Jsme registrované zdravotnické zařízení, takže nepotřebujete poukaz od očního lékaře.",
    detail: "Objednání na konkrétní čas — bez čekání",
  },
  {
    no: "Add +1.00 → +3.00",
    title: "Brýle na míru i multifokály",
    text: "Individuální víceohniskové (multifokální) brýle vybrousíme a vsadíme do obruby podle vašeho vidění i tvaru obličeje. Sluneční i pracovní brýle na počítač s filtrem modrého světla.",
    detail: "Zaměření středů čoček přímo na obrubě",
  },
  {
    no: "BC 8.6 mm",
    title: "Kontaktní čočky a servis",
    text: "Poradíme s výběrem kontaktních čoček a jejich nasazením. Opravíme prasklou obrubu, dotáhneme šroubky a vyčistíme skla ultrazvukem — často na počkání.",
    detail: "Čištění skel ultrazvukem zdarma pro naše zákazníky",
  },
];

const obruby = [
  "Eschenbach", "Safilo", "Rodenstock", "Sagitta", "New Line Optics",
  "Coloroptik", "Mr.Gain", "VEDERE", "PRONAP",
];
const cocky = ["HOYA", "Essilor", "Rodenstock", "Omega Optics", "Optika Čivice"];

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <nav className="opt-nav" aria-label="Hlavní">
          <div className="mark">
            <span className="mark-lenses" aria-hidden="true">
              <span></span><span></span>
            </span>
            <span>Oční <em>Optika</em> Praha</span>
            <small>Optometrie</small>
          </div>
          <ul>
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#mereni">Měření zraku</a></li>
            <li><a href="#optika">O optice</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </div>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow reveal d1">Registrované zdravotnické zařízení · Praha</span>
            <h1 className="hero-title reveal d1">
              Zaostříme vám svět<br />
              <span className="refract">přesně na míru.</span>
            </h1>
            <p className="hero-lead reveal d2">
              Změříme vám zrak přímo v optice — bez poukazu od lékaře — a brýle
              vybrousíme na míru vašemu vidění i obličeji. Od první zkoušky obruby
              po hotové multifokály.
            </p>
            <div className="hero-cta reveal d3">
              <a className="btn btn-solid" href="#mereni">Objednat měření zraku</a>
              <a className="btn btn-ghost" href="tel:+420244472437">Zavolat 244&nbsp;472&nbsp;437</a>
            </div>
            <div className="hero-strip reveal d4">
              <span className="live">Otevřeno a aktuálně měříme</span>
              <span>Doporučuje nás <b>2 689</b> zákazníků</span>
              <span>Přijímáme <b>Sodexo · Unišek · Ticket</b></span>
            </div>
          </div>
          <div className="hero-visual reveal d2">
            <div className="lens-frame">
              <img
                src="/hero.webp"
                alt="Optik zkouší obrubu brýlí a měří střed čoček zákazníkovi v pražské oční optice"
              />
            </div>
            <div className="dioptrie-chip" aria-hidden="true">
              <b>−2.25 cyl −0.75</b>
              <small>Vaše dioptrie · na míru</small>
            </div>
          </div>
        </div>
      </header>

      <section id="sluzby" className="services">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-kicker">Co pro vás uděláme</p>
              <h2 className="sec-title">Od změření po hotové brýle pod jednou střechou</h2>
            </div>
            <p className="sec-note">
              Popisky u karet jsou opravdové optické veličiny — sféra, adice,
              zakřivení. Takhle o vašem vidění mluvíme i u nás v křesle.
            </p>
          </div>

          <div className="svc-list">
            {sluzby.map((s) => (
              <article className="svc" key={s.title}>
                <span className="svc-no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="detail">{s.detail}</span>
              </article>
            ))}
          </div>

          <div id="mereni" className="badge-optometrie">
            <div className="seal" aria-hidden="true">Ø</div>
            <p>
              <b>Nemusíte k lékaři pro poukaz.</b> Jako registrované nestátní
              zdravotnické zařízení pro optometrii provádíme vyšetření pro
              zjištění dioptrické korekce přímo u nás v optice.
            </p>
          </div>
        </div>
      </section>

      <section id="optika">
        <div className="wrap about-grid">
          <div className="about-img">
            <img
              src="/section-1.webp"
              alt="Interiér oční optiky Praha s vystavenými brýlovými obrubami"
            />
          </div>
          <div className="about-body">
            <p className="sec-kicker">O naší optice</p>
            <h2 className="sec-title">Rodinná optika, kde vás znají jménem, ne číslem</h2>
            <p>
              Deset let brousíme skla, vsazujeme obruby a učíme se vidění každého
              zákazníka. Poradíme s výběrem tak, aby brýle padly do obličeje i do
              vašeho dne — čtení, práce u počítače i řízení za soumraku.
            </p>
            <p>
              Když se ztratíte v odborných pojmech jako adice, cylindr nebo
              antireflex, srozumitelně vám je vysvětlíme, než se pro cokoli
              rozhodnete.
            </p>

            <div className="stats">
              <div className="stat"><b>3</b><span>prodejny v Praze</span></div>
              <div className="stat"><b>10 let</b><span>zkušeností s brýlemi</span></div>
              <div className="stat"><b>2 689</b><span>spokojených zákazníků</span></div>
              <div className="stat"><b>7 571</b><span>brýlí a čoček na míru</span></div>
            </div>

            <div className="brands">
              <h4>Obruby, které u nás vyzkoušíte</h4>
              <div className="chips">
                {obruby.map((b) => <span key={b}>{b}</span>)}
              </div>
            </div>

            <div className="brands" id="kontakt">
              <h4>Brousíme čočky od dodavatelů</h4>
              <div className="chips">
                {cocky.map((b) => <span key={b}>{b}</span>)}
              </div>
            </div>

            <p className="pay">
              Platby přijímáme i přes benefitní poukázky <b>Sodexo</b>,{" "}
              <b>Unišek</b> a <b>Ticket</b> a spolupracujeme se zdravotními
              pojišťovnami.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
