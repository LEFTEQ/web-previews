export const COMPANY = 'V - stav group spol. s r.o.';
export const EMAIL = 'vanha@vstavolomouc.cz';
export const PHONES = [
  { label: '608 613 027', href: 'tel:+420608613027', full: '+420 608 613 027' },
  { label: '585 751 810', href: 'tel:+420585751810', full: '+420 585 751 810' },
];
export const ADDRESS = ['Dolní novosadská 41/26', '779 00 Olomouc'];
export const MAP_URL =
  'https://mapy.cz/zakladni?q=' + encodeURIComponent('Dolní novosadská 41/26, 779 00 Olomouc');

export const LAYERS = [
  { id: 'top', depth: '0,0', name: 'Povrch' },
  { id: 'tasks', depth: '−0,5', name: 'Ornice' },
  { id: 'services', depth: '−1,2', name: 'Podloží' },
  { id: 'terrain', depth: '−2,0', name: 'Svah' },
  { id: 'inquiry', depth: '−2,6', name: 'Spodní voda' },
  { id: 'contact', depth: '−3,0', name: 'Skála' },
];

export const NAV = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#teren', label: 'Náročný terén' },
  { href: '#protlaky', label: 'Protlaky' },
  { href: '#poptavka', label: 'Poptávka' },
  { href: '#kontakt', label: 'Kontakt' },
];

const W = 'var(--color-water)';
const S = 'var(--color-sewer)';
const C = 'var(--color-cable)';
const K = 'var(--color-clay)';
const L = 'var(--color-loam)';

export const SERVICES = [
  {
    id: 'site',
    title: 'Kompletní inženýrské sítě',
    tag: 'všechny sítě',
    color: `linear-gradient(to bottom, ${W} 0 33%, ${S} 33% 66%, ${C} 66% 100%)`,
    thick: true,
    text: 'Vodovod, kanalizace i kabelové rozvody v jedné zakázce — od výkopu přes uložení vedení po zához.',
  },
  {
    id: 'voda',
    title: 'Vodovod',
    tag: 'voda',
    color: W,
    text: 'Výkopy a uložení vodovodního potrubí, přípojky vody k objektům.',
  },
  {
    id: 'kanalizace',
    title: 'Kanalizace',
    tag: 'kanalizace',
    color: S,
    text: 'Kanalizační potrubí a přípojky včetně výkopu a zpětného zásypu.',
  },
  {
    id: 'kabely',
    title: 'Kabelové rozvody',
    tag: 'kabely',
    color: C,
    text: 'Výkopy rýh pro uložení kabelů a jejich zához.',
  },
  {
    id: 'rypadlo',
    title: 'Práce kráčivým rypadlem v náročném terénu',
    tag: 'svah',
    color: `repeating-linear-gradient(90deg, ${L} 0 18px, ${K} 18px 26px)`,
    text: 'Výkopové práce ve svazích a v těžko dostupném terénu, kam se běžná technika nedostane.',
  },
  {
    id: 'protlaky',
    title: 'Protlaky pod komunikací',
    tag: 'protlak',
    color: `repeating-linear-gradient(90deg, ${W} 0 10px, transparent 10px 16px)`,
    text: 'Vedení sítí pod silnicí, chodníkem nebo vjezdem bez rozkopání povrchu.',
  },
  {
    id: 'vykopy',
    title: 'Výkopy',
    tag: 'zemina',
    color: K,
    text: 'Strojní výkopové práce, mimo jiné pro základy domů a plotů.',
  },
  {
    id: 'teren',
    title: 'Terénní úpravy',
    tag: 'terén',
    color: K,
    text: 'Srovnání a úprava pozemku, svahování.',
  },
  {
    id: 'povrchy',
    title: 'Povrchy',
    tag: 'povrch',
    color: L,
    text: 'Úprava povrchů a dláždění.',
  },
  {
    id: 'demolice',
    title: 'Demolice',
    tag: 'bourání',
    color: `repeating-linear-gradient(90deg, ${L} 0 6px, transparent 6px 12px)`,
    text: 'Demolice objektů.',
  },
];
