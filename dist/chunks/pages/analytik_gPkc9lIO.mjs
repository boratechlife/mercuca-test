/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AnalyticsPage } from './analitica_JKbx2oR0.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Analytik = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Analytik;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AnalyticsPage", $$AnalyticsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/analytik.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/analytik.astro";
const $$url = "/de/analytik";

export { $$Analytik as default, $$file as file, $$url as url };
