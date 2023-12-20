/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$IntegrationsPage } from './integraciones_SD-FV4YF.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Integrationen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Integrationen;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "IntegrationsPage", $$IntegrationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/integrationen.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/integrationen.astro";
const $$url = "/de/integrationen";

export { $$Integrationen as default, $$file as file, $$url as url };
