/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PricingEnginePage, p as pricingImg, a as $$BenefitsOfPricingFeatures, b as $$Monitor, c as $$CallToAction } from './motor-de-precios_IlxLh6D2.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout, a as $$Image, p as $$Trans } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { a as $$AlertDecagram } from './cpq_y67MTOYE.mjs';
import { d as $$LaunchRocket, f as polygon, p as pentagon } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { i as $$CheckedList, c as circles } from './analitica_JKbx2oR0.mjs';

const $$Astro$2 = createAstro();
const $$PricingEngine$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PricingEngine$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PricingEnginePage", $$PricingEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/pricing-engine.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/pricing-engine.astro";
const $$url$2 = "/pricing-engine";

const pricingEngine$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PricingEngine$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$PricingEngine$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingEngine$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PricingEnginePage", $$PricingEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/pricing-engine.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/pricing-engine.astro";
const $$url$1 = "/en/pricing-engine";

const pricingEngine$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PricingEngine$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$PricingEngine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingEngine;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { pricing_engine: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 mb-16 text-center text-neutral-10"> ${t.hero.heading} </h1> <div class="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-6"> <div class="flex justify-center items-center rounded-2xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full", "src": pricingImg, "alt": "" })} </div> <div class="p-10 bg-primary-3/40 rounded-2xl"> <p class="text-[2rem] md:text-[3rem] font-medium leading-tight text-neutral-20 mb-8"> ${t.hero.subtext_1} </p> <p class="text-xl md:text-2xl tracking-[.48px] leading-tight text-neutral-30"> ${t.hero.subtext_2} </p> </div> </div> </div> </section> <section class="py-[4.25rem]"${addAttribute(t.navigating_pricing_challanges.label, "aria-label")}> <div class="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.navigating_pricing_challanges.heading }, { "default": ($$result3) => renderTemplate`
Navigating your <br> <span class="brand-gradient bg-clip-text text-transparent">pricing challenges</span> ` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.navigating_pricing_challanges.subtext_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.navigating_pricing_challanges.subtext_2 })} </p> </div> </div> ${renderComponent($$result2, "BenefitsOfPricingFeatures", $$BenefitsOfPricingFeatures, {})} <section class="py-[4.25rem]"${addAttribute(t.migrate_margin_risks.label, "aria-label")}> <div class="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.migrate_margin_risks.heading }, { "default": ($$result3) => renderTemplate`
Migrate
<span class="brand-gradient bg-clip-text text-transparent">
margin risks</span> <br> downstream
` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "AlertDecagram", $$AlertDecagram, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.migrate_margin_risks.subtext_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.migrate_margin_risks.subtext_2} </p> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 md:gap-5"> <div class="flex justify-center items-center"> ${renderComponent($$result2, "Monitor", $$Monitor, { "class": "w-full" })} </div> <div> <h2 class="heading-2 mb-12 text-neutral-10"> ${t.flexible_and_robust_price_models.heading} </h2> <p class="text-xl font-light leading-[1.4] tracking-[.4px] text-neutral-30 mb-12"> ${t.flexible_and_robust_price_models.subtext} </p> ${renderComponent($$result2, "CheckedList", $$CheckedList, { "items": t.flexible_and_robust_price_models.pricing_models, "class": "pl-6" })} </div> </div> </section> <section${addAttribute(t.instant_pricing.label, "aria-label")} class="relative overflow-x-clip"> <div class="container"> <div class="w-1/2 relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "src": polygon, "alt": "" })} </div> <div class="py-[100px]"> <h2 class="heading-2 text-center text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.instant_pricing.heading }, { "default": ($$result3) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Instant pricing</span> <br>
at your fingertips
` })} </h2> </div> <div class="w-1/2 ml-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "src": pentagon, "alt": "" })} </div> <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 md:h-max"> <p class="text-[2rem] leading-tight text-white mb-[50px]"> ${t.instant_pricing.continuous_data_integration.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.instant_pricing.continuous_data_integration.description} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 md:h-max md:self-end"> <p class="text-[2rem] leading-tight text-white mb-8"> ${t.instant_pricing.mixed_price_types.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.instant_pricing.mixed_price_types.description} </p> </div> <div class="md:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 md:h-max md:w-1/2 mx-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.instant_pricing.automatic_margin_control.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px] pr-5"> ${t.instant_pricing.automatic_margin_control.description} </p> </div> </div> </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/pricing-engine.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/pricing-engine.astro";
const $$url = "/[locale]/pricing-engine";

const pricingEngine = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PricingEngine,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { pricingEngine$1 as a, pricingEngine as b, pricingEngine$2 as p };
