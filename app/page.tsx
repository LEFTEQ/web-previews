export default function Page() {
  const layers = [
    {
      code: "01",
      title: "Sádrokartonové příčky a stěny",
      desc: "Nové dělící stěny, předsazené konstrukce, zakrytí instalací i stavba šatny na míru — vždy s rovnou hranou a přebroušenými spárami.",
      spec: "deska 12,5 mm · CW/UW profil",
    },
    {
      code: "02",
      title: "Podhledy a zapuštěné LED",
      desc: "Rovné i členěné podhledy s předpřipravenými otvory pro bodovky, LED linie a rozvody klimatizace.",
      spec: "závěs · CD profil · nika",
    },
    {
      code: "03",
      title: "Protipožární a akustické konstrukce",
      desc: "Certifikované požární pláště a odhlučnění mezi byty či pokoji — správná skladba, minerální izolace, doložené detaily.",
      spec: "EI 30–60 · akustická vata",
    },
    {
      code: "04",
      title: "Tmelení, broušení, finální povrch",
      desc: "Přetmelení spár a vrutů do kvality Q3–Q4, přebroušení a příprava pod malbu nebo stěrku bez viditelných přechodů.",
      spec: "třída Q3 / Q4",
    },
  ];

  const chips = [
    "Bourací práce",
    "Zednické omítky a stěrky",
    "Malířské práce",
    "Obklady a dlažby",
    "Elektroinstalace",
    "Instalatérské práce",
    "LED osvětlení",
    "Montáž dveří a obložek",
  ];

  return (
    <>
      <header className="bar">
        <div className="bar-inner">
          <div className="mark" aria-label="Sympec, poctivé řemeslo">
            Sym<b>pec</b>
            <span>Sádrokartony · Praha</span>
          </div>
          <a className="bar-phone" href="tel:+420775167588">
            <span className="lab">Zavolejte</span>+420 775 167 588
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-eyebrow eyebrow rise d1">Sádrokartonář · Praha</div>
              <h1 className="rise d2">
                Rovná <em>stěna</em> tam,<br />kde ještě <span className="thin">včera</span><br />byla jen <em>myšlenka.</em>
              </h1>
              <p className="hero-lede rise d3">
                Stavíme sádrokartonové <b>příčky, podhledy a předstěny</b> pro
                pražské byty a kanceláře. Přesně změřeno, čistě
                zatmeleno, předáno připravené pod malbu.
              </p>
              <div className="hero-cta rise d4">
                <a className="btn btn-primary" href="tel:+420775167588">
                  Zavolat a domluvit prohlídku
                </a>
                <a className="btn btn-ghost" href="#sluzby">Co stavíme</a>
              </div>
            </div>

            <div className="hero-photo rise d3">
              <img
                src="/hero.webp"
                alt="Rozestavěná sádrokartonová konstrukce příčky s viditelnými kovovými profily v pražském bytě"
                loading="eager"
              />
              <figure className="tape">
                <div className="t-num">Kontrola rovinnosti</div>
                <div className="t-big">± 1 mm / 2 m</div>
                <div className="t-lab">Tolerance, kterou u nás najdete na každé hraně.</div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className="spec">
        <div className="spec-inner">
          <div className="spec-cell">
            <div className="n">12<small>let</small></div>
            <div className="l">Na pražských stavbách</div>
          </div>
          <div className="spec-cell">
            <div className="n">Q4</div>
            <div className="l">Kvalita povrchu pod malbu</div>
          </div>
          <div className="spec-cell">
            <div className="n">EI 60</div>
            <div className="l">Certifikované protipožární skladby</div>
          </div>
          <div className="spec-cell">
            <div className="n">Praha 4</div>
            <div className="l">Cyprichova 701/11</div>
          </div>
        </div>
      </div>

      <section className="block" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Skladba od profilu po malbu</div>
            <h2>
              Co postavíme,<br /><em>vrstvu po vrstvě.</em>
            </h2>
          </div>

          <div className="layers">
            {layers.map((l) => (
              <div className="layer" key={l.code}>
                <div className="code">{l.code}</div>
                <div className="body">
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
                <div className="thick"><b>{l.spec}</b></div>
              </div>
            ))}
          </div>

          <div className="chips" aria-label="Další řemesla, která zajistíme">
            {chips.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="block about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <div className="eyebrow">Kdo přijede na vaši stavbu</div>
              <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)", margin: "16px 0 24px" }}>
                Poctivé řemeslo,<br /><em style={{ fontStyle: "italic", fontWeight: 600, color: "var(--graphite)" }}>bez schovaných spár.</em>
              </h2>
              <p>
                Jsme <b>Sympec, poctivé řemeslo s.r.o.</b> — parta
                sádrokartonářů z Prahy 4. Neděláme z rekonstrukce vědu:
                přijedeme, změříme, řekneme rovnou cenu a pak
                stavíme tak, aby to za vámi drželo roky.
              </p>
              <p>
                Umíme celý byt od bourání po malbu, ale těžištěm je
                <b> suchá výstavba</b> — příčky, podhledy, předstěny a
                akustické či protipožární konstrukce, které projdou
                revizí.
              </p>

              <div className="proof">
                <div>
                  <span className="k">Férová cena</span>
                  <h3>Nabídka, která platí</h3>
                  <p>Cenu spočítáme po prohlídce a držíme se jí. O vícepracích se dozvíte dřív, než vzniknou.</p>
                </div>
                <div>
                  <span className="k">Cit pro detail</span>
                  <h3>Rovné hrany, čisté rohy</h3>
                  <p>Spáry přetmelíme a přebrousíme tak, aby po malbě nebylo poznat, kudy vedla.</p>
                </div>
              </div>

              <figure className="quote">
                <blockquote>
                  „Kompletní rekonstrukce bytu v panelu proběhla bez
                  jediného zádrhelu — komunikace výborná, vše vyřešeno
                  rychle a profesionálně.“
                </blockquote>
                <figcaption>
                  <b>Adéla Cvengrošová</b> · klientka, rekonstrukce bytu
                </figcaption>
              </figure>
            </div>

            <div className="about-photo">
              <img
                src="/section-1.webp"
                alt="Řemeslník při montáži sádrokartonového podhledu v rekonstruovaném bytě v Praze"
                loading="lazy"
              />
              <img
                src="/section-2.webp"
                alt="Dokončený interiér s hladkými stěnami a zapuštěným LED osvětlením po rekonstrukci"
                loading="lazy"
                style={{ marginTop: 16 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
