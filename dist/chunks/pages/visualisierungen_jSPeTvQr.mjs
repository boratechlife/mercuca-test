/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$VisualizationsPage } from './visualiseringer_3Q8zzmCG.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$Visualisierungen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Visualisierungen;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "VisualizationsPage", $$VisualizationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/visualisierungen.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/visualisierungen.astro";
const $$url = "/de/visualisierungen";

export { $$Visualisierungen as default, $$file as file, $$url as url };