import { AiImage } from "./_ui";

const sluzby = [
  {
    kod: "01",
    nazev: "Sportovci a aktivní lidé",
    text: "Kondiční testování, zátěžový trénink a metoda McKenzie. Vrátíme vás k pohybu i k výkonu — a nastavíme cestu, jak se ke zranění už nevracet.",
    metody: ["McKenzie", "Zátěžový trénink", "Kondiční testy"],
  },
  {
    kod: "02",
    nazev: "Těhotné ženy a pánevní dno",
    text: "Péče před porodem, během něj i po něm. Pánevní dno žen i mužů, diastáza a metoda Ludmily Mojžíšové s gynekologicko-urologickým přístupem PPA.",
    metody: ["Metoda L. Mojžíšové", "PPA", "Diastáza"],
  },
  {
    kod: "03",
    nazev: "Miminka a dětské nožičky",
    text: "Vývojová kineziologie a Vojtova metoda pro ty nejmenší. Sledujeme, jak se dítě vyvíjí, a včas podchytíme nožičky i držení těla.",
    metody: ["Vývojová kineziologie", "Vojtova metoda", "DNS"],
  },
  {
    kod: "04",
    nazev: "Bolesti zad a po úrazu",
    text: "Manuální terapie, fasciální manipulace dle Stecca a moderní elektroterapie. Řešíme akutní i chronické potíže i stavy po operaci.",
    metody: ["Manuální terapie", "Fasciální manipulace", "Elektroterapie"],
  },
];

const tym = [
  { ini: "NK", jmeno: "Bc. Natália Kočařová", role: "Pánevní dno · diastáza", text: "Pánevní dno žen i mužů, poúrazové a pooperační stavy, metoda Ludmily Mojžíšové a DNS." },
  { ini: "TK", jmeno: "Bc. Terezie Kánská", role: "Manuální terapie", text: "Manuální techniky a aktivní kinezioterapie na míru. Bolavá záda i sportovci." },
  { ini: "MK", jmeno: "Ing. Michal Kačerovský", role: "McKenzie · sport", text: "McKenzie se zátěžovým tréninkem i fasciální manipulace — od miminek po sportovce." },
  { ini: "VK", jmeno: "Bc. Veronika Kučerová", role: "Děti · těhotné", text: "Vývojová kineziologie, dětské nožičky, těhotné a metoda L. Mojžíšové." },
  { ini: "JM", jmeno: "Mgr. Jana Mihulková", role: "Vojtova metoda", text: "Vojtova metoda pro dospělé, DNS, SM-systém, kineziotaping a respirační fyzioterapie." },
  { ini: "PV", jmeno: "Petra Vicanová", role: "Masáže", text: "Relaxační, sportovní i zdravotní masáže, hluboké bolestivé body a reflexní masáž chodidel." },
  { ini: "KV", jmeno: "Mgr. Bc. Klára Vomáčková", role: "Ženy · miminka", text: "Ženy v těhotenství i po něm, PPA, vyhodnocení cyklů dle STM a fyzioterapie miminek." },
  { ini: "BH", jmeno: "Bc. Barbora Hofmannová", role: "Porodní asistentka", text: "Provází ženy před těhotenstvím, během něj i po něm — poradna, lekce i individuální cvičení." },
  { ini: "AŘ", jmeno: "Mgr. Aleš Řehoř", role: "Kondiční terapeut", text: "Otestuje vás a nastaví nejlepší cestu k vašim pohybovým cílům." },
];

