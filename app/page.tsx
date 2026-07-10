import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advokátní kancelář Poláček — Pardubice | Právo od roku 1990",
  description:
    "Rodinná advokátní kancelář Poláček v Pardubicích. Přes 30 let praxe v občanském, rodinném, trestním i obchodním právu. Mgr. Jan Poláček a JUDr. Jaroslav Poláček.",
  openGraph: {
    title: "Advokátní kancelář Poláček — Pardubice",
    description:
      "Dvě generace advokátů, jedna kancelář. Komplexní právní služby pro firmy i jednotlivce od roku 1990.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Advokátní kancelář Poláček" }],
  },
};

const obory = [
  {
    kod: "§ 1",
    nazev: "Občanské a rodinné právo",
    text:
      "Kupní smlouvy, vlastnické vztahy, rozvody a majetkové vypořádání, úprava péče o nezletilé děti, výživné, osvojení i popírání otcovství. Sepíšeme každou smlouvu, kterou zákon nesvěřuje notáři.",
  },
  {
    kod: "§ 2",
    nazev: "Trestní právo",
    text:
      "Obhajoba klientů v celém průběhu řízení, zastupování poškozených, návrhy na podmíněné propuštění a upuštění od zbytku trestu. Vycházíme z dlouholeté znalosti trestního zákoníku i řádu.",
  },
  {
    kod: "§ 3",
    nazev: "Obchodní a insolvenční právo",
    text:
      "Zakládání a změny obchodních společností, valné hromady, zápisy do rejstříku, smlouvy o dílo, vymáhání pohledávek i zastupování v insolvenčním řízení včetně přihlášek věřitelů.",
  },
  {
    kod: "§ 4",
    nazev: "Správní a přestupkové právo",
    text:
      "Zastupování před správními orgány i městskými a stavebními úřady, odvolání a přezkumy rozhodnutí, správní soudnictví. Poradenství máme prověřené prací pro veřejnou správu.",
  },
  {
    kod: "§ 5",
    nazev: "Pracovní právo",
    text:
      "Skončení pracovního poměru a jeho neplatnost, náhrada škody z pracovního úrazu i nemoci z povolání. Zastupujeme zaměstnance i zaměstnavatele.",
  },
  {
    kod: "§ 6",
    nazev: "Exekuční právo",
    text:
      "Vymáhání pohledávek, zastupování v exekučním řízení, poradenství pro věřitele i povinné. Řešíme i dlouhodobou správu pohledávek pro obchodní společnosti.",
  },
];

export default function Page() {
  return (
    <main className="pl">
      <header className="pl-top">
        <a className="pl-mark" href="#uvod" aria-label="Advokátní kancelář Poláček — úvod">
          <span className="pl-mark-name">Poláček</span>
          <span className="pl-mark-sub">advokátní kancelář · Pardubice</span>
        </a>
        <nav className="pl-nav" aria-label="Hlavní navigace">
          <a href="#uvod">Úvod</a>
          <a href="#sluzby">Právní obory</a>
          <a href="#kancelar">O kanceláři</a>
          <a className="pl-nav-cta" href="tel:+420466657225">Zavolat</a>
        </nav>
      </header>

      <section className="pl-hero" id="uvod">
        <div className="pl-hero-text">
          <p className="pl-eyebrow">Est. 1990 · dvě generace advokátů</p>
          <h1 className="pl-h1">
            Právo, které<br />
            <span className="pl-h1-accent">držíme v rodině</span><br />
            už přes třicet let.
          </h1>
          <p className="pl-lede">
            JUDr. Jaroslav Poláček kancelář založil v roce 1990. Dnes v jeho práci
            pokračuje syn, Mgr. Jan Poláček. Poskytujeme komplexní právní služby
            firmám i jednotlivcům v Pardubicích a okolí — věcně, srozumitelně
            a bez zbytečných řečí.
          </p>
          <div className="pl-hero-actions">
            <a className="pl-btn" href="tel:+420466657225">Zavolat: 466 657 225</a>
            <a className="pl-btn pl-btn-ghost" href="#sluzby">Prohlédnout obory</a>
          </div>
        </div>
        <figure className="pl-hero-fig">
          <img
            src="/hero.webp"
            alt="Interiér advokátní kanceláře Poláček v Pardubicích"
            className="pl-hero-img"
            width={900}
            height={1100}
          />
          <figcaption className="pl-hero-cap">
            <span className="pl-cap-year">34</span>
            <span className="pl-cap-label">let praxe ve všech oborech práva</span>
          </figcaption>
        </figure>
      </section>

      <section className="pl-services" id="sluzby">
        <div className="pl-sec-head">
          <p className="pl-eyebrow">Právní obory</p>
          <h2 className="pl-h2">S čím za námi lidé i firmy chodí</h2>
          <p className="pl-sec-lede">
            Výčet je příkladný — obory se prolínají a řadu věcí vyřešíme společně.
            Nejste-li si jistí, kam vaše záležitost patří, zavolejte a poradíme vám
            hned na začátku.
          </p>
        </div>

        <ol className="pl-list">
          {obory.map((o) => (
            <li className="pl-item" key={o.kod}>
              <span className="pl-item-kod" aria-hidden="true">{o.kod}</span>
              <div className="pl-item-body">
                <h3 className="pl-item-nazev">{o.nazev}</h3>
                <p className="pl-item-text">{o.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pl-service-fig">
          <img
            src="/section-1.webp"
            alt="Právní dokumenty a spisy advokátní kanceláře Poláček"
            className="pl-service-img"
            width={1200}
            height={700}
          />
        </figure>
      </section>

      <section className="pl-about" id="kancelar">
        <figure className="pl-about-fig">
          <img
            src="/section-2.webp"
            alt="Advokáti Poláček ve své kanceláři v Pardubicích"
            className="pl-about-img"
            width={1000}
            height={1200}
          />
        </figure>
        <div className="pl-about-text">
          <p className="pl-eyebrow">O kanceláři</p>
          <h2 className="pl-h2">Jedna kancelář, dva advokáti, jedna tradice</h2>
          <p className="pl-about-p">
            Kancelář založil v roce 1990 <strong>JUDr. Jaroslav Poláček</strong>.
            Za víc než tři desítky let si získala řadu spokojených klientů a
            odpovídající renomé napříč obory. V roce 2008 se společníkem stal
            <strong> Mgr. Jan Poláček</strong>, který pokračuje v rodinné tradici
            a dnes vede větší část právní agendy.
          </p>
          <p className="pl-about-p">
            Pracujeme na vysoké odborné úrovni, podložené dlouholetou praxí.
            Klientovi vždy řekneme na rovinu, jak jeho věc vidíme a co má reálnou
            šanci — i když to není odpověď, kterou by čekal.
          </p>

          <dl className="pl-contact">
            <div className="pl-contact-row">
              <dt>Telefon</dt>
              <dd><a href="tel:+420466657225">+420 466 657 225</a></dd>
            </div>
            <div className="pl-contact-row">
              <dt>E-mail</dt>
              <dd><a href="mailto:judr.polacek@post.cz">judr.polacek@post.cz</a></dd>
            </div>
            <div className="pl-contact-row">
              <dt>Sídlo</dt>
              <dd>Pardubice</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
