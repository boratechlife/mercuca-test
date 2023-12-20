/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, a as $$Image, j as $$Layout, q as $$RequestDemoLink } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { b as $$ModelSection } from './configuration-engine_ouSEkntf.mjs';

const banner = new Proxy({"src":"/_astro/banner.pK3ugj6S.png","width":375,"height":558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const settingsWeb = new Proxy({"src":"/_astro/setting-web.10ZHENK5.svg","width":1,"height":1,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const alertDecagram = new Proxy({"src":"/_astro/alert-decagram-outline.ycRmgbre.svg","width":1,"height":1,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const bookEdit = new Proxy({"src":"/_astro/book-edit-outline.zn64GB3t.svg","width":1,"height":1,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const rocket = new Proxy({"src":"/_astro/rocket-launch-outline.EnSUcUMj.svg","width":1,"height":1,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$AdvantagesOfEffectiveModelling = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AdvantagesOfEffectiveModelling;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      product_modelling: { advantages: t }
    }
  } = await useTranslation(lang);
  const advantages = [
    {
      icon: settingsWeb,
      ...t.advantages.configurability
    },
    {
      icon: alertDecagram,
      ...t.advantages.error_reduction
    },
    {
      icon: bookEdit,
      ...t.advantages.customization
    },
    {
      icon: rocket,
      ...t.advantages.efficiency
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-12"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
The advantages <br> of effective <span class="text-accent-1">Product Modelling</span> ` })} </h2> <div id="pm-advantages" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"> ${advantages.map((advantage) => renderTemplate`<div class="p-6 rounded-2xl odd:bg-primary-5 even:bg-primary-4"> ${renderComponent($$result, "Image", $$Image, { "class": "h-12 w-12 mx-auto mb-6", "src": advantage.icon, "alt": "" })} <p class="text-neutral-10 text-center font-bold capitalize text-[22px] mb-4"> ${advantage.title} </p> <p class="text-base text-neutral-30 leading-[1.4]"> ${advantage.description} </p> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/product-modelling/AdvantagesOfEffectiveModelling.astro", void 0);

const circular = new Proxy({"src":"/_astro/circular-loop._HQbiCi7.svg","width":280,"height":177,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const customize = new Proxy({"src":"/_astro/customize.UStM8G7Y.svg","width":319,"height":282,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const hierarchy = new Proxy({"src":"/_astro/hierarchy.YgRRXpsM.svg","width":280,"height":280,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const visualize = new Proxy({"src":"/_astro/visualize.3sCb3qkv.svg","width":300,"height":301,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$FeaturesOfProductModelling = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturesOfProductModelling;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      product_modelling: { features: t }
    }
  } = await useTranslation(lang);
  const offerings = [
    {
      icon: hierarchy,
      ...t.features.hierarchical_structures
    },
    {
      icon: customize,
      ...t.features.customization
    },
    {
      icon: circular,
      ...t.features.reuse_and_optimization
    },
    {
      icon: visualize,
      ...t.features.visualization
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pm-key-features" class="py-[4.25rem]"${addAttribute(t.label, "arial-label")}> <div class="container"> <h2 class="heading-2 text-neutral-10 mb-16 text-center"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Key features of Product <br> Modeling in <span class="brand-gradient bg-clip-text text-transparent">CPQ</span> ` })} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-10 bg-primary-5/10 border border-primary-7 rounded-2xl"> ${offerings.map(({ title, description, icon }, index) => renderTemplate`<div class="flex flex-col p-8 bg-primary-4 rounded-2xl"> <div class="mb-10 h-[250px]"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto max-h-[100%]", "src": icon, "alt": title })} </div> <p class="mb-4 text-2xl font-medium leading-tight  tracking-[.4px] text-neutral-10 flex items-end  "> ${title} </p> <p class="text-base leading-[1.4] text-neutral-40">${description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/product-modelling/FeaturesOfProductModelling.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProductModellingPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductModellingPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { product_modelling: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 id="pm-heading" class="brand-gradient bg-clip-text text-transparent heading-1 mb-16 text-center"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading })} </h1> <div id="pm-banner" class="grid grid-cols-1 md:grid-cols-[30%,1fr] gap-6"> <div class="rounded-2xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": banner, "alt": "" })} </div> <div class="p-10 flex flex-col gap-8 justify-center bg-primary-3/[.39] rounded-2xl"> <p class="text-[2rem] leading-tight text-neutral-10"> ${t.hero.subtext_1} </p> <p class="text-xl font-light tracking-[.4px] text-neutral-30"> ${t.hero.subtext_2} </p> </div> </div> </div> </section> ${renderComponent($$result2, "ModelSection", $$ModelSection, { "gapped": true, "text_1": t.product_modelling_cpq.text_1, "text_2": t.product_modelling_cpq.text_2 })} ${renderComponent($$result2, "AdvantagesOfEffectiveModelling", $$AdvantagesOfEffectiveModelling, {})} ${renderComponent($$result2, "FeaturesOfProductModelling", $$FeaturesOfProductModelling, {})} <section class="pt-[4.25rem] pb-[7.5rem]"> <div class="container"> <div class="text-center"> <p class="text-[2rem] md:text-[4rem] font-medium leading-tight text-neutral-30 mb-6"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.call_to_action.text_1 }, { "default": ($$result3) => renderTemplate`
Let us <span class="brand-gradient bg-clip-text text-transparent">help</span> you!
` })} </p> <p class="md:max-w-[768px] mx-auto text-xl font-light tracking-[.4px] leading-[1.4] text-neutral-30 mb-10"> ${t.call_to_action.text_2} </p> <div class="flex justify-center"> ${renderComponent($$result2, "RequestDemoLink", $$RequestDemoLink, {})} </div> </div> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/ProductModellingPage.astro", void 0);

const $$Astro = createAstro();
const $$ModeladoDeProductos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModeladoDeProductos;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ProductModellingPage", $$ProductModellingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/modelado-de-productos.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/modelado-de-productos.astro";
const $$url = "/es/modelado-de-productos";

const modeladoDeProductos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ModeladoDeProductos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProductModellingPage as $, $$AdvantagesOfEffectiveModelling as a, banner as b, $$FeaturesOfProductModelling as c, modeladoDeProductos as m };