export default function Page() {
  return (
    <main>
      <section className="section hero">
        <span className="blob blob-a" aria-hidden="true" />
        <span className="blob blob-b" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="brand" aria-label="Fit and Tasty — fyzioterapie Brno">
            <span className="brand-mark" aria-hidden="true">FT</span>
            <span className="brand-name">Fit<em>and</em>Tasty <span>fyzioterapie</span></span>
          </div>

          <p className="eyebrow rotator">
            <span className="rw rw1">Diagnostika</span>
            <span className="dot" aria-hidden="true">•</span>
            <span className="rw rw2">Terapie</span>
            <span className="dot" aria-hidden="true">•</span>
            <span className="rw rw3">Prevence</span>
          </p>

          <h1 className="hero-title">
            Fyzioterapie pro zdravý pohyb <span className="nowrap">v&nbsp;každém věku</span>
          </h1>

          <svg className="hero-arc" viewBox="0 0 640 90" role="img" aria-label="Oblouk rozsahu pohybu" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tape" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ff6a54" />
                <stop offset="0.55" stopColor="#15a196" />
                <stop offset="1" stopColor="#82b93f" />
              </linearGradient>
            </defs>
            <path className="tape" d="M12 58 C 150 8, 250 8, 350 46 S 540 86, 628 30" fill="none" stroke="url(#tape)" strokeWidth="15" strokeLinecap="round" />
            <path className="tape tape-line" d="M12 58 C 150 8, 250 8, 350 46 S 540 86, 628 30" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 12" />
          </svg>

          <p className="hero-lead">
            Soukromé fyzioterapeutické pracoviště v Brně, nově i ve Velkém Meziříčí.
            Pomáháme s prevencí i léčbou pohybových obtíží moderními metodami — od sportovců
            přes těhotné ženy po ta nejmenší miminka.
          </p>

          <div className="cta-row">
            <a className="btn btn-primary" href="#rezervace">Rezervovat termín</a>
            <a className="btn btn-ghost" href="#programy">Online programy</a>
          </div>

          <p className="hero-note">
            <span aria-hidden="true">📍</span> U zastávky Kartouzská (tram 1 a 6), Brno — v přízemí kavárna PUNKT
          </p>
        </div>
      </section>

      <section className="section services" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <p className="eyebrow eyebrow-teal">Co u nás řešíme</p>
          <h2 id="sluzby-nadpis" className="section-title">Terapie šitá na míru vašemu tělu</h2>
          <p className="section-lead">
            Nejste si jistí výběrem fyzioterapeuta? Poradíme vám. Ke každému přistupujeme podle
            toho, co jeho tělo právě potřebuje — ne podle šablony.
          </p>

          <svg className="divider-arc" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 30 C 300 4, 500 4, 700 24 S 1000 40, 1200 12" fill="none" stroke="url(#tape)" strokeWidth="6" strokeLinecap="round" />
          </svg>

          <ul className="cards">
            {sluzby.map((s) => (
              <li className="card" key={s.kod}>
                <span className="card-kod" aria-hidden="true">{s.kod}</span>
                <h3 className="card-title">{s.nazev}</h3>
                <p className="card-text">{s.text}</p>
                <ul className="tags">
                  {s.metody.map((m) => (
                    <li key={m} className="tag">{m}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section team" aria-labelledby="tym-nadpis">
        <div className="wrap">
          <p className="eyebrow eyebrow-coral">Náš tým</p>
          <h2 id="tym-nadpis" className="section-title">Lidé, kteří vás dají do pohybu</h2>
          <p className="section-lead">
            Devět fyzioterapeutů, porodní asistentka i kondiční terapeut. Každý má svou
            specializaci — společně pokryjeme celou rodinu od miminka po babičku.
          </p>

          <ul className="people">
            {tym.map((p) => (
              <li className="person" key={p.ini}>
                <span className="avatar" aria-hidden="true">{p.ini}</span>
                <div className="person-body">
                  <h3 className="person-name">{p.jmeno}</h3>
                  <p className="person-role">{p.role}</p>
                  <p className="person-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="info-grid">
            <article className="info info-a">
              <h3 className="info-title">Co vzít s sebou?</h3>
              <p>
                Ideálně žádanku od lékaře nebo zprávu s doporučením na fyzioterapii — přijít
                ale můžete i bez nich. Vezměte si ručník a něco pohodlného na převlečení
                (kraťasy, legíny, tričko).
              </p>
            </article>
            <article className="info info-b">
              <h3 className="info-title">Jak se k nám dostanete?</h3>
              <p>
                Jsme hned u zastávky Kartouzská (tram 1 a 6). Parkovat lze v okolí — zóna C,
                zatím zdarma do 17 hodin. Najdete nás v 1. patře, v přízemí je kavárna PUNKT.
                S kočárkem se domluvíme na kočárkárně.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
