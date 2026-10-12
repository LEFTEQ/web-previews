export const EMAIL = "info@parket-pandomo.cz";

export const PEOPLE = [
  { name: "Bc. Ladislav Bartoň", tel: "+420773111162", display: "+420 773 111 162" },
  { name: "Petr Toman", tel: "+420773111187", display: "+420 773 111 187" },
] as const;

export const MAIN_PHONE = PEOPLE[0];

export const SHOWROOM = {
  street: "Slovinská 752/7",
  city: "Praha 10, 101 00",
  note: "Návštěva po telefonické domluvě.",
  map: "https://mapy.cz/zakladni?q=Slovinsk%C3%A1%20752%2F7%2C%20Praha%2010",
};

export const SEAT = {
  company: "Parket&pandomo s.r.o.",
  street: "Na Konci světa 504",
  city: "250 64 Hovorčovice",
};

export const NAV = [
  { href: "#nabidka", label: "Nabídka" },
  { href: "#pandomo", label: "panDOMO" },
  { href: "#drevene-podlahy", label: "Dřevěné podlahy" },
  { href: "#dvere-a-vyroba", label: "Dveře a výroba" },
  { href: "#poradna", label: "Poradna" },
  { href: "#kontakt", label: "Kontakt" },
];

export function mailto(subject: string, body = "") {
  const q = [`subject=${encodeURIComponent(subject)}`];
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}?${q.join("&")}`;
}
