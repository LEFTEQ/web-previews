import { AiImage } from "./_ui";
import { SortingSpine } from "./motion";

const services = [
  {
    num: "A",
    stream: "var(--amber)",
    streamName: "Směsný odpad",
    title: "Svoz komunálního odpadu",
    body:
      "Pravidelný odvoz popelnic a kontejnerů podle pevného harmonogramu — pro domácnosti, bytové domy i firmy. Trasu plánujeme tak, aby vůz na vaší ulici zastavil vždy ve stejný den.",
  },
  {
    num: "B",
    stream: "var(--blue)",
    streamName: "Papír · plast · sklo",
    title: "Tříděný sběr",
    body:
      "Papír, plast, sklo i bioodpad z barevných kontejnerů na chodníku, nebo pytlový svoz od dveří. Každý proud jede do svého zařízení, ne na jednu hromadu.",
  },
  {
    num: "C",
    stream: "var(--iron)",
    streamName: "Kanalizace",
    title: "Kanalizace a odpadní vody",
    body:
      "Tlakové čištění a kamerový monitoring kanalizací, odvoz jímek, septiků a odpadních vod. Přijedeme s cisternou i tam, kde stojatá voda nepočká.",
  },
  {
    num: "D",
    stream: "var(--green)",
    streamName: "Objemný odpad",
    title: "Kontejnery na míru",
    body:
      "Přistavení kontejneru na stavební suť, zeminu nebo velkoobjemový odpad — na den, na týden, nebo podle stavby. Naložíme, odvezeme a chodník po nás zůstane čistý.",
  },
];

const stats = [
  { k: "5", v: "tříděných proudů — papír, plast, sklo, bio a směs pod jednou svozovou sítí" },
  { k: "Praha", v: "a Střední Čechy: svoz, sběrné dvory i provozovny na dosah" },
  { k: "Zdarma", v: "infolinka 777 111 222 pro domácnosti i firmy" },
];

export default function Page() {
  return (
    <div className="layout">
      <SortingSpine />
      <main className="main">
        {/* ---------- HERO / band 01 ---------- */}
        <section id="band-hero" className="band band--hero">
          <div className="wrap hero">
            <div className="hero__text">
              <div className="lid" style={{ ["--cap" as string]: "var(--blue)" }}>
                <span className="lid__cap" />
                <span className="lid__num">01</span>
                <span className="lid__text">Odpadové hospodářství · Praha</span>
              </div>

              <h1 className="hero__h1">
                Čistá budoucnost
                <br />
                začíná u&nbsp;správného
                <br />
                <span className="hero__accent">kontejneru.</span>
              </h1>

              <p className="hero__lead">
                Svážíme komunální i&nbsp;tříděný odpad, čistíme kanalizace
                a&nbsp;provozujeme sběrné dvory po&nbsp;celé Praze. Každý svoz
                míří do&nbsp;svého proudu — papír, plast, sklo, bio
                i&nbsp;směs. Nic navíc, nic na&nbsp;jednu hromadu.
              </p>

              <div className="hero__meta">
                <span className="hero__metaLabel">Infolinka zdarma</span>
                <span className="hero__metaValue">777 111 222</span>
              </div>
            </div>

            <div className="hero__media">
              <AiImage
                src="/hero.webp"
                alt="Svozový vůz AVE v amber livreji při svozu tříděného odpadu v pražské ulici"
                className="hero__img"
              />
            </div>
          </div>
        </section>

        {/* ---------- SLUŽBY / band 02 ---------- */}
        <section id="band-sluzby" className="band band--light">
          <div className="wrap">
            <div className="lid" style={{ ["--cap" as string]: "var(--amber)" }}>
              <span className="lid__cap" />
              <span className="lid__num">02</span>
              <span className="lid__text">Co pro vás odvezeme</span>
            </div>

            <h2 className="band__h2">
              Čtyři proudy, jedna dobře naplánovaná trasa
            </h2>
            <p className="band__intro">
              Odpad se u&nbsp;nás rozdělí hned na&nbsp;začátku — u&nbsp;vaší
              popelnice. Vyberte, co potřebujete odvézt, a&nbsp;my se
              postaráme, aby to skončilo tam, kam patří.
            </p>

            <ul className="svc">
              {services.map((s) => (
                <li
                  key={s.num}
                  className="svc__card"
                  style={{ ["--stream" as string]: s.stream }}
                >
                  <span className="svc__lid" />
                  <div className="svc__head">
                    <span className="svc__num">{s.num}</span>
                    <span className="svc__stream">{s.streamName}</span>
                  </div>
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__body">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- O NÁS / band 03 ---------- */}
        <section id="band-onas" className="band band--dark">
          <div className="wrap about">
            <div className="about__col">
              <div className="lid" style={{ ["--cap" as string]: "var(--green)" }}>
                <span className="lid__cap" />
                <span className="lid__num">03</span>
                <span className="lid__text">Čistá budoucnost</span>
              </div>

              <h2 className="band__h2">
                Sloganem na&nbsp;autě to nekončí
              </h2>
              <p className="about__body">
                Působíme tam, kde po&nbsp;sobě člověk nechává stopu —
                a&nbsp;naším úkolem je ji zmenšit. Svážíme, třídíme
                a&nbsp;zpracováváme odpad tak, aby se co nejvíc vrátilo
                zpět do&nbsp;oběhu. „Čistá budoucnost“ pro nás není slogan
                na&nbsp;kontejneru, ale způsob, jak plánujeme každou trasu
                i&nbsp;každý svoz.
              </p>

              <blockquote className="quote">
                <p>
                  „Kontejner přistaví přesně na&nbsp;den, kdy ho potřebujeme —
                  a&nbsp;chodník po&nbsp;něm zůstane v&nbsp;pořádku.“
                </p>
                <cite>Správa bytového domu, Praha 8</cite>
              </blockquote>
            </div>

            <div className="about__col">
              <div className="about__media">
                <AiImage
                  src="/section-2.webp"
                  alt="Řada barevných kontejnerů na tříděný odpad před provozovnou AVE"
                  className="about__img"
                />
              </div>

              <dl className="stats">
                {stats.map((st) => (
                  <div className="stat" key={st.k}>
                    <dt className="stat__k">{st.k}</dt>
                    <dd className="stat__v">{st.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
