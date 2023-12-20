/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { e as $$QuoteDocumentGenerationPage } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro = createAstro();
const $$TilbudOgDokumentgenerering = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TilbudOgDokumentgenerering;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "QuoteDocumentGenerationPage", $$QuoteDocumentGenerationPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/tilbud-og-dokumentgenerering.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/tilbud-og-dokumentgenerering.astro";
const $$url = "/da/tilbud-og-dokumentgenerering";

export { $$TilbudOgDokumentgenerering as default, $$file as file, $$url as url };
