import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ELEKTROKOMPAKT — revize elektro, Ústí nad Labem",
  description:
    "Revize elektroinstalací a spotřebičů v Ústí nad Labem. Do 1 kV, nad 1 kV i zařízení v prostředí s nebezpečím výbuchu. Projekce, montáž, revizní zpráva na klíč.",
  openGraph: {
    title: "ELEKTROKOMPAKT — revize elektro, Ústí nad Labem",
    description:
      "Revizní technik pro NN i VN rozvody. Do 1 kV, nad 1 kV, výbušné prostředí. Ústí nad Labem.",
    type: "website",
    locale: "cs_CZ",
  },
};

const rozsahy = [
  {
    kod: "do 1 kV",
    trida: "E1",
    nazev: "Spotřebiče a rozvody nízkého napětí",
    popis:
      "Bytové i firemní instalace, rozvaděče, zásuvkové a světelné okruhy. Výchozí revize u kolaudace i pravidelné revize v termínu.",
  },
  {
    kod: "nad 1 kV",
    trida: "E2",
    nazev: "Vysoké napětí a technologie VN",
    popis:
      "Trafostanice, VN rozvody a průmyslová zařízení. Revize dimenzované na provoz, kde výpadek stojí peníze.",
  },
  {
    kod: "Ex",
    trida: "E3",
    nazev: "Prostředí s nebezpečím výbuchu",
    popis:
      "Zóny Ex — kotelny, čerpací stanice, provozy s hořlavými parami a prachem. Revize podle přísnějších pravidel pro Ex prostory.",
  },
];

const postup = [
  {
    c: "01",
    t: "Zavoláte, domluvíme termín",
    d: "Řeknete, o jaký objekt jde a proč revizi potřebujete — kolaudace, pojišťovna, nebo prošlá lhůta. Termín potvrdíme do druhého dne.",
  },
  {
    c: "02",
    t: "Přijedeme a proměříme",
    d: "Přístroji zkontrolujeme izolační stavy, uzemnění, jističe i chrániče. Najdeme, co je za normou a co jen za hranou.",
  },
  {
    c: "03",
    t: "Dostanete revizní zprávu",
    d: "Papír, který obstojí u úřadu i pojišťovny. Závady popíšeme srozumitelně a řekneme, co spravit hned a co počká.",
  },
];

