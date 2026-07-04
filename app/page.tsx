import React from "react";

export default function Page() {
  const capabilities = [
    {
      load: "do 5 tun",
      name: "Klavíry, trezory, stroje",
      desc: "Pianina, křídla, vířivky, lékařské přístroje i těžké výrobní stroje. Vážeme, kotvíme a spouštíme po schodech, na kolečkách i řetězovým kladkostrojem.",
    },
    {
      load: "byt i firma",
      name: "Kompletní stěhování",
      desc: "Byty, rodinné domy, kanceláře a provozy. Nábytek rozebereme, techniku zabalíme, po převozu zase složíme a postavíme na místo.",
    },
    {
      load: "vyklidíme",
      name: "Sklepy, půdy, garáže",
      desc: "Vyklidíme, odvezeme a ekologicky zlikvidujeme. Narazíme-li na cennosti, předáme vám je do ruky. Diskrétně, bez řečí.",
    },
    {
      load: "7 dní",
      name: "Sklad a autodoprava",
      desc: "Hlídané skladovací kontejnery v Brně, přístupné 24/7 autem i MHD. Vnitrostátní i mezinárodní doprava s konečnou cenou.",
    },
  ];

  const promises = [
    {
      k: "Cena drží",
      v: "Cenu stanovíme předem podle objemu, vzdálenosti a náročnosti. V průběhu ji už nezvyšujeme — žádné dodatky na místě.",
    },
    {
      k: "Sedm dní v týdnu",
      v: "Dopoledne, odpoledne i večer. Můžeme stěhovat najednou nebo to rozložit na víc dní. Všední dny i víkendy.",
    },
    {
      k: "Nonstop na telefonu",
      v: "Zvedáme to i večer a o víkendu. Zavolejte, popište náklad a hned víte, na čem jste.",
    },
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="mark" href="#" aria-label="Stěhování Cibulka, domovská stránka">
          <span className="mark-a">STĚHOVÁNÍ</span>
          <span className="mark-b">CIBULKA</span>
          <span className="mark-c">Brno · bourání &amp; stěhování těžkých břemen</span>
        </a>
        <a className="call" href="tel:+420739372391">
          <span className="call-lbl">Volejte nonstop</span>
          <span className="call-num">+420 739 372 391</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Stěhováci Cibulka spouštějí těžké břemeno po schodech v Brně"
            className="hero-img"
          />
          <span className="hero-tag">5 000 kg &mdash; naše horní hranice</span>
        </div>
        <div className="hero-body">
          <p className="eyebrow">Specializace: to, co jiní nezvednou</p>
          <h1 id="hero-h">
            Když je to <em>moc těžké</em>, moc křehké nebo v pátém patře
            bez výtahu.
          </h1>
          <p className="lede">
            Klavír, trezor, vířivka, výrobní stroj. V Brně a okolí stěhujeme
            břemena až do pěti tun — bezpečně, s pevnou cenou a bez škrábanců
            na stěnách.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420739372391">Zavolat teď</a>
            <a className="btn btn-line" href="mailto:stehovani-cibulka@seznam.cz">Poslat poptávku</a>
          </div>
          <p className="hero-note">Brno · Jihomoravský kraj · ČR i Evropa</p>
        </div>
      </section>

      <section className="scale" aria-labelledby="scale-h">
        <div className="scale-head">
          <p className="eyebrow eyebrow-dark">Co uneseme</p>
          <h2 id="scale-h">Čtyři věci, kvůli kterým nás lidé volají</h2>
        </div>
        <ol className="cards">
          {capabilities.map((c, i) => (
            <li className="card" key={c.name}>
              <span className="card-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="card-load">{c.load}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-media">
          <img
            src="/section-1.webp"
            alt="Zabalený nábytek připravený k naložení do stěhovacího vozu"
            className="trust-img"
          />
        </div>
        <div className="trust-body">
          <p className="eyebrow eyebrow-dark">Jak to děláme</p>
          <h2 id="trust-h">Tři sliby, které vám dáme než začneme balit</h2>
          <dl className="promises">
            {promises.map((p) => (
              <div className="promise" key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
          <div className="trust-strip">
            <img
              src="/section-2.webp"
              alt="Stěhovací tým Cibulka nakládá bednu s křehkým obsahem"
              className="strip-img"
            />
            <p className="strip-txt">
              Sídlíme na Novoměstské 3 v Brně-Řečkovicích. Napište na{" "}
              <a href="mailto:stehovani-cibulka@seznam.cz">stehovani-cibulka@seznam.cz</a>{" "}
              nebo rovnou zavolejte — probereme náklad, patra i termín.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
