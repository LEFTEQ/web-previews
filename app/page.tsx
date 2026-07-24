import { AiImage } from "./_ui";
import { HeroDawn } from "./motion";

const pecivo = [
  {
    t: "Kváskový chléb",
    d: "Žitno-pšeničné bochníky, kvásek kynutý přes noc a ručně nařezané před sázením do pece. Křupavá kůrka, vláčná střída.",
  },
  {
    t: "Croissanty a koláče",
    d: "Máslové listové těsto, ovoce podle sezóny, tvaroh. Pečeme za svítání, prodáváme týž den.",
  },
  {
    t: "Voňavá káva",
    d: "Espresso k čerstvému pečivu přímo z pece. Přijďte si posedět — nebo si necháte zabalit domů.",
  },
  {
    t: "Nabídka týdne",
    d: "Co vaříme a pečeme právě tento týden? Mění se podle sezóny — zeptejte se u pultu.",
  },
];

const mista = [
  { p: "Praha 2", d: "Vinohrady" },
  { p: "Praha 3", d: "Vinohrady" },
  { p: "Praha 5", d: "Smíchov" },
  { p: "Praha 6", d: "Bubeneč" },
  { p: "Praha 7", d: "Holešovice" },
  { p: "Praha 8", d: "Karlín" },
  { p: "Praha 10", d: "Vršovice" },
];

function Lame({ className }: { className?: string }) {
  return (
    <svg className={className ? `lame ${className}` : "lame"} viewBox="0 0 40 16" aria-hidden="true">
      <path d="M2 13 C 12 3, 26 3, 38 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <header className="top">
        <a className="brand" href="#top" id="top">
          <span className="brand__name">Antonínovo</span>
          <span className="brand__sub">pekařství<Lame className="brand__cut" />Praha</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#mista">O pekařství</a>
          <a href="#nabidka">Aktuální nabídka</a>
          <a href="#nabidka">Naše pečivo</a>
          <a href="#mista">Hledáme pekaře</a>
          <a href="#mista">Kudy k nám</a>
        </nav>
      </header>

      <section className="hero" aria-label="Zatímco ještě spíte, naši pekaři už připravují těsto">
        <AiImage src="/hero.webp" alt="Ruce pekaře, čerstvě upečené bochníky chleba a mouka za svítání" className="hero__img" />
        <HeroDawn />
      </section>

      <section className="sec sec--nabidka" id="nabidka">
        <div className="wrap">
          <div className="sec__head">
            <p className="eyebrow"><Lame /> Naše (nejen) pečivo</p>
            <h2 className="sec__title">Křupavé zvenku,<br />vláčné uvnitř.</h2>
            <p className="sec__lead">K pečivu přímo z pece si dáte i dobrou kávu a můžete u nás posedět. Pečeme před vašima očima — mouka, voda, sůl, čas a kvásek. Nic víc.</p>
          </div>

          <div className="nabidka__grid">
            <figure className="nabidka__figure">
              <AiImage src="/section-1.webp" alt="Detail nakrojeného kváskového chleba s křupavou kůrkou" className="nabidka__img" />
            </figure>
            <ul className="cards">
              {pecivo.map((it) => (
                <li className="card" key={it.t}>
                  <Lame className="card__cut" />
                  <h3 className="card__t">{it.t}</h3>
                  <p className="card__d">{it.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec--mista" id="mista">
        <div className="wrap">
          <div className="sec__head">
            <p className="eyebrow"><Lame /> O pekařství</p>
            <h2 className="sec__title">Už máme sedm<br />pekařství.</h2>
            <p className="sec__lead">Vinohrady, Vršovice, Karlín, Holešovice, Bubeneč a nově Smíchov. Sedm adres po Praze, jeden kvásek, jedna ranní směna.</p>
          </div>

          <div className="mista__grid">
            <div className="enamel" role="list" aria-label="Naše pražská pekařství">
              <p className="enamel__k">Sedm pekařství — jeden kvásek</p>
              <ul className="enamel__list">
                {mista.map((m) => (
                  <li className="enamel__row" role="listitem" key={m.p + m.d}>
                    <Lame className="enamel__cut" />
                    <span className="enamel__p">{m.p}</span>
                    <span className="enamel__d">{m.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mista__figure">
              <AiImage src="/section-2.webp" alt="Pekárna Antonínova pekařství — čerstvé pečivo srovnané v regálech" className="mista__img" />
            </figure>
          </div>

          <div className="trust">
            <div className="trust__item">
              <h3 className="trust__t">Pečeme před vašima očima</h3>
              <p className="trust__d">Pec je vidět z krámu. Bochníky vytáhneme, necháme zvonit kůrku a prodáme, dokud jsou teplé.</p>
            </div>
            <div className="trust__item">
              <h3 className="trust__t">Až domů přes Wolt a Bolt Food</h3>
              <p className="trust__d">Nechce se vám ven? Naše dobroty pošleme z pekáren až k vám — objednávejte na Woltu nebo v Bolt Food.</p>
            </div>
            <div className="trust__item">
              <h3 className="trust__t">Hledáme pekaře</h3>
              <p className="trust__d">Máte chuť dělat poctivé řemeslo a nebojíte se ranní směny u pece? Ozvěte se — info@example.cz, +420 777 111 222.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
