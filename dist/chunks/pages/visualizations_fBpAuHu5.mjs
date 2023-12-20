/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$VisualizationsPage, a as $$BenefitsToManufacturing, s as seamless, b as best_in_class, c as $$BenefitsOfCPQ } from './visualiseringer_3Q8zzmCG.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout, a as $$Image, p as $$Trans, q as $$RequestDemoLink } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { h as pill, i as $$CheckedList } from './analitica_JKbx2oR0.mjs';
import { c as $$CallToAction } from './motor-de-precios_IlxLh6D2.mjs';

const $$Astro$2 = createAstro();
const $$Visualizations$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Visualizations$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "VisualizationsPage", $$VisualizationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/visualizations.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/visualizations.astro";
const $$url$2 = "/visualizations";

const visualizations$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Visualizations$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Visualizations$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Visualizations$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "VisualizationsPage", $$VisualizationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/visualizations.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/visualizations.astro";
const $$url$1 = "/en/visualizations";

const visualizations$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Visualizations$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Visualizations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Visualizations;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { visualizations: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <h1 class="heading-1 brand-gradient bg-clip-text text-center text-transparent mb-12"> ${t.heading} </h1> <div class="container relative isolate"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full -translate-y-[40%] -right-12 -z-[1] hidden xl:block", "src": pill, "alt": "" })} <div class="grid grid-cols-1 lg:grid-cols-2"> <div class="flex flex-col justify-center lg:pr-16"> <video controls autoplay loop playsinline muted> <source type="video/mp4" src="/videos/Demo-project-Audi-Q3-Configurator.mp4"></video> </div> <div class="flex flex-col justify-center pt-10 lg:py-16"> <p class="text-[26px] lg:text-[3rem] leading-tight font-medium mb-10 lg:mb-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.hero.heading }, { "default": ($$result3) => renderTemplate`
Elevate your
<span class="brand-gradient bg-clip-text text-transparent">product visualization</span>
with us.
` })} </p> <p class="font-light text-xl tracking-[.4px] leading-tight text-neutral-10"> ${t.hero.subtext} </p> </div> </div> </div> </section> ${renderComponent($$result2, "BenefitsToManufacturing", $$BenefitsToManufacturing, {})} <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-20"> <div class=""> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto lg:mx-0", "src": seamless, "alt": "" })} </div> <div class="flex flex-col justify-center"> <h2 class="heading-2 mb-4 lg:mb-12 text-neutral-10"> ${t.seamless_integration.heading} </h2> <p class="font-light text-base lg:text-xl tracking-[.4px] text-neutral-30 lg:max-w-xl mb-6"> ${t.seamless_integration.subtext} </p> ${renderComponent($$result2, "CheckedList", $$CheckedList, { "items": t.seamless_integration.gains })} ${renderComponent($$result2, "RequestDemoLink", $$RequestDemoLink, { "class": "w-max mt-12 md:mt-10" })} </div> </div> </section> <section class="py-[4.25rem]"> <div class="grid grid-cols-1 xl:grid-cols-[40%,1fr] gap-10 xl:gap-6"> <div class="order-2 xl:order-1 container-left"> <h2 class="heading-2 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.why_us.heading }, { "default": ($$result3) => renderTemplate`
Best in class and <br> <span class="text-accent-2">fully integrated</span> ` })} </h2> <p class="leading-tight text-2xl lg:text-[2rem] my-6 lg:my-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.why_us.subtext })} </p> <ul class="text-neutral-10 list-disc ml-10 space-y-4 lg:space-y-5 text-base lg:text-xl font-light leading-tight"> <li> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.why_us.pros.line_1 }, { "default": ($$result3) => renderTemplate` <span class="inline text-accent-1">
custom-designed for manufacturing</span>, free from distractions or irrelevant gaming features
` })} </li> <li> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.why_us.pros.line_2 }, { "default": ($$result3) => renderTemplate`
everything you need is seamlessly integrated into <span class="inline text-accent-1">
one streamlined solution</span> ` })} </li> <li> ${t.why_us.pros.line_3} </li> </ul> </div> <div class="xl:pt-20 order-1 pl-6 xl:pl-0 xl:order-2 flex justify-end"> ${renderComponent($$result2, "Image", $$Image, { "src": best_in_class, "alt": "" })} </div> </div> </section> ${renderComponent($$result2, "BenefitsOfCPQ", $$BenefitsOfCPQ, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/visualizations.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/visualizations.astro";
const $$url = "/[locale]/visualizations";

const visualizations = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Visualizations,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { visualizations$1 as a, visualizations as b, visualizations$2 as v };
