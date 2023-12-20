/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent, s as spreadAttributes } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, q as $$RequestDemoLink, j as $$Layout, a as $$Image } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { a as $$AlertDecagram } from './cpq_y67MTOYE.mjs';
import { $ as $$NumberedList } from './configuration-engine_ouSEkntf.mjs';
import { d as $$LaunchRocket, f as polygon, p as pentagon } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { i as $$CheckedList, c as circles } from './analitica_JKbx2oR0.mjs';
import { $ as $$Link } from './index_HRybPAWZ.mjs';

const pricingImg = new Proxy({"src":"/_astro/pricing-header.rP3yjOWz.png","width":532,"height":442,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$BenefitsOfPricingFeatures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BenefitsOfPricingFeatures;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      pricing_engine: { benefits_of_pricing_features: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-12"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
The <span class="text-accent-1">benefits</span> of our
<br>
pricing features
` })} </h2> <p class="mb-16 mx-auto max-w-[730px] text-center text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.subtext} </p> ${renderComponent($$result, "NumberedList", $$NumberedList, { "items": t.benefits })} <div class="mt-16"> ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, { "class": "w-max mx-auto" })} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/pricing-engine/BenefitsOfPricingFeatures.astro", void 0);

const $$Astro$3 = createAstro();
const $$Monitor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Monitor;
  const { class: classes = "", ...props } = Astro2.props;
  return renderTemplate`<!-- <svg
  viewBox="0 0 370 359"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={classes}
  {...props}
>
  <path
    d="M234.389 281.916V334.913C234.389 341.099 229.556 346.114 223.595 346.114H137.482C131.521 346.114 126.688 341.099 126.688 334.913V281.916H110.953V336.952C110.953 345.032 117.265 351.583 125.051 351.583H236.025C243.812 351.583 250.124 345.032 250.124 336.952V281.916H234.389Z"
    fill="#263238"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M247.538 281.916V334.913C247.538 341.099 242.705 346.114 236.744 346.114H140.433C134.472 346.114 129.639 341.099 129.639 334.913V281.916H124.102V336.952C124.102 345.032 130.415 351.583 138.201 351.583H238.976C246.762 351.583 253.075 345.032 253.075 336.952V281.916H247.538Z"
    fill="white"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M290.238 351.149H67.6772V358.486H290.238V351.149Z"
    fill="#263238"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M290.237 351.149H122.616V358.486H290.237V351.149Z"
    fill="white"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M352.436 290.32H8.83982C4.19452 290.32 0.428711 286.412 0.428711 281.592V9.3785C0.428711 4.55812 4.19452 0.650391 8.83982 0.650391H352.436C357.082 0.650391 360.847 4.55812 360.847 9.3785V281.592C360.847 286.412 357.082 290.32 352.436 290.32Z"
    fill="#263238"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M360.387 290.32H16.79C12.1447 290.32 8.37891 286.412 8.37891 281.592V9.3785C8.37891 4.55812 12.1447 0.650391 16.79 0.650391H360.387C365.032 0.650391 368.798 4.55812 368.798 9.3785V281.592C368.798 286.412 365.032 290.32 360.387 290.32Z"
    fill="url(#paint0_linear_1919_12679)"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M361.995 262.453H15.1821V14.8463C15.1821 10.0259 18.9479 6.11816 23.5932 6.11816H353.585C358.23 6.11816 361.996 10.0259 361.996 14.8463V262.453H361.995Z"
    fill="white"
    stroke="#263238"
    stroke-width="0.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <defs>
    <linearGradient
      id="paint0_linear_1919_12679"
      x1="349.518"
      y1="216.545"
      x2="165.729"
      y2="217.828"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D6545B"></stop>
      <stop offset="1" stop-color="#FC946D"></stop>
    </linearGradient>
  </defs>
</svg> -->${maybeRenderHead()}<svg${addAttribute(classes, "class")}${spreadAttributes(props)} viewBox="0 0 597 414" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M338.389 304.916V357.913C338.389 364.099 333.556 369.114 327.595 369.114H241.482C235.521 369.114 230.688 364.099 230.688 357.913V304.916H214.953V359.952C214.953 368.032 221.265 374.583 229.051 374.583H340.025C347.812 374.583 354.124 368.032 354.124 359.952V304.916H338.389Z" fill="#263238" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M351.538 304.916V357.913C351.538 364.099 346.705 369.114 340.744 369.114H244.433C238.472 369.114 233.639 364.099 233.639 357.913V304.916H228.102V359.952C228.102 368.032 234.415 374.583 242.201 374.583H342.976C350.762 374.583 357.075 368.032 357.075 359.952V304.916H351.538Z" fill="white" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M394.238 374.149H171.677V381.486H394.238V374.149Z" fill="#263238" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M394.237 374.149H226.616V381.486H394.237V374.149Z" fill="white" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M456.436 313.32H112.84C108.195 313.32 104.429 309.412 104.429 304.592V32.3785C104.429 27.5581 108.195 23.6504 112.84 23.6504H456.436C461.082 23.6504 464.847 27.5581 464.847 32.3785V304.592C464.847 309.412 461.082 313.32 456.436 313.32Z" fill="#263238" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M464.387 313.32H120.79C116.145 313.32 112.379 309.412 112.379 304.592V32.3785C112.379 27.5581 116.145 23.6504 120.79 23.6504H464.387C469.032 23.6504 472.798 27.5581 472.798 32.3785V304.592C472.798 309.412 469.032 313.32 464.387 313.32Z" fill="url(#paint0_linear_1919_12677)" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M465.995 285.453H119.182V37.8463C119.182 33.0259 122.948 29.1182 127.593 29.1182H457.585C462.23 29.1182 465.996 33.0259 465.996 37.8463V285.453H465.995Z" fill="white" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M422.351 68.2375C415.977 51.7906 399.672 41.9292 382.756 44.3996C325.855 52.7092 158.075 78.6676 154.375 96.3369C149.915 117.621 141.89 240.701 160.617 245.327C179.345 249.955 435.29 261.059 444.208 236.998C450.96 218.781 441.352 117.267 422.351 68.2375Z" fill="url(#paint1_linear_1919_12677)"></path> <path opacity="0.7" d="M422.351 68.2375C415.977 51.7906 399.672 41.9292 382.756 44.3996C325.855 52.7092 158.075 78.6676 154.375 96.3369C149.915 117.621 141.89 240.701 160.617 245.327C179.345 249.955 435.29 261.059 444.208 236.998C450.96 218.781 441.352 117.267 422.351 68.2375Z" fill="white"></path> <path d="M260.453 182.655H233.626V269.904H260.453V182.655Z" fill="#ADADAD" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M299.427 105.446H272.601V269.903H299.427V105.446Z" fill="url(#paint2_linear_1919_12677)" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M338.907 147.99H312.081V269.903H338.907V147.99Z" fill="#263238" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <defs> <linearGradient id="paint0_linear_1919_12677" x1="453.518" y1="239.545" x2="269.729" y2="240.828" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint1_linear_1919_12677" x1="430.446" y1="198.99" x2="278.705" y2="200.209" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint2_linear_1919_12677" x1="297.992" y1="228.018" x2="284.312" y2="228.03" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Monitor.astro", void 0);

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const lang = getLangFromUrl(Astro2.url);
  const { call_to_action: t } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-neutral-30 text-center mb-10"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
How does this apply <br> to
<span class="brand-gradient bg-clip-text text-transparent">your</span>
company?
` })} </h2> <div class="flex flex-col md:flex-row items-center md:justify-center gap-6"> ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, {})} ${renderComponent($$result, "Link", $$Link, { "href": "#", "class": "block text-white rounded-lg px-8 py-4 before:text-center font-medium border border-white" }, { "default": ($$result2) => renderTemplate`${t.contact_us}` })} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/CallToAction.astro", void 0);

const $$Astro$1 = createAstro();
const $$PricingEnginePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingEnginePage;
  const { locale } = Astro2.props;
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
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/PricingEnginePage.astro", void 0);

const $$Astro = createAstro();
const $$MotorDePrecios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MotorDePrecios;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PricingEnginePage", $$PricingEnginePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/motor-de-precios.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/motor-de-precios.astro";
const $$url = "/es/motor-de-precios";

const motorDePrecios = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MotorDePrecios,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PricingEnginePage as $, $$BenefitsOfPricingFeatures as a, $$Monitor as b, $$CallToAction as c, motorDePrecios as m, pricingImg as p };
