/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, g as addAttribute, s as spreadAttributes, l as renderSlot } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, a as $$Image, z as $$ArrowTopRight, y as useTranslatedPath, j as $$Layout, q as $$RequestDemoLink, d as $$ReviewCard, i as $$LetsBuildTogether, o as $$TheNavbar, w as slugify, t as cn, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb, g as getCollection } from './__6I_KuJGd.mjs';
import { a as $$Logos } from './anmod-om-en-demo__OaSrvtk.mjs';
import { i as $$CheckedList, h as pill, f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
import { a as avatar$1 } from './configurador-de-migatronic_FJ-6-1E1.mjs';
import { $ as $$PaperPlane } from './cpq_y67MTOYE.mjs';
/* empty css                          */

const $$Astro$w = createAstro();
const $$Benefits = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Benefits;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      home: { benefits: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-8"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
About the benefits of <br> <span class="brand-gradient bg-clip-text text-transparent">product configuration</span> ` })} </h2> <div class="flex flex-col lg:flex-row items-center lg:justify-around py-12 bg-primary-6 border border-primary-7 rounded-2xl"> <div class="text-center text-white w-4/5 lg:w-[380px] border-b lg:border-b-0 lg:border-r border-primary-7 p-4 lg:p-0"> <p class="text-[3rem] lg:text-[4.5rem] font-medium leading-[1.4]"> ${t.stats.conversion_rate.value} </p> <p class="font-light text-xl tracking-[.4px] leading-tight"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.stats.conversion_rate.label })} </p> </div> <div class="text-center text-white w-4/5 lg:w-[380px] py-4 lg:py-0"> <p class="text-[3rem] lg:text-[4.5rem] font-medium leading-[1.4]"> ${t.stats.sales_price.value} </p> <p class="font-light text-xl tracking-[.4px] leading-tight"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.stats.sales_price.label })} </p> </div> <div class="text-center text-white w-4/5 lg:w-[380px] border-t lg:border-t-0 lg:border-l border-primary-7 p-4 lg:p-0"> <p class="text-[3rem] lg:text-[4.5rem] font-medium leading-[1.4]"> ${t.stats.online_returns.value} </p> <p class="font-light text-xl tracking-[.4px] leading-tight"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.stats.online_returns.label })} </p> </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/home/Benefits.astro", void 0);

const rocket = new Proxy({"src":"/_astro/rocket-20-regular.Kn-wv4j6.svg","width":20,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const chart3d = new Proxy({"src":"/_astro/chart-3d.akWOAWmD.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const box3d = new Proxy({"src":"/_astro/box-3d-three-points._srfiel2.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const pricehistory = new Proxy({"src":"/_astro/price-history.FEBDOKq-.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const documentoutline = new Proxy({"src":"/_astro/document-outline.MtVBBP2R.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const graph = new Proxy({"src":"/_astro/graph.6T8oP3uF.svg","width":24,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$v = createAstro();
const $$BusinessGrowthFeatures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$BusinessGrowthFeatures;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      home: {
        business_growth_features: { heading, features: t }
      }
    }
  } = await useTranslation(lang);
  const features = [
    {
      icon: chart3d,
      ...t.visualization,
      url: "visualizations"
    },
    {
      icon: rocket,
      ...t.efficient_product_modelling,
      url: "product-modelling"
    },
    {
      icon: box3d,
      ...t.need_based,
      url: "configuration-engine"
    },
    {
      icon: pricehistory,
      ...t.flexible_pricing_engine,
      url: "pricing-engine"
    },
    {
      icon: documentoutline,
      ...t.document_generation,
      url: "quote-and-document-generation"
    },
    {
      icon: graph,
      ...t.unique_analytics,
      url: "analytics"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-neutral-10 mb-16"> ${renderComponent($$result, "Trans", $$Trans, { "translation": heading }, { "default": ($$result2) => renderTemplate`
Features that help <br> your
<span class="brand-gradient bg-clip-text text-transparent">business grow.</span> ` })} </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 md:p-10 bg-primary-6 border border-primary-7 rounded-2xl"> ${features.map((feature) => renderTemplate`<a${addAttribute(feature.url, "href")} class="flex flex-col p-6 bg-primary-4 rounded-2xl"> <div class="p-4 bg-neutral-20/[.09] w-max rounded-[.625rem] fill-neutral-40 text-neutral-40"> ${renderComponent($$result, "Image", $$Image, { "class": "h-6 aspect-auto", "src": feature.icon, "alt": feature.title })} </div> <span class="mb-6 mt-4 text-xl font-light leading-tight tracking-[.4px] text-neutral-20 flex items-end justify-between gap-2"> ${feature.title} <span class="w-24 block"> ${renderComponent($$result, "ArrowTopRight", $$ArrowTopRight, { "class": "h-3.5 md:h-3 aspect-auto text-white fill-neutral-10" })} </span> </span> <p class="text-base leading-[1.4] text-neutral-40"> ${feature.description} </p> </a>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/home/BusinessGrowthFeatures.astro", void 0);

const $$Astro$u = createAstro();
const $$ManufacturingPotential = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ManufacturingPotential;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      home: { manufacturing_potential: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 lg:text-center text-neutral-10 mb-8"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Maximise your manufacturing <br> potential with a
<span class="brand-gradient bg-clip-text text-transparent">product configurator.</span> ` })} </h2> <div class="py-10 grid grid-cols-1 lg:grid-cols-3 gap-20"> <div class="py-12 border border-primary-7 rounded-2xl bg-primary-6 flex justify-center items-center order-2 lg:order-1"> ${renderComponent($$result, "PaperPlane", $$PaperPlane, {})} </div> ${renderComponent($$result, "CheckedList", $$CheckedList, { "items": t.how_to_maximise, "class": "order-1 lg:order-2 lg:col-span-2" })} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/home/ManufacturingPotential.astro", void 0);

const keys = new Proxy({"src":"/_astro/carcaca.qtqJ3Vll.png","width":1270,"height":22,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$t = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[1080px] px-6 mx-auto"> <div class="laptop-screen w-4/5 mx-auto border-[#1a202c] border-[.625rem] border-b-[0.9375rem] rounded-[1.25rem] overflow-hidden"> <div> <video id="video" controls preload="auto" loop playsinline="true" muted data-setup="{&quot;fluid&quot;: true}" poster="/videos/Showreel-2022.png" autoplay> <source type="video/mp4" src="/videos/Showreel-2022.mp4"> </video> <!-- <img
          width="1050"
          height="591"
          src="/videos/Showreel-2022.png"
          alt=""
          id="loadVideoBtn"
        />
        <div id="videoContainer" class="video-container"></div> --> </div> </div> <div class="laptop-keys"> ${renderComponent($$result, "Image", $$Image, { "src": keys, "alt": "" })} </div> </div> </section> `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/home/Video.astro", void 0);

const $$Astro$s = createAstro();
const $$ProductConfig = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$ProductConfig;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      home: { product_configuration: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-neutral-10 mb-16"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Convenient product configuration <br> at
<span class="brand-gradient bg-clip-text text-transparent">your fingertips</span>.
` })} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${t.steps.map((step, index) => renderTemplate`<div class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5 first:border-[#e18463] last:border-[#e18463]"> <span class="block text-neutral-10 leading-tight  text-[2rem]"> ${index + 1 >= 10 ? index + 1 : "0" + (index + 1)} </span> <p class="text-neutral-10 leading-tight  text-[2rem] mb-6 mt-4"> ${step.title} </p> <p class="text-neutral-30 text-base leading-[1.4]"> ${step.description} </p> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/home/ProductConfig.astro", void 0);

const $$Astro$r = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Link;
  const { href = "#", hreflang, ...props } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const r = useTranslatedPath(lang);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(r(href), "href")}${addAttribute(lang, "hreflang")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/i18n/Link.astro", void 0);

const $$Astro$q = createAstro();
const $$HomePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$HomePage;
  const { locale } = Astro2.props;
  const {
    pages: { home: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section> <div class="container px-6 py-16 md:px-16"> <h1 class="mega-heading text-neutral-10 text-center"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate`
Shape the Future of Manufacturing with <span class="brand-gradient bg-clip-text text-transparent">AI-Powered CPQ</span> ` })} </h1> <p class="my-8 text-white text-2xl leading-[30px] tracking-[.48px] max-w-[700px] mx-auto text-center"> ${t.subheading} </p> <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-6"> ${renderComponent($$result2, "RequestDemoLink", $$RequestDemoLink, { "class": "w-3/5 md:w-max" })} ${renderComponent($$result2, "Link", $$Link, { "href": "#", "class": "block text-white rounded-lg px-8 py-4 text-center font-medium border border-white w-3/5 md:w-max" }, { "default": ($$result3) => renderTemplate`${t.learn_more}` })} </div> </div> </section> ${renderComponent($$result2, "Logos", $$Logos, {})} ${renderComponent($$result2, "Video", $$Video, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "ManufacturingPotential", $$ManufacturingPotential, {})} <div class="relative hidden lg:block"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2", "src": pill, "alt": "" })} </div> ${renderComponent($$result2, "BusinessGrowthFeatures", $$BusinessGrowthFeatures, {})} ${renderComponent($$result2, "ProductConfig", $$ProductConfig, {})} ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "avatar": avatar$1 }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline"> ${t.review.message} </p>   ` })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, {})} `, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "TheNavbar", $$TheNavbar, { "noGradient": true, "slot": "nav" })}` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/HomePage.astro", void 0);

const $$Astro$p = createAstro();
const $$Index$m = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Index$m;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/index.astro", void 0);

const $$file$m = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/index.astro";
const $$url$m = "";

const index$m = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$m,
  file: $$file$m,
  url: $$url$m
}, Symbol.toStringTag, { value: 'Module' }));

const avatar = new Proxy({"src":"/_astro/martin.CQLavtj1.png","width":120,"height":115,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$o = createAstro();
const $$CareerPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$CareerPage;
  const { locale } = Astro2.props;
  const {
    pages: { careers: t }
  } = await useTranslation(locale);
  const r = useTranslatedPath(locale);
  const uniqueCategories = Array.from(
    new Set(
      t.jobs.flatMap((career) => career.categories).filter((category) => category.trim() !== "")
    )
  );
  const filterButtons = uniqueCategories.map((category) => ({
    title: category,
    slug: slugify(category)
  }));
  const filterableCareers = t.jobs.map((career) => ({
    ...career,
    categories: career.categories.filter((category) => category.trim() !== "").map((category) => ({
      title: category,
      slug: slugify(category)
    }))
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div id="filters" class="flex items-center flex-wrap gap-5 mb-10"> ${filterButtons.map((filterBtn, index) => renderTemplate`<button type="button"${addAttribute(filterBtn.slug, "data-filter")}${addAttribute(filterBtn.slug, "id")}${addAttribute(index === 0 ? "true" : "false", "data-active")} class="btn-filter hover:bg-accent-1 whitespace-nowrap hover:border-accent-1 transition-colors py-2.5 px-4 text-neutral-10 text-center font-medium text-base leading-tight rounded-[1.25rem] border  border-neutral-10 data-[active='true']:pointer-events-none data-[active='true']:bg-accent-1 data-[active='true']:border-accent-1"> ${filterBtn.title} </button>`)} </div> <ul class="border-b border-primary-4"> ${filterableCareers.map((job) => renderTemplate`<li class="border-t border-primary-4 data-[active='false']:hidden job"${addAttribute(job.categories.map((c) => c.slug).join(","), "data-filter")}> <article class="md:px-8 py-10 "> <div class="flex justify-between text-2xl tracking-[.48px] leading-tight text-neutral-10 mb-4"> <p> ${job.type}: ${job.title} </p> <a${addAttribute(r(job.link), "href")} class="hover:text-neutral-70 transition-colors duration-200 hidden md:flex items-center gap-3"> ${t.read_more}${" "} ${renderComponent($$result2, "ArrowTopRight", $$ArrowTopRight, { "class": "inline h-5 w-5 shrink-0 fill-current" })} </a> </div> <p class="text-base leading-[1.4] text-neutral-20 max-w-[650px]"> ${job.description} </p> <div class="md:hidden mt-4"> <a${addAttribute(r(job.link), "href")} class="hover:text-neutral-70 transition-colors duration-200 text-xl tracking-[.48px] leading-tight text-neutral-10 flex items-center gap-2 "> ${t.read_more}${" "} ${renderComponent($$result2, "ArrowTopRight", $$ArrowTopRight, { "class": "inline h-4 w-4 shrink-0 fill-current " })} </a> </div> </article> </li>`)} </ul> </div> </section> <section class=""> <div class="container"> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline"> ${t.review.message} </p>   ` })} </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/career/CareerPage.astro", void 0);

const $$Astro$n = createAstro();
const $$Index$l = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Index$l;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CareerPage", $$CareerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/career/index.astro", void 0);

const $$file$l = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/career/index.astro";
const $$url$l = "/career";

const index$l = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$l,
  file: $$file$l,
  url: $$url$l
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro();
const $$CaseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$CaseCard;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: { cases: t }
  } = await useTranslation(lang);
  const { alternate = false, class: classes, link = "#", photo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "[--case-card-bg:#1F2841] [--border-transparency:0.4] rounded-2xl",
    classes,
    alternate ? "case-border" : "case-border-alt"
  ), "class")} data-astro-cid-azj7ii3i> <div${addAttribute(cn(
    "p-6 md:p-12 xl:p-16 grid gap-12 font-poppins bg-primary-4/[.11]",
    alternate ? "grid-cols-1 lg:grid-cols-[1fr,40%]" : "grid-cols-1 lg:grid-cols-[40%,1fr]"
  ), "class")} data-astro-cid-azj7ii3i> <div${addAttribute(cn(
    "flex flex-col justify-center gap-6 md:gap-8",
    alternate ? "order-2" : "order-2 lg:order-1"
  ), "class")} data-astro-cid-azj7ii3i> <h2 class="text-[2rem] md:text-5xl text-neutral-10 leading-tight font-medium" data-astro-cid-azj7ii3i> ${renderSlot($$result, $$slots["title"])} </h2> <div class="text-base md:text-xl font-light tracking-[.4px] text-neutral-30" data-astro-cid-azj7ii3i> ${renderSlot($$result, $$slots["description"])} </div> <a${addAttribute(link, "href")} class="brand-gradient py-4 px-8 rounded-lg block text-base font-medium text-center text-white w-full md:w-max" data-astro-cid-azj7ii3i> ${t.read_more} </a> </div> <div${addAttribute(cn(alternate ? "order-1" : "order-1 lg:order-2"), "class")} data-astro-cid-azj7ii3i> ${renderComponent($$result, "Image", $$Image, { "src": photo, "alt": "", "data-astro-cid-azj7ii3i": true })} </div> </div> </div> `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/cases/CaseCard.astro", void 0);

const case_migatronic = new Proxy({"src":"/_astro/case_migatronic.LOJY7tS7.png","width":657,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const case_garage = new Proxy({"src":"/_astro/case_garage.awi44e5A.png","width":657,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const case_audi = new Proxy({"src":"/_astro/case_audi.NeUnRQgd.png","width":657,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const case_3d = new Proxy({"src":"/_astro/case_3d.h_XnC0cb.png","width":657,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const case_playground = new Proxy({"src":"/_astro/case_playground.0vrkkUci.png","width":657,"height":515,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$l = createAstro();
const $$CasesPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$CasesPage;
  const { locale } = Astro2.props;
  const {
    pages: { cases: t }
  } = await useTranslation(locale);
  const r = useTranslatedPath(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 text-center"> ${t.heading} </h1> </div> </section> <section class=""> <div class="container flex flex-col gap-16"> ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_migatronic, "link": r("cases.migatronic-configurator") }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.migatronic.description })} </p>`, "title": ($$result3) => renderTemplate`<span class="brand-gradient bg-clip-text text-transparent">${t.cases.migatronic.title}</span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "alternate": true, "photo": case_garage, "link": r("cases.lindab-garage-door-configurator") }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.lindab_garage.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.lindab_garage.title }, { "default": ($$result4) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Lindab</span> Garage door Configurator
` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_audi, "link": r("cases.audi-configurator") }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.audi_config.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.audi_config.title }, { "default": ($$result4) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Audi</span> Configurator
` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "alternate": true, "photo": case_3d, "link": r("cases.3d-renderings-for-multi-living") }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases["3d_renderings"].description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases["3d_renderings"].title }, { "default": ($$result4) => renderTemplate`
3D Renderings for <span class="brand-gradient bg-clip-text text-transparent">Multi-Living</span> ` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_playground }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.copla_playgrounds.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.copla_playgrounds.title }, { "default": ($$result4) => renderTemplate`
Product configurator for <span class="brand-gradient bg-clip-text text-transparent">Copla Playgrounds</span> ` })} </span>` })} </div> ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/cases/CasesPage.astro", void 0);

