/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, g as addAttribute } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, t as cn, a as $$Image, j as $$Layout, q as $$RequestDemoLink } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { g as $$NumberCard, h as pill, i as $$CheckedList } from './analitica_JKbx2oR0.mjs';
import { c as $$CallToAction } from './motor-de-precios_IlxLh6D2.mjs';

const $$Astro$3 = createAstro();
const $$BenefitsOfCPQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BenefitsOfCPQ;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      visualizations: { benefits_of_cpq: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-center text-neutral-20"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
How Mercura
<span class="text-accent-1">CPQ Quote</span>
and <br> document generation benefit <br> manufacturing companies?
` })} </h2> <div class="flex flex-wrap [--benefit-gap:1.5rem] gap-[--benefit-gap] justify-center mt-[45px] lg:mt-[90px]"> ${t.benefits.map(({ title, description }, index) => renderTemplate`${renderComponent($$result, "NumberCard", $$NumberCard, { "class": "basis-full md:basis-[calc(calc(100%-var(--benefit-gap))/2)] lg:basis-[calc(calc(100%-2*var(--benefit-gap))/3)]", "index": index + 1, "title": title, "description": description })}`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/visualizations/BenefitsOfCPQ.astro", void 0);

const seamless = new Proxy({"src":"/_astro/seamless.8fnTbicM.png","width":593,"height":644,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const best_in_class = new Proxy({"src":"/_astro/best_in_class.JhH61Bbn.png","width":906,"height":594,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const visualization = new Proxy({"src":"/_astro/realtime-visualization.A6lemnL1.png","width":338,"height":274,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const share = new Proxy({"src":"/_astro/share.n6XcK4W5.png","width":337,"height":274,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const augmented = new Proxy({"src":"/_astro/augmented.Yffc50uV.png","width":337,"height":274,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const drag_and_drop = new Proxy({"src":"/_astro/drag_and_drop.axbrG_eD.png","width":338,"height":274,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const visual_friendly = new Proxy({"src":"/_astro/visual_friendly.1PoLrIfc.png","width":338,"height":274,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$BenefitsToManufacturing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BenefitsToManufacturing;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      visualizations: { benefits_to_manufacturing: t }
    }
  } = await useTranslation(lang);
  const benefits = [
    {
      icon: visual_friendly,
      ...t.benefits.visual_friendly
    },
    {
      highlight: true,
      icon: visualization,
      ...t.benefits.real_time_2d_and_3d_visualization
    },
    {
      icon: drag_and_drop,
      ...t.benefits.drag_and_drop_configuration
    },
    {
      icon: augmented,
      ...t.benefits.augmented_reality_integration
    },
    {
      icon: share,
      ...t.benefits.effortless_sharing
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container"> <h2 class="text-center text-neutral-10 heading-2 mb-10 md:mb-16"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
How our
<span class="brand-gradient bg-clip-text text-transparent">visualization</span>
feature <br class="hidden md:block">benefits manufacturing <br class="hidden md:block">companies
` })} </h2> <div class="flex flex-wrap [--benefit-gap:2rem] gap-[--benefit-gap] justify-center xl:items-end py-10"> ${benefits.map((benefit) => renderTemplate`<div${addAttribute(cn(
    "basis-full md:basis-[calc(calc(100%-var(--benefit-gap))/2)] lg:basis-[calc(calc(100%-2*var(--benefit-gap))/3)] p-8 bg-primary-4/[.11] border border-primary-5/[.41] rounded-2xl xl:h-max  "
  ), "class")}> ${renderComponent($$result, "Image", $$Image, { "src": benefit.icon, "alt": benefit.title })} <p${addAttribute(cn(
    "text-xl leading-tight tracking-[.4px] font-medium text-neutral-10 text-center xl:text-left",
    benefit.highlight ? "my-4 lg:my-6" : "my-4"
  ), "class")}> ${benefit.title} </p> <p class="text-neutral-30 text-base leading-[1.4]"> ${benefit.description} </p> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/visualizations/BenefitsToManufacturing.astro", void 0);

const $$Astro$1 = createAstro();
const $$VisualizationsPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VisualizationsPage;
  const { locale } = Astro2.props;
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
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/VisualizationsPage.astro", void 0);

const $$Astro = createAstro();
const $$Visualiseringer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Visualiseringer;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "VisualizationsPage", $$VisualizationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/visualiseringer.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/visualiseringer.astro";
const $$url = "/da/visualiseringer";

const visualiseringer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Visualiseringer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$VisualizationsPage as $, $$BenefitsToManufacturing as a, best_in_class as b, $$BenefitsOfCPQ as c, seamless as s, visualiseringer as v };
