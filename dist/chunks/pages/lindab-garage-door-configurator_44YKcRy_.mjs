/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LindabPage, h as hero, l as laptop, d as door1, a as door2 } from './configurador-de-puertas-de-garaje-lindab_TWPkxoWZ.mjs';
import { g as getLangFromUrl, l as locales, u as useTranslation, a as $$Image, b as $$LabelSection, d as $$ReviewCard, f as $$OtherCases, i as $$LetsBuildTogether, j as $$Layout, m as migatronic_sm, k as lindab_garage } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { a as avatar, $ as $$Solution } from './configurador-de-migatronic_FJ-6-1E1.mjs';
import { r as render3d } from './audi-configurator_XHqKSrnw.mjs';

const $$Astro$2 = createAstro();
const $$LindabGarageDoorConfigurator$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LindabGarageDoorConfigurator$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "LindabPage", $$LindabPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/lindab-garage-door-configurator.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/lindab-garage-door-configurator.astro";
const $$url$2 = "/cases/lindab-garage-door-configurator";

const lindabGarageDoorConfigurator$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LindabGarageDoorConfigurator$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$LindabGarageDoorConfigurator$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LindabGarageDoorConfigurator$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "LindabPage", $$LindabPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/lindab-garage-door-configurator.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/lindab-garage-door-configurator.astro";
const $$url$1 = "/en/cases/lindab-garage-door-configurator";

const lindabGarageDoorConfigurator$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LindabGarageDoorConfigurator$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$LindabGarageDoorConfigurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LindabGarageDoorConfigurator;
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
  await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lindab Garage Door Configurator", "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> <span class="brand-gradient bg-clip-text text-transparent">Lindab</span>
Garage <br>door configurator
</h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": "Lindab Garage door Configurator" })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": "The Problem", "withLink": { title: "See Solution", href: "#" } }, { "col-1": ($$result3) => renderTemplate`<p>
Lindab is a leading manufacturing company specializing in ventilation and
      building products. In recent years, they have experienced strong growth,
      resulting in a more time-consuming sales process. <br> <br>As a building product manufacturer, one of the biggest challenges
      you may face in your sales process is the lack of a configuration tool
      that allows customers to customize their own garage doors. Without the
      assistance of such tools, your sales team may need to invest significant
      time and effort into designing a garage door from scratch in order to meet
      the customers’ specific needs and preferences.
</p>`, "col-2": ($$result3) => renderTemplate`<p>
The absence of a configuration tool can make the sales process more
      complex and time-consuming. Your sales team or dealers may need to
      communicate back and forth with customers multiple times to gather all the
      necessary information about the features and specifications they want in
      their garage door. This can lead to longer sales cycles, increased costs,
      and a higher risk of errors and misunderstandings.
</p>`, "title": ($$result3) => renderTemplate`<span>Long sales cycles</span>` })} ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": "The Solution" }, { "col-1": ($$result3) => renderTemplate`<p>
We have developed a very intuitive configurator for Lindab which helps
      end-users and dealers visualize and concretize their solutions on garage
      doors. The configurator includes all the garage door variations that
      Lindab sells.
<br> <br>It includes more than 10.000 variations of the products even without
      taking the size into consideration.
</p>`, "col-2": ($$result3) => renderTemplate`<p>
We have developed a very intuitive configurator for Lindab which helps
      end-users and dealers visualize and concretize their solutions on garage
      doors. The configurator includes all the garage door variations that
      Lindab sells.
<br><br>
It includes more than 10.000 variations of the products even without
      taking the size into consideration.
</p>`, "title": ($$result3) => renderTemplate`<span>Beautiful visualization</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": "Lindab Garage door Configurator" })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px]", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>Marketing Manager, Lindab A/S</p><p>Birgitte Kjær Hansen</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]">
A big recommendation to Mercura and their team. They are highly
      professional and very good at gaining an overview of complex product
      constraints and pricing logic. Our configurator is very good at
      visualizing our garage doors which gives us a shorter time to market,
      makes us more accesible for customers and has helped us optimize internal
      sales processes, which will help us grow our business.
</p>   ` })} ${renderComponent($$result2, "Solution", $$Solution, { "label": "The Solution", "photo": door1 }, { "default": ($$result3) => renderTemplate`  <p>
Having a configuration tool that allows dealers and end-consumers to build
      their own garage door can offer many benefits to your business. It can
      simplify the sales process, reduce the workload of your sales team, and
      enable customers to create a garage doors that perfectly fits their needs
      and preferences. This provides unique insights into the customers needs
      which can be used for marketing and product development purposes
</p> `, "title": ($$result3) => renderTemplate`<span>Increase sales volume</span>` })} ${renderComponent($$result2, "Solution", $$Solution, { "alternate": true, "photo": door2 }, { "default": ($$result3) => renderTemplate`  <p>
In other words, Mercura helped them stand out from their competitors and
      increase their sales volume. Studies have shown that a configuration tool
      can increase the conversion rates by 40% on quotes and increase the
      average sales prices with 30%.
</p> `, "title": ($$result3) => renderTemplate`<span>Lindab has experienced a shorter time-to-market and higher accessibility
      towards customers.</span>` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/lindab-garage-door-configurator.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/lindab-garage-door-configurator.astro";
const $$url = "/[locale]/cases/lindab-garage-door-configurator";

const lindabGarageDoorConfigurator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LindabGarageDoorConfigurator,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { lindabGarageDoorConfigurator$1 as a, lindabGarageDoorConfigurator as b, lindabGarageDoorConfigurator$2 as l };