const $$Astro$k = createAstro();
const $$Index$k = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Index$k;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CasesPage", $$CasesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/index.astro", void 0);

const $$file$k = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/index.astro";
const $$url$k = "/cases";

const index$k = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$k,
  file: $$file$k,
  url: $$url$k
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$j = createAstro();
const $$Index$j = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$j;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/index.astro", void 0);

const $$file$j = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/index.astro";
const $$url$j = "/da";

const index$j = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$j,
  file: $$file$j,
  url: $$url$j
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro();
async function getStaticPaths$7() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$i = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Index$i;
  const { locale } = Astro2.params;
  const articles = await getCollection(
    "articles",
    ({ data, id }) => data.isDraft !== true && id.startsWith(locale)
  );
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${locale}/articles/${article.slug}`, "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler/index.astro", void 0);

const $$file$i = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler/index.astro";
const $$url$i = "/da/artikler";

const index$i = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$i,
  file: $$file$i,
  getStaticPaths: getStaticPaths$7,
  url: $$url$i
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro();
const $$Index$h = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Index$h;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CareerPage", $$CareerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/karriere/index.astro", void 0);

const $$file$h = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/karriere/index.astro";
const $$url$h = "/da/karriere";

const index$h = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$h,
  file: $$file$h,
  url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro();
const $$Index$g = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$g;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CasesPage", $$CasesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/index.astro", void 0);

const $$file$g = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/index.astro";
const $$url$g = "/da/cases";

const index$g = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$g,
  file: $$file$g,
  url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Index$f = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$f;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/index.astro", void 0);

const $$file$f = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/index.astro";
const $$url$f = "/de";

const index$f = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$f,
  file: $$file$f,
  url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
const $$Index$e = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$e;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CareerPage", $$CareerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/karriere/index.astro", void 0);

const $$file$e = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/karriere/index.astro";
const $$url$e = "/de/karriere";

const index$e = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$e,
  file: $$file$e,
  url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
async function getStaticPaths$6() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$d = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$d;
  const { locale } = Astro2.params;
  const articles = await getCollection(
    "articles",
    ({ data, id }) => data.isDraft !== true && id.startsWith(locale)
  );
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${locale}/articles/${article.slug}`, "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/artikel/index.astro", void 0);

