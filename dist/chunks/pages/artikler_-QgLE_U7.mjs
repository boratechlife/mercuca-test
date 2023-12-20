/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ArticlesPage } from './articles_j0_mRSbh.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Artikler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Artikler;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ArticlesPage", $$ArticlesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler.astro";
const $$url = "/da/artikler";

export { $$Artikler as default, $$file as file, $$url as url };
