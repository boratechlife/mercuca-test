/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AudiPage } from './audi-configurator_XHqKSrnw.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$ConfiguradorDeAudi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConfiguradorDeAudi;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AudiPage", $$AudiPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-audi.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-audi.astro";
const $$url = "/es/casos/configurador-de-audi";

export { $$ConfiguradorDeAudi as default, $$file as file, $$url as url };
