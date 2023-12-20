/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent, l as renderSlot, F as Fragment } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { t as cn, a as $$Image, u as useTranslation, n as car_audi, k as lindab_garage, j as $$Layout, y as useTranslatedPath, p as $$Trans, b as $$LabelSection, d as $$ReviewCard, f as $$OtherCases, i as $$LetsBuildTogether, g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { c as carouselTop, a as carouselBottom, s as solutionImg } from './angebot-und-dokumentenerstellung_0excePO6.mjs';
import { r as render3d } from './audi-configurator_XHqKSrnw.mjs';

const avatar = new Proxy({"src":"/_astro/avatar-1.O7R-s2Jj.png","width":120,"height":116,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Solution = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Solution;
  const { alternate = false, label, photo, hasBlur = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="pt-[4.25rem] pb-[4.25rem] lg:pb-[8.5rem] [--percent:30%] [--px:2rem] lg:[--px:6rem] xl:[--px:12.5rem]"> <div${addAttribute(cn(
    "container grid gap-12 md:gap-0",
    alternate ? "grid-cols-1 md:grid-cols-[47%,1fr]" : "grid-cols-1 md:grid-cols-[1fr,47%]"
  ), "class")}> <div${addAttribute(cn(
    "flex flex-col justify-center",
    alternate ? "order-2  md:pl-[min(var(--percent),var(--px))]" : "order-2 md:order-1  md:pr-[min(var(--percent),var(--px))]"
  ), "class")}> <div${addAttribute(cn("flex flex-col justify-center gap-12"), "class")}> <h2${addAttribute(cn(
    "text-neutral-30 leading-tight ",
    alternate ? "text-[1.75rem] lg:text-[2rem] font-normal" : "text-[2rem] md:text-5xl font-medium"
  ), "class")}> ${label && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="text-base font-medium uppercase leading-normal brand-gradient bg-clip-text text-transparent"> ${label} </span> <br> ` })}`} ${renderSlot($$result, $$slots["title"])} </h2> <div class="text-neutral-30 text-xl font-light leading-tight tracking-[.4px]"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> <div${addAttribute(cn(
    "flex items-center",
    alternate ? "order-1" : "order-1 md:order-2"
  ), "class")}> <div${addAttribute(cn(
    "relative w-full  overflow-hidden",
    hasBlur && "p-6 lg:p-8 border bg-primary-4 bg-opacity-[11%] border-primary-5/40 rounded-2xl"
  ), "class")}> ${hasBlur && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="absolute -top-4 -z-10 right-0 lg:-right-[250px] lg:w-full"> ${renderComponent($$result2, "Image", $$Image, { "src": carouselTop, "alt": "" })} </div> <div class="absolute -bottom-6 left-0 -z-10 w-full"> ${renderComponent($$result2, "Image", $$Image, { "src": carouselBottom, "alt": "" })} </div> ` })}`} ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": photo, "alt": "" })} </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/cases/Solution.astro", void 0);

const hero = new Proxy({"src":"/_astro/migatronic_hero.OTBvpK8N.png","width":1440,"height":715,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const laptop = new Proxy({"src":"/_astro/migatronic_laptop.h6zLr4r7.png","width":1269,"height":709,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$MigatronicPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MigatronicPage;
  const { locale } = Astro2.props;
  const r = useTranslatedPath(locale);
  const {
    common,
    pages: {
      migatronic_configurator: t,
      lindab_garage: { heading_text: lindab_text },
      multiliving_3d_renderings: { heading_text: multiliving_text },
      audi_configurator: { heading_text: audi_text }
    }
  } = await useTranslation(locale);
  const otherCases = [
    {
      photo: car_audi,
      link: {
        title: audi_text,
        href: r("cases.audi-configurator")
      }
    },
    {
      photo: lindab_garage,
      link: {
        title: lindab_text,
        href: r("cases.lindab-garage-door-configurator")
      }
    },
    {
      photo: render3d,
      link: {
        title: multiliving_text,
        href: r("cases.3d-renderings-for-multi-living")
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Migatronic</span> Lorem <br>ipsum configurator
` })} </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": t.title })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.long_sales_cycles.label, "withLink": { title: common.see_solution, href: "#" } }, { "col-1": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.long_sales_cycles.text_1 })} </p>`, "col-2": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.long_sales_cycles.text_2 })} </p>`, "title": ($$result3) => renderTemplate`<span>${t.long_sales_cycles.heading}</span>` })} ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.beautiful_visualization.label }, { "col-1": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.beautiful_visualization.text_1 })} </p>`, "col-2": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.beautiful_visualization.text_2 })} </p>`, "title": ($$result3) => renderTemplate`<span>${t.beautiful_visualization.heading}</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": t.title })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline"> ${t.review.message} </p>   ` })} ${renderComponent($$result2, "Solution", $$Solution, { "label": t.increase_sales_volume.label, "photo": solutionImg, "hasBlur": true }, { "default": ($$result3) => renderTemplate`  <p> ${t.increase_sales_volume.subtext} </p> `, "title": ($$result3) => renderTemplate`<span>${t.increase_sales_volume.heading}</span>` })} ${renderComponent($$result2, "Solution", $$Solution, { "alternate": true, "photo": solutionImg, "hasBlur": true }, { "default": ($$result3) => renderTemplate`  <p> ${t.lindab_experience.subtext} </p> `, "title": ($$result3) => renderTemplate`<span>${t.lindab_experience.heading}</span>` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/cases/MigatronicPage.astro", void 0);

const $$Astro = createAstro();
const $$ConfiguradorDeMigatronic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConfiguradorDeMigatronic;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MigatronicPage", $$MigatronicPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-migatronic.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-migatronic.astro";
const $$url = "/es/casos/configurador-de-migatronic";

const configuradorDeMigatronic = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConfiguradorDeMigatronic,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Solution as $, avatar as a, $$MigatronicPage as b, configuradorDeMigatronic as c, hero as h, laptop as l };
