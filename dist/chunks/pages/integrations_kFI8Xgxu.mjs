/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$IntegrationsPage, p as processesImg, a as $$HowWeHelp, b as $$TailoredIntegrations } from './integraciones_SD-FV4YF.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout, a as $$Image } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { a as $$AlertDecagram } from './cpq_y67MTOYE.mjs';

const $$Astro$2 = createAstro();
const $$Integrations$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Integrations$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "IntegrationsPage", $$IntegrationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/integrations.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/integrations.astro";
const $$url$2 = "/integrations";

const integrations$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Integrations$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Integrations$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Integrations$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "IntegrationsPage", $$IntegrationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/integrations.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/integrations.astro";
const $$url$1 = "/en/integrations";

const integrations$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Integrations$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Integrations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Integrations;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { integrations: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 mb-16 text-center"> ${t.hero.heading} </h1> <div class="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-6"> <div class="px-6 py-12 flex justify-center items-center bg-primary-3/40 rounded-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": processesImg, "alt": "" })} </div> <div class="p-10 bg-primary-3/40 rounded-2xl"> <p class="text-[2rem] md:text-[3rem] font-medium leading-tight text-neutral-20 mb-8"> ${t.hero.subtext_1} </p> <p class="text-xl md:text-2xl tracking-[.48px] leading-tight text-neutral-30"> ${t.hero.subtext_2} </p> </div> </div> </div> </section> <section class="py-[4.25rem]" aria-label="The challenge of Information Silos"> <div class="container grid grid-cols-1 md:grid-cols-2 gap-20"> <div> <h2 class="heading-2 mb-8 text-neutral-10">
The challenge of <br> <span class="text-accent-1">Information Silos</span> </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "AlertDecagram", $$AlertDecagram, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.challenge_of_silos.subtext_1} </p> <p class="mt-12 md:mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.challenge_of_silos.subtext_2} </p> </div> </div> </section> ${renderComponent($$result2, "HowWeHelp", $$HowWeHelp, {})} ${renderComponent($$result2, "TailoredIntegrations", $$TailoredIntegrations, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/integrations.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/integrations.astro";
const $$url = "/[locale]/integrations";

const integrations = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Integrations,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { integrations$1 as a, integrations as b, integrations$2 as i };
