import type { FormEvent } from "react";
import { EMAIL, PHONES } from "../data";
import { MailIcon, PhoneIcon } from "./Icons";

const TOPICS = [
  "Střešní krytina a montáž",
  "Krov",
  "Střešní okna",
  "Okapový systém a příslušenství",
  "Doplňky",
  "Konzultace a nacenění",
  "Jiné",
];

export function Inquiry() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const topic = get("tema") || "Poptávka";
    const body = [
      `Jméno: ${get("jmeno")}`,
      `Telefon: ${get("telefon")}`,
      `Lokalita stavby: ${get("lokalita")}`,
      `Téma: ${topic}`,
      "",
      get("zprava"),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Poptávka: " + topic)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="poptavka" aria-labelledby="poptavka-title" className="bg-pozink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-antracit">Poptávka</p>
          <h2 id="poptavka-title" className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Nejrychleji po telefonu
          </h2>
          <p className="mt-4 text-antracit">Zavolejte přímo z mobilu, nebo připravte e-mail s poptávkou.</p>
          <div className="mt-6 grid gap-3">
            {PHONES.map((p) => (
              <a key={p.href} href={p.href} className="btn btn-primary justify-start text-lg">
                <PhoneIcon /> <span className="whitespace-nowrap">{p.label}</span>
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="btn btn-secondary justify-start">
              <MailIcon /> <span className="break-all">{EMAIL}</span>
            </a>
          </div>

          <h3 className="mt-10 font-display text-xl font-bold">Co se k poptávce hodí</h3>
          <ul className="mt-3 grid gap-2">
            {[
              "Fotografie střechy a detailů (okapy, komín, okna)",
              "Přibližné rozměry, případně projektová dokumentace",
              "Co chcete řešit: krytina, krov, okna, okapy, doplňky",
              "Lokalita stavby a kontakt na vás",
            ].map((t) => (
              <li key={t} className="seam-item">
                {t}
              </li>
            ))}
          </ul>

          <figure className="mt-8">
            <img
              src="/section-2.webp"
              alt="Ilustrační obrázek detailu střechy vytvořený AI"
              className="block aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 font-mono text-xs text-antracit">
              Ilustrační obrázek (AI) — nejde o realizaci firmy.
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-7">
          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            onSubmit={onSubmit}
            className="border border-antracit/25 bg-titan p-5 sm:p-8"
            aria-describedby="form-note"
          >
            <h3 className="font-display text-2xl font-bold">Připravit e-mail s poptávkou</h3>
            <p id="form-note" className="mt-2 text-sm text-ocel">
              Tlačítko otevře váš e-mailový program s předvyplněnou zprávou na adresu {EMAIL}. Tento web sám nic
              neodesílá — zprávu odešlete až ze svého e-mailu.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="field">
                <span>Jméno</span>
                <input name="jmeno" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" inputMode="tel" />
              </label>
              <label className="field">
                <span>Lokalita stavby</span>
                <input name="lokalita" placeholder="obec nebo část Ostravy" />
              </label>
              <label className="field">
                <span>Co řešíte</span>
                <select name="tema" defaultValue={TOPICS[0]}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="field sm:col-span-2">
                <span>Popis</span>
                <textarea name="zprava" rows={5} placeholder="Stručně popište střechu a co potřebujete." />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
              <MailIcon /> Otevřít e-mail s poptávkou
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
