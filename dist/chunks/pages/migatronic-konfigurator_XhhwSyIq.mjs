/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$MigatronicPage } from './configurador-de-migatronic_FJ-6-1E1.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro$1 = createAstro();
const $$MigatronicKonfigurator$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MigatronicKonfigurator$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MigatronicPage", $$MigatronicPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/migatronic-konfigurator.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/migatronic-konfigurator.astro";
const $$url$1 = "/da/cases/migatronic-konfigurator";

const migatronicKonfigurator$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MigatronicKonfigurator$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$MigatronicKonfigurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MigatronicKonfigurator;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MigatronicPage", $$MigatronicPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/migatronic-konfigurator.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/migatronic-konfigurator.astro";
const $$url = "/de/cases/migatronic-konfigurator";

const migatronicKonfigurator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MigatronicKonfigurator,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { migatronicKonfigurator as a, migatronicKonfigurator$1 as m };
