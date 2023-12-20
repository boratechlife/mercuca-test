/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, j as renderComponent, F as Fragment } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, t as cn, a as $$Image, v as contact, p as $$Trans, q as $$RequestDemoLink, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const $$Astro$b = createAstro();
const $$Tick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: classes = "h-6 w-6 text-white", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(classes, "class")}${spreadAttributes(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Tick.astro", void 0);

const $$Astro$a = createAstro();
const $$CheckedList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CheckedList;
  const { items, class: classes = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`flex flex-col gap-4 justify-center ${classes}`, "class")}${spreadAttributes(props)}> ${items.map((item) => renderTemplate`<li class="flex items-start gap-1 text-xl font-light leading-tight  tracking-[.4px] text-neutral-30"> ${renderComponent($$result, "Tick", $$Tick, { "class": "h-5 aspect-auto shrink-0" })} ${item} </li>`)} </ul>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/lists/CheckedList.astro", void 0);

const pill = new Proxy({"src":"/_astro/pill.IMYgyUKi.png","width":616,"height":617,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$9 = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Input;
  const { class: classes = "", placeholder, ...props } = Astro2.props;
  const newPlaceholder = !placeholder ? void 0 : props.required ? placeholder + "*" : placeholder;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(`px-5 py-3.5 rounded-md text-[#DCD7D5] leading-[1.5] border border-neutral-10/20  w-full bg-primary-4 ${classes}`, "class")}${addAttribute(newPlaceholder, "placeholder")}${spreadAttributes(props)}>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/form/Input.astro", void 0);

const $$Astro$8 = createAstro();
const $$Textarea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Textarea;
  const { class: classes = "", placeholder, ...props } = Astro2.props;
  const newPlaceholder = !placeholder ? void 0 : props.required ? placeholder + "*" : placeholder;
  return renderTemplate`${maybeRenderHead()}<textarea${addAttribute(`px-5 py-3.5 rounded-md text-[#DCD7D5] leading-[1.5] border border-neutral-10/20 w-full bg-primary-4 ${classes}`, "class")}${spreadAttributes(props)}${addAttribute(newPlaceholder, "placeholder")}></textarea>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/form/Textarea.astro", void 0);

const mail = new Proxy({"src":"/_astro/mail.r4N3wl8L.svg","width":21,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const phone = new Proxy({"src":"/_astro/phone.U_Fe9-27.svg","width":20,"height":19,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$GetInTouchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$GetInTouchForm;
  const lang = getLangFromUrl(Astro2.url);
  const { common } = await useTranslation(lang);
  const { theme = "blue", kind = "plain" } = Astro2.props;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  const isBlueAndPlain = theme === "blue" && kind === "plain";
  const isGrayAndPlain = theme === "gray" && kind === "plain";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(
    "overflow-x-clip",
    kind === "plain" && "py-[4.25rem]",
    kind === "full" && "py-[4.25rem] xl:py-[100px]"
  ), "class")} aria-label="Get in touch"> <div class="container"> <div${addAttribute(cn(
    isBlueAndPlain && "bg-primary-6 border-primary-5/[.41]",
    isGrayAndPlain && "bg-primary-8  border-primary-7",
    kind === "plain" && "py-8 px-4 lg:px-16 border rounded-2xl  "
  ), "class")}> <div${addAttribute(cn(
    "grid grid-cols-1 lg:grid-cols-2 ",
    kind === "full" && "gap-[8.125rem]",
    kind === "plain" && "p-6 md:py-[4.25rem]"
  ), "class")}> <div${addAttribute(cn(
    "flex flex-col relative ",
    kind === "plain" && " justify-center"
  ), "class")}> <p${addAttribute(cn(
    "text-[2.5rem] md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-medium tracking-[3.6px] leading-[1.2]",
    kind === "plain" && "text-neutral-10",
    kind === "full" && "brand-gradient bg-clip-text text-transparent"
  ), "class")}> ${common.contact_form.get_in_touch} </p> ${kind === "full" && renderTemplate`<div class="py-[4.25rem] text-xl font-light leading-[1.5] text-white"> <p>${common.contact_form.learn_more.learn_more_about}:</p> <ul> ${common.contact_form.learn_more.learn_list.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div>`} ${kind === "full" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center gap-2.5 mb-4"> ${renderComponent($$result2, "Image", $$Image, { "src": phone, "alt": "" })}${" "} <span class="brand-gradient bg-clip-text text-transparent font-medium text-base tracking-[.8px]"> ${" "} ${contact.phone} </span> </div> <div class="flex items-center gap-2.5"> ${renderComponent($$result2, "Image", $$Image, { "src": mail, "alt": "" })}${" "} <span class="brand-gradient bg-clip-text text-transparent font-medium text-base tracking-[.8px]"> ${" "} ${contact.email} </span> </div> ` })}`} ${kind === "full" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute top-full md:top-1/2 lg:top-full left-3/4 xl:left-1/2 -translate-x-1/2 -translate-y-[40%] rotate-90", "src": pill, "alt": "" })}`} </div> <form method="post"${addAttribute(cn(kind === "plain" && "xl:px-6 mt-10 xl:mt-0"), "class")}> <div class="flex flex-col gap-6 mb-10"> ${renderComponent($$result, "Input", $$Input, { "type": "text", "placeholder": common.contact_form.inputs.name.placeholder, "name": "name", "required": true })} ${renderComponent($$result, "Input", $$Input, { "type": "text", "placeholder": common.contact_form.inputs.company.placeholder, "name": "company" })} ${renderComponent($$result, "Input", $$Input, { "type": "email", "placeholder": common.contact_form.inputs.email.placeholder, "name": "email", "required": true })} ${renderComponent($$result, "Input", $$Input, { "type": "text", "placeholder": common.contact_form.inputs.phone.placeholder, "name": "phone" })} ${renderComponent($$result, "Textarea", $$Textarea, { "name": "question", "placeholder": common.contact_form.inputs.question.placeholder, "rows": 5 })} </div> <button type="submit"${addAttribute(cn(
    "w-full md:w-max bg-accent-1 text-white rounded-lg  font-medium",
    kind === "plain" && "text-xl xl:text-base py-3.5 xl:py-2.5 px-6 ",
    kind === "full" && "py-5 px-10 text-2xl xl:text-base"
  ), "class")}> ${common.contact_form.submit}</button> </form> </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/contact/GetInTouchForm.astro", void 0);

const $$Astro$6 = createAstro();
const $$NumberCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NumberCard;
  const { index, title, description, class: classes = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col p-6 bg-primary-4 rounded-2xl font-poppins ${classes}`, "class")}> <div class="py-2 px-4 bg-neutral-20/[.09] w-max rounded-lg text-[2rem] font-medium leading-normal text-white"> ${index < 10 ? `0${index}` : index} </div> <p class="my-6 text-xl font-semibold leading-tight tracking-[.4px] text-neutral-10 capitalize"> ${title} </p> <p class="text-base text-neutral-20">${description}</p> </div>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/cards/NumberCard.astro", void 0);

const partnership = new Proxy({"src":"/_astro/partnership.YQ2i7W7d.svg","width":36,"height":36,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const circles = new Proxy({"src":"/_astro/circles.1zfkRBWs.png","width":616,"height":618,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const screenshot = new Proxy({"src":"/_astro/screenshot.TT8fsavC.png","width":671,"height":577,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$UnleashThePotential = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$UnleashThePotential;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      analytics: { unleash_the_potential: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-wrap lg:flex-nowrap gap-10 items-center mt-10 lg:mt-40 justify-between"${addAttribute(t.label, "aria-label")}> <div class="w-full lg:w-1/2 flex-grow lg:max-w-2xl container-left pr-6 md:pr-0"> <h2 class="mb-4 lg:mb-10 text-neutral-10 heading-2"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Unleash the <span class="text-accent-1">potential</span> of your data!
` })} </h2> ${renderComponent($$result, "CheckedList", $$CheckedList, { "items": t.leverages })} ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, { "class": "mt-12 lg:mt-10 md:w-max" })} </div> <div class="w-full lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "class": "ml-auto", "src": screenshot, "alt": "" })} </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/analytics/UnleashThePotential.astro", void 0);

const rocket = new Proxy({"src":"/_astro/rocket.ezSjBgRM.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const setting_2 = new Proxy({"src":"/_astro/setting_2.xIhyZp9x.png","width":38,"height":33,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const location = new Proxy({"src":"/_astro/location_on.goP9WwO9.svg","width":32,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$HowItWorks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HowItWorks;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      analytics: { how_it_works: t }
    }
  } = await useTranslation(lang);
  const analyticsBenefits = [
    {
      icon: rocket,
      ...t.analytics_benefits.understand_sales_trends
    },
    {
      icon: location,
      ...t.analytics_benefits.region_specific_configurations
    },
    {
      icon: partnership,
      ...t.analytics_benefits.pinpoint_deal_characteristics
    },
    {
      icon: setting_2,
      ...t.analytics_benefits.optimize_portfolio_content
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h2 class="heading-2 text-center mb-10 text-neutral-10"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
How Mercura
<span class="text-accent-1"> CPQ Analytics</span> <br>
drives value
` })} </h2> <p class="font-light text-base lg:text-xl text-neutral-30 text-center"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.subtext }, { "default": ($$result2) => renderTemplate`
Mercura CPQ Analytics empowers your organization to leverage <br>
data-driven insights for more informed decisions, improved sales <br>
strategies, and enhanced customer satisfaction.
` })} </p> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8 bg-primary-6 border border-primary-7 rounded-2xl mt-16"> ${analyticsBenefits.map((feature) => renderTemplate`<div class="flex flex-col p-4 lg:p-8 bg-primary-4 rounded-2xl"> <div class="bg-neutral-40 bg-opacity-[9%] h-[4.5rem] w-max aspect-square flex items-center justify-center rounded-lg"> ${renderComponent($$result, "Image", $$Image, { "src": feature.icon, "alt": feature.title })} </div> <p class="text-[22px] my-6 font-bold text-neutral-10"> ${feature.title} </p> <p class="text-neutral-30 text-base">${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/analytics/HowItWorks.astro", void 0);

const fullQuote = new Proxy({"src":"/_astro/quote_doc.os2PgVqv.png","width":676,"height":707,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Empower = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Empower;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      analytics: { empower: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <div class="w-full flex flex-wrap lg:flex-nowrap gap-4 lg:gap-10 items-center"> <div class="w-full lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": fullQuote, "alt": "" })} </div> <div class="w-full lg:w-1/2 p-4 space-y-12"> <p class="text-[22px] lg:text-[2rem] text-neutral-30 leading-10"> ${t.heading} </p> <p class="text-base lg:text-xl font-light text-neutral-30"> ${t.subtext} </p> </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/analytics/Empower.astro", void 0);

const $$Astro$2 = createAstro();
const $$BusinessResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BusinessResults;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      analytics: { business_results: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <div class="flex flex-col"> <h2 class="heading-2 text-center text-neutral-20 mb-12"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result2) => renderTemplate`
Business results of <span class="brand-gradient bg-clip-text text-transparent">Mercura</span> <br> CPQ Analytics
` })} <p class="text-base lg:text-xl text-center font-light text-neutral-30"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.subtext }, { "default": ($$result2) => renderTemplate`
Mercura offers automatic margin control, ensuring that any <br>
configured product is quoted with a profit. Different sales reps or
<br> roles can have varying automatically approved margin levels.
            If a <br> deal necessitates deviation from default margin levels,
            Mercura <br> provides multi-step escalation and approval
            workflows.
` })} </p> </h2> <div class="mt-[90px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> ${t.results.map(({ title, description }, index) => renderTemplate`${renderComponent($$result, "NumberCard", $$NumberCard, { "title": title, "description": description, "index": index + 1 })}`)} </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/analytics/BusinessResults.astro", void 0);