const $$file$d = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/artikel/index.astro";
const $$url$d = "/de/artikel";

const index$d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$d,
  file: $$file$d,
  getStaticPaths: getStaticPaths$6,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Index$c = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$c;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CasesPage", $$CasesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/index.astro", void 0);

const $$file$c = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/cases/index.astro";
const $$url$c = "/de/cases";

const index$c = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$c,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$Index$b = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$b;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/index.astro", void 0);

const $$file$b = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/index.astro";
const $$url$b = "/en";

const index$b = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$b,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
async function getStaticPaths$5() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$a;
  const { locale } = Astro2.params;
  const articles = await getCollection(
    "articles",
    ({ data, id }) => data.isDraft !== true && id.startsWith(locale)
  );
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${locale}/articles/${article.slug}`, "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles/index.astro", void 0);

const $$file$a = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles/index.astro";
const $$url$a = "/en/articles";

const index$a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$a,
  file: $$file$a,
  getStaticPaths: getStaticPaths$5,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$9;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CareerPage", $$CareerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/career/index.astro", void 0);

const $$file$9 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/career/index.astro";
const $$url$9 = "/en/career";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$9,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$8;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CasesPage", $$CasesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/index.astro", void 0);

const $$file$8 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/index.astro";
const $$url$8 = "/en/cases";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$8,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$7;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/index.astro", void 0);

const $$file$7 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/index.astro";
const $$url$7 = "/es";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$7,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
async function getStaticPaths$4() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$6;
  const { locale } = Astro2.params;
  const articles = await getCollection(
    "articles",
    ({ data, id }) => data.isDraft !== true && id.startsWith(locale)
  );
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${locale}/articles/${article.slug}`, "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/articulos/index.astro", void 0);

