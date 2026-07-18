import { OrderNo, Stamp } from "./motion";

const pizza = [
  { n: "Margherita", p: 195, d: "rajče, sugo, oregano, kulička mozzarelly" },
  { n: "Funghi", p: 195, d: "sýr, sugo, žampiony" },
  { n: "Diavola", p: 210, d: "sýr, sugo, salám, kozí rohy, feferonky, chilli papričky" },
  { n: "Capricciosa", p: 205, d: "sýr, sugo, žampiony, šunka, salám, kozí rohy" },
  { n: "Quattro Formaggi", p: 220, d: "sugo, niva, hermelín, mozzarella, gouda" },
  { n: "Hawai", p: 210, d: "sýr, sugo, šunka, ananas" },
  { n: "Krevetová", p: 230, d: "sýr, sugo, česnek, krevety" },
  { n: "Hermelínová", p: 220, d: "sýr, šunka, hermelín, smetana, brusinky" },
];

const calzone = [
  { n: "Calzone Parma", p: 240, d: "sýr, sugo, parmská šunka, olivy" },
  { n: "Calzone Formaggi", p: 240, d: "čtyři sýry zapečené v těstové kapse" },
];

const speciality = [
  { n: "Lososová", p: 220, d: "losos, černé olivy, mozzarella" },
  { n: "Pizza chléb", p: 140, d: "sýr, česnek" },
  { n: "Pizza chléb se slaninou", p: 165, d: "sýr, česnek, anglická slanina" },
];

const kuchyne = [
  { n: "Rajčatová krémová", p: 80, d: "polévka" },
  { n: "Česnečka", p: 65, d: "polévka" },
  { n: "Plzeň 12 (plech)", p: 60, d: "0,5 l" },
  { n: "Pepsi Cola (plech)", p: 38, d: "0,33 l" },
  { n: "COOL grep nealko", p: 45, d: "0,5 l" },
];

