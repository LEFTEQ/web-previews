import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Bytová jádra na klíč",
      desc: "Vybouráme staré umakartové jádro a postavíme zděnou koupelnu i toaletu. Odvezeme suť, zajistíme veškeré profese — od vody po dlažbu.",
    },
    {
      no: "02",
      title: "Rozvody vody a odpadů",
      desc: "Nové rozvody vody, kanalizace a elektřiny podle platných norem. Tlaková zkouška a revize samozřejmostí, ať máte klid na dalších dvacet let.",
    },
    {
      no: "03",
      title: "Obklady a dlažba",
      desc: "Přesné spárořezy, rovné roviny, čisté silikony v koutech. Poradíme s výběrem formátu i barvy, ať koupelna vypadá větší.",
    },
    {
      no: "04",
      title: "Zdravotní instalace a sanita",
      desc: "Osazení vany, sprchového koutu, umyvadel a závěsného WC na předstěnu. Vše odzkoušené a připravené k prvnímu ranu do sprchy.",
    },
  ];

  const reasons = [
    {
      k: "Jeden termín, jeden parťák",
      v: "Michal Pospíšil vede stavbu od bourání po úklid. Voláte jednomu člověku, ne pěti řemeslníkům.",
    },
    {
      k: "Plzeň a okolí",
      v: "Sídlíme v Radčicích. Na obhlídku do Plzně i přilehlých obcí dojedeme rychle a zdarma.",
    },
    {
      k: "Certifikované postupy",
      v: "Hydroizolace, spádování a rozvody děláme podle norem. Doklady a záruku dostanete písemně.",
    },
  ];

  return (
    <main className="rb">
      <a className="rb-skip" href="#sluzby">Přeskočit na služby</a>

      <header className="rb-top">
        <a className="rb-mark" href="#" aria-label="REBYJA — rekonstrukce koupelen Plzeň">
          <span className="rb-mark-name">REBYJA</span>
          <span className="rb-mark-sub">koupelny · Plzeň</span>
        </a>
        <nav className="rb-nav" aria-label="Hlavní">
          <a href="#sluzby">Co uděláme</a>
          <a href="#duvera">Proč my</a>
          <a className="rb-call" href="tel:+420720250957">Zavolat 720 250 957</a>
        </nav>
      </header>

      <section className="rb-hero">
        <div className="rb-hero-media">
          <img
            src="/hero.webp"
            alt="Nově zrekonstruovaná koupelna od Rebyja s velkoformátovou dlažbou a sprchovým koutem"
            className="rb-hero-img"
          />
          <div className="rb-hero-tape" aria-hidden="true">
            <span>KOUPELNA HOTOVÁ</span>
            <span>KOUPELNA HOTOVÁ</span>
            <span>KOUPELNA HOTOVÁ</span>
          </div>
        </div>
        <div className="rb-hero-text">
          <p className="rb-eyebrow">Rekonstrukce bytových jader · Plzeň Radčice</p>
          <h1 className="rb-h1">
            Ze starého<br />
            <span className="rb-h1-em">umakartu</span><br />
            zděná koupelna.
          </h1>
          <p className="rb-lead">
            Vyklidíme, vybouráme, postavíme a uklidíme. Vy pár týdnů žijete
            s malým nepořádkem a pak se sprchujete v koupelně, kterou byste
            si sami nakreslili.
          </p>
          <div className="rb-cta-row">
            <a className="rb-btn" href="tel:+420720250957">Zavolat Michalovi</a>
            <a className="rb-btn rb-btn-ghost" href="#sluzby">Co všechno uděláme</a>
          </div>
          <dl className="rb-facts">
            <div><dt>Vede stavbu</dt><dd>Michal Pospíšil</dd></div>
            <div><dt>Kde</dt><dd>Plzeň a okolí</dd></div>
            <div><dt>Rozsah</dt><dd>Vše na klíč</dd></div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="rb-sec rb-services">
        <div className="rb-sec-head">
          <p className="rb-eyebrow">Rozpočet vám dáme na jedno</p>
          <h2 className="rb-h2">Postup po jednotlivých krocích</h2>
          <p className="rb-sec-note">
            Přesně v tomhle pořadí vám v bytě pracujeme. Nic nepředáváme
            cizím partám — celou cestu má na starost jeden tým.
          </p>
        </div>

        <ol className="rb-steps">
          {services.map((s) => (
            <li key={s.no} className="rb-step">
              <span className="rb-step-no" aria-hidden="true">{s.no}</span>
              <div className="rb-step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rb-shot">
          <img
            src="/section-1.webp"
            alt="Detail obkladů a dlažby v koupelně realizované firmou Rebyja"
            className="rb-shot-img"
          />
          <figcaption>Rovné spáry a čisté kouty — na tom si zakládáme.</figcaption>
        </figure>
      </section>

      <section id="duvera" className="rb-sec rb-trust">
        <figure className="rb-shot rb-shot-lead">
          <img
            src="/section-2.webp"
            alt="Zděná koupelna s vanou a obklady dokončená firmou Rebyja v Plzni"
            className="rb-shot-img"
          />
        </figure>
        <div className="rb-trust-text">
          <p className="rb-eyebrow">Rebyja s.r.o. · IČ 28036531</p>
          <h2 className="rb-h2">Malá parta, která to dotáhne do konce</h2>
          <p className="rb-sec-note">
            Děláme koupelny v Plzni od začátku do úklidu. Neslibujeme, co
            nedodržíme — radši řekneme reálný termín a ten pak držíme.
          </p>
          <ul className="rb-reasons">
            {reasons.map((r) => (
              <li key={r.k} className="rb-reason">
                <span className="rb-reason-k">{r.k}</span>
                <span className="rb-reason-v">{r.v}</span>
              </li>
            ))}
          </ul>
          <div
            className="rb-contact"
            style={{ ["--d" as keyof CSSProperties]: "0" } as CSSProperties}
          >
            <p className="rb-contact-name">Michal Pospíšil</p>
            <p className="rb-contact-line">Stromková 14, Plzeň Radčice 322 00</p>
            <a className="rb-btn rb-btn-sm" href="tel:+420720250957">Zavolat 720 250 957</a>
          </div>
        </div>
      </section>
    </main>
  );
}