const laptopImg = new Proxy({"src":"/_astro/laptop.q1hcjeiM.png","width":798,"height":647,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$AnalyticsPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnalyticsPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: { analytics: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "class": "pb-[4.25rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.product, t.title] })} ${maybeRenderHead()}<section class="pt-[4.25rem] pb-[5.625rem]"> <div class="container"> <h1 class="brand-gradient bg-clip-text text-transparent heading-1 text-center"> ${t.heading} </h1> </div> <div class="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-normal mt-[58px] relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "absolute right-0 xl:right-[148px] top-full -translate-y-[30%] xl:-translate-y-1/2", "src": circles, "alt": "" })} <div class="w-full lg:w-1/2 flex-none flex items-center lg:items-start pr-6 md:pr-0"> ${renderComponent($$result2, "Image", $$Image, { "src": laptopImg, "alt": "" })} </div> <div class="w-full lg:w-1/2 flex-grow pl-6 lg:pl-0 container-right mt-12 md:mt-0"> <p class="text-[2rem] lg:text-[3rem] lg:leading-tight font-medium mb-4 lg:mb-12 text-neutral-10"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.business_insignts.heading }, { "default": ($$result3) => renderTemplate`
We help you <span class="text-accent-1">unlock</span> business
            insights.
` })} </p> <p class="font-light text-base lg:text-xl text-neutral-10 lg:max-w-xl"> ${t.business_insignts.subtext} </p> </div> </div> </section> ${renderComponent($$result2, "UnleashThePotential", $$UnleashThePotential, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Empower", $$Empower, {})} ${renderComponent($$result2, "BusinessResults", $$BusinessResults, {})} ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/AnalyticsPage.astro", void 0);

const $$Astro = createAstro();
const $$Analitica = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Analitica;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AnalyticsPage", $$AnalyticsPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/analitica.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/analitica.astro";
const $$url = "/es/analitica";

const analitica = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analitica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AnalyticsPage as $, $$UnleashThePotential as a, $$HowItWorks as b, circles as c, $$Empower as d, $$BusinessResults as e, $$GetInTouchForm as f, $$NumberCard as g, pill as h, $$CheckedList as i, analitica as j, laptopImg as l, partnership as p };
