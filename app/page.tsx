export default function Page() {
  const taps = [
    {
      name: "Mlýnská 11°",
      style: "Světlý ležák, spodně kvašený",
      desc:
        "Sladová plnost s čistou žateckou hořkinou. Točíme ho jako první — je to naše vizitka od otevření pípy.",
      meta: "11° / 4,5 % ALK.",
    },
    {
      name: "Třebovická 12°",
      style: "Prémiový ležák, dvakrát chmelený",
      desc:
        "Zlatavá barva, hustá pěna a delší doba zrání v ležáckém tanku. Pro ty, kdo si chtějí sednout na déle.",
      meta: "12° / 5,0 % ALK.",
    },
    {
      name: "Mlynářův tmavý",
      style: "Řezané a tmavé speciály",
      desc:
        "Praženě karamelový, s tóny čerstvého chleba. Sezónní várka z malého kotle — dokud nedojde.",
      meta: "13° / 5,2 % ALK.",
    },
    {
      name: "Nefiltr z tanku",
      style: "Nefiltrované, nepasterizované",
      desc:
        "Kalné, živé, přímo z tanku do sklenice. Chuť piva tak, jak vyšlo ze sklepa — bez úprav.",
      meta: "11° / 4,6 % ALK.",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="tm-hero">
        <img
          className="tm-hero-img"
          src="/hero.webp"
          alt="Vařič piva v mědi zářícím varně Třebovického mlýna v Ostravě"
        />
        <nav className="tm-nav">
          <div className="tm-mark">
            Třebovický&nbsp;mlýn
            <small>Pivovar · Ostrava</small>
          </div>
          <div className="tm-navlinks">
            <a href="#cep">Na čepu</a>
            <a href="#pribeh">Náš příběh</a>
            <a href="#navsteva">Návštěva</a>
          </div>
        </nav>

        <div className="tm-hero-inner">
          <p className="tm-eyebrow">Vlastní várka · vaříme na mlýně</p>
          <h1>
            Pivo, které<br />
            vzniká <em>na místě,</em><br />
            kde ho piješ.
          </h1>
          <p className="tm-hero-sub">
            V areálu starého mlýna v Ostravě-Třebovicích si vaříme vlastní ležáky
            i speciály. Z tanku do sklenice — bez zbytečných zastávek.
          </p>
        </div>

        <div className="tm-specs">
          <div className="tm-spec">
            <b>4 piva</b>
            <span>Stále na čepu</span>
          </div>
          <div className="tm-spec">
            <b>Žatecký chmel</b>
            <span>Poloraný červeňák</span>
          </div>
          <div className="tm-spec">
            <b>Sklep 8 °C</b>
            <span>Ležení bez spěchu</span>
          </div>
        </div>
      </section>

      {/* SEKCE 1 — NA ČEPU */}
      <section className="tm-section" id="cep">
        <div className="tm-shead tm-reveal">
          <span className="num">01</span>
          <h2>Co teče z pípy</h2>
        </div>

        <div className="tm-taps tm-reveal">
          {taps.map((t, i) => (
            <div className="tm-tap" key={t.name}>
              <div className="tm-tap-no">{String(i + 1).padStart(2, "0")}</div>
              <div className="tm-tap-body">
                <h3>{t.name}</h3>
                <p>
                  <strong>{t.style}.</strong> {t.desc}
                </p>
              </div>
              <div className="tm-tap-meta">
                <b>{t.meta.split(" / ")[0]}</b>
                {t.meta.split(" / ")[1]}
              </div>
            </div>
          ))}
        </div>

        <div className="tm-info">
          <div>
            <span>Kde nás najdete</span>
            <b>Na Heleně 5004/2<br />722 00 Ostrava-Třebovice</b>
          </div>
          <div>
            <span>Otevřeno</span>
            <b>Po–Čt 10:30–22:00<br />Pá 10:30–23:00 · So 11:30–23:00<br />Ne 11:30–21:00</b>
          </div>
          <div>
            <span>Zavolat do výčepu</span>
            <b>+420 601 525 080</b>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — PŘÍBĚH / DŮVĚRA */}
      <section className="tm-band">
        <div className="tm-section" id="pribeh">
          <div className="tm-shead tm-reveal">
            <span className="num">02</span>
            <h2>Od mlýnského kola k pivnímu tanku</h2>
          </div>

          <div className="tm-about tm-reveal">
            <div className="tm-about-img">
              <img
                src="/section-1.webp"
                alt="Historický areál Třebovického mlýna s výčepem a posezením"
              />
            </div>
            <div>
              <p>
                Mlýn v Třebovicích mlel po generace. Dnes v jeho zdech
                zraje pivo — a voda, kámen i klid toho místa mu dělají dobře.
              </p>
              <p>
                Vaříme v malých várkách, poctivě a bez spěchu. Ležáky
                necháváme uležet ve sklepě tak dlouho, jak potřebují, a nefiltr
                čepujeme rovnou z tanku. Žádné dovážené sudy — to, co máte ve
                sklenici, vzniklo o pár metrů dál.
              </p>
              <p>
                K pivu vaříme kuchyni z okolních surovin a v létě sedíte venku
                u vody. Je to místo, kam se chodí posedět, ne jen rychle napít.
              </p>
              <div className="tm-facts">
                <span className="tm-fact">Vlastní pivovar</span>
                <span className="tm-fact">Nefiltrované z tanku</span>
                <span className="tm-fact">Kuchyně k pivu</span>
                <span className="tm-fact">Venkovní areál</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
