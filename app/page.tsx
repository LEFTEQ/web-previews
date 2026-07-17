import { AiImage } from "./_ui";

function Shelter({ variant }: { variant?: string }) {
  return (
    <svg
      className={`shelter${variant ? " shelter--" + variant : ""}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <path className="shelter__path" d="M7 116 L7 7 L116 7" />
    </svg>
  );
}

const apartments = [
  {
    n: "01",
    name: "Apartmán 1",
    tag: "Ložnice + oddělená přistýlka",
    specs: [
      ["Kapacita", "4 osoby — 2 lůžka v ložnici, 2 přistýlky v oddělené místnosti"],
      ["Koupelna", "Sprchový kout, umyvadlo, WC, pračka, topný žebřík"],
      ["Obývací pokoj", "Sedací kout s přistýlkou, jídelní i kuchyňský kout"],
      ["Kuchyně", "Trouba, myčka, mikrovlnka, lednice, konvice, toustovač, gril"],
      ["Parkování", "Přímo v objektu · nabíječka elektromobilu za příplatek"],
      ["E-kola", "2 elektrokola k zapůjčení na místě"],
    ],
    photos: [
      "Bright new-build Czech apartment living room, pale oak floor, sage-green wall, minimal Scandinavian furniture, soft daylight",
      "Modern compact kitchenette with matte cabinets, oven and dishwasher, clean 2022 new-build interior",
      "Neat bedroom with two single beds, white linen, warm honey wood headboard, calm morning light",
    ],
  },
  {
    n: "02",
    name: "Apartmán 2",
    tag: "Zrcadlová dispozice, stejný komfort",
    specs: [
      ["Kapacita", "4 osoby — 2 lůžka v ložnici, 2 přistýlky v oddělené místnosti"],
      ["Koupelna", "Sprchový kout, umyvadlo, WC, pračka, topný žebřík"],
      ["Obývací pokoj", "Sedací kout s přistýlkou, jídelní i kuchyňský kout"],
      ["Kuchyně", "Trouba, myčka, mikrovlnka, lednice, konvice, toustovač, gril"],
      ["Parkování", "Přímo v objektu · nabíječka elektromobilu za příplatek"],
      ["E-kola", "2 elektrokola k zapůjčení na místě"],
    ],
    photos: [
      "Cozy new apartment dining nook by a window, light wood table, meadow view outside, calm interior",
      "Small modern bathroom with walk-in shower, heated towel rail, white tiles, fresh 2022 finish",
      "Comfortable sofa with extra fold-out bed in a bright living area, muted green and cream tones",
    ],
  },
  {
    n: "03",
    name: "Apartmán 3",
    tag: "Prostor pro větší rodinu",
    specs: [
      ["Kapacita", "6 osob — vhodné pro větší rodinu nebo dvě rodiny"],
      ["Koupelna", "Sprchový kout, umyvadlo, WC, pračka, topný žebřík"],
      ["Obývací pokoj", "Sedací kout s přistýlkou, jídelní i kuchyňský kout"],
      ["Kuchyně", "Trouba, myčka, mikrovlnka, lednice, konvice, toustovač, gril"],
      ["Parkování", "Přímo v objektu · nabíječka elektromobilu za příplatek"],
      ["E-kola", "2 elektrokola k zapůjčení na místě"],
    ],
    photos: [
      "Spacious new-build family apartment interior, open-plan living and kitchen, pale wood and soft green walls",
      "Family bedroom with several beds, natural light, warm minimal Czech new-build styling",
      "Outdoor seating area in front of a modern apartment, wooden bench, quiet village edge, greenery",
    ],
  },
];

const tips = [
  ["ZOO a Techmania", "Plzeňská zoologická zahrada i Techmania Science Center — do města je to 7 km."],
  ["Hrady a zámky", "Radyně, Kozel nebo Šťáhlavy na výlet — všechno v dosahu odpoledne."],
  ["Procházky a pejsci", "Klidná starší část obce, louky a lesy hned za humny. Ideální i pro pejskaře."],
  ["Kraj Šumavy", "Na první šumavské výlety to od nás není zdaleka tak daleko, jak byste čekali."],
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span>Apartmány</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>Losiná 7 km od Plzně</span>
          </p>

          <div className="hero__mark">
            <Shelter variant="hero" />
            <h1 id="hero-title" className="hero__word">
              Závětří
            </h1>
          </div>

          <p className="hero__lede">
            Nové apartmány dostavěné v roce 2022, schované v klidné části
            Losiné. Kousek do plzeňské přírody, parkování máte přímo v objektu
            — a klid, který poznáte hned podle jména.
          </p>

          <ul className="hero__chips" aria-label="Co u nás najdete">
            <li>Pro rodiny s dětmi</li>
            <li>Parkování v objektu</li>
            <li>Nabíječka i e-kola</li>
          </ul>

          <a className="hero__cta" href="#apartmany">
            Prohlédnout apartmány
          </a>
        </div>
      </section>

      <section className="section apartments" id="apartmany" aria-labelledby="apt-title">
        <header className="shead">
          <Shelter />
          <p className="shead__eyebrow">Tři apartmány · jeden objekt</p>
          <h2 id="apt-title" className="shead__title">Ubytování</h2>
          <p className="shead__note">
            Každý apartmán je vlastní jednotka s kuchyní a koupelnou. Vyberte si
            podle počtu osob — u dvojky i trojky posedíte i venku před apartmánem.
          </p>
        </header>

        <div className="specimens">
          {apartments.map((a) => (
            <article className="specimen" key={a.n} aria-labelledby={`apt-${a.n}`}>
              <Shelter />
              <div className="specimen__head">
                <span className="specimen__index" aria-hidden="true">{a.n}</span>
                <div>
                  <h3 id={`apt-${a.n}`} className="specimen__name">{a.name}</h3>
                  <p className="specimen__tag">{a.tag}</p>
                </div>
              </div>

              <dl className="spec">
                {a.specs.map(([k, v]) => (
                  <div className="spec__row" key={k}>
                    <dt className="spec__key">{k}</dt>
                    <dd className="spec__val">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="strip" role="group" aria-label={`Fotografie – ${a.name}`}>
                {a.photos.map((p, i) => (
                  <figure className="strip__item" key={i}>
                    <AiImage
                      src={p}
                      alt={`${a.name} — interiér ${i + 1}`}
                      className="strip__img"
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section place" id="o-nas" aria-labelledby="place-title">
        <header className="shead shead--onlight">
          <Shelter />
          <p className="shead__eyebrow">O místě · Kudy k nám</p>
          <h2 id="place-title" className="shead__title">Klid, který poznáte podle jména</h2>
        </header>

        <div className="place__grid">
          <div className="place__lede">
            <p>
              Závětří najdete ve starší, klidné části Losiné, sedm kilometrů od
              Plzně. Je to místo pro rodiny — kolem samé louky a lesy, krásné
              procházky i pro pejskaře, a přesto máte město i všechny výlety na
              dosah. Ubytování je zcela nové, dostavěné v roce 2022.
            </p>
            <div className="place__pins">
              <div className="pin">
                <Shelter variant="pin" />
                <p className="pin__label">Adresa</p>
                <p className="pin__val">Ukázková 123, Plzeň</p>
              </div>
              <div className="pin">
                <Shelter variant="pin" />
                <p className="pin__label">Rezervace a dotazy</p>
                <p className="pin__val">+420 777 111 222</p>
                <p className="pin__hint">k dispozici od 8 do 17 hodin</p>
              </div>
            </div>
          </div>

          <ul className="tips" aria-label="Kam se od nás vydat">
            {tips.map(([t, d]) => (
              <li className="tip" key={t}>
                <h3 className="tip__title">{t}</h3>
                <p className="tip__desc">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
