/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, t as cn, j as $$Layout, p as $$Trans, a as $$Image, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { c as circles, h as pill, i as $$CheckedList, f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
import { $ as $$ScrollArrow, b as $$WhatWeOffer, d as $$LaunchRocket, p as pentagon } from './angebot-und-dokumentenerstellung_0excePO6.mjs';

const manufacturingVenn = new Proxy({"src":"/_astro/manufactiuring_venn.sYYilTlD.png","width":753,"height":523,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$NumberedList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NumberedList;
  const { items, centerVertical = false, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${spreadAttributes(props)}> ${items.map(({ title, description }, index) => renderTemplate`<li> <div${addAttribute(`border-t border-primary-4 grid grid-cols-1 md:grid-cols-2  gap-4 py-8 md:px-8 ${centerVertical ? "items-center" : ""}`, "class")}> <p class="text-2xl leading-tight  tracking-[.48px] text-neutral-10"> <span class="md:mr-4 block md:inline mb-4 md:mb-0 font-medium md:font-normal"> ${index + 1 < 10 ? "0" + (index + 1) : index + 1} </span> ${title} </p> <p class="text-neutral-20 text-base leading-[1.4]">${description}</p> </div> </li>`)} </ul>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/lists/NumberedList.astro", void 0);

const $$Astro$6 = createAstro();
const $$WhyChooseUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WhyChooseUs;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      configuration_engine: { why_choose_us: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-[4.25rem]"> ${t.heading} </h2> ${renderComponent($$result, "NumberedList", $$NumberedList, { "centerVertical": true, "items": t.reasons })} </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/configuration-engine/WhyChooseUs.astro", void 0);

const ipad = new Proxy({"src":"/_astro/ipad_pro_12.1iw90N4b.png","width":670,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Model = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Model;
  const { class: classes = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(classes, "class")} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)}> <path d="M464.856 277.39C450.134 316.823 420.052 359.502 377.721 372.138C313.76 391.236 306.119 442.793 191.558 438.011C173.696 437.267 157.187 434.756 142.02 430.747C133.867 428.593 126.1 425.994 118.729 423C51.8041 395.892 16.8921 336.231 13.9941 273.806C10.1691 191.704 67.4541 152.57 104.684 129.656C141.915 106.742 186.786 17.9552 299.444 21.7712C316.62 22.3602 333.757 24.7082 350.363 29.2092C388.27 39.4682 426.804 62.1602 449.197 95.3332C450.878 97.8252 452.482 100.376 454.017 102.974C483.984 153.816 484.93 223.631 464.856 277.39Z" fill="url(#paint0_linear_1929_14290)"></path> <path opacity="0.7" d="M464.856 277.39C450.134 316.823 420.052 359.502 377.721 372.138C313.76 391.236 306.119 442.793 191.558 438.011C173.696 437.267 157.187 434.756 142.02 430.747C133.867 428.593 126.1 425.994 118.729 423C51.8041 395.892 16.8921 336.231 13.9941 273.806C10.1691 191.704 67.4541 152.57 104.684 129.656C141.915 106.742 186.786 17.9552 299.444 21.7712C316.62 22.3602 333.757 24.7082 350.363 29.2092C388.27 39.4682 426.804 62.1602 449.197 95.3332C450.878 97.8252 452.482 100.376 454.017 102.974C483.984 153.816 484.93 223.631 464.856 277.39Z" fill="white"></path> <path d="M343 208H337.579V234H343V208Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M157.5 181.915L153.467 188.901L195.406 261.542H203.473L157.5 181.915Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M276 277.393L271.631 280.568L310.636 308.907L294.068 359.897H302.807L319.375 308.907L276 277.393Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M106.526 54.3818H90.9502V378H106.526V54.3818Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M97 54.3818V378H361V54.3818H97ZM111.527 261.542L157.5 181.915L203.473 261.542H111.527ZM302.807 359.897H249.193L232.625 308.907L276 277.393L319.375 308.907L302.807 359.897ZM343 234H206V208H343V234Z" fill="white" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M201 82H121V162H201V82Z" fill="url(#paint1_linear_1929_14290)" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M275 162C297.644 162 316 143.644 316 121C316 98.3563 297.644 80 275 80C252.356 80 234 98.3563 234 121C234 143.644 252.356 162 275 162Z" fill="url(#paint2_linear_1929_14290)" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M161 278.223L174.16 304.887L203.586 309.163L182.293 329.918L187.319 359.225L161 345.389L134.681 359.225L139.707 329.918L118.414 309.163L147.84 304.887L161 278.223Z" fill="url(#paint3_linear_1929_14290)" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M336 445.334H199V471.334H336V445.334Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M336 445.334H204V471.334H336V445.334Z" fill="white" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M142 388.83L98.625 420.344L115.193 471.334H168.807L147.257 388.83H142Z" fill="#263238" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M147.257 388.83L103.882 420.344L120.45 471.334H174.064L190.632 420.344L147.257 388.83Z" fill="white" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <defs> <linearGradient id="paint0_linear_1929_14290" x1="453.608" y1="332.202" x2="216.665" y2="333.684" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint1_linear_1929_14290" x1="196.721" y1="141.625" x2="155.925" y2="141.854" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint2_linear_1929_14290" x1="311.614" y1="141.116" x2="269.798" y2="141.35" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint3_linear_1929_14290" x1="199.03" y1="338.594" x2="155.597" y2="338.851" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Model.astro", void 0);

const $$Astro$4 = createAstro();
const $$ModelSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ModelSection;
  const { text_1, text_2, gapped = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div${addAttribute(cn(
    "container grid grid-cols-1   items-center",
    gapped ? "gap-5 md:gap-0 md:grid-cols-[55%,1fr,40%] lg:grid-cols-[46%,1fr,40%]" : " gap-5 lg:gap-0  md:grid-cols-[1fr,40%] lg:grid-cols-2 "
  ), "class")}> <div${addAttribute(cn(gapped ? "" : "order-2 md:order-1"), "class")}> <p class="heading-2 text-white mb-[50px]">${text_1}</p> <p class="text-xl font-light leading-tight text-white tracking-[.4px]"> ${text_2} </p> </div> ${gapped && renderTemplate`<div></div>`} <div${addAttribute(cn(gapped ? "" : "order-1 md:order-2 lg:pl-20"), "class")}> ${renderComponent($$result, "Model", $$Model, {})} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/ModelSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$ConfigurationEnginePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ConfigurationEnginePage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { configuration_engine: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "class": "pb-[4.25rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem] relative"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-[4.25rem] text-neutral-10"> <h1 class="heading-1"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.hero.heading }, { "default": ($$result3) => renderTemplate`
Pioneering <span class="brand-gradient bg-clip-text text-transparent">product excellence</span> for manufacturers
` })} </h1> <p class="text-neutral-10 text-xl md:text-[2rem] leading-tight"> ${t.hero.subtext} </p> </div> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute bottom-0 left-0 -translate-x-2/3 xl:-translate-x-[45%] translate-y-[40%]", "src": circles, "alt": "" })} </div> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-20"> <div class="flex justify-center items-center rounded-2xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": manufacturingVenn, "alt": "" })} </div> <div> <p class="mb-12 md:mb-16 text-white text-5xl font-medium leading-tight"> ${t.venn.text_1} </p> <p class="text-xl md:text-2xl leading-tight tracking-[.48px] text-neutral-10"> ${t.venn.text_2} </p> </div> </div> </section> <div class="relative overflow-x-clip"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-0 right-0 translate-x-[45%] -translate-y-[40%]", "src": pill, "alt": "" })} </div> ${renderComponent($$result2, "WhatWeOffer", $$WhatWeOffer, { "offerings": t.what_we_offer })} <section class="py-[4.25rem]"${addAttribute(t.empowering.label, "aria-label")}> <div class="container grid grid-cols-1 lg:grid-cols-2"> <div class="mb-12 lg:mb-0 md:pr-20"> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.empowering.heading }, { "default": ($$result3) => renderTemplate`
Empowering manufacturers with <br> <span class="brand-gradient bg-clip-text text-transparent">precision</span> ` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.empowering.text_1} </p> <p class="mt-12 md:mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.empowering.text_2} </p> </div> </div> </section> <section class="py-[4.25rem]"${addAttribute(t.needs_based.label, "aria-label")}> <div class="container grid grid-cols-1 md:grid-cols-2 gap-5"> <div class="order-2 md:order-1"> <h2 class="heading-2 mb-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.needs_based.heading }, { "default": ($$result3) => renderTemplate` <span class="text-accent-1">Needs-based</span> <br> Configuration
` })} </h2> <p class="text-xl font-light leading-[1.4] tracking-[.4px] text-neutral-30 mb-12"> ${t.needs_based.subtext} </p> ${renderComponent($$result2, "CheckedList", $$CheckedList, { "items": t.needs_based.what_you_get, "class": "pl-6" })} </div> <div class="relative isolate flex justify-center items-center order-1 md:order-2"> ${renderComponent($$result2, "Image", $$Image, { "src": ipad, "alt": "" })} <div class="absolute inset-0 z-[1] flex justify-center items-center p-3"> <div class="bg-black w-full aspect-[670/514] flex justify-center items-center p-2"> <video controls autoplay loop playsinline muted> <source type="video/mp4" src="/videos/Demo-project-Audi-Q3-Configurator.mp4"></video> </div> </div> </div> </div> </section> ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "ModelSection", $$ModelSection, { "text_1": t.product_modelling_excellence.text_1, "text_2": t.product_modelling_excellence.text_2 })} <section class="py-[4.25rem]"${addAttribute(t.dive_into.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 md:mb-[4.25rem]"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.dive_into.heading }, { "default": ($$result3) => renderTemplate`
Dive into <br> <span class="brand-gradient bg-clip-text text-transparent">product excellence</span> ` })} </h2> <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-0 left-full -translate-x-1/2 -translate-y-[40%] hidden md:block", "src": pentagon, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-[50px]"> ${t.dive_into.upsell_with_ease.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.dive_into.upsell_with_ease.description} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max md:self-end"> <p class="text-[2rem] leading-tight text-white mb-8"> ${t.dive_into.visualize_for_impact.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.dive_into.visualize_for_impact.description} </p> </div> <div class="md:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max md:w-1/2 mx-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.dive_into.flexible_line_item_management.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px] pr-5"> ${t.dive_into.flexible_line_item_management.description} </p> </div> </div> </div> </div> </section> ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/ConfigurationEnginePage.astro", void 0);

const $$Astro$2 = createAstro();
const $$ConfigurationEngine$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ConfigurationEngine$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ConfigurationEnginePage", $$ConfigurationEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/configuration-engine.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/configuration-engine.astro";
const $$url$2 = "/configuration-engine";

const configurationEngine$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConfigurationEngine$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ConfigurationEngine$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ConfigurationEngine$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ConfigurationEnginePage", $$ConfigurationEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/configuration-engine.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/configuration-engine.astro";
const $$url$1 = "/en/configuration-engine";

const configurationEngine$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConfigurationEngine$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$ConfigurationEngine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConfigurationEngine;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { configuration_engine: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "class": "pb-[4.25rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem] relative"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-[4.25rem] text-neutral-10"> <h1 class="heading-1"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.hero.heading }, { "default": ($$result3) => renderTemplate`
Pioneering <span class="brand-gradient bg-clip-text text-transparent">product excellence</span> for manufacturers
` })} </h1> <p class="text-neutral-10 text-xl md:text-[2rem] leading-tight"> ${t.hero.subtext} </p> </div> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute bottom-0 left-0 -translate-x-2/3 xl:-translate-x-[45%] translate-y-[40%]", "src": circles, "alt": "" })} </div> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-20"> <div class="flex justify-center items-center rounded-2xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": manufacturingVenn, "alt": "" })} </div> <div> <p class="mb-12 md:mb-16 text-white text-5xl font-medium leading-tight"> ${t.venn.text_1} </p> <p class="text-xl md:text-2xl leading-tight tracking-[.48px] text-neutral-10"> ${t.venn.text_2} </p> </div> </div> </section> <div class="relative overflow-x-clip"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-0 right-0 translate-x-[45%] -translate-y-[40%]", "src": pill, "alt": "" })} </div> ${renderComponent($$result2, "WhatWeOffer", $$WhatWeOffer, { "offerings": t.what_we_offer })} <section class="py-[4.25rem]"${addAttribute(t.empowering.label, "aria-label")}> <div class="container grid grid-cols-1 lg:grid-cols-2"> <div class="mb-12 lg:mb-0 md:pr-20"> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.empowering.heading }, { "default": ($$result3) => renderTemplate`
Empowering manufacturers with <br> <span class="brand-gradient bg-clip-text text-transparent">precision</span> ` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.empowering.text_1} </p> <p class="mt-12 md:mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.empowering.text_2} </p> </div> </div> </section> <section class="py-[4.25rem]"${addAttribute(t.needs_based.label, "aria-label")}> <div class="container grid grid-cols-1 md:grid-cols-2 gap-5"> <div class="order-2 md:order-1"> <h2 class="heading-2 mb-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.needs_based.heading }, { "default": ($$result3) => renderTemplate` <span class="text-accent-1">Needs-based</span> <br> Configuration
` })} </h2> <p class="text-xl font-light leading-[1.4] tracking-[.4px] text-neutral-30 mb-12"> ${t.needs_based.subtext} </p> ${renderComponent($$result2, "CheckedList", $$CheckedList, { "items": t.needs_based.what_you_get, "class": "pl-6" })} </div> <div class="relative isolate flex justify-center items-center order-1 md:order-2"> ${renderComponent($$result2, "Image", $$Image, { "src": ipad, "alt": "" })} <div class="absolute inset-0 z-[1] flex justify-center items-center p-3"> <div class="bg-black w-full aspect-[670/514] flex justify-center items-center p-2"> <video controls autoplay loop playsinline muted> <source type="video/mp4" src="/videos/Demo-project-Audi-Q3-Configurator.mp4"></video> </div> </div> </div> </div> </section> ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "ModelSection", $$ModelSection, { "text_1": t.product_modelling_excellence.text_1, "text_2": t.product_modelling_excellence.text_2 })} <section class="py-[4.25rem]"${addAttribute(t.dive_into.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 md:mb-[4.25rem]"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.dive_into.heading }, { "default": ($$result3) => renderTemplate`
Dive into <br> <span class="brand-gradient bg-clip-text text-transparent">product excellence</span> ` })} </h2> <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-0 left-full -translate-x-1/2 -translate-y-[40%] hidden md:block", "src": pentagon, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-[50px]"> ${t.dive_into.upsell_with_ease.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.dive_into.upsell_with_ease.description} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max md:self-end"> <p class="text-[2rem] leading-tight text-white mb-8"> ${t.dive_into.visualize_for_impact.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px]"> ${t.dive_into.visualize_for_impact.description} </p> </div> <div class="md:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max md:w-1/2 mx-auto relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-1/2 -translate-y-1/2 hidden md:block", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.dive_into.flexible_line_item_management.title} </p> <p class="text-xl font-light text-white leading-tight tracking-[.4px] pr-5"> ${t.dive_into.flexible_line_item_management.description} </p> </div> </div> </div> </div> </section> ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/configuration-engine.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/configuration-engine.astro";
const $$url = "/[locale]/configuration-engine";

const configurationEngine = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConfigurationEngine,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NumberedList as $, $$ConfigurationEnginePage as a, $$ModelSection as b, configurationEngine$2 as c, configurationEngine$1 as d, configurationEngine as e };
