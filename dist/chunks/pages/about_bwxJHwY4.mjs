/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent, u as unescapeHTML } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, p as $$Trans, a as $$Image, q as $$RequestDemoLink, j as $$Layout, r as offices, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const ourTeam = new Proxy({"src":"/_astro/our-team.ycRsbq6R.png","width":1268,"height":747,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Team;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      about: { our_team: t }
    }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(t.heading, "aria-label")}> <div class="container"> <h2 class="text-[2.5rem] text-center font-medium leading-[1.2] text-white mb-4"> ${t.heading} </h2> <p class="text-center text-xl font-light leading-tight text-white mb-[58px]"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.subheading }, { "default": ($$result2) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur <br class="hidden md:block">adipiscing elit, sed do eiusmod tempor incididunt <br class="hidden md:block">ut labore et dolore.
` })} </p> ${renderComponent($$result, "Image", $$Image, { "src": ourTeam, "alt": t.heading })} </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/about/Team.astro", void 0);

const collaboration = new Proxy({"src":"/_astro/collaboration.uvLXke9a.png","width":326,"height":324,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const innovation = new Proxy({"src":"/_astro/innovation.swlEz9VR.png","width":326,"height":324,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const customerCentric = new Proxy({"src":"/_astro/customer-centric.BiSyJfMy.png","width":326,"height":324,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$OurValues = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$OurValues;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: {
      about: { our_values: t }
    }
  } = await useTranslation(lang);
  const ourValues = [
    {
      icon: customerCentric,
      ...t.values.customer_centricity
    },
    {
      icon: innovation,
      ...t.values.innovation
    },
    {
      icon: collaboration,
      ...t.values.collaboration
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(t.heading, "aria-label")} class="py-[4.25rem]"> <div class="container"> <h2 class="text-[2.5rem] text-center font-medium leading-[1.2] text-white mb-4"> ${t.heading} </h2> <p class="text-center text-xl font-light leading-tight text-white"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.subheading }, { "default": ($$result2) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur <br class="hidden md:block">adipiscing elit, sed do eiusmod tempor incididunt <br class="hidden md:block">ut labore et dolore.
` })} </p> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 xl:gap-12 my-12"> ${ourValues.map(({ title, description, icon }) => renderTemplate`<div class="bg-white rounded-2xl text-center p-8"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": icon, "alt": title })} <p class="mb-4 mt-8 text-[22px] font-bold capitalize text-primary-2"> ${title} </p> <p class="text-primary-2 text-base">${description}</p> </div>`)} </div> <div class="flex justify-center"> ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, {})} </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/about/OurValues.astro", void 0);

const $$Astro$3 = createAstro();
const $$AboutPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutPage;
  const { locale } = Astro2.props;
  const {
    pages: { about: t }
  } = await useTranslation(locale);
  const stats = [
    {
      bgColor: "#707EA5",
      value: 10,
      postFix: "M+",
      decription: t.stats.revenue
    },
    {
      bgColor: "#FC946D",
      value: 179,
      decription: t.stats.satisfied_customers
    },
    {
      bgColor: "#3A4972",
      value: 1,
      postFix: "M+",
      decription: t.stats.lines_of_code
    },
    {
      bgColor: "#D6545B",
      value: 11,
      decription: t.stats.employees
    }
  ];
  const ourOffices = [offices.aarhus, offices.odense];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section class="pt-[4.25rem] pb-[7.5rem]"> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading })} </h1> <p class="max-w-[696px] mx-auto text-white text-xl font-light leading-tight text-center tracking-[.4px] mt-12 mb-16"> ${t.subheading} </p> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4"> ${stats.map((stat) => renderTemplate`<div${addAttribute({ backgroundColor: stat.bgColor }, "style")} class="px-6 py-[50px] rounded-2xl"> <p${addAttribute(stat.value, "data-value")}${addAttribute(stat.postFix || "", "data-postfix")} class="mb-4 font-inter font-medium leading-tight text-center text-neutral-10 text-[5rem] stat">
