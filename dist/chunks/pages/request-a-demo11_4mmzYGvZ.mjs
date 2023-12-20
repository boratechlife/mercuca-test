/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$RequestDemoPage } from './anmod-om-en-demo__OaSrvtk.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$RequestADemo11 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RequestADemo11;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "RequestDemoPage", $$RequestDemoPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/request-a-demo11.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/request-a-demo11.astro";
const $$url = "/request-a-demo11";

export { $$RequestADemo11 as default, $$file as file, $$url as url };
