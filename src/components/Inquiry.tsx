import { useState, type FormEvent } from "react";
import { EMAIL, PEOPLE, STRATA } from "../data";
import StratumDivider from "./StratumDivider";
import LearnLink from "./LearnLink";

const CHECKLIST = [
  ["Lokalita", "obec, katastrální území nebo adresa místa stavby"],
  ["Druh práce", "například výkop, nádrž, revitalizace, demolice nebo doprava materiálu"],
  ["Přibližný rozsah", "rozměry, plocha nebo objem, pokud je znáte"],
  ["Požadovaný termín", "kdy by práce měla začít a skončit"],
  ["Podklady", "fotografie, projekt nebo situační výkres přiložte do e-mailu"],
  ["U demolic", "uveďte, zda požadujete také odvoz stavební suti"],
];

const field =
  "mt-1.5 block w-full min-w-0 border border-ink bg-white/70 px-3 py-3 text-[16px] text-ink placeholder:text-ink/50";

export default function Inquiry() {
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const typ = get("typ");
    const subject = `Poptávka – ${typ || "stavební práce"}${get("lokalita") ? `, ${get("lokalita")}` : ""}`;
    const body = [
      `Jméno: ${get("jmeno")}`,
      `Telefon: ${get("telefon")}`,
      `Lokalita: ${get("lokalita")}`,
      `Druh práce: ${typ}`,
      "",
      get("popis"),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Otevírá se váš e-mailový program s předvyplněnou zprávou. Zprávu odešlete až v něm – tento web nic neodesílá. Pokud se nic neotevřelo, napište přímo na " +
        EMAIL +
        " nebo zavolejte.",
    );
  };

  return (
    <section id="poptavka" aria-labelledby="poptavka-h" className="bg-loess">
      <StratumDivider id="poptavka" variant="clay" from="#1F2124" to="#E9E1D3" stroke="#8A6A4A" hatch="#8A6A4A" />
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-4 md:px-10 md:pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/80">05 · Poptávka · km 0,480</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="poptavka-h" className="font-display text-[clamp(1.5rem,6vw,4rem)] font-extrabold uppercase leading-[0.98]">
              Jak poptat práci
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed">
              Nejrychlejší je zavolat. Pro písemnou poptávku pošlete e-mail – pomůže, když v něm budou tyto údaje:
            </p>
            <dl className="mt-6 border-t border-ink/30">
              {CHECKLIST.map(([t, d]) => (
                <div key={t} className="border-b border-ink/30 py-3">
                  <dt className="font-semibold">{t}</dt>
                  <dd className="text-ink/85">{d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 space-y-2">
              {PEOPLE.map((p) => (
                <p key={p.tel}>
                  <span className="text-ink/80">
                    {p.name}, {p.role}:{" "}
                  </span>
                  <LearnLink href={p.tel} className="tabular whitespace-nowrap font-semibold" ariaLabel={`Zavolat – ${p.name}, ${p.role}: ${p.phone}`}>
                    {p.phone}
                  </LearnLink>
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
              onSubmit={onSubmit}
              className="border border-ink bg-loess-deep/60 p-5 md:p-8"
              aria-describedby="form-note"
            >
              <h3 className="font-display text-2xl font-extrabold uppercase">Předvyplnit e-mail</h3>
              <p id="form-note" className="mt-2 text-[15px] leading-relaxed text-ink/85">
                Formulář nic neodesílá na server. Po potvrzení otevře váš e-mailový program se zprávou pro{" "}
                <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                  {EMAIL}
                </a>
                , kterou sami odešlete.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-[15px] font-medium">
                  Jméno a příjmení / organizace
                  <input name="jmeno" autoComplete="name" className={field} />
                </label>
                <label className="block text-[15px] font-medium">
                  Telefon pro zpětné zavolání
                  <input name="telefon" type="tel" autoComplete="tel" inputMode="tel" className={field} />
                </label>
                <label className="block text-[15px] font-medium">
                  Lokalita stavby
                  <input name="lokalita" className={field} placeholder="obec nebo adresa" />
                </label>
                <label className="block text-[15px] font-medium">
                  Druh práce
                  <select name="typ" className={field} defaultValue="">
                    <option value="">Vyberte…</option>
                    {STRATA.map((s) => (
                      <option key={s.id} value={s.label}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-[15px] font-medium sm:col-span-2">
                  Popis práce, rozsah a termín
                  <textarea name="popis" rows={5} className={field} />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex min-h-[48px] items-center gap-2 bg-ink px-5 py-3 font-semibold text-loess hover:bg-black"
              >
                Otevřít e-mail s poptávkou
              </button>
              <p role="status" aria-live="polite" className="mt-4 text-[15px] leading-relaxed">
                {status}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
