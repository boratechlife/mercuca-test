/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { e as $$QuoteDocumentGenerationPage, $ as $$ScrollArrow, h as $$JoinJourneySlider, i as $$OvercomeQuotingChallanges, b as $$WhatWeOffer, j as $$Collaboration, k as $$Support } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';

const $$Astro$2 = createAstro();
const $$QuoteAndDocumentGeneration$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$QuoteAndDocumentGeneration$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "QuoteDocumentGenerationPage", $$QuoteDocumentGenerationPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/quote-and-document-generation.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/quote-and-document-generation.astro";
const $$url$2 = "/quote-and-document-generation";

const quoteAndDocumentGeneration$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuoteAndDocumentGeneration$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$QuoteAndDocumentGeneration$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QuoteAndDocumentGeneration$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "QuoteDocumentGenerationPage", $$QuoteDocumentGenerationPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/quote-and-document-generation.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/quote-and-document-generation.astro";
const $$url$1 = "/en/quote-and-document-generation";

const quoteAndDocumentGeneration$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuoteAndDocumentGeneration$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$QuoteAndDocumentGeneration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuoteAndDocumentGeneration;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { quote_and_document_generation: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container relative gap-6 md:gap-12 xl:gap-20 grid grid-cols-1 lg:grid-cols-2 text-neutral-10 mb-[4.25rem]"> <div> <h1 class="text-neutral-10 heading-1">${t.hero.heading}</h1> </div> <div> <p class="text-2xl lg:text-[2rem] leading-tight text-neutral-10"> ${t.hero.subtext} </p> </div> </div> <div class="container"> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <section class="py-[4.25rem]"${addAttribute(t.join_journey.label, "aria-label")}> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20"> ${renderComponent($$result2, "JoinJourneySlider", $$JoinJourneySlider, {})} <div class="flex flex-col justify-center"> <h2 class="heading-2 text-neutral-20 mb-10 lg:mb-16"> ${t.join_journey.heading} </h2> <p class="text-base lg:text-xl text-neutral-30 font-light lg:leading-tight tracking-[0.4px]"> ${t.join_journey.subtext} </p> </div> </div> </div> </section> ${renderComponent($$result2, "OvercomeQuotingChallanges", $$OvercomeQuotingChallanges, {})} ${renderComponent($$result2, "WhatWeOffer", $$WhatWeOffer, { "theme": "gray", "offerings": t.what_we_offer })} ${renderComponent($$result2, "Collaboration", $$Collaboration, {})} ${renderComponent($$result2, "Support", $$Support, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/quote-and-document-generation.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/quote-and-document-generation.astro";
const $$url = "/[locale]/quote-and-document-generation";

const quoteAndDocumentGeneration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuoteAndDocumentGeneration,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { quoteAndDocumentGeneration$1 as a, quoteAndDocumentGeneration as b, quoteAndDocumentGeneration$2 as q };
