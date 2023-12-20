/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ProductModellingPage, b as banner, a as $$AdvantagesOfEffectiveModelling, c as $$FeaturesOfProductModelling } from './modelado-de-productos_JIocjG14.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout, p as $$Trans, a as $$Image, q as $$RequestDemoLink } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { b as $$ModelSection } from './configuration-engine_ouSEkntf.mjs';

const $$Astro$2 = createAstro();
const $$ProductModelling$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductModelling$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductModellingPage", $$ProductModellingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/product-modelling.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/product-modelling.astro";
const $$url$2 = "/product-modelling";

const productModelling$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductModelling$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ProductModelling$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductModelling$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductModellingPage", $$ProductModellingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/product-modelling.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/product-modelling.astro";
const $$url$1 = "/en/product-modelling";

const productModelling$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductModelling$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$ProductModelling = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductModelling;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { product_modelling: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 id="pm-heading" class="brand-gradient bg-clip-text text-transparent heading-1 mb-16 text-center"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading })} </h1> <div id="pm-banner" class="grid grid-cols-1 md:grid-cols-[30%,1fr] gap-6"> <div class="rounded-2xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": banner, "alt": "" })} </div> <div class="p-10 flex flex-col gap-8 justify-center bg-primary-3/[.39] rounded-2xl"> <p class="text-[2rem] leading-tight text-neutral-10"> ${t.hero.subtext_1} </p> <p class="text-xl font-light tracking-[.4px] text-neutral-30"> ${t.hero.subtext_2} </p> </div> </div> </div> </section> ${renderComponent($$result2, "ModelSection", $$ModelSection, { "gapped": true, "text_1": t.product_modelling_cpq.text_1, "text_2": t.product_modelling_cpq.text_2 })} ${renderComponent($$result2, "AdvantagesOfEffectiveModelling", $$AdvantagesOfEffectiveModelling, {})} ${renderComponent($$result2, "FeaturesOfProductModelling", $$FeaturesOfProductModelling, {})} <section class="pt-[4.25rem] pb-[7.5rem]"> <div class="container"> <div class="text-center"> <p class="text-[2rem] md:text-[4rem] font-medium leading-tight text-neutral-30 mb-6"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.call_to_action.text_1 }, { "default": ($$result3) => renderTemplate`
Let us <span class="brand-gradient bg-clip-text text-transparent">help</span> you!
` })} </p> <p class="md:max-w-[768px] mx-auto text-xl font-light tracking-[.4px] leading-[1.4] text-neutral-30 mb-10"> ${t.call_to_action.text_2} </p> <div class="flex justify-center"> ${renderComponent($$result2, "RequestDemoLink", $$RequestDemoLink, {})} </div> </div> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/product-modelling.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/product-modelling.astro";
const $$url = "/[locale]/product-modelling";

const productModelling = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductModelling,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { productModelling$1 as a, productModelling as b, productModelling$2 as p };
