import { useMemo, useState } from "react";
import { CONTACT } from "../data.js";
import { useInquiry } from "../inquiry.jsx";
import DigitCounter from "./DigitCounter.jsx";
import CrateScene from "./CrateScene.jsx";
import { MailIcon, PhoneIcon } from "./Icons.jsx";

function plural(n) {
  if (n === 1) return "položka";
  if (n >= 2 && n <= 4) return "položky";
  return "položek";
}

const STEPS = [
  { no: "01", title: "Vyberte, co potřebujete", text: "Přidejte do poptávky akce, programy nebo techniku z nabídky." },
  { no: "02", title: "Doplňte termín a místo", text: "Stačí orientačně. Čím víc toho napíšete, tím přesnější může být odpověď." },
  { no: "03", title: "Pošlete e-mail nebo zavolejte", text: "Tlačítko připraví e-mail na info@gemareagency.cz. Odešlete ho až ve svém e-mailovém programu." },
];

export default function Inquiry() {
  const { items, remove, clear } = useInquiry();
  const [form, setForm] = useState({ termin: "", misto: "", hoste: "", jmeno: "", poznamka: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailto = useMemo(() => {
    const lines = ["Dobrý den,", "", "prosím o nezávaznou nabídku na:"];
    if (items.length) items.forEach((it) => lines.push(`- ${it.name} (${it.id})`));
    else lines.push("- (doplňte, o co máte zájem)");
    lines.push("");
    lines.push(`Termín: ${form.termin || ""}`);
    lines.push(`Místo konání: ${form.misto || ""}`);
    lines.push(`Přibližný počet hostů: ${form.hoste || ""}`);
    lines.push(`Poznámka: ${form.poznamka || ""}`);
    lines.push("");
    lines.push(`Kontakt: ${form.jmeno || ""}`);
    const subject = "Poptávka akce";
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [items, form]);

  const n = items.length;

  return (
    <section id="poptavka" className="inquiry" aria-labelledby="poptavka-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Poptávkový vozík</p>
          <h2 id="poptavka-title" className="section-title">
            Naložte, co potřebujete.
            <br />
            Pošlete jedním e-mailem.
          </h2>
        </div>

        <div className="inquiry-grid">
          <div className="ticket">
            <div className="ticket-stub">
              <div>
                <p className="ticket-kicker">Lístek k poptávce</p>
                <p className="ticket-sub">GEMARE AGENCY · Olomouc</p>
              </div>
              <div className="ticket-count">
                <span className="ticket-count-label">Naloženo</span>
                <DigitCounter value={n} className="ticket-digits" />
              </div>
            </div>
            <div className="ticket-perf" aria-hidden="true" />
            <div className="ticket-body">
              <p className="sr-only" aria-live="polite">
                V poptávce: {n} {plural(n)}
              </p>
              {n === 0 ? (
                <p className="ticket-empty">
                  Zatím prázdné. Položky přidáte v sekci <a href="#nabidka">Nabídka</a>.
                </p>
              ) : (
                <ul className="ticket-list">
                  {items.map((it) => (
                    <li key={it.id}>
                      <span className="ticket-code">{it.id}</span>
                      <span className="ticket-name">{it.name}</span>
                      <button type="button" className="ticket-remove" onClick={() => remove(it.id)} aria-label={`Odebrat ${it.name}`}>
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <noscript>
                <p className="ticket-empty">
                  Bez JavaScriptu vozík nefunguje. Napište přímo na{" "}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> nebo zavolejte na{" "}
                  <a href={CONTACT.mobile.href}>{CONTACT.mobile.label}</a>.
                </p>
              </noscript>

              <div className="fields">
                <label>
                  <span>Termín</span>
                  <input type="text" value={form.termin} onChange={set("termin")} placeholder="např. červen, sobota" autoComplete="off" />
                </label>
                <label>
                  <span>Místo konání</span>
                  <input type="text" value={form.misto} onChange={set("misto")} placeholder="město, areál" autoComplete="off" />
                </label>
                <label>
                  <span>Přibližný počet hostů</span>
                  <input type="text" inputMode="numeric" value={form.hoste} onChange={set("hoste")} autoComplete="off" />
                </label>
                <label>
                  <span>Vaše jméno a telefon</span>
                  <input type="text" value={form.jmeno} onChange={set("jmeno")} autoComplete="name" />
                </label>
                <label className="full">
                  <span>Poznámka</span>
                  <textarea rows={3} value={form.poznamka} onChange={set("poznamka")} />
                </label>
              </div>

              <div className="ticket-actions">
                <a href={mailto} className="btn btn-primary">
                  <MailIcon /> Připravit e-mail s poptávkou
                </a>
                {n > 0 && (
                  <button type="button" className="btn btn-ghost" onClick={clear}>
                    Vyprázdnit
                  </button>
                )}
              </div>
              <p className="ticket-note">
                Tlačítko otevře váš e-mailový program s předvyplněnou zprávou. Tento web nic neodesílá – zprávu
                odešlete až vy.
              </p>
              <p className="ticket-phones">
                Raději telefonicky?{" "}
                <a href={CONTACT.mobile.href}>
                  <PhoneIcon /> mobil {CONTACT.mobile.label}
                </a>{" "}
                <a href={CONTACT.landline.href}>
                  <PhoneIcon /> pevná linka {CONTACT.landline.label}
                </a>
              </p>
            </div>
          </div>

          <div className="inquiry-side">
            <CrateScene count={n} />
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.no}>
                  <span className="step-no">{s.no}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
