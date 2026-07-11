import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SI Fyzio — Rolfterapie a fyzioterapie v Plzni",
  description:
    "SI Fyzio s.r.o. v Plzni: strukturální integrace (Rolfterapie) a komplexní fyzioterapie. Individuální přístup, práce s jizvou i fascií, terapie hrazená klientem.",
};

export default function Page() {
  return (
    <main>
      <header className="rf-hero">
        <div className="rf-wrap">
          <div className="rf-topbar">
            <div className="rf-mark">
              <span>SI Fyzio · Plzeň</span>
              <b>Struktura</b> v pohybu
            </div>
            <nav className="rf-topmeta" aria-label="Rychlý kontakt">
              <a href="tel:+420731631926">+420 731 631 926</a>
              <a href="mailto:matej@rehabilitaceplzen.cz">objednat termín</a>
            </nav>
          </div>

          <div className="rf-herogrid">
            <div>
              <p className="rf-eyebrow rf-rise rf-d1">Rolfterapie · strukturální integrace</p>
              <h1 className="rf-h1 rf-rise rf-d2">
                Tělo se srovná, když <em>povolí tah</em> ve fascii.
              </h1>
              <p className="rf-lead rf-rise rf-d3">
                V plzeňské ordinaci pracujeme rukama s napětím ve vazivu, se
                starou i čerstvou jizvou a s tím, jak stojíte a dýcháte. Ne
                cvičební sestava na půl hodiny — jedna terapie, celý řetězec.
              </p>
              <div className="rf-cta-row rf-rise rf-d4">
                <a className="rf-btn" href="tel:+420731631926">
                  Objednat první terapii
                </a>
                <a className="rf-btn-ghost" href="#sluzby">
                  Jak terapie probíhá
                </a>
              </div>
            </div>

            <figure className="rf-herofig rf-rise rf-d3">
              <img
                src="/hero.webp"
                alt="Fyzioterapeut při manuální práci s klientem v ordinaci SI Fyzio v Plzni"
              />
              <div className="rf-fascia" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <figcaption className="rf-tag">
                Metoda <em>Sharon Wheeler</em> — práce s jizvou bez bolesti
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      <section className="rf-sec" id="sluzby">
        <div className="rf-wrap">
          <div className="rf-sechead">
            <div>
              <p className="rf-kicker">Průběh terapie · tři fáze</p>
              <h2 className="rf-h2">
                Nečteme jen bolavé místo. <em>Čteme celou stavbu.</em>
              </h2>
            </div>
          </div>

          <div className="rf-steps">
            <article className="rf-step">
              <div className="rf-step-no">01</div>
              <div className="rf-step-min">cca 60 min</div>
              <h3>Odečtení stoje</h3>
              <p>
                Podíváme se, jak stojíte, kde tělo drží tah a co ho vychyluje.
                První sezení je hlavně o čtení vašeho pohybového vzorce.
              </p>
            </article>
            <article className="rf-step">
              <div className="rf-step-no">02</div>
              <div className="rf-step-min">manuální práce</div>
              <h3>Uvolnění fascie</h3>
              <p>
                Rukama pracujeme s vazivem a zkrácenými řetězci. Rolfterapie
                srovnává tělo ve vztahu k gravitaci, ne jednotlivý sval.
              </p>
            </article>
            <article className="rf-step">
              <div className="rf-step-no">03</div>
              <div className="rf-step-min">domů s vámi</div>
              <h3>Nový pohyb</h3>
              <p>
                Ukážeme, jak nové nastavení udržet v běžném dni — u počítače,
                při práci i ve spánku. Cílem je, aby změna vydržela.
              </p>
            </article>
          </div>

          <div className="rf-scar">
            <img
              src="/section-1.webp"
              alt="Detail manuální práce s jizvou a měkkými tkáněmi"
            />
            <div className="rf-scar-body">
              <p className="rf-kicker">Specializace</p>
              <h3>
                Jizva, která <em>drží pohyb v šachu</em>
              </h3>
              <p>
                Jizvy — čerstvé i letité — nás omezují víc, než by se zdálo:
                táhnou fascii a mění, jak se hýbeme. Metodou Sharon Wheeler s
                nimi pracujeme jemně a bez bolesti, aby se tkáň zase rozvolnila.
              </p>
              <p className="rf-scar-note">
                Terapie je plně hrazena klientem — nespolupracujeme se
                zdravotními pojišťovnami, o to víc času věnujeme jednomu tělu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rf-sec rf-about" id="o-nas">
        <div className="rf-wrap">
          <div className="rf-aboutgrid">
            <div className="rf-aboutimg">
              <img
                src="/section-2.webp"
                alt="Prostředí ordinace SI Fyzio v Plzni"
              />
            </div>
            <div>
              <p className="rf-kicker">Kdo se o vás postará</p>
              <blockquote className="rf-quote">
                „Nezajímá mě jen místo, které bolí. Zajímá mě{" "}
                <span>celý řetězec</span>, který k té bolesti vede — a jak ho
                vrátit do rovnováhy.“
              </blockquote>

              <dl className="rf-facts">
                <div className="rf-fact">
                  <dt>Metoda</dt>
                  <dd>
                    Rolfterapie
                    <small>Strukturální integrace + komplexní fyzioterapie</small>
                  </dd>
                </div>
                <div className="rf-fact">
                  <dt>Přístup</dt>
                  <dd>
                    Jeden klient
                    <small>Individuálně, bez spěchu a bez sériového cvičení</small>
                  </dd>
                </div>
                <div className="rf-fact">
                  <dt>Kde nás najdete</dt>
                  <dd>
                    Plzeň
                    <small>Kollárova 862/34 — zvonek na jméno terapeuta</small>
                  </dd>
                </div>
                <div className="rf-fact">
                  <dt>Objednání</dt>
                  <dd>
                    Předem nutné
                    <small>Termín domluvíme telefonicky nebo e-mailem</small>
                  </dd>
                </div>
              </dl>

              <p className="rf-hours">
                <strong>Otevírací doba</strong>
                Pondělí – pátek dle objednání · sobota a neděle zavřeno. Před
                návštěvou je vždy potřeba rezervace, ať máme na vaše tělo dost
                času.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
