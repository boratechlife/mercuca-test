/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslation, a as $$Image, p as $$Trans, i as $$LetsBuildTogether, j as $$Layout, g as getLangFromUrl, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$ScrollArrow, d as $$LaunchRocket, p as pentagon, g as support } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { c as circles } from './analitica_JKbx2oR0.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const $$Astro$7 = createAstro();
const $$User = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$User;
  const { class: classes = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(classes, "class")}${spreadAttributes(props)}> <path d="M40 6.66675C36.7036 6.66675 33.4813 7.64423 30.7405 9.47559C27.9997 11.3069 25.8635 13.9099 24.602 16.9554C23.3405 20.0008 23.0105 23.3519 23.6536 26.5849C24.2967 29.8179 25.884 32.7877 28.2149 35.1185C30.5458 37.4494 33.5155 39.0368 36.7485 39.6798C39.9815 40.3229 43.3326 39.9929 46.3781 38.7314C49.4235 37.4699 52.0265 35.3337 53.8578 32.5929C55.6892 29.8521 56.6667 26.6298 56.6667 23.3334C56.6667 18.9131 54.9107 14.6739 51.7851 11.5483C48.6595 8.4227 44.4203 6.66675 40 6.66675ZM40 33.3334C38.0222 33.3334 36.0888 32.7469 34.4443 31.6481C32.7998 30.5493 31.5181 28.9875 30.7612 27.1602C30.0043 25.333 29.8063 23.3223 30.1921 21.3825C30.578 19.4427 31.5304 17.6609 32.9289 16.2623C34.3275 14.8638 36.1093 13.9114 38.0491 13.5256C39.9889 13.1397 41.9996 13.3377 43.8268 14.0946C45.6541 14.8515 47.2159 16.1332 48.3147 17.7777C49.4135 19.4222 50 21.3556 50 23.3334C50 25.9856 48.9464 28.5291 47.0711 30.4045C45.1957 32.2798 42.6522 33.3334 40 33.3334ZM70 70.0001V66.6667C70 60.4784 67.5417 54.5434 63.1658 50.1676C58.79 45.7917 52.855 43.3334 46.6667 43.3334H33.3333C27.1449 43.3334 21.21 45.7917 16.8342 50.1676C12.4583 54.5434 10 60.4784 10 66.6667V70.0001H16.6667V66.6667C16.6667 62.2465 18.4226 58.0072 21.5482 54.8816C24.6738 51.756 28.9131 50.0001 33.3333 50.0001H46.6667C51.0869 50.0001 55.3262 51.756 58.4518 54.8816C61.5774 58.0072 63.3333 62.2465 63.3333 66.6667V70.0001H70Z" fill="url(#paint0_linear_2867_6118)"></path> <defs> <linearGradient id="paint0_linear_2867_6118" x1="66.7904" y1="53.8699" x2="36.1938" y2="54.0325" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/User.astro", void 0);

const $$Astro$6 = createAstro();
const $$ProductConfiguratorPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProductConfiguratorPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { seo_1: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.articles, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container relative gap-6 md:gap-12 xl:gap-20 grid grid-cols-1 lg:grid-cols-2 text-neutral-10 mb-[4.25rem]"> <div> <h1 class="text-neutral-10 heading-1">${t.heading}</h1> </div> <div> <p class="text-2xl lg:text-[2rem] leading-tight text-neutral-10"> ${t.subheading} </p> </div> </div> <div class="container"> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${t.personalization.heading} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.personalization.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.personalization.text_2} </p> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": pentagon, "alt": "" })} <p class="text-[2rem] leading-tight text-white"> ${t.increase_conversion} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7"> <p class="text-[2rem] leading-tight text-white"> ${t.order_handling} </p> </div> <div class="md:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 md:w-1/2 mx-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white"> ${t.insight} </p> </div> </div> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.intuitive_user_interface.heading })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "User", $$User, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.intuitive_user_interface.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.intuitive_user_interface.text_2} </p> </div> </div> </section> <section class="py-[4.25rem] overflow-x-clip"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20"> <div class=""> <h2 class="text-neutral-10 heading-2 mb-[25px] lg:mb-[50px]"> ${t.challenges.heading} </h2> <p class="text-neutral-30 font-light lg:leading-[125%] tracking-[0.4px] text-base lg:text-[20px]"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.challenges.subtext })} </p> </div> <div class="flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": support, "alt": "" })} </div> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div class="mx-auto max-w-[800px]"> <p class="text-2xl leading-tight tracking-[.48px] text-neutral-10 text-center"> ${t.conclusion_statement} </p> </div> </div> </section> ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/ProductConfiguratorPage.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProductConfigurator$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProductConfigurator$5;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductConfiguratorPage", $$ProductConfiguratorPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/product-configurator.astro", void 0);

