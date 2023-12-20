/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { g as $$NumberCard, p as partnership, c as circles, f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
/* empty css                                                 */
import { a as $$Image, g as getLangFromUrl, u as useTranslation, p as $$Trans, t as cn, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro$8 = createAstro();
const $$ScrollArrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ScrollArrow;
  const { class: classes = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 20" fill="none"${addAttribute(classes, "class")}${spreadAttributes(props)}> <path d="M8.50955 10.0529C8.30649 10.0529 8.11612 10.0207 7.93844 9.95639C7.76076 9.89308 7.59578 9.78484 7.44348 9.63168L0.437909 2.58612C0.158701 2.30532 0.0130059 1.95406 0.000822298 1.53235C-0.0123766 1.11166 0.133319 0.748149 0.437909 0.44182C0.717116 0.161019 1.07247 0.0206183 1.50397 0.0206183C1.93548 0.0206183 2.29083 0.161019 2.57004 0.44182L8.50955 6.37694L14.4491 0.44182C14.7283 0.161019 15.077 0.0139812 15.4953 0.000706912C15.9146 -0.0115462 16.2766 0.135492 16.5812 0.44182C16.8604 0.722622 17 1.08 17 1.51397C17 1.94794 16.8604 2.30532 16.5812 2.58612L9.57561 9.63168C9.42332 9.78484 9.25833 9.89308 9.08065 9.95639C8.90298 10.0207 8.71261 10.0529 8.50955 10.0529ZM8.50955 19.2427C8.30649 19.2427 8.11612 19.2106 7.93844 19.1462C7.76076 19.0829 7.59578 18.9747 7.44348 18.8215L0.437909 11.776C0.158701 11.4952 0.0130059 11.1439 0.000822298 10.7222C-0.0123766 10.3015 0.133319 9.93801 0.437909 9.63168C0.717116 9.35088 1.07247 9.21048 1.50397 9.21048C1.93548 9.21048 2.29083 9.35088 2.57004 9.63168L8.50955 15.5668L14.4491 9.63168C14.7283 9.35088 15.077 9.20384 15.4953 9.19057C15.9146 9.17831 16.2766 9.32535 16.5812 9.63168C16.8604 9.91248 17 10.2699 17 10.7038C17 11.1378 16.8604 11.4952 16.5812 11.776L9.57561 18.8215C9.42332 18.9747 9.25833 19.0829 9.08065 19.1462C8.90298 19.2106 8.71261 19.2427 8.50955 19.2427Z" fill="url(#paint0_linear_1924_14154)"></path> <defs> <linearGradient id="paint0_linear_1924_14154" x1="8.5" y1="0" x2="8.5" y2="19.2427" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/ScrollArrow.astro", void 0);

const carouselTop = new Proxy({"src":"/_astro/carousel_top.plMV_QgX.svg","width":401,"height":429,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const carouselBottom = new Proxy({"src":"/_astro/carousel_bottom.PWOgG0Gd.svg","width":336,"height":454,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const solutionImg = new Proxy({"src":"/_astro/carousel_1.WlioI4ad.png","width":529,"height":724,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$JoinJourneySlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$JoinJourneySlider;
  return renderTemplate`${maybeRenderHead()}<div class="w-full relative p-8 border bg-primary-4 bg-opacity-[11%] border-primary-5/40 rounded-2xl overflow-hidden"> <div class="absolute -top-4 -z-10 right-0 lg:-right-[250px] lg:w-full"> ${renderComponent($$result, "Image", $$Image, { "src": carouselTop, "alt": "" })} </div> <div class="absolute -bottom-6 left-0 -z-10 w-full"> ${renderComponent($$result, "Image", $$Image, { "src": carouselBottom, "alt": "" })} </div> <section class="splide" id="image-carousel"> <div class="splide__track"> <ul class="splide__list"> ${[1, 2, 3].map((n) => renderTemplate`<li class="splide__slide"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": solutionImg, "alt": "" })} </li>`)} </ul> </div> </section> <div class="flex w-full justify-center items-center gap-4 mt-6"> <button id="btnPrev" class="py-2 px-4 text-neutral-10 border border-neutral-30 flex items-center justify-center gap-4 rounded-[4px]"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.07995 16L0.0799547 8L8.07996 1.39876e-06L9.49996 1.42L2.91995 8L9.49995 14.58L8.07995 16Z" fill="#D2D4D9"></path> </svg> </button> <button id="btnNext" class="py-2 px-4 text-neutral-10 border border-neutral-30 flex items-center justify-center gap-4 rounded-[4px]"> <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.92005 -6.99382e-07L9.92004 8L1.92004 16L0.500044 14.58L7.08004 8L0.500045 1.42L1.92005 -6.99382e-07Z" fill="#D2D4D9"></path> </svg> </button> </div>  </div>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/quote/JoinJourneySlider.astro", void 0);

const $$Astro$6 = createAstro();
const $$LaunchRocket = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LaunchRocket;
  const { class: classes = "", styled = false, ...props } = Astro2.props;
  return renderTemplate`${styled ? renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(classes, "class")}${spreadAttributes(props)}><path fill="white" d="m13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1M5.64 12.5l-3.83-1.63l6.1-2.77C7 9.46 6.22 10.93 5.64 12.5M19.22 4c.28 0 .53 0 .74.05c.17 1.39-.02 4.25-3.3 7.53c-1.7 1.71-3.73 3.02-6.01 3.89l-2.15-2.1c.92-2.31 2.23-4.34 3.92-6.03C15.18 4.58 17.64 4 19.22 4m0-2c-1.98 0-4.98.69-8.22 3.93c-2.19 2.19-3.5 4.6-4.35 6.71c-.28.75-.09 1.57.46 2.13l2.13 2.12c.38.38.89.61 1.42.61c.23 0 .47-.06.7-.15A19.1 19.1 0 0 0 18.07 13c5.66-5.66 3.54-10.61 3.54-10.61S20.7 2 19.22 2m-4.68 7.46c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.77.78.78 2.05 0 2.83c-.78.78-2.05.78-2.83 0m-5.66 7.07l-1.41-1.41l1.41 1.41M6.24 22l3.64-3.64c-.34-.09-.67-.24-.97-.45L4.83 22h1.41M2 22h1.41l4.77-4.76l-1.42-1.41L2 20.59V22m0-2.83l4.09-4.08c-.21-.3-.36-.62-.45-.97L2 17.76v1.41Z"></path></svg>` : renderTemplate`<svg${addAttribute(classes, "class")}${spreadAttributes(props)} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.8564 80.0045L38.3974 64.8278C44.6187 62.5295 50.4437 59.4387 55.8328 55.8328L44.8564 80.0045ZM15.1767 41.6071L0 35.1481L24.1717 24.1717C20.5658 29.5609 17.475 35.3858 15.1767 41.6071ZM68.9885 7.92516C70.0981 7.92516 71.0887 7.92516 71.9208 8.12329C72.5945 13.6313 71.8416 24.9643 58.8443 37.9615C52.1079 44.7375 44.0639 49.9285 35.0292 53.376L26.5097 45.0545C30.1552 35.901 35.3462 27.8569 42.043 21.1602C52.9797 10.2235 62.7276 7.92516 68.9885 7.92516ZM68.9885 0C61.1426 0 49.2549 2.73418 36.4161 15.5729C27.7381 24.251 22.5471 33.8008 19.1789 42.1619C18.0694 45.1338 18.8223 48.3831 21.0017 50.6022L29.442 59.0028C30.9478 60.5086 32.9687 61.42 35.0688 61.42C35.9802 61.42 36.9312 61.1822 37.8426 60.8256C47.8226 57.0204 56.8841 51.1459 64.4316 43.5884C86.8598 21.1602 78.4591 1.54541 78.4591 1.54541C78.4591 1.54541 74.8531 0 68.9885 0ZM50.4436 29.5609C47.3528 26.47 47.3528 21.4376 50.4436 18.3467C53.5345 15.2559 58.5669 15.2559 61.6578 18.3467C64.7089 21.4376 64.7486 26.47 61.6578 29.5609C58.5669 32.6517 53.5345 32.6517 50.4436 29.5609ZM17.5542 79.2516L31.978 64.8278C30.6307 64.4712 29.3231 63.8768 28.1343 63.0447L11.967 79.2516H17.5542ZM0.752891 79.2516H6.34013L25.2416 60.3897L19.6148 54.8025L0.752891 73.6644V79.2516ZM0.752891 68.0375L16.9598 51.8702C16.1277 50.6814 15.5333 49.4134 15.1767 48.0265L0.752891 62.4503V68.0375Z" fill="url(#paint0_linear_1758_8462)"></path><defs><linearGradient id="paint0_linear_1758_8462" x1="75.7205" y1="59.6283" x2="34.9253" y2="59.8572" gradientUnits="userSpaceOnUse"><stop stop-color="#D6545B"></stop><stop offset="1" stop-color="#FC946D"></stop></linearGradient></defs></svg>`}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/LaunchRocket.astro", void 0);

const down_triangle = new Proxy({"src":"/_astro/down_triangle.ztBirhUf.png","width":651,"height":633,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$OvercomeQuotingChallanges = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OvercomeQuotingChallanges;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      quote_and_document_generation: { overcome_quoting_challenges: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute hidden lg:block -bottom-72", "src": down_triangle, "alt": "" })} <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Overcome
<span class="brand-gradient bg-clip-text text-transparent">Quoting <br class="hidden lg:block"> Challenges</span> with <br class="hidden lg:block"> Mercura
` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result, "LaunchRocket", $$LaunchRocket, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.text_2 })} </p> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/quote/OvercomeQuotingChallanges.astro", void 0);

const $$Astro$4 = createAstro();
const $$WhatWeOffer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WhatWeOffer;
  const { offerings, theme = "blue" } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const { what_we_offer: t } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "arial-label")}> <div class="container"> <h2 class="heading-2 text-neutral-10 mb-16 text-center"> ${t.heading} </h2> <div${addAttribute(cn(
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 md:p-8  border rounded-2xl",
    theme === "gray" && "border-primary-5/[.41] bg-primary-4/[.41]",
    theme === "blue" && "bg-primary-6  border-primary-7"
  ), "class")}> ${offerings.map(({ title, description }, index) => renderTemplate`${renderComponent($$result, "NumberCard", $$NumberCard, { "title": title, "description": description, "index": index + 1 })}`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/WhatWeOffer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Collaboration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Collaboration;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      quote_and_document_generation: { collaboration: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"> <div> <h2 class="heading-2 mb-8 text-neutral-10"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Streamlined
<span class="brand-gradient bg-clip-text text-transparent">collaboration</span> and <br> sharing
` })} </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result, "Image", $$Image, { "class": "h-20 w-20", "src": partnership, "alt": "" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.text_1} </p> <p class="mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.text_2} </p> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/quote/Collaboration.astro", void 0);

const pentagon = new Proxy({"src":"/_astro/pentagon.3Ad5vVGP.png","width":485,"height":491,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const polygon = new Proxy({"src":"/_astro/polygon.LJ8umCFH.png","width":657,"height":675,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const support = new Proxy({"src":"/_astro/support-integrated.e72wOiqX.svg","width":586,"height":365,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Support = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Support;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      quote_and_document_generation: { support: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem] overflow-x-clip lg:mb-[7.5rem]"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20"> <div class=""> <h2 class="text-neutral-10 heading-2 mb-[25px] lg:mb-[50px]"> ${t.heading} </h2> <p class="text-neutral-30 font-light lg:leading-[125%] tracking-[0.4px]text-base lg:text-[20px]"> ${t.subtext} </p> </div> <div class=""> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": support, "alt": "" })} </div> </div> <div class="md:container-left md:container-right pt-[4.25rem] md:py-[4.25rem] lg:mt-[4.25rem]"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 relative isolate"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute top-1/2 left-full -translate-x-[55%] -translate-y-1/2 -z-[1]", "src": pentagon, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.constraint_resolution.title} </p> <p class="text-base text-white leading-[1.4] pr-16"> ${t.constraint_resolution.description} </p> </div> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 relative isolate"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute top-1/2 left-full -translate-x-[55%] -translate-y-1/2 -z-[1]", "src": polygon, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.instant_sales_insights.title} </p> <p class="text-base text-white leading-[1.4] pr-16"> ${t.instant_sales_insights.description} </p> </div> <div class="lg:col-span-2"> <div class="p-8 bg-primary-4/[.11] rounded-2xl border border-primary-7 lg:h-max lg:w-3/5 mx-auto relative isolate"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute top-full left-full -translate-x-[55%] -translate-y-[55%] -z-[1]", "src": circles, "alt": "" })} <p class="text-[2rem] leading-tight text-white mb-4"> ${t.efficient_project_sales.title} </p> <p class="text-base text-white leading-[1.4] pr-16"> ${t.efficient_project_sales.description} </p> </div> </div> </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/quote/Support.astro", void 0);

const $$Astro$1 = createAstro();
const $$QuoteDocumentGenerationPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QuoteDocumentGenerationPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { quote_and_document_generation: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container relative gap-6 md:gap-12 xl:gap-20 grid grid-cols-1 lg:grid-cols-2 text-neutral-10 mb-[4.25rem]"> <div> <h1 class="text-neutral-10 heading-1">${t.hero.heading}</h1> </div> <div> <p class="text-2xl lg:text-[2rem] leading-tight text-neutral-10"> ${t.hero.subtext} </p> </div> </div> <div class="container"> <div class="flex items-center gap-2.5 animate-[bounce_2s_infinite]"> ${renderComponent($$result2, "ScrollArrow", $$ScrollArrow, { "class": "h-5 w-auto" })} <span class="text-sm text-white leading-normal tracking-[.7px] capitalize">${common.scroll_for_more}</span> </div> </div> </section> <section class="py-[4.25rem]"${addAttribute(t.join_journey.label, "aria-label")}> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20"> ${renderComponent($$result2, "JoinJourneySlider", $$JoinJourneySlider, {})} <div class="flex flex-col justify-center"> <h2 class="heading-2 text-neutral-20 mb-10 lg:mb-16"> ${t.join_journey.heading} </h2> <p class="text-base lg:text-xl text-neutral-30 font-light lg:leading-tight tracking-[0.4px]"> ${t.join_journey.subtext} </p> </div> </div> </div> </section> ${renderComponent($$result2, "OvercomeQuotingChallanges", $$OvercomeQuotingChallanges, {})} ${renderComponent($$result2, "WhatWeOffer", $$WhatWeOffer, { "theme": "gray", "offerings": t.what_we_offer })} ${renderComponent($$result2, "Collaboration", $$Collaboration, {})} ${renderComponent($$result2, "Support", $$Support, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/QuoteDocumentGenerationPage.astro", void 0);

const $$Astro = createAstro();
const $$AngebotUndDokumentenerstellung = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AngebotUndDokumentenerstellung;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "QuoteDocumentGenerationPage", $$QuoteDocumentGenerationPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/angebot-und-dokumentenerstellung.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/angebot-und-dokumentenerstellung.astro";
const $$url = "/de/angebot-und-dokumentenerstellung";

const angebotUndDokumentenerstellung = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AngebotUndDokumentenerstellung,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ScrollArrow as $, carouselBottom as a, $$WhatWeOffer as b, carouselTop as c, $$LaunchRocket as d, $$QuoteDocumentGenerationPage as e, polygon as f, support as g, $$JoinJourneySlider as h, $$OvercomeQuotingChallanges as i, $$Collaboration as j, $$Support as k, angebotUndDokumentenerstellung as l, pentagon as p, solutionImg as s };
