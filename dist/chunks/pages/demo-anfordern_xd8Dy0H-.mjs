/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$RequestDemoPage } from './anmod-om-en-demo__OaSrvtk.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$DemoAnfordern = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DemoAnfordern;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "RequestDemoPage", $$RequestDemoPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/demo-anfordern.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/demo-anfordern.astro";
const $$url = "/de/demo-anfordern";

export { $$DemoAnfordern as default, $$file as file, $$url as url };