00
</p> <p class="text-lg font-medium  text-neutral-10 text-center">${unescapeHTML(stat.decription)}</p> </div>`)} </div> </div> </section> ${renderComponent($$result2, "OurValues", $$OurValues, {})} ${renderComponent($$result2, "Team", $$Team, {})} <section class="pt-[4.25rem] pb-[7.5rem]"${addAttribute(t.our_offices, "aria-label")}> <div class="container"> <h2 class="text-[2.5rem] text-center font-medium leading-[1.2] text-white mb-[58px]"> ${t.our_offices} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16"> ${ourOffices.map((office) => renderTemplate`<div class="p-8 rounded-2xl bg-primary-5/[.39]"> ${renderComponent($$result2, "Image", $$Image, { "src": office.image, "alt": office.name })} <p class="my-4 font-bold capitalize text-[22px] text-white"> ${office.name} </p> <p class="text-white text-base"> ${office.address.line_1}, ${office.address.line_2} <br> ${office.country} </p> </div>`)} </div> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/AboutPage.astro", void 0);

const $$Astro$2 = createAstro();
const $$About$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AboutPage", $$AboutPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/about.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/about.astro";
const $$url$2 = "/about";

const about$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AboutPage", $$AboutPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/about.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/about.astro";
const $$url$1 = "/en/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locale } = Astro2.params;
  const {
    pages: { about: t }
  } = await useTranslation(locale);
  const stats = [
    {
      bgColor: "#707EA5",
      value: 10,
      postFix: "M+",
      decription: t.stats.revenue
    },
    {
      bgColor: "#FC946D",
      value: 179,
      decription: t.stats.satisfied_customers
    },
    {
      bgColor: "#3A4972",
      value: 1,
      postFix: "M+",
      decription: t.stats.lines_of_code
    },
    {
      bgColor: "#D6545B",
      value: 11,
      decription: t.stats.employees
    }
  ];
  const ourOffices = [offices.aarhus, offices.odense];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section class="pt-[4.25rem] pb-[7.5rem]"> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading })} </h1> <p class="max-w-[696px] mx-auto text-white text-xl font-light leading-tight text-center tracking-[.4px] mt-12 mb-16"> ${t.subheading} </p> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4"> ${stats.map((stat) => renderTemplate`<div${addAttribute({ backgroundColor: stat.bgColor }, "style")} class="px-6 py-[50px] rounded-2xl"> <p${addAttribute(stat.value, "data-value")}${addAttribute(stat.postFix || "", "data-postfix")} class="mb-4 font-inter font-medium leading-tight text-center text-neutral-10 text-[5rem] stat">
00
</p> <p class="text-lg font-medium  text-neutral-10 text-center">${unescapeHTML(stat.decription)}</p> </div>`)} </div> </div> </section> ${renderComponent($$result2, "OurValues", $$OurValues, {})} ${renderComponent($$result2, "Team", $$Team, {})} <section class="pt-[4.25rem] pb-[7.5rem]"${addAttribute(t.our_offices, "aria-label")}> <div class="container"> <h2 class="text-[2.5rem] text-center font-medium leading-[1.2] text-white mb-[58px]"> ${t.our_offices} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16"> ${ourOffices.map((office) => renderTemplate`<div class="p-8 rounded-2xl bg-primary-5/[.39]"> ${renderComponent($$result2, "Image", $$Image, { "src": office.image, "alt": office.name })} <p class="my-4 font-bold capitalize text-[22px] text-white"> ${office.name} </p> <p class="text-white text-base"> ${office.address.line_1}, ${office.address.line_2} <br> ${office.country} </p> </div>`)} </div> </div> </section> ` })} `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/about.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/about.astro";
const $$url = "/[locale]/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AboutPage as $, about$2 as a, about$1 as b, about as c };
