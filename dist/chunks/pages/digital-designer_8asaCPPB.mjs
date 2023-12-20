/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslation, j as $$Layout, p as $$Trans, t as cn, a as $$Image, g as getLangFromUrl, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const $$Astro$7 = createAstro();
const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$List;
  const { label, title, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class=""${addAttribute(label, "aria-label")}> <h2 class="text-2xl leading-tight tracking-[.48px] text-neutral-20 mb-6"> ${title} </h2> <ul class="list-disc pl-5"> ${items.map((item) => renderTemplate`<li class="xl:w-[64%]  text-base leading-[1.4] text-neutral-30 "> ${item} </li>`)} </ul> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/career/List.astro", void 0);

const bi_cup = new Proxy({"src":"/_astro/bi_cup.IYvI1E6n.svg","width":25,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const window_icon = new Proxy({"src":"/_astro/window.hcxpPqzg.svg","width":27,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const bx_file = new Proxy({"src":"/_astro/bx_file.3sSdShG3.svg","width":25,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const ph_heart = new Proxy({"src":"/_astro/ph_heart-bold.ikeFZo-s.svg","width":25,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$DigitalDesignerPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DigitalDesignerPage;
  const { locale } = Astro2.props;
  const {
    pages: { job_posting: t }
  } = await useTranslation(locale);
  const hiringSteps = [
    {
      icon: window_icon,
      title: "Send an application",
      description: "Thanks for your application and interest in working at Mercura. We look forward to getting to know you better."
    },
    {
      icon: bi_cup,
      ...t.hiring.steps.send_application
    },
    {
      icon: window_icon,
      ...t.hiring.steps.design_test
    },
    {
      icon: bx_file,
      ...t.hiring.steps.technical_interview
    },
    {
      icon: ph_heart,
      ...t.hiring.steps.team
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section class="pt-12"> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> </div> </section> <section class="py-[4.25rem]"> <div class="container flex flex-col gap-16"> <section class=""> <h2 class="text-2xl leading-tight tracking-[.48px] text-neutral-20 mb-6"> ${t.about_job.heading} </h2> <div class="xl:[&>*]:w-[64%] flex flex-col gap-6 text-base leading-[1.4] text-neutral-30"> <p> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.about_job.text_1 })} </p> <p> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.about_job.text_2 })} </p> </div> </section> ${renderComponent($$result2, "List", $$List, { "title": t.responsibilities.heading, "items": t.responsibilities.list })} ${renderComponent($$result2, "List", $$List, { "title": t.what_to_expect.heading, "items": t.what_to_expect.list })} ${renderComponent($$result2, "List", $$List, { "title": t.qualifications.heading, "items": t.qualifications.list })} <section class="pt-[4.25rem]"> <h2 class="text-2xl leading-tight tracking-[.48px] text-neutral-20 mb-10 text-center"> ${t.hiring.heading} </h2> <div id="timeline" class="relative pl-5 md:pl-0 isolate"> ${hiringSteps.map((step, index) => renderTemplate`<div${addAttribute(index, "data-id")} data-in-view="false" class="[--step-space:3rem] md:[--step-space:84px] [--vertical-space:6.25rem] first:pt-[var(--vertical-space)] pb-[var(--vertical-space)]  md:w-3/4 lg:w-[calc(310px+var(--step-space))] odd:border-l-2 even:border-l-2 lg:even:border-l-0 lg:even:border-r-2 relative left-0 md:left-20 lg:left-1/2 lg:even:-translate-x-full group/step lg:even:pr-[var(--step-space)] even:pl-[var(--step-space)] lg:even:pl-0 odd:pl-[var(--step-space)] step"> <div${addAttribute(cn(
    "icon group-data-[in-view='true']/step:border-accent-2 transition-colors border-4 border-transparent absolute bg-white z-[2] group-odd/step:left-0 group-odd/step:-translate-x-1/2 lg:group-even/step:left-auto   group-even/step:left-0  lg:group-even/step:right-0 group-even/step:-translate-x-1/2 lg:group-even/step:translate-x-1/2   h-[60px] aspect-square flex justify-center items-center rounded-full  text-black ",
    index === 0 ? "top-[var(--vertical-space)]" : "top-0"
  ), "class")}> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-7 w-auto" })} </div> <div class=""> <span class="block uppercase text-base font-medium brand-gradient bg-clip-text text-transparent ">
step ${index + 1} </span> <p class="text-2xl leading-tight tracking-[.48px] text-neutral-20"> ${step.title} </p> <p class="text-base leading-[1.4] mt-4  text-neutral-30"> ${step.description} </p> </div> </div>`)} <div class="circle absolute h-5 aspect-square rounded-full bg-accent-2 left-5 md:left-20 lg:left-1/2 -translate-x-1/2 z-[1]" style="top:-20px"></div> </div> </section> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/career/DigitalDesignerPage.astro", void 0);

const $$Astro$5 = createAstro();
const $$DigitalDesigner$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DigitalDesigner$5;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "DigitalDesignerPage", $$DigitalDesignerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/career/digital-designer.astro", void 0);

const $$file$5 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/career/digital-designer.astro";
const $$url$5 = "/career/digital-designer";

const digitalDesigner$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$DigitalDesigner$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DigitalDesigner$4;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "DigitalDesignerPage", $$DigitalDesignerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/karriere/digital-designer.astro", void 0);

const $$file$4 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/karriere/digital-designer.astro";
const $$url$4 = "/da/karriere/digital-designer";

const digitalDesigner$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$DigitalDesigner$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DigitalDesigner$3;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "DigitalDesignerPage", $$DigitalDesignerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/karriere/digital-designer.astro", void 0);

const $$file$3 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/karriere/digital-designer.astro";
const $$url$3 = "/de/karriere/digital-designer";

const digitalDesigner$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$DigitalDesigner$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DigitalDesigner$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "DigitalDesignerPage", $$DigitalDesignerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/career/digital-designer.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/career/digital-designer.astro";
const $$url$2 = "/en/career/digital-designer";

const digitalDesigner$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$DigitalDesigner$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DigitalDesigner$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "DigitalDesignerPage", $$DigitalDesignerPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/carrera/digital-designer.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/carrera/digital-designer.astro";
const $$url$1 = "/es/carrera/digital-designer";

const digitalDesigner$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$DigitalDesigner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DigitalDesigner;
  const { locale } = Astro2.params;
  const {
    pages: { job_posting: t }
  } = await useTranslation(locale);
  const hiringSteps = [
    {
      icon: window_icon,
      title: "Send an application",
      description: "Thanks for your application and interest in working at Mercura. We look forward to getting to know you better."
    },
    {
      icon: bi_cup,
      ...t.hiring.steps.send_application
    },
    {
      icon: window_icon,
      ...t.hiring.steps.design_test
    },
    {
      icon: bx_file,
      ...t.hiring.steps.technical_interview
    },
    {
      icon: ph_heart,
      ...t.hiring.steps.team
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section class="pt-12"> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> </div> </section> <section class="py-[4.25rem]"> <div class="container flex flex-col gap-16"> <section class=""> <h2 class="text-2xl leading-tight tracking-[.48px] text-neutral-20 mb-6"> ${t.about_job.heading} </h2> <div class="xl:[&>*]:w-[64%] flex flex-col gap-6 text-base leading-[1.4] text-neutral-30"> <p> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.about_job.text_1 })} </p> <p> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.about_job.text_2 })} </p> </div> </section> ${renderComponent($$result2, "List", $$List, { "title": t.responsibilities.heading, "items": t.responsibilities.list })} ${renderComponent($$result2, "List", $$List, { "title": t.what_to_expect.heading, "items": t.what_to_expect.list })} ${renderComponent($$result2, "List", $$List, { "title": t.qualifications.heading, "items": t.qualifications.list })} <section class="pt-[4.25rem]"> <h2 class="text-2xl leading-tight tracking-[.48px] text-neutral-20 mb-10 text-center"> ${t.hiring.heading} </h2> <div id="timeline" class="relative pl-5 md:pl-0 isolate"> ${hiringSteps.map((step, index) => renderTemplate`<div${addAttribute(index, "data-id")} data-in-view="false" class="[--step-space:3rem] md:[--step-space:84px] [--vertical-space:6.25rem] first:pt-[var(--vertical-space)] pb-[var(--vertical-space)]  md:w-3/4 lg:w-[calc(310px+var(--step-space))] odd:border-l-2 even:border-l-2 lg:even:border-l-0 lg:even:border-r-2 relative left-0 md:left-20 lg:left-1/2 lg:even:-translate-x-full group/step lg:even:pr-[var(--step-space)] even:pl-[var(--step-space)] lg:even:pl-0 odd:pl-[var(--step-space)] step"> <div${addAttribute(cn(
    "icon group-data-[in-view='true']/step:border-accent-2 transition-colors border-4 border-transparent absolute bg-white z-[2] group-odd/step:left-0 group-odd/step:-translate-x-1/2 lg:group-even/step:left-auto   group-even/step:left-0  lg:group-even/step:right-0 group-even/step:-translate-x-1/2 lg:group-even/step:translate-x-1/2   h-[60px] aspect-square flex justify-center items-center rounded-full  text-black ",
    index === 0 ? "top-[var(--vertical-space)]" : "top-0"
  ), "class")}> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-7 w-auto" })} </div> <div class=""> <span class="block uppercase text-base font-medium brand-gradient bg-clip-text text-transparent ">
step ${index + 1} </span> <p class="text-2xl leading-tight tracking-[.48px] text-neutral-20"> ${step.title} </p> <p class="text-base leading-[1.4] mt-4  text-neutral-30"> ${step.description} </p> </div> </div>`)} <div class="circle absolute h-5 aspect-square rounded-full bg-accent-2 left-5 md:left-20 lg:left-1/2 -translate-x-1/2 z-[1]" style="top:-20px"></div> </div> </section> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/career/digital-designer.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/career/digital-designer.astro";
const $$url = "/[locale]/career/digital-designer";

const digitalDesigner = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalDesigner,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { digitalDesigner$4 as a, digitalDesigner$3 as b, digitalDesigner$2 as c, digitalDesigner$5 as d, digitalDesigner$1 as e, digitalDesigner as f };
