/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AboutPage } from './about_bwxJHwY4.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$AcercaDe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AcercaDe;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AboutPage", $$AboutPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/acerca-de.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/acerca-de.astro";
const $$url = "/es/acerca-de";

export { $$AcercaDe as default, $$file as file, $$url as url };
