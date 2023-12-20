/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslation, m as migatronic_sm, k as lindab_garage, j as $$Layout, y as useTranslatedPath, p as $$Trans, a as $$Image, b as $$LabelSection, c as laptop, d as $$ReviewCard, e as avatar, f as $$OtherCases, i as $$LetsBuildTogether, g as getLangFromUrl, l as locales } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const render3d = new Proxy({"src":"/_astro/3d_render.XQHwh0jx.png","width":358,"height":413,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const hero = new Proxy({"src":"/_astro/case_audi_hero.nbWM29AG.png","width":1440,"height":715,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$AudiPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AudiPage;
  const { locale } = Astro2.props;
  const r = useTranslatedPath(locale);
  const {
    pages: { audi_configurator: t }
  } = await useTranslation(locale);
  const otherCases = [
    {
      photo: migatronic_sm,
      link: {
        title: "Migatronic",
        href: r("cases.migatronic-configurator")
      }
    },
    {
      photo: lindab_garage,
      link: {
        title: "Lindab Garage door Configurator",
        href: r("cases.lindab-garage-door-configurator")
      }
    },
    {
      photo: render3d,
      link: {
        title: "3D Renderings for Multi-Living",
        href: r("cases.3d-renderings-for-multi-living")
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.heading_text, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Audi</span>
Configurator
` })} </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": t.heading_text })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.beautiful_visualization.label, "singleCol": true }, { "col-1": ($$result3) => renderTemplate`<p> ${t.beautiful_visualization.subtext} </p>`, "title": ($$result3) => renderTemplate`<span>${t.beautiful_visualization.heading}</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": t.heading_text })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px] px-6", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.reviews.author.occupation}</p><p>${t.reviews.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]"> ${t.reviews.message} </p>   ` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/cases/AudiPage.astro", void 0);

const $$Astro$2 = createAstro();
const $$AudiConfigurator$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AudiConfigurator$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AudiPage", $$AudiPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/audi-configurator.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/audi-configurator.astro";
const $$url$2 = "/cases/audi-configurator";

const audiConfigurator$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AudiConfigurator$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$AudiConfigurator$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AudiConfigurator$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "AudiPage", $$AudiPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/audi-configurator.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/audi-configurator.astro";
const $$url$1 = "/en/cases/audi-configurator";

const audiConfigurator$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AudiConfigurator$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$AudiConfigurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AudiConfigurator;
  const otherCases = [
    {
      photo: migatronic_sm,
      link: {
        title: "Migatronic",
        href: "/cases/migatronic-configurator"
      }
    },
    {
      photo: lindab_garage,
      link: {
        title: "Lindab Garage door Configurator",
        href: "/cases/lindab-garage-door-configurator"
      }
    },
    {
      photo: render3d,
      link: {
        title: "3D Renderings for Multi-Living",
        href: "/cases/3d-renderings-for-multi-living"
      }
    }
  ];
  const { locale } = Astro2.params;
  const {
    pages: { audi_configurator: t }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.heading_text, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Audi</span>
Configurator
` })} </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": t.heading_text })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.beautiful_visualization.label, "singleCol": true }, { "col-1": ($$result3) => renderTemplate`<p> ${t.beautiful_visualization.subtext} </p>`, "title": ($$result3) => renderTemplate`<span>${t.beautiful_visualization.heading}</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": t.heading_text })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px] px-6", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.reviews.author.occupation}</p><p>${t.reviews.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]"> ${t.reviews.message} </p>   ` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/audi-configurator.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/audi-configurator.astro";
const $$url = "/[locale]/cases/audi-configurator";

const audiConfigurator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AudiConfigurator,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AudiPage as $, audiConfigurator$2 as a, audiConfigurator$1 as b, audiConfigurator as c, render3d as r };
