/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PricingEnginePage } from './motor-de-precios_IlxLh6D2.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Prisstningsmotor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prisstningsmotor;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PricingEnginePage", $$PricingEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/priss\xE6tningsmotor.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/prissætningsmotor.astro";
const $$url = "/da/prissætningsmotor";

export { $$Prisstningsmotor as default, $$file as file, $$url as url };