const $$file$6 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/articulos/index.astro";
const $$url$6 = "/es/articulos";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  getStaticPaths: getStaticPaths$4,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CareerPage", $$CareerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/carrera/index.astro", void 0);

const $$file$5 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/carrera/index.astro";
const $$url$5 = "/es/carrera";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "CasesPage", $$CasesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/index.astro", void 0);

const $$file$4 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/index.astro";
const $$url$4 = "/es/casos";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
async function getStaticPaths$3() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { locale } = Astro2.params;
  const {
    pages: { home: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section> <div class="container px-6 py-16 md:px-16"> <h1 class="mega-heading text-neutral-10 text-center"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate`
Shape the Future of Manufacturing with <span class="brand-gradient bg-clip-text text-transparent">AI-Powered CPQ</span> ` })} </h1> <p class="my-8 text-white text-2xl leading-[30px] tracking-[.48px] max-w-[700px] mx-auto text-center"> ${t.subheading} </p> <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-6"> ${renderComponent($$result2, "RequestDemoLink", $$RequestDemoLink, { "class": "w-3/5 md:w-max" })} ${renderComponent($$result2, "Link", $$Link, { "href": "#", "class": "block text-white rounded-lg px-8 py-4 text-center font-medium border border-white w-3/5 md:w-max" }, { "default": ($$result3) => renderTemplate`${t.learn_more}` })} </div> </div> </section> ${renderComponent($$result2, "Logos", $$Logos, {})} ${renderComponent($$result2, "Video", $$Video, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "ManufacturingPotential", $$ManufacturingPotential, {})} <div class="relative hidden lg:block"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2", "src": pill, "alt": "" })} </div> ${renderComponent($$result2, "BusinessGrowthFeatures", $$BusinessGrowthFeatures, {})} ${renderComponent($$result2, "ProductConfig", $$ProductConfig, {})} ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "avatar": avatar$1 }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline"> ${t.review.message} </p>   ` })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, {})} `, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "TheNavbar", $$TheNavbar, { "noGradient": true, "slot": "nav" })}` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/index.astro", void 0);

