/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AnalyticsPage, c as circles, l as laptopImg, a as $$UnleashThePotential, b as $$HowItWorks, d as $$Empower, e as $$BusinessResults, f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout, a as $$Image, p as $$Trans } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const $$Astro$2 = createAstro();
const $$Analytics$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Analytics$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AnalyticsPage", $$AnalyticsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/analytics.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/analytics.astro";
const $$url$2 = "/analytics";

const analytics$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analytics$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Analytics$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Analytics$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AnalyticsPage", $$AnalyticsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/analytics.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/analytics.astro";
const $$url$1 = "/en/analytics";

const analytics$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analytics$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Analytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Analytics;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { analytics: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "class": "pb-[4.25rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="pt-[4.25rem] pb-[5.625rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 text-center"> ${t.heading} </h1> </div> <div class="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-normal mt-[58px] relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute right-0 xl:right-[148px] top-full -translate-y-[30%] xl:-translate-y-1/2", "src": circles, "alt": "" })} <div class="w-full lg:w-1/2 flex-none flex items-center lg:items-start pr-6 md:pr-0"> ${renderComponent($$result2, "Image", $$Image, { "src": laptopImg, "alt": "" })} </div> <div class="w-full lg:w-1/2 flex-grow pl-6 lg:pl-0 container-right mt-12 md:mt-0"> <p class="text-[2rem] lg:text-[3rem] lg:leading-tight font-medium mb-4 lg:mb-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.business_insignts.heading }, { "default": ($$result3) => renderTemplate`
We help you <span class="text-accent-1">unlock</span> business
            insights.
` })} </p> <p class="font-light text-base lg:text-xl text-neutral-10 lg:max-w-xl"> ${t.business_insignts.subtext} </p> </div> </div> </section> ${renderComponent($$result2, "UnleashThePotential", $$UnleashThePotential, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Empower", $$Empower, {})} ${renderComponent($$result2, "BusinessResults", $$BusinessResults, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/analytics.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/analytics.astro";
const $$url = "/[locale]/analytics";

const analytics = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analytics,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { analytics$2 as a, analytics$1 as b, analytics as c };
