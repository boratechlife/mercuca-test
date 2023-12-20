/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$IntegrationsPage } from './integraciones_SD-FV4YF.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Integrationer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Integrationer;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "IntegrationsPage", $$IntegrationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/integrationer.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/integrationer.astro";
const $$url = "/da/integrationer";

export { $$Integrationer as default, $$file as file, $$url as url };
