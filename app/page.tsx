export default function Page() {
  const sluzby = [
    {
      no: "01",
      h: "Systém generálního klíče",
      p: "Návrh a realizace na míru — od jedné vložky po tisíce zámků. Speciální překryté profily konstruované proti vyhmatání planžetou. Náhradní klíče dostane jen prokázaný majitel systému.",
    },
    {
      no: "02",
      h: "Jeden klíč na všechno",
      p: "Sjednotíme vaše patentní vložky i visací zámky na jediný klíč — vstupní dveře, garáž, branku, sklep i zahradní domek odemknete tím samým. Konec svazku, který připomíná závaží.",
    },
    {
      no: "03",
      h: "Výroba klíčů",
      p: "FAB, GUARD/EVVA i MUL-T-LOCK. Kopírujeme autoklíče, dozické, tvarové i trezorové klíče — přesně a na počkání.",
    },
    {
      no: "04",
      h: "Trezory: prodej a servis",
      p: "Poradíme s výběrem podle toho, co v trezoru bude, dovezeme, ukotvíme a staráme se o pravidelný servis. Opravy vložek a autozámků samozřejmostí.",
    },
  ];

  const znacky = [
    "FAB", "GUARD / EVVA", "MUL-T-LOCK", "TOKOZ", "HOBES", "KFV",
    "Sch\u00fcco", "ROSTEX", "COBRA", "AC-T", "BRANO", "DORMA",
  ];

  return (
    <main>
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-bg">
          <img src="/hero.webp" alt="Ponk brn\u011bnsk\u00e9ho z\u00e1me\u010dn\u00edka \u2014 frézka na kl\u00ed\u010de, bezpe\u010dnostn\u00ed vlo\u017eky a rozpracovan\u00fd syst\u00e9m gener\u00e1ln\u00edho kl\u00ed\u010de" />
        </div>

        <div className="wrap">
          <nav className="topbar">
            <a className="brand" href="#" aria-label="Z\u00e1mka\u0159stv\u00ed JiRo, Brno">
              <span className="brand-key">Z\u00e1mka\u0159stv\u00ed <b>JiRo</b></span>
              <span className="brand-sfx">Brno \u00b7 od kl\u00ed\u010de po trezor</span>
            </a>
            <a className="top-call" href="tel:+420731314870">
              <span className="dot" aria-hidden="true"></span>
              <span className="txt">Nouzov\u011b 24/7 \u2014 </span>731 314 870
            </a>
          </nav>
        </div>

        <div className="wrap hero-body">
          <div className="hero-inner">
            <div className="hero-eye reveal d1">
              <span className="eyebrow">Z\u00e1me\u010dnictv\u00ed \u00b7 Brno</span>
              <span className="sep" aria-hidden="true"></span>
              <span className="mono" style={{ fontSize: ".74rem", color: "var(--paper-dim)" }}>Servisn\u00ed st\u0159edisko zna\u010dek</span>
            </div>

            <h1 className="hero-h reveal d2">
              Jeden kl\u00ed\u010d<br />
              <span className="l2">m\u00edsto</span> <span className="stroke">svazku</span>
            </h1>

            <p className="hero-sub reveal d3">
              Navrhujeme a vyr\u00e1b\u00edme <strong>syst\u00e9my gener\u00e1ln\u00edho kl\u00ed\u010de</strong>, sjednocujeme vlo\u017eky na jedin\u00fd kl\u00ed\u010d a otev\u00edr\u00e1me byty, auta i trezory, kdy\u017e se ostatn\u00ed vzd\u00e1vaj\u00ed. V Brn\u011b, nep\u0159etr\u017eit\u011b.
            </p>

            <div className="hero-actions reveal d4">
              <a className="btn btn-primary" href="tel:+420731314870">Zavolat te\u010f</a>
              <a className="btn btn-ghost" href="#sluzby">Co d\u011bl\u00e1me</a>
            </div>
          </div>
        </div>

        <div className="cutline" aria-hidden="true"></div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section id="sluzby">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Co u v\u00e1s vy\u0159e\u0161\u00edme</span>
            <h2>Od jedin\u00e9ho kl\u00ed\u010de po trezor ukotven\u00fd do betonu.</h2>
            <p>Nejsme obchod s klikami. \u0158e\u0161\u00edme, kdo se kam dostane \u2014 a kdo u\u017e ne.</p>
          </div>

          <div className="svc-grid">
            {sluzby.map((s) => (
              <article className="svc" key={s.no}>
                <span className="no">{s.no}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </article>
            ))}
            <article className="svc wide svc-247">
              <span className="no">SOS \u00b7 24/7</span>
              <h3>Nouzov\u00e9 otev\u00edr\u00e1n\u00ed \u2014 byty, auta, trezory</h3>
              <p>
                Zabouchnut\u00e9 dve\u0159e, kl\u00ed\u010d ve zn\u011bl\u00e9m aut\u011b, zaseknut\u00fd trezor? Otev\u00edr\u00e1me &scaron;etrn\u011b, bez zbyte\u010dn\u00e9 &scaron;kody. Ve dne v noci, o v\u00edkendu i o sv\u00e1tc\u00edch.
                <br />
                <a href="tel:+420731314870" className="big">731 314 870</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ O NÁS / DŮVĚRA ============ */}
      <section className="about">
        <div className="wrap">
          <div className="about-grid">
            <figure className="about-fig reveal">
              <img src="/section-1.webp" alt="Detail bezpe\u010dnostn\u00ed vlo\u017eky a klika s p\u0159ekryt\u00fdm profilem \u2014 ochrana proti vyhmat\u00e1n\u00ed planžetou" />
              <figcaption>Ochrana proti vyhmat\u00e1n\u00ed</figcaption>
            </figure>

            <div className="about-txt reveal">
              <span className="eyebrow">Pro\u010d n\u00e1m lid\u00e9 v\u011b\u0159\u00ed</span>
              <h2>Bezpe\u010dnost stav\u00edme jako pyramidu \u2014 od z\u00e1kladu.</h2>
              <p>
                Vlo\u017eka, kov\u00e1n\u00ed, petlice, z\u00e1mek a trezor spolu mus\u00ed dr\u017eet. Pou\u017e\u00edv\u00e1me speci\u00e1ln\u00ed p\u0159ekryt\u00e9 profily, kter\u00e9 se navz\u00e1jem kombinuj\u00ed a jsou <strong>zcela odli\u0161n\u00e9 od s\u00e9riov\u011b vyr\u00e1b\u011bn\u00fdch</strong> vlo\u017eek. Doporu\u010dujeme je s bezpe\u010dnostn\u00edmi &scaron;t\u00edty 802, 807, R1 a R4.
              </p>
              <p>
                V\u00fdroba syst\u00e9mu je v\u017edy zak\u00e1zkov\u00e1. N\u00e1hradn\u00ed kl\u00ed\u010de vyd\u00e1me <strong>jen na \u0159\u00e1dnou objedn\u00e1vku majitele</strong> a podle pravidel, kter\u00e1 si s\u00e1m ur\u010d\u00ed \u2014 nikdo jin\u00fd se k nim nedostane.
              </p>

              <div className="brands">
                <div className="lbl">Servisn\u00ed st\u0159edisko zna\u010dek</div>
                <div className="brand-tags">
                  {znacky.map((z) => (
                    <span key={z}>{z}</span>
                  ))}
                </div>
              </div>

              <ul className="facts">
                <li><b>24/7</b><small>nouzov\u00e9 otev\u00edr\u00e1n\u00ed</small></li>
                <li><b>1\u2013\u221e</b><small>z\u00e1mk\u016f v jednom syst\u00e9mu</small></li>
                <li><b>Brno</b><small>a okol\u00ed, na m\u00edst\u011b</small></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
