import { LearnChevron } from "./Icons";

const SERVICES = [
  {
    id: "krytiny",
    num: "01",
    title: "Střešní krytiny a jejich montáž",
    text: "Krytina určuje vzhled domu i to, jak střecha funguje jako celek. Při konzultaci se probere, jaký typ krytiny se hodí k vaší střeše, a domluví se montáž.",
    ask: ["Jaký vzhled krytiny chcete", "Tvar a sklon střechy", "Návaznost na okna, komín a okapy"],
  },
  {
    id: "krovy",
    num: "02",
    title: "Krovy",
    text: "Krov je nosná konstrukce, na které celá střecha stojí. Rozsah prací se domlouvá podle projektu nebo podle stavu konkrétního domu.",
    ask: ["Novostavba, nebo stávající dům", "Projektová dokumentace, pokud ji máte", "Jaká krytina na krov přijde"],
  },
  {
    id: "okna",
    num: "03",
    title: "Střešní okna",
    text: "Střešní okna přivádějí světlo do podkroví. Jejich umístění je dobré řešit současně s krytinou a krovem.",
    ask: ["Kolik světla v podkroví potřebujete", "Kde mají okna být", "Napojení na krytinu"],
  },
  {
    id: "okapy",
    num: "04",
    title: "Okapové systémy a příslušenství",
    text: "Okapy a svody odvádějí dešťovou vodu ze střechy pryč od domu. Nabídka zahrnuje okapové systémy i jejich příslušenství.",
    ask: ["Délka okapů a počet svodů", "Barva sladěná se střechou", "Nové okapy, nebo výměna stávajících"],
  },
  {
    id: "prislusenstvi",
    num: "05",
    title: "Doplňky a příslušenství",
    text: "Funkční střechu dotvářejí i detaily a doplňky. Konkrétní položky se vybírají podle zvolené krytiny a podle detailů vaší střechy.",
    ask: ["Detaily u komínu, štítu a hřebene", "Co patří ke krytině a okapům", "Sladění barev"],
  },
  {
    id: "konzultace",
    num: "06",
    title: "Konzultace a nacenění",
    text: "Nevíte si rady s výběrem? Součástí nabídky je poradenství ke střešním krytinám a nacenění střechy, krovu či okapů.",
    ask: ["Fotografie a přibližné rozměry střechy", "Co chcete řešit a kdy", "Lokalita stavby"],
  },
];

export function Services() {
  return (
    <section id="sluzby" aria-labelledby="sluzby-title" className="bg-pozink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-antracit">Nabídka</p>
          <h2 id="sluzby-title" className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Od krovu po okap
          </h2>
          <p className="mt-4 max-w-md text-antracit">
            Přehled služeb podle zveřejněné nabídky. U každé položky najdete, co je dobré mít promyšlené před
            poptávkou.
          </p>
          <figure className="mt-8">
            <img
              src="/section-1.webp"
              alt="Ilustrační obrázek střešní krytiny vytvořený AI"
              className="block aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 font-mono text-xs text-antracit">
              Ilustrační obrázek (AI) — nejde o realizaci firmy.
            </figcaption>
          </figure>
        </div>

        <ol className="lg:col-span-8">
          {SERVICES.map((s) => (
            <li key={s.id} id={s.id} className="seam-row">
              <article className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr]">
                <p className="font-mono text-sm text-cihla" aria-hidden="true">
                  {s.num}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-snug">{s.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-antracit">{s.text}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-antracit">K poptávce se hodí</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {s.ask.map((a) => (
                      <li key={a} className="rounded-sm border border-antracit/30 bg-titan/60 px-2.5 py-1 text-sm">
                        {a}
                      </li>
                    ))}
                  </ul>
                  <a href="#poptavka" className="t-learn mt-4 inline-flex min-h-11 items-center gap-1 font-display font-bold text-cihla">
                    Poptat: {s.title.toLowerCase()} <LearnChevron />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