function Rows({ items }: { items: { n: string; p: number; d: string }[] }) {
  return (
    <ul className="rows">
      {items.map((it) => (
        <li className="row" key={it.n}>
          <div className="row-head">
            <span className="row-name">{it.n}</span>
            <span className="dots" aria-hidden="true" />
            <span className="row-price">{it.p}&nbsp;Kč</span>
          </div>
          <span className="row-desc">{it.d}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Lišov u Českých Budějovic · pec topíme každý den
            </p>
            <h1 className="wordmark">
              <span className="wm-1">PIZZERIE</span>
              <span className="wm-2">LIŠOV</span>
            </h1>
            <p className="lede">
              Pečeme od 10 do 21:30. Zavoláte, my vás zařadíme do fronty a řekneme
              vám poctivý čas — žádné plané sliby. Rozvoz i osobní vyzvednutí.
            </p>
            <p className="hero-ops" aria-label="Telefon a otevírací doba">
              <span>TEL 777 111 222</span>
              <span className="sep" aria-hidden="true">/</span>
              <span>DENNĚ 10–22</span>
            </p>
          </div>

          <div className="hero-ticket-wrap">
            <div className="printer-slot" aria-hidden="true" />
            <div className="ticket hero-ticket" role="img" aria-label="Ukázkový objednávkový lístek: objednávka číslo 07, rozvoz do Lišova, Margherita a Diavola, celkem 405 Kč, platba hotovostí, jste v pořadí.">
              <div className="t-brand">PIZZERIE&nbsp;LIŠOV</div>
              <div className="t-tear" aria-hidden="true" />
              <div className="t-line t-order">
                <span>OBJEDNÁVKA</span>
                <span className="t-no">#<OrderNo /></span>
              </div>
              <div className="t-line"><span>ROZVOZ · LIŠOV</span><span>18:32</span></div>
              <div className="t-dots" aria-hidden="true" />
              <div className="t-line"><span>1× Margherita</span><span>195</span></div>
              <div className="t-line"><span>1× Diavola</span><span>210</span></div>
              <div className="t-dots" aria-hidden="true" />
              <div className="t-line t-total"><span>CELKEM</span><span>405&nbsp;Kč</span></div>
              <div className="t-line t-pay"><span>PLATBA</span><span>HOTOVOST</span></div>
              <div className="t-tear" aria-hidden="true" />
              <div className="t-foot">
                <span className="t-foot-label">VAŠE POŘADÍ</span>
                <Stamp />
              </div>
              <p className="t-note">Večeříte cca po 20:00. Díky za trpělivost.</p>
            </div>
          </div>
        </div>
      </header>

      {/* MENU */}
      <section className="band band-light" aria-labelledby="menu-h">
        <div className="wrap">
          <div className="band-head">
            <h2 id="menu-h" className="band-title">Z pece</h2>
            <p className="band-sub">
              Ceny jsou konečné. Rozvoz mimo Lišov je zpoplatněn dle vzdálenosti —
              přesnou částku vám řekneme do telefonu.
            </p>
          </div>

          <div className="tickets">
            <article className="ticket menu-ticket reveal">
              <div className="mt-head"><span className="mt-no">01</span><h3 className="mt-name">Pizza</h3></div>
              <Rows items={pizza} />
            </article>

            <article className="ticket menu-ticket reveal">
              <div className="mt-head"><span className="mt-no">02</span><h3 className="mt-name">Calzone</h3></div>
              <Rows items={calzone} />
            </article>

            <article className="ticket menu-ticket reveal">
              <div className="mt-head"><span className="mt-no">03</span><h3 className="mt-name">Speciality</h3></div>
              <Rows items={speciality} />
            </article>

            <article className="ticket menu-ticket reveal">
              <div className="mt-head"><span className="mt-no">04</span><h3 className="mt-name">Z kuchyně &amp; nápoje</h3></div>
              <Rows items={kuchyne} />
            </article>
          </div>
        </div>
      </section>

      {/* JAK TO CHODÍ / DŮVĚRA */}
      <section className="band band-dark" aria-labelledby="about-h">
        <div className="wrap about-grid">
          <div className="about-copy">
            <h2 id="about-h" className="band-title band-title-inv">Jak to u nás chodí</h2>
            <p className="about-p">
              Objednávky řadíme do fronty zákazníků, kteří se dovolali před vámi.
              Večer je náporů nejvíc, tak volejte s předstihem — objednáte-li v
              sobotu v 18:00, večeříte zpravidla po 20:00. Radši řekneme pravdu než
              hezké číslo.
            </p>
            <p className="about-p">
              Rozvozy placené <strong>hotově</strong> vyřizujeme přednostně — máme
              jen omezený počet přenosných terminálů. Platíte kartou? Řekněte to
              hned při objednávce, ať vám jeden terminál dovezeme.
            </p>
            <p className="signed">Daniel Šmejkal — jednatel</p>
          </div>

          <aside className="ticket thermal" aria-label="Provozní informace vytištěné jako účtenka">
            <div className="th-h">PROSÍM ČTĚTE</div>
            <div className="t-dots dark" aria-hidden="true" />
            <dl className="th-list">
              <div className="th-item"><dt>Rozvoz Lišov</dt><dd>40–80 min</dd></div>
              <div className="th-item"><dt>Vzdálenější obce</dt><dd>60–140 min</dd></div>
              <div className="th-item"><dt>Osobní vyzvednutí</dt><dd>cca 30 min</dd></div>
            </dl>
            <div className="t-dots dark" aria-hidden="true" />
            <dl className="th-list">
              <div className="th-item"><dt>Po–Pá</dt><dd>10:00–22:00</dd></div>
              <div className="th-item"><dt>So</dt><dd>10:00–22:00</dd></div>
              <div className="th-item"><dt>Ne</dt><dd>10:00–20:00</dd></div>
            </dl>
            <div className="t-dots dark" aria-hidden="true" />
            <div className="th-contact">
              <div>777 111 222</div>
              <div>info@example.cz</div>
              <div>Ukázková 123, České Budějovice</div>
            </div>
            <p className="th-close">Příjem objednávek končí v 21:20.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
