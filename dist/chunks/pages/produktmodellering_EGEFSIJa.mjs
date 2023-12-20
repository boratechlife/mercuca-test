/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ProductModellingPage } from './modelado-de-productos_JIocjG14.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Produktmodellering = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Produktmodellering;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductModellingPage", $$ProductModellingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/produktmodellering.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/produktmodellering.astro";
const $$url = "/da/produktmodellering";

export { $$Produktmodellering as default, $$file as file, $$url as url };