export default function Page() {
  return (
    <main className="ek">
      <header className="ek-top">
        <a className="ek-mark" href="#" aria-label="ELEKTROKOMPAKT, domů">
          <span className="ek-mark-bolt" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" role="img">
              <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor" />
            </svg>
          </span>
          <span className="ek-mark-word">
            ELEKTRO<b>KOMPAKT</b>
          </span>
        </a>
        <a className="ek-tel" href="tel:+420602170061">
          +420 602 170 061
        </a>
      </header>

      <section className="ek-hero" aria-labelledby="ek-hero-h">
        <div className="ek-hero-img">
          <img
            src="/hero.webp"
            alt="Revizní technik ELEKTROKOMPAKT při měření v elektrickém rozvaděči"
            loading="eager"
          />
        </div>
        <div className="ek-hero-body">
          <p className="ek-eyebrow">Revize elektro · Ústí nad Labem</p>
          <h1 id="ek-hero-h">
            Papír, který <span className="ek-hl">bez závady projde</span> u úřadu i&nbsp;pojišťovny.
          </h1>
          <p className="ek-lede">
            Změříme vaši elektroinstalaci a napíšeme revizní zprávu, o kterou
            se opřete při kolaudaci, kontrole i&nbsp;škodní události. Bez
            řečí navíc — jen jasně, co je v&nbsp;pořádku a co spravit.
          </p>
          <div className="ek-cta-row">
            <a className="ek-btn" href="tel:+420602170061">
              Zavolat na revizi
            </a>
            <a className="ek-btn ek-btn-ghost" href="mailto:elektrokompakt@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="ek-meter" aria-label="Rozsah oprávnění">
            <div>
              <dt>Napětí</dt>
              <dd>do 1 kV · nad 1 kV</dd>
            </div>
            <div>
              <dt>Prostředí</dt>
              <dd>běžné i Ex</dd>
            </div>
            <div>
              <dt>Rozvody</dt>
              <dd>NN i VN</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ek-services" aria-labelledby="ek-serv-h">
        <div className="ek-head">
          <p className="ek-eyebrow">Co revidujeme</p>
          <h2 id="ek-serv-h">
            Tři třídy oprávnění, jedna revizní zpráva na&nbsp;konci.
          </h2>
        </div>
        <ol className="ek-cards">
          {rozsahy.map((r) => (
            <li key={r.trida} className="ek-card">
              <span className="ek-card-trida" aria-hidden="true">
                {r.trida}
              </span>
              <span className="ek-card-kod">{r.kod}</span>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
            </li>
          ))}
        </ol>
        <div className="ek-serv-more">
          <img
            src="/section-1.webp"
            alt="Detail rozvaděče s jističi během revize elektroinstalace"
            loading="lazy"
          />
          <div>
            <p className="ek-eyebrow">Od projektu po předání</p>
            <h3 className="ek-serv-more-h">
              Nejsme jen revize. Umíme i&nbsp;projekt a montáž.
            </h3>
            <p>
              Zpracujeme projektovou dokumentaci pro NN i&nbsp;VN rozvody a
              zrealizujeme montáž, opravu nebo rekonstrukci instalace. Když
              chcete, převezmete hotové dílo včetně revize — od jednoho
              technika, který za&nbsp;ním stojí.
            </p>
            <ul className="ek-list">
              <li>Projekce NN i VN rozvodů</li>
              <li>Montáž, opravy a rekonstrukce elektroinstalace</li>
              <li>Předání díla i s výchozí revizní zprávou</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ek-about" aria-labelledby="ek-about-h">
        <div className="ek-about-grid">
          <div className="ek-about-text">
            <p className="ek-eyebrow">O nás</p>
            <h2 id="ek-about-h">
              V oboru elektro nejsme od&nbsp;včera. A&nbsp;za každou zprávou stojíme jménem.
            </h2>
            <p>
              ELEKTROKOMPAKT s.r.o. z&nbsp;Ústí nad Labem řeší elektro od
              projektu přes montáž až po revizi. Provedeme vás celou zakázkou —
              od první konzultace po předání hotového díla, ať jde o&nbsp;byt,
              provozovnu, nebo průmyslovou technologii.
            </p>
            <p>
              Revize u&nbsp;nás nekončí razítkem. Vysvětlíme, co nález
              znamená, co snese odklad a&nbsp;co je potřeba řešit hned, aby
              instalace zůstala bezpečná.
            </p>
            <ol className="ek-steps">
              {postup.map((p) => (
                <li key={p.c}>
                  <span className="ek-steps-c" aria-hidden="true">
                    {p.c}
                  </span>
                  <div>
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="ek-about-side">
            <img
              src="/section-2.webp"
              alt="Technik ELEKTROKOMPAKT s měřicím přístrojem na stavbě v Ústí nad Labem"
              loading="lazy"
            />
            <div className="ek-contact">
              <p className="ek-eyebrow">Kde nás najdete</p>
              <p className="ek-addr">
                Karolíny Světlé 387/23
                <br />
                400 07 Ústí nad Labem
              </p>
              <a className="ek-contact-line" href="tel:+420602170061">
                +420 602 170 061
              </a>
              <a className="ek-contact-line" href="mailto:elektrokompakt@seznam.cz">
                elektrokompakt@seznam.cz
              </a>
            </div>
            <p className="ek-hiring">
              Hledáme elektromontážního technika — IČO i&nbsp;HPP. Ozvěte se
              na telefon nebo e-mail výše.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
