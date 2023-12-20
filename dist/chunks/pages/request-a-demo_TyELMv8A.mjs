/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$RequestDemoPage, a as $$Logos, b as $$Reviews } from './anmod-om-en-demo__OaSrvtk.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';

const $$Astro$1 = createAstro();
const $$RequestADemo$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RequestADemo$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "RequestDemoPage", $$RequestDemoPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/request-a-demo.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/request-a-demo.astro";
const $$url$1 = "/en/request-a-demo";

const requestADemo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestADemo$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$RequestADemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RequestADemo;
  const { locale } = Astro2.params;
  const {
    pages: { request_a_demo }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Request a Demo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "kind": "full" })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <p class="brand-gradient bg-clip-text text-transparent uppercase text-base font-medium text-center"> ${request_a_demo.company_relationships} </p> <h2 class="text-[2rem] font-medium leading-[1.2] capitalize tracking-[1.6px] text-neutral-30 text-center mt-2.5 mb-8"> ${request_a_demo.mercura_clients} </h2> ${renderComponent($$result2, "Logos", $$Logos, { "class": "!py-10 bg-primary-5" })} </section> ${renderComponent($$result2, "Reviews", $$Reviews, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/request-a-demo.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/request-a-demo.astro";
const $$url = "/[locale]/request-a-demo";

const requestADemo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestADemo,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { requestADemo as a, requestADemo$1 as r };
