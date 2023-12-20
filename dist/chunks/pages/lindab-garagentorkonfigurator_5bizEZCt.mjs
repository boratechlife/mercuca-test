/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LindabPage } from './configurador-de-puertas-de-garaje-lindab_TWPkxoWZ.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$LindabGaragentorkonfigurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LindabGaragentorkonfigurator;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "LindabPage", $$LindabPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/lindab-garagentorkonfigurator.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/lindab-garagentorkonfigurator.astro";
const $$url = "/de/cases/lindab-garagentorkonfigurator";

export { $$LindabGaragentorkonfigurator as default, $$file as file, $$url as url };