const $$file$5 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/product-configurator.astro";
const $$url$5 = "/product-configurator";

const productConfigurator$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$ProductConfigurator$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductConfigurator$4;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductConfiguratorPage", $$ProductConfiguratorPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/product-configurator.astro", void 0);

const $$file$4 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/product-configurator.astro";
const $$url$4 = "/da/product-configurator";

const productConfigurator$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$ProductConfigurator$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductConfigurator$3;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductConfiguratorPage", $$ProductConfiguratorPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/product-configurator.astro", void 0);

const $$file$3 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/product-configurator.astro";
const $$url$3 = "/de/product-configurator";

const productConfigurator$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$ProductConfigurator$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductConfigurator$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductConfiguratorPage", $$ProductConfiguratorPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/product-configurator.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/product-configurator.astro";
const $$url$2 = "/en/product-configurator";

const productConfigurator$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ProductConfigurator$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductConfigurator$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductConfiguratorPage", $$ProductConfiguratorPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/product-configurator.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/product-configurator.astro";
const $$url$1 = "/es/product-configurator";

const productConfigurator$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$ProductConfigurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductConfigurator;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { seo_1: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.articles, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container relative gap-6 md:gap-12 xl:gap-20 grid grid-cols-1 lg:grid-cols-2 text-neutral-10 mb-[4.25rem]"> <div> <h1 class="text-neutral-10 heading-1">${t.heading}</h1> </div> <div> <p class="text-2xl lg:text-[2rem] leading-tight text-neutral-10"> ${t.subheading} </p> </div> </div> <div class="container"> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${t.personalization.heading} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.personalization.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.personalization.text_2} </p> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": pentagon, "alt": "" })} <p class="text-[2rem] leading-tight text-white"> ${t.increase_conversion} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7"> <p class="text-[2rem] leading-tight text-white"> ${t.order_handling} </p> </div> <div class="md:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 md:w-1/2 mx-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white"> ${t.insight} </p> </div> </div> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.intuitive_user_interface.heading })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "User", $$User, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.intuitive_user_interface.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.intuitive_user_interface.text_2} </p> </div> </div> </section> <section class="py-[4.25rem] overflow-x-clip"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20"> <div class=""> <h2 class="text-neutral-10 heading-2 mb-[25px] lg:mb-[50px]"> ${t.challenges.heading} </h2> <p class="text-neutral-30 font-light lg:leading-[125%] tracking-[0.4px] text-base lg:text-[20px]"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.challenges.subtext })} </p> </div> <div class="flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": support, "alt": "" })} </div> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div class="mx-auto max-w-[800px]"> <p class="text-2xl leading-tight tracking-[.48px] text-neutral-10 text-center"> ${t.conclusion_statement} </p> </div> </div> </section> ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/product-configurator.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/product-configurator.astro";
const $$url = "/[locale]/product-configurator";

const productConfigurator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductConfigurator,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { productConfigurator$4 as a, productConfigurator$3 as b, productConfigurator$2 as c, productConfigurator$1 as d, productConfigurator as e, productConfigurator$5 as p };
