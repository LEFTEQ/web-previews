export default function Page() {
  return (
    <main className="op">
      <a className="op-skip" href="#nabizime">Přeskočit na obsah</a>

      <header className="op-top">
        <a className="op-mark" href="#" aria-label="Ortopedická protetika Liberec – úvod">
          <span className="op-mark-glyph" aria-hidden="true">OP</span>
          <span className="op-mark-txt">
            <span className="op-mark-l1">Ortopedická protetika</span>
            <span className="op-mark-l2">Liberec · od míry k pohybu</span>
          </span>
        </a>
        <nav className="op-nav" aria-label="Hlavní">
          <a href="#nabizime">Co vyrábíme</a>
          <a href="#duvera">O nás</a>
          <a className="op-tel" href="tel:+420485106644">485 106 644</a>
        </nav>
      </header>

      <section className="op-hero" aria-labelledby="op-hero-h">
        <div className="op-hero-media">
          <img src="/hero.webp" alt="Ortopedický technik snímá míru pro individuální pomůcku v dílně v Liberci" width={1600} height={1200} />
        </div>
        <div className="op-hero-body">
          <p className="op-eyebrow">Ortopedicko-protetická dílna · Liberec</p>
          <h1 id="op-hero-h">
            Každá pomůcka <em>na míru</em> jednomu tělu.
          </h1>
          <p className="op-lede">
            Sádrujeme, modelujeme a laminujeme přímo v naší dílně na tř. Gen. Svobody.
            Vložky, obuv, ortézy i protézy dolních a horních končetin vyrobíme podle
            vaší nohy, ne podle tabulky velikostí.
          </p>
          <div className="op-actions">
            <a className="op-btn" href="tel:+420485106644">Zavolat do dílny</a>
            <a className="op-btn op-btn-ghost" href="#nabizime">Co u nás vyrobíme</a>
          </div>
          <dl className="op-facts">
            <div><dt>Míra</dt><dd>Snímáme osobně, sádrou i skenem</dd></div>
            <div><dt>Lékaři</dt><dd>Liberecký, Středočeský i Královéhradecký kraj</dd></div>
            <div><dt>Otevřeno</dt><dd>Po 7–17 · Út–Čt 7–15 · Pá 7–12</dd></div>
          </dl>
        </div>
      </section>

      <section id="nabizime" className="op-work" aria-labelledby="op-work-h">
        <div className="op-work-head">
          <p className="op-eyebrow op-eyebrow-dark">Co u nás vzniká</p>
          <h2 id="op-work-h">Od otisku nohy k hotové pomůcce</h2>
          <p className="op-work-intro">
            Pracujeme s materiály od Otto Bock, Streifeneder, Proteor, DZO, MTE
            i ING Corporation. Každý kus projde ruční prací — nic nepřijde hotové z krabice.
          </p>
        </div>

        <ol className="op-list">
          <li>
            <span className="op-num">01</span>
            <h3>Ortopedické vložky</h3>
            <p>Podle otisku a zatížení chodidla. Řešíme ploché nohy, ostruhy i bolavá kolena a záda z nesprávného kroku.</p>
          </li>
          <li>
            <span className="op-num">02</span>
            <h3>Ortopedická a zdravotní obuv</h3>
            <p>Boty ušité na tvar vaší nohy — pro otoky, deformity i rozdílnou délku končetin. Aby se v nich dalo celý den chodit.</p>
          </li>
          <li>
            <span className="op-num">03</span>
            <h3>Ortézy a bandáže</h3>
            <p>Opora kolen, kotníků, zápěstí i páteře. Zpevní kloub tam, kde je potřeba, a jinde nechá volnost.</p>
          </li>
          <li>
            <span className="op-num">04</span>
            <h3>Protézy dolních a horních končetin</h3>
            <p>Individuální lůžko laminujeme přímo u nás. Zkoušíme, seřizujeme a doladíme, dokud protéza opravdu nesedne.</p>
          </li>
        </ol>

        <figure className="op-work-fig">
          <img src="/section-1.webp" alt="Ruční výroba individuální ortopedické pomůcky v dílně" width={1400} height={900} />
          <figcaption>Modelujeme a upravujeme lůžko na sádrovém pozitivu — ručně, kus po kuse.</figcaption>
        </figure>
      </section>

      <section id="duvera" className="op-about" aria-labelledby="op-about-h">
        <figure className="op-about-fig">
          <img src="/section-2.webp" alt="Dílna ortopedické protetiky v Liberci s nástroji a rozpracovanými pomůckami" width={1400} height={1000} />
        </figure>
        <div className="op-about-body">
          <p className="op-eyebrow op-eyebrow-dark">Kdo pomůcku vyrobí</p>
          <h2 id="op-about-h">Malá liberecká dílna, kde vás znají jménem</h2>
          <p>
            Vyrábíme a aplikujeme individuální ortopedicko-protetické pomůcky přímo
            v Liberci. Nejste číslo v objednávce — pomůcku snímeme, vyzkoušíme a doladíme
            s vámi osobně, dokud nesedí.
          </p>
          <ul className="op-trust">
            <li><strong>Spolupráce s lékaři</strong> z Libereckého, Středočeského a Královéhradeckého kraje — pomůcku vydáme i na poukaz.</li>
            <li><strong>Ověřené materiály</strong> Otto Bock, Streifeneder, Proteor, DZO, MTE a ING Corporation.</li>
            <li><strong>Vše pod jednou střechou</strong> — od snímání míry přes výrobu po zkoušku a servis.</li>
          </ul>
          <address className="op-addr">
            <span className="op-addr-line">Tř. Gen. Svobody 93/24, Liberec 13, 460 14</span>
            <a href="tel:+420485106644">Tel. 485 106 644</a>
            <a href="tel:+420603505494">Mobil 603 505 494</a>
            <a href="mailto:info@ortoprotetliberec.cz">info@ortoprotetliberec.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
