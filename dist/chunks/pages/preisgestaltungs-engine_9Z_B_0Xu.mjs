/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PricingEnginePage } from './motor-de-precios_IlxLh6D2.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$PreisgestaltungsEngine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PreisgestaltungsEngine;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PricingEnginePage", $$PricingEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/preisgestaltungs-engine.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/preisgestaltungs-engine.astro";
const $$url = "/de/preisgestaltungs-engine";

export { $$PreisgestaltungsEngine as default, $$file as file, $$url as url };
