/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AboutPage } from './about_bwxJHwY4.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$UeberUns = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UeberUns;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AboutPage", $$AboutPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/ueber-uns.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/ueber-uns.astro";
const $$url = "/de/ueber-uns";

export { $$UeberUns as default, $$file as file, $$url as url };
