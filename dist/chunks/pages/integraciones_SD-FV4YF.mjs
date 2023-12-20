/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, q as $$RequestDemoLink, a as $$Image, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';
import { a as $$AlertDecagram } from './cpq_y67MTOYE.mjs';
import { $ as $$NumberedList } from './configuration-engine_ouSEkntf.mjs';

const processesImg = new Proxy({"src":"/_astro/process.E0qFz64Y.png","width":484,"height":405,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$HowWeHelp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HowWeHelp;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      integrations: { how_we_help: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.label, "aria-label")}> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-16"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
How <span class="brand-gradient bg-clip-text text-transparent">we help you</span> <br>
address these challenges
` })} </h2> ${renderComponent($$result, "NumberedList", $$NumberedList, { "items": t.solutions })} <div class="mt-16"> ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, { "class": "w-max mx-auto" })} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/integrations/HowWeHelp.astro", void 0);

const dynamicsImg = new Proxy({"src":"/_astro/dynamics.YuccS30T.png","width":456,"height":204,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const salesforceImg = new Proxy({"src":"/_astro/salesforce.BSQiVDAE.png","width":295,"height":197,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const hubspotImg = new Proxy({"src":"/_astro/hubspot.sjlgbsGP.png","width":518,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const vismaImg = new Proxy({"src":"/_astro/visma.x2OwZSQ9.png","width":518,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$TailoredIntegrations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TailoredIntegrations;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      integrations: { tailored: t }
    }
  } = await useTranslation(lang);
  const integrations = [
    {
      logo: dynamicsImg,
      ...t.integrations.microsoft_dynamics_365
    },
    {
      logo: salesforceImg,
      ...t.integrations.salesforce
    },
    {
      logo: hubspotImg,
      ...t.integrations.hubspot
    },
    {
      logo: vismaImg,
      ...t.integrations.visma_business
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-center text-neutral-10 mb-16"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Tailored</span>
integrations for <br> your CRM
` })} </h2> <div class="flex flex-col gap-12 xl:gap-8"> ${integrations.map((integration) => renderTemplate`<div class="flex flex-col xl:flex-row xl:odd:flex-row-reverse gap-16 xl:gap-20 p-8 border border-primary-7 bg-primary-4/[.11] rounded-2xl"> <div class="shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "max-h-[250px] xl:max-h-none xl:h-full aspect-auto", "src": integration.logo, "alt": integration.title })} </div> <div class="xl:max-w-[820px]"> <p class="text-[2rem] leading-tight  text-white mb-6"> ${integration.title} </p> <p class="text-white text-xl font-light leading-tight  tracking-[.4px]"> ${integration.description} </p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/integrations/TailoredIntegrations.astro", void 0);

const $$Astro$1 = createAstro();
const $$IntegrationsPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IntegrationsPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { integrations: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 mb-16 text-center"> ${t.hero.heading} </h1> <div class="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-6"> <div class="px-6 py-12 flex justify-center items-center bg-primary-3/40 rounded-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": processesImg, "alt": "" })} </div> <div class="p-10 bg-primary-3/40 rounded-2xl"> <p class="text-[2rem] md:text-[3rem] font-medium leading-tight text-neutral-20 mb-8"> ${t.hero.subtext_1} </p> <p class="text-xl md:text-2xl tracking-[.48px] leading-tight text-neutral-30"> ${t.hero.subtext_2} </p> </div> </div> </div> </section> <section class="py-[4.25rem]" aria-label="The challenge of Information Silos"> <div class="container grid grid-cols-1 md:grid-cols-2 gap-20"> <div> <h2 class="heading-2 mb-8 text-neutral-10">
The challenge of <br> <span class="text-accent-1">Information Silos</span> </h2> <div class="p-8 bg-neutral-40/[.09] rounded-2xl w-max"> ${renderComponent($$result2, "AlertDecagram", $$AlertDecagram, { "class": "h-20 w-20" })} </div> </div> <div> <p class="text-2xl text-neutral-10 leading-tight tracking-[.48px]"> ${t.challenge_of_silos.subtext_1} </p> <p class="mt-12 md:mt-16 text-xl font-light leading-tight tracking-[.4px] text-neutral-30"> ${t.challenge_of_silos.subtext_2} </p> </div> </div> </section> ${renderComponent($$result2, "HowWeHelp", $$HowWeHelp, {})} ${renderComponent($$result2, "TailoredIntegrations", $$TailoredIntegrations, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/IntegrationsPage.astro", void 0);

const $$Astro = createAstro();
const $$Integraciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Integraciones;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "IntegrationsPage", $$IntegrationsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/integraciones.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/integraciones.astro";
const $$url = "/es/integraciones";

const integraciones = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Integraciones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$IntegrationsPage as $, $$HowWeHelp as a, $$TailoredIntegrations as b, integraciones as i, processesImg as p };
