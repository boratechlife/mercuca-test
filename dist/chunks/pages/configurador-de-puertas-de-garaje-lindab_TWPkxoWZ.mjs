/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslation, m as migatronic_sm, k as lindab_garage, j as $$Layout, y as useTranslatedPath, p as $$Trans, a as $$Image, b as $$LabelSection, d as $$ReviewCard, f as $$OtherCases, i as $$LetsBuildTogether, g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { a as avatar, $ as $$Solution } from './configurador-de-migatronic_FJ-6-1E1.mjs';
import { r as render3d } from './audi-configurator_XHqKSrnw.mjs';

const hero = new Proxy({"src":"/_astro/lindab_garage_hero.UvASKeol.png","width":1440,"height":715,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const laptop = new Proxy({"src":"/_astro/lindab_garage_laptop.cZrEqKa2.png","width":1269,"height":710,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const door1 = new Proxy({"src":"/_astro/garage_door_1.Tm75Zuip.png","width":593,"height":645,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const door2 = new Proxy({"src":"/_astro/garage_door_2.6-QkQfD7.png","width":593,"height":645,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$LindabPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LindabPage;
  const { locale } = Astro2.props;
  const {
    common,
    pages: {
      lindab_garage: t,
      migatronic_configurator: { heading_text: migatronic_text },
      multiliving_3d_renderings: { heading_text: multiliving_text }
    }
  } = await useTranslation(locale);
  const r = useTranslatedPath(locale);
  const otherCases = [
    {
      photo: migatronic_sm,
      link: {
        title: migatronic_text,
        href: r("cases.migatronic-configurator")
      }
    },
    {
      photo: lindab_garage,
      link: {
        title: t.heading_text,
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate` <span class="brand-gradient bg-clip-text text-transparent">Lindab</span>
Garage <br>door configurator
` })} </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": t.title })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.long_sales_cycles.label, "withLink": { title: common.see_solution, href: "#" } }, { "col-1": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.long_sales_cycles.text_1 })} </p>`, "col-2": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.long_sales_cycles.text_2 })} </p>`, "title": ($$result3) => renderTemplate`<span>${t.long_sales_cycles.heading}</span>` })} ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.beautiful_visualization.label }, { "col-1": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.beautiful_visualization.text_1 })} </p>`, "col-2": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.beautiful_visualization.text_2 })} </p>`, "title": ($$result3) => renderTemplate`<span>${t.beautiful_visualization.heading}</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": t.title })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px]", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]"> ${t.review.message} </p>   ` })} ${renderComponent($$result2, "Solution", $$Solution, { "label": t.increase_sales_volume.label, "photo": door1 }, { "default": ($$result3) => renderTemplate`  <p> ${t.increase_sales_volume.subtext} </p> `, "title": ($$result3) => renderTemplate`<span>${t.increase_sales_volume.heading}</span>` })} ${renderComponent($$result2, "Solution", $$Solution, { "alternate": true, "photo": door2 }, { "default": ($$result3) => renderTemplate`  <p> ${t.lindab_experience.subtext} </p> `, "title": ($$result3) => renderTemplate`<span>${t.lindab_experience.heading}</span>` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/cases/LindabPage.astro", void 0);

const $$Astro = createAstro();
const $$ConfiguradorDePuertasDeGarajeLindab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConfiguradorDePuertasDeGarajeLindab;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "LindabPage", $$LindabPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-puertas-de-garaje-lindab.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/casos/configurador-de-puertas-de-garaje-lindab.astro";
const $$url = "/es/casos/configurador-de-puertas-de-garaje-lindab";

const configuradorDePuertasDeGarajeLindab = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConfiguradorDePuertasDeGarajeLindab,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LindabPage as $, door2 as a, configuradorDePuertasDeGarajeLindab as c, door1 as d, hero as h, laptop as l };
