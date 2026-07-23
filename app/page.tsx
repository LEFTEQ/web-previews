import { AiImage } from "./_ui";

const services = [
  {
    label: "Rodinné domy",
    tag: "Sekční vrata",
    desc: "Sekční a rolovací vrata Hörmann na míru vašemu domu — včetně stínicí techniky a vchodových dveří. Tichý chod a tepelná izolace, které vydrží generace.",
  },
  {
    label: "Průmysl a bytové domy",
    tag: "Vrata & závory",
    desc: "Průmyslová sekční a rychloběžná vrata, nakládací technika a automatické závory pro haly, bytové domy, čerpací stanice i nemocnice.",
  },
  {
    label: "Pohony",
    tag: "Automatika",
    desc: "Elektrické pohony pro vrata i vjezdové brány a příslušenství — dálkové ovladače, prstové čtečky, fotobuňky a kódové klávesnice.",
  },
  {
    label: "Servis",
    tag: "7 dní v týdnu",
    desc: "Pohotovostní výjezdy, seřízení i pravidelné prohlídky. Vlastní zásobený sklad náhradních dílů znamená opravu bez čekání na dodávku.",
  },
];

const references = [
  {
    quote:
      "Přijeli do hodiny od nahlášení poruchy. Šikovní technici za rozumnou cenu. Doporučuji!",
    who: "Marek S.",
    role: "majitel rodinného domu",
  },
  {
    quote:
      "Vždycky nás vytáhli z potíží a nenechali ve štychu. Práci odvádějí super, moc děkuji.",
    who: "Olga K.",
    role: "správa bytového domu",
  },
  {
    quote:
      "Opravili nám vrata poškozená při vloupání — přijeli rychle a za férovou cenu. Díky!",
    who: "Jiří M.",
    role: "SVJ, Praha 4",
  },
];

const milestones = [
  { big: "1992", small: "Montujeme a servisujeme vrata" },
  { big: "1999", small: "Autorizovaný partner Hörmann" },
  { big: "7 dní", small: "V týdnu na příjmu poruch" },
];

function Seam() {
  return <div className="al-seam" aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="al-main">
      {/* ---------- HERO ---------- */}
      <section className="al-hero" aria-labelledby="al-hero-title">
        <div className="al-hero-media">
          <AiImage
            src="/hero.webp"
            alt="Osvětlený showroom garážových vrat Hörmann v Praze"
            className="al-hero-img"
          />
          <div className="al-scrim" aria-hidden="true" />
          <div className="al-door" aria-hidden="true">
            <span className="al-door-panel" />
            <span className="al-door-panel" />
            <span className="al-door-panel" />
            <span className="al-door-panel" />
            <span className="al-door-panel" />
          </div>
        </div>

        <div className="al-hero-inner al-wrap">
          <a className="al-wordmark" href="#top" id="top">
            <span className="al-wordmark-name">ALTOMA</span>
            <span className="al-wordmark-sub">Praha · garážová vrata Hörmann</span>
          </a>

          <p className="al-eyebrow al-eyebrow--onimg">
            Autorizovaný partner Hörmann · Praha a střední Čechy
          </p>
          <h1 className="al-h1" id="al-hero-title">
            Garážová vrata
            <br />
            bez starostí
          </h1>
          <p className="al-lead">
            Sekční vrata, pohony a servis od roku 1992. Vybereme, změříme,
            namontujeme a seřídíme — a když je potřeba, přijedeme opravit.
          </p>
          <div className="al-cta-row">
            <a className="al-btn al-btn--primary" href="#poptavka">
              Nezávazně poptat vrata
            </a>
            <a className="al-btn al-btn--ghost" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
          </div>
        </div>
      </section>

      {/* ---------- SLUŽBY (door panels) ---------- */}
      <section className="al-band al-band--dark" aria-labelledby="al-services-title">
        <Seam />
        <div className="al-wrap">
          <header className="al-panelhead al-panelhead--oak">
            <p className="al-eyebrow">Co pro vás uděláme</p>
            <h2 className="al-h2" id="al-services-title">
              Čtyři panely, jeden dodavatel
            </h2>
            <p className="al-panelhead-note">
              Tak jak na sobě stojí panely sekčních vrat, stojí na sobě i naše
              práce — od prvního domu až po pohotovostní servis.
            </p>
          </header>
        </div>

        <div className="al-services al-wrap">
          {services.map((s) => (
            <article className="al-service" key={s.label}>
              <span className="al-service-seam" aria-hidden="true" />
              <div className="al-service-head">
                <h3 className="al-service-label">{s.label}</h3>
                <span className="al-service-tag">{s.tag}</span>
              </div>
              <p className="al-service-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- DŮVĚRA / O NÁS ---------- */}
      <section className="al-band al-band--fog" aria-labelledby="al-about-title">
        <Seam />
        <div className="al-wrap">
          <header className="al-panelhead al-panelhead--anthracite">
            <p className="al-eyebrow">O společnosti</p>
            <h2 className="al-h2" id="al-about-title">
              Značková vrata, poctivá montáž
            </h2>
          </header>

          <div className="al-about">
            <div className="al-about-text">
              <p>
                ALTOMA patří k největším autorizovaným prodejcům vratové techniky
                Hörmann v Praze a středních Čechách. Vrata prodáváme, montujeme a
                servisujeme od roku 1992; partnerství s Hörmann jsme uzavřeli v
                roce 1999 a v roce 2006 získali ocenění největšího prodejce
                značky.
              </p>
              <p>
                Naši technici procházejí pravidelným školením přímo u výrobce a
                pracujeme podle certifikátu kvality ISO. Vrata Hörmann jsou
                vyrobena v Německu — exkluzivní vzhled, dlouhá životnost a účinná
                tepelná izolace.
              </p>

              <dl className="al-milestones">
                {milestones.map((m) => (
                  <div className="al-milestone" key={m.big}>
                    <dt>{m.big}</dt>
                    <dd>{m.small}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="al-about-figure">
              <AiImage
                src="/section-1.webp"
                alt="Montáž sekčních garážových vrat Hörmann technikem Altoma"
                className="al-about-img"
              />
            </figure>
          </div>

          {/* Reference */}
          <div className="al-refs" aria-label="Reference zákazníků">
            {references.map((r) => (
              <blockquote className="al-ref" key={r.who}>
                <p className="al-ref-quote">„{r.quote}“</p>
                <footer className="al-ref-by">
                  <span className="al-ref-who">{r.who}</span>
                  <span className="al-ref-role">{r.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Kde nás najdete */}
          <div className="al-find" id="poptavka">
            <figure className="al-find-figure">
              <AiImage
                src="/section-2.webp"
                alt="Showroom a sklad náhradních dílů Altoma v Praze"
                className="al-find-img"
              />
            </figure>
            <div className="al-find-info">
              <h3 className="al-find-title">Kde nás najdete</h3>
              <p className="al-find-line">Ukázková 123, Praha</p>
              <p className="al-find-line">
                <a href="tel:+420777111222">+420 777 111 222</a>
              </p>
              <p className="al-find-line">
                <a href="mailto:info@example.cz">info@example.cz</a>
              </p>
              <table className="al-hours">
                <caption>Otevírací doba</caption>
                <tbody>
                  <tr>
                    <th scope="row">Pondělí – Čtvrtek</th>
                    <td>8:00 – 16:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Pátek</th>
                    <td>8:00 – 15:30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
