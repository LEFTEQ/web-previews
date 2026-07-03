export default function Page() {
  return (
    <main className="rz">
      {/* ===== HERO ===== */}
      <header className="rz-hero" aria-label="MASO BÍLOVICE — řeznictví a uzenářství">
        <div className="rz-hero__top">
          <div className="rz-wordmark" aria-label="MASO BÍLOVICE">
            <span className="rz-wordmark__maso">MASO</span>
            <span className="rz-wordmark__bilovice">Bílovice</span>
          </div>
          <p className="rz-hero__locality">Bílovice nad Svitavou&nbsp;·&nbsp;kousek od Brna</p>
        </div>

        <div className="rz-hero__stage">
          <h1 className="rz-hero__title">
            <span className="rz-hero__line rz-hero__line--1">Řezník,</span>
            <span className="rz-hero__line rz-hero__line--2">kterého znáte</span>
            <span className="rz-hero__line rz-hero__line--3">jménem.</span>
          </h1>

          {/* Signature: řeznický diagram — bourání jako mapa nabídky */}
          <figure className="rz-cutmap" aria-label="Schéma bourání vepřového — co u nás najdete">
            <svg viewBox="0 0 520 320" role="img" aria-hidden="true" className="rz-cutmap__svg">
              {/* silueta prasete */}
              <path
                className="rz-cutmap__body"
                d="M78 218 C60 218 44 204 44 184 C44 170 52 160 62 154 C58 140 62 122 78 112 C70 100 72 84 84 76 C98 66 116 70 124 80 C150 60 196 48 250 48 C320 48 392 62 430 92 C446 84 464 88 472 100 C480 112 476 128 466 136 C476 152 480 172 474 192 C468 212 452 226 430 230 L418 262 L400 262 L406 230 L330 234 L324 262 L306 262 L308 234 L196 232 L190 262 L172 262 L176 230 L120 226 L116 258 L98 258 L100 222 C92 222 84 220 78 218 Z"
              />
              {/* dělicí linky bourání */}
              <g className="rz-cutmap__lines">
                <path d="M150 62 L142 228" />
                <path d="M268 50 L262 232" />
                <path d="M370 62 L362 232" />
                <path d="M150 130 L430 138" />
              </g>
              {/* čísla partií */}
              <g className="rz-cutmap__nums">
                <text x="104" y="120">1</text>
                <text x="200" y="100">2</text>
                <text x="310" y="100">3</text>
                <text x="402" y="110">4</text>
                <text x="200" y="190">5</text>
                <text x="310" y="190">6</text>
              </g>
            </svg>
            <figcaption className="rz-cutmap__legend">
              <ol>
                <li><b>1</b> krkovice</li>
                <li><b>2</b> pečeně</li>
                <li><b>3</b> kotleta</li>
                <li><b>4</b> kýta</li>
                <li><b>5</b> bok</li>
                <li><b>6</b> panenka</li>
              </ol>
            </figcaption>
          </figure>

          <p className="rz-hero__claim">
            Bouráme sami, každý den čerstvé. Řekněte, co vaříte —
            poradíme partii, odkrojíme na váhu a připravíme přesně tak,
            jak to do hrnce nebo na gril potřebujete.
          </p>
        </div>

        <div className="rz-hero__band" aria-hidden="true">
          <span>VEPŘOVÉ</span><span>·</span><span>HOVĚZÍ</span><span>·</span><span>UZENINY</span><span>·</span><span>ŠPEKÁČKY</span><span>·</span><span>ZABIJAČKA</span><span>·</span><span>NA OBJEDNÁVKU</span>
        </div>
      </header>

      {/* ===== SEKCE: PULT / NABÍDKA ===== */}
      <section className="rz-pult" aria-labelledby="pult-h">
        <div className="rz-section-head">
          <p className="rz-eyebrow">Co máme na pultě</p>
          <h2 id="pult-h">Od půlky prasete po deset deka šunky</h2>
        </div>

        <ul className="rz-pult__grid">
          <li className="rz-card">
            <p className="rz-card__tag">Čerstvé maso</p>
            <h3>Vepřové a hovězí z vlastního bourání</h3>
            <p>
              Krkovice, kotlety, panenka, kýta i vývarové kosti. Bouráme
              v Bílovicích, ne ve velkoskladu — maso k nám jede kilometry,
              ne přes půl Evropy.
            </p>
            <p className="rz-card__note">Odkrojíme přesně na váhu, kterou chcete.</p>
          </li>
          <li className="rz-card">
            <p className="rz-card__tag">Vlastní udírna</p>
            <h3>Uzeniny podle rodinných receptur</h3>
            <p>
              Špekáčky, které drží na klacku, domácí klobásy, tlačenka,
              jitrnice a šunka od kosti. Uzené bukovým dřevem, bez zbytečné
              chemie — poznáte to hned po ukrojení.
            </p>
            <p className="rz-card__note">Špekáčky mizí do soboty — přijďte dřív.</p>
          </li>
          <li className="rz-card">
            <p className="rz-card__tag">Na objednávku</p>
            <h3>Zabijačky, gril a maso pro hospody</h3>
            <p>
              Chystáte oslavu, zabijačkové hody nebo vaříte pro restauraci?
              Připravíme balíky masa na gril, zabijačkové speciality nebo
              pravidelné dodávky. Domluvíte se přímo s řezníkem.
            </p>
            <p className="rz-card__note">Objednávky bereme osobně nebo po telefonu.</p>
          </li>
        </ul>
      </section>

      {/* ===== SEKCE: DŮVĚRA / O NÁS ===== */}
      <section className="rz-remeslo" aria-labelledby="remeslo-h">
        <div className="rz-section-head rz-section-head--light">
          <p className="rz-eyebrow">Proč k nám lidi jezdí i z Brna</p>
          <h2 id="remeslo-h">Řemeslo, které je vidět přes pult</h2>
        </div>

        <div className="rz-remeslo__cols">
          <div className="rz-remeslo__text">
            <p>
              MASO BÍLOVICE vede od roku 2018 Dominik Šlegl. Malý krám
              na Žižkově ulici v Bílovicích nad Svitavou, deset minut
              od Brna údolím Svitavy. Žádný řetězec — za pultem stojí ten,
              kdo maso ráno naboural.
            </p>
            <p>
              Stálí zákazníci sem chodí proto, že dostanou radu, ne jen
              sáček. Nevíte, jestli na guláš kližku, nebo krk? Zeptejte se.
              Chcete maso naklepat, namlít nebo nakrájet na nudličky?
              Uděláme to rovnou.
            </p>
          </div>

          <dl className="rz-remeslo__facts">
            <div className="rz-fact">
              <dt>Od roku</dt>
              <dd>2018</dd>
            </div>
            <div className="rz-fact">
              <dt>Bouráme</dt>
              <dd>každý den</dd>
            </div>
            <div className="rz-fact">
              <dt>Najdete nás</dt>
              <dd>Žižkova 600, Bílovice n. Svit.</dd>
            </div>
            <div className="rz-fact">
              <dt>Z Brna</dt>
              <dd>10 minut vlakem</dd>
            </div>
          </dl>
        </div>

        <ul className="rz-quotes">
          <li className="rz-quote">
            <blockquote>
              „Špekáčky jak od dědy. Jezdíme si pro ně z Líšně každou
              sobotu — a vždycky přibalíme ještě klobásy.“
            </blockquote>
            <p className="rz-quote__who">Marek, Brno-Líšeň</p>
          </li>
          <li className="rz-quote">
            <blockquote>
              „Poradili mi maso na svíčkovou a rovnou ho připravili.
              Omáčka se povedla poprvé v životě.“
            </blockquote>
            <p className="rz-quote__who">Jana, Bílovice nad Svitavou</p>
          </li>
          <li className="rz-quote">
            <blockquote>
              „Objednali jsme zabijačkové hody pro čtyřicet lidí.
              Všechno nachystané na čas, tlačenka zmizela první.“
            </blockquote>
            <p className="rz-quote__who">Sokol Bílovice, akce pro členy</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
