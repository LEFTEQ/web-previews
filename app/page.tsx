export default function Page() {
  const sluzby = [
    {
      tag: "BYT · DŮM",
      title: "Stěhování domácností",
      text: "Zabalíme, rozmontujeme skříně a postele, přeneseme, na místě zase složíme. Krabice vám půjčíme zdarma a dovezeme předem, ať máte čas na balení.",
    },
    {
      tag: "KANCELÁŘ",
      title: "Stěhování firem",
      text: "Kanceláře stěhujeme večer nebo o víkendu, bez příplatku. V pondělí ráno sedí vaši lidé u zapojených stolů, ne u krabic.",
    },
    {
      tag: "PIANO · TREZOR",
      title: "Těžká břemena",
      text: "Klavíry, trezory, stroje. Máme popruhy, rudly na schody i dost rukou. Čtvrté patro bez výtahu nás nerozhodí — patra jsou u nás bez příplatku.",
    },
    {
      tag: "SKLAD",
      title: "Skladování věcí",
      text: "Mezi starým a novým bydlením? Uskladníme nábytek v suchém, hlídaném skladu na Zbraslavi — na týden i na půl roku.",
    },
    {
      tag: "SBĚRNÝ DVŮR",
      title: "Vyklízení",
      text: "Byty, sklepy, půdy i celé domy. Co nechcete, odvezeme rovnou do sběrného dvora. Po nás zůstane prázdno a zameteno.",
    },
    {
      tag: "NAVÍC",
      title: "Montáž nábytku",
      text: "Složíme novou skříň z krabice i tu, kterou jsme právě přivezli. Vrtačku, vodováhu a trpělivost vozíme s sebou.",
    },
  ];

  const cenik = [
    { vuz: "16 m³", posadka: "2 pracovníci", cena: "1 000 Kč", pozn: "malé stěhování — garsonka, 1+kk" },
    { vuz: "22 m³", posadka: "3 pracovníci", cena: "1 400 Kč", pozn: "střední stěhování — byt 2+1 až 3+1" },
    { vuz: "42 m³", posadka: "4 pracovníci", cena: "2 400 Kč", pozn: "velké stěhování — dům, firma" },
  ];

  const reference = [
    {
      jmeno: "Anika",
      kdy: "před měsícem",
      text: "Kdybych mohla dát sto hvězdiček, dala bych je. Skvěle sehraná parta — nábytek rozeberou, zabalí, přenesou, poskládají, uklidí. A pořád s úsměvem.",
    },
    {
      jmeno: "Tom Cat",
      kdy: "před 8 měsíci",
      text: "Všechno před nakládkou přebalili strečkou, takže žádné „stěhovací ztráty“. I s nejtěžšími kousky si pánové poradili. Stěhování na jedničku, za cenu, která se dala zaplatit.",
    },
    {
      jmeno: "Richard Tecl",
      kdy: "před 8 měsíci",
      text: "Stěhování bez výtahu proběhlo skvěle. Snesli nám nábytek do naší vlastní dodávky, vše přikurtovali a zabezpečili. Děkujeme moc!",
    },
    {
      jmeno: "Martin Prudil",
      kdy: "stálý zákazník",
      text: "Stěhoval jsem s nimi dvakrát, v roce 2020 a 2025. Pokaždé vynikající přístup — i k mnoha obrazům přistupovali s péčí.",
    },
  ];

  return (
    <main className="sb">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="Stěhování Bohemia — úvod">
        <div className="hero-top">
          <div className="wordmark" aria-label="Stěhování Bohemia">
            <span className="wordmark-box" aria-hidden="true">SB</span>
            <span className="wordmark-text">
              STĚHOVÁNÍ<br />BOHEMIA
            </span>
          </div>
          <a className="hero-tel" href="tel:+420721041555">+420 721 041 555</a>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Praha-Zbraslav · česká parta · pojištění do 5 milionů</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Zabalíme.</span>
            <span className="hero-line hero-line-2">Přeneseme.</span>
            <span className="hero-line hero-line-3">Zabydlíte se.</span>
          </h1>
          <p className="hero-sub">
            Stěhujeme byty, domy i firmy po Praze a celé republice. Patra bez příplatku,
            víkendy bez příplatku, krabice půjčíme zdarma. Platíte jen reálný čas stěhování.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-solid" href="tel:+420721041555">Zavolat hned</a>
            <a className="btn btn-ghost" href="mailto:info@stehovanibohemia.cz">Napsat poptávku</a>
          </div>
        </div>

        {/* signature: kolona krabic s křehkým značením */}
        <div className="hero-boxes" aria-hidden="true">
          <div className="box box-a">
            <span className="box-fragile">KŘEHKÉ ↑</span>
            <span className="box-label">KUCHYŇ</span>
          </div>
          <div className="box box-b">
            <span className="box-fragile">TOUTO STRANOU ↑</span>
            <span className="box-label">KNIHY</span>
          </div>
          <div className="box box-c">
            <span className="box-fragile">KŘEHKÉ ↑</span>
            <span className="box-label">OBRAZY</span>
          </div>
          <div className="box box-d">
            <span className="box-label">NOVÝ DOMOV</span>
          </div>
        </div>

        <div className="hero-tape" aria-hidden="true">
          <span>STĚHOVÁNÍ · VYKLÍZENÍ · SKLADOVÁNÍ · MONTÁŽ NÁBYTKU · STĚHOVÁNÍ · VYKLÍZENÍ · SKLADOVÁNÍ · MONTÁŽ NÁBYTKU · </span>
        </div>
      </header>

      {/* ================= SLUŽBY + CENÍK ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás odnosíme</h2>
          <p>
            Od garsonky po celou firmu. Každou zakázku vede stálá parta —
            žádní brigádníci najatí ráno na rohu.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.title}>
              <span className="karta-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="cenik" aria-labelledby="cenik-h">
          <h3 id="cenik-h">Ceník bez hvězdiček</h3>
          <p className="cenik-sub">
            Hodinová sazba, počítá se reálný čas. Kilometry po Praze zdarma.
            Přesnou kalkulaci uděláme po nezávazné prohlídce technikem — ta je zdarma.
          </p>
          <ul className="cenik-list">
            {cenik.map((r) => (
              <li className="cenik-row" key={r.vuz}>
                <span className="cenik-vuz">{r.vuz}</span>
                <span className="cenik-posadka">{r.posadka}</span>
                <span className="cenik-pozn">{r.pozn}</span>
                <span className="cenik-cena">{r.cena}<small>/hod</small></span>
              </li>
            ))}
          </ul>
          <p className="cenik-note">Patra bez příplatku · víkendy a svátky bez příplatku · platba hotově i kartou</p>
        </div>
      </section>

      {/* ================= DŮVĚRA / REFERENCE ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-invert">
          <h2 id="duvera-h">Držíme dohody. Ptejte se těch, kdo s námi stěhovali.</h2>
          <p>
            Jsme ryze česká firma ze Zbraslavi. Ceny se odvíjí od reálného času,
            věci jsou pojištěné do 5 milionů korun a co si domluvíme, to platí.
          </p>
        </div>

        <ul className="duvera-fakta">
          <li><strong>Zdarma</strong><span>prohlídka technikem i zapůjčení krabic</span></li>
          <li><strong>0 Kč</strong><span>příplatek za patra, víkendy a svátky</span></li>
          <li><strong>5 mil. Kč</strong><span>pojištění vašich věcí během převozu</span></li>
          <li><strong>16–42 m³</strong><span>vozy pro malé i velké stěhování</span></li>
        </ul>

        <div className="reference-grid">
          {reference.map((r) => (
            <blockquote className="ref" key={r.jmeno}>
              <p>„{r.text}“</p>
              <footer className="ref-meta">
                <cite>{r.jmeno}</cite>
                <span>{r.kdy}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="duvera-adresa">
          Najdete nás: Elišky Přemyslovny 1617, 156 00 Praha-Zbraslav ·{" "}
          <a href="tel:+420723536476">+420 723 536 476</a> ·{" "}
          <a href="mailto:info@stehovanibohemia.cz">info@stehovanibohemia.cz</a>
        </p>
      </section>
    </main>
  );
}
