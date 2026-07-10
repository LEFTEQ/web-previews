import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptiVet — veterinární ordinace a oční pracoviště, Ostrava",
  description:
    "Veterinární ordinace OptiVet v Ostravě. Prevence a léčba psů, koček a drobných mazlíčků, referenční oční pracoviště — vyšetření dědičných očních vad, oční mikrochirurgie a chirurgie víček. Objednávejte telefonicky.",
  openGraph: {
    title: "OptiVet — veterinární ordinace a oční pracoviště, Ostrava",
    description:
      "Referenční oční pracoviště pro psy a kočky v Ostravě. Vyšetření dědičných očních vad, oční mikrochirurgie i běžná veterinární péče.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const PHONE_EYE = "+420 725 840 420";
const PHONE_VET = "+420 777 934 699";

export default function Page() {
  return (
    <main className="ov">
      <header className="ov-nav">
        <a className="ov-mark" href="#top" aria-label="OptiVet, domů">
          <span className="ov-mark-eye" aria-hidden="true">
            <span className="ov-mark-pupil" />
          </span>
          <span className="ov-mark-text">
            Opti<span className="ov-mark-vet">Vet</span>
          </span>
        </a>
        <nav className="ov-nav-links" aria-label="Hlavní">
          <a href="#pece">Péče</a>
          <a href="#oko">Oční</a>
          <a href="#tym">Tým</a>
        </nav>
        <a className="ov-nav-cta" href={`tel:${PHONE_EYE.replace(/\s/g, "")}`}>
          Objednat
        </a>
      </header>

      <section className="ov-hero" id="top">
        <div className="ov-hero-copy">
          <p className="ov-eyebrow">Veterinární ordinace &middot; Ostrava</p>
          <h1 className="ov-hero-title">
            Díváme se
            <br />
            <span className="ov-hero-accent">zblízka.</span>
          </h1>
          <p className="ov-hero-lead">
            Referenční oční pracoviště pro psy a kočky — a zároveň ordinace,
            kam vezmete mazlíčka na vakcinaci i s bulkou, kterou nechcete
            přehlédnout. Vyšetříme oči, ošetříme zuby, uděláme ultrazvuk.
            S časem na to, abychom si vše v klidu vysvětlili.
          </p>
          <div className="ov-hero-actions">
            <a className="ov-btn" href={`tel:${PHONE_EYE.replace(/\s/g, "")}`}>
              Zavolat na oční &middot; {PHONE_EYE}
            </a>
            <a className="ov-btn ov-btn-ghost" href={`tel:${PHONE_VET.replace(/\s/g, "")}`}>
              Běžná ordinace &middot; {PHONE_VET}
            </a>
          </div>
          <dl className="ov-hero-meta">
            <div>
              <dt>Objednáváme</dt>
              <dd>vždy předem, i domů</dd>
            </div>
            <div>
              <dt>Platba</dt>
              <dd>hotově nebo QR kódem</dd>
            </div>
          </dl>
        </div>
        <figure className="ov-hero-media">
          <img
            src="/hero.webp"
            alt="Veterinářka při oftalmologickém vyšetření oka domácího mazlíčka v ordinaci OptiVet"
            width={1200}
            height={1400}
            loading="eager"
          />
          <figcaption>Oftalmologické vyšetření &middot; ordinace OptiVet, Ostrava</figcaption>
        </figure>
      </section>

      <section className="ov-section ov-care" id="pece" aria-labelledby="pece-h">
        <div className="ov-section-head">
          <p className="ov-eyebrow">Co u nás vyřešíte</p>
          <h2 id="pece-h" className="ov-section-title">
            Dvě čísla, dvě paní doktorky
          </h2>
          <p className="ov-section-lead">
            Oční je specializace, kterou dělá málokdo — a proto bývá vytížené.
            Běžnou péči zvládneme hned, na oči si vás objednáme s dostatkem
            času. Volejte na správné číslo, ať se rychleji domluvíme.
          </p>
        </div>

        <div className="ov-tracks">
          <article className="ov-track">
            <p className="ov-track-line">Linka 1</p>
            <h3 className="ov-track-title">Běžná veterinární ordinace</h3>
            <p className="ov-track-lead">
              Prevence i drobná chirurgie pod jednou střechou. Diagnostiku
              z krve teď zvládneme přímo v ordinaci — bez čekání na laboratoř.
            </p>
            <ul className="ov-list">
              <li>Vakcinace, odčervení, ochrana proti klíšťatům a blechám</li>
              <li>Ultrazvuk, RTG, odběry krve, ošetření zubního kamene</li>
              <li>Měkkotkáňová chirurgie — dutina břišní, odstranění nádorů</li>
              <li>Biochemie, hematologie, štítná žláza (T4, TSH), CRP na místě</li>
            </ul>
            <a className="ov-track-cta" href={`tel:${PHONE_VET.replace(/\s/g, "")}`}>
              MVDr. Kateřina Brůnová &middot; {PHONE_VET}
            </a>
          </article>

          <article className="ov-track ov-track-eye">
            <p className="ov-track-line">Linka 2</p>
            <h3 className="ov-track-title">Oftalmologie &amp; oční chirurgie</h3>
            <p className="ov-track-lead">
              Referenční pracoviště, kam posílají pacienty jiné ordinace
              i kliniky. Posoudíme dědičné oční vady, operujeme víčka
              i oko samotné.
            </p>
            <ul className="ov-list">
              <li>Komplexní oční vyšetření a posouzení dědičných vad (DOO)</li>
              <li>Oční mikrochirurgie a chirurgie víček</li>
              <li>Vyšetření štěňat i práce na výstavách a v chovatelských stanicích</li>
              <li>Šedý zákal referujeme na Vetpark Ostrava</li>
            </ul>
            <a className="ov-track-cta" href={`tel:${PHONE_EYE.replace(/\s/g, "")}`}>
              MVDr. Zdeňka Barnasíková &middot; {PHONE_EYE}
            </a>
          </article>
        </div>

        <figure className="ov-care-media">
          <img
            src="/section-1.webp"
            alt="Vybavení ordinace OptiVet pro diagnostiku a ošetření drobných domácích zvířat"
            width={1400}
            height={900}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="ov-section ov-trust" id="tym" aria-labelledby="tym-h">
        <div className="ov-trust-grid">
          <figure className="ov-trust-media" id="oko">
            <img
              src="/section-2.webp"
              alt="Klidné prostředí veterinární ordinace OptiVet v Ostravě"
              width={1000}
              height={1200}
              loading="lazy"
            />
          </figure>

          <div className="ov-trust-copy">
            <p className="ov-eyebrow">Jak to u nás chodí</p>
            <h2 id="tym-h" className="ov-section-title">
              Malá ordinace, kde na vás mají čas
            </h2>
            <p className="ov-section-lead">
              Ordinační dobu přizpůsobujeme klientům i našim dětem — proto se
              vždy objednáváme předem. Často zůstáváme déle nebo vyrážíme
              ošetřit pacienta domů. Zdraví a klid zvířete i jeho majitele
              bereme jako prioritu.
            </p>

            <div className="ov-hours">
              <p className="ov-hours-title">Ordinační doba</p>
              <ul>
                <li>
                  <span>Po, út, čt, pá</span>
                  <span>8:00 – 15:00</span>
                </li>
                <li>
                  <span>Út &amp; st (oční)</span>
                  <span>15:00 – 19:00</span>
                </li>
              </ul>
              <p className="ov-hours-note">
                Odpolední termín u dr. Brůnové si domluvte přímo na
                {" "}{PHONE_VET}. Nedovoláte-li se, napište SMS nebo e-mail —
                ozveme se, jakmile bude prostor.
              </p>
            </div>

            <div className="ov-refs">
              <p className="ov-refs-title">Spolupracujeme</p>
              <p>
                Ortopedii, endoskopii a MRI řešíme s veterinární klinikou
                Lískovka ve Frýdku. Chirurgii šedého zákalu posíláme na
                Vetpark Ostrava. Nebojíme se pacienta poslat tam, kde mu
                pomohou nejlépe.
              </p>
            </div>

            <a className="ov-btn" href="mailto:optivet@volny.cz">
              Napsat e-mail &middot; optivet@volny.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