const $$file$3 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/index.astro";
const $$url$3 = "/[locale]";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
async function getStaticPaths$2() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { locale } = Astro2.params;
  const articles = await getCollection(
    "articles",
    ({ data, id }) => data.isDraft !== true && id.startsWith(locale)
  );
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${locale}/articles/${article.slug}`, "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/articles/index.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/articles/index.astro";
const $$url$2 = "/[locale]/articles";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { locale } = Astro2.params;
  const {
    pages: { careers: t }
  } = await useTranslation(locale);
  const uniqueCategories = Array.from(
    new Set(
      t.jobs.flatMap((career) => career.categories).filter((category) => category.trim() !== "")
    )
  );
  const filterButtons = uniqueCategories.map((category) => ({
    title: category,
    slug: slugify(category)
  }));
  const filterableCareers = t.jobs.map((career) => ({
    ...career,
    categories: career.categories.filter((category) => category.trim() !== "").map((category) => ({
      title: category,
      slug: slugify(category)
    }))
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div id="filters" class="flex items-center flex-wrap gap-5 mb-10"> ${filterButtons.map((filterBtn, index) => renderTemplate`<button type="button"${addAttribute(filterBtn.slug, "data-filter")}${addAttribute(filterBtn.slug, "id")}${addAttribute(index === 0 ? "true" : "false", "data-active")} class="btn-filter hover:bg-accent-1 whitespace-nowrap hover:border-accent-1 transition-colors py-2.5 px-4 text-neutral-10 text-center font-medium text-base leading-tight rounded-[1.25rem] border  border-neutral-10 data-[active='true']:pointer-events-none data-[active='true']:bg-accent-1 data-[active='true']:border-accent-1"> ${filterBtn.title} </button>`)} </div> <ul class="border-b border-primary-4"> ${filterableCareers.map((job) => renderTemplate`<li class="border-t border-primary-4 data-[active='false']:hidden job"${addAttribute(job.categories.map((c) => c.slug).join(","), "data-filter")}> <article class="md:px-8 py-10 "> <div class="flex justify-between text-2xl tracking-[.48px] leading-tight text-neutral-10 mb-4"> <p> ${job.type}: ${job.title} </p> ${renderComponent($$result2, "Link", $$Link, { "href": job.link, "class": "hover:text-neutral-70 transition-colors duration-200 hidden md:flex items-center gap-3" }, { "default": ($$result3) => renderTemplate`${t.read_more}${" "}${renderComponent($$result3, "ArrowTopRight", $$ArrowTopRight, { "class": "inline h-5 w-5 shrink-0 fill-current" })} ` })} </div> <p class="text-base leading-[1.4] text-neutral-20 max-w-[650px]"> ${job.description} </p> <div class="md:hidden mt-4"> ${renderComponent($$result2, "Link", $$Link, { "href": job.link, "class": "hover:text-neutral-70 transition-colors duration-200 text-xl tracking-[.48px] leading-tight text-neutral-10 flex items-center gap-2 " }, { "default": ($$result3) => renderTemplate`${t.read_more}${" "}${renderComponent($$result3, "ArrowTopRight", $$ArrowTopRight, { "class": "inline h-4 w-4 shrink-0 fill-current " })} ` })} </div> </article> </li>`)} </ul> </div> </section> <section class=""> <div class="container"> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline"> ${t.review.message} </p>   ` })} </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/career/index.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/career/index.astro";
const $$url$1 = "/[locale]/career";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  const {
    common,
    pages: { cases: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 text-center"> ${t.heading} </h1> </div> </section> <section class=""> <div class="container flex flex-col gap-16"> ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_migatronic, "link": "/cases/migatronic-configurator" }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.migatronic.description })} </p>`, "title": ($$result3) => renderTemplate`<span class="brand-gradient bg-clip-text text-transparent">${t.cases.migatronic.title}</span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "alternate": true, "photo": case_garage, "link": "/cases/lindab-garage-door-configurator" }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.lindab_garage.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.lindab_garage.title }, { "default": ($$result4) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Lindab</span> Garage door Configurator
` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_audi, "link": "/cases/audi-configurator" }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.audi_config.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.audi_config.title }, { "default": ($$result4) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Audi</span> Configurator
` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "alternate": true, "photo": case_3d, "link": "/cases/3d-renderings-for-multi-living" }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases["3d_renderings"].description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases["3d_renderings"].title }, { "default": ($$result4) => renderTemplate`
3D Renderings for <span class="brand-gradient bg-clip-text text-transparent">Multi-Living</span> ` })} </span>` })} ${renderComponent($$result2, "CaseCard", $$CaseCard, { "photo": case_playground }, { "description": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.copla_playgrounds.description })} </p>`, "title": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.cases.copla_playgrounds.title }, { "default": ($$result4) => renderTemplate`
Product configurator for <span class="brand-gradient bg-clip-text text-transparent">Copla Playgrounds</span> ` })} </span>` })} </div> ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/index.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/index.astro";
const $$url = "/[locale]/cases";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, index$l as a, index$k as b, index$j as c, index$i as d, index$h as e, index$g as f, index$f as g, index$e as h, index$m as i, index$d as j, index$c as k, index$b as l, index$a as m, index$9 as n, index$8 as o, index$7 as p, index$6 as q, index$5 as r, index$4 as s, index$3 as t, index$2 as u, index$1 as v, index as w };
