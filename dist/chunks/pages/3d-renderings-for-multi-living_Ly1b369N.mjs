/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, $ as $$MultiLivingPage, l as locales, u as useTranslation, a as $$Image, h as hero, b as $$LabelSection, c as laptop, d as $$ReviewCard, e as avatar, f as $$OtherCases, i as $$LetsBuildTogether, j as $$Layout, m as migatronic_sm, k as lindab_garage, n as car_audi } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';

const $$Astro$2 = createAstro();
const $$3DRenderingsForMultiLiving$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$3DRenderingsForMultiLiving$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MultiLivingPage", $$MultiLivingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/3d-renderings-for-multi-living.astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/cases/3d-renderings-for-multi-living.astro";
const $$url$2 = "/cases/3d-renderings-for-multi-living";

const _3dRenderingsForMultiLiving$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3DRenderingsForMultiLiving$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$3DRenderingsForMultiLiving$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$3DRenderingsForMultiLiving$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MultiLivingPage", $$MultiLivingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/3d-renderings-for-multi-living.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/cases/3d-renderings-for-multi-living.astro";
const $$url$1 = "/en/cases/3d-renderings-for-multi-living";

const _3dRenderingsForMultiLiving$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3DRenderingsForMultiLiving$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(locales).map((locale) => ({ params: { locale } }));
}
const $$3DRenderingsForMultiLiving = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$3DRenderingsForMultiLiving;
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
      photo: car_audi,
      link: {
        title: "Audi Configurator",
        href: "/cases/audi-configurator"
      }
    }
  ];
  const { locale } = Astro2.params;
  await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "3D Renderings for Multi-Living", "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20">
3D Renderings <br> <span class="brand-gradient bg-clip-text text-transparent">for Multi-Living</span> </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": "3D Renderings for Multi-Living" })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": "The Problem", "withLink": { title: "See Solution", href: "#" } }, { "col-1": ($$result3) => renderTemplate`<p>
As a kitchen manufacturer, one of the most important aspects of your
      business is being able to showcase your products in a way that is visually
      appealing and informative. This is where 3D renderings and a 3D kitchen
      configurator can play a vital role.
</p>`, "col-2": ($$result3) => renderTemplate`<p>
3D renderings are essential for showcasing the design and functionality of
      your kitchen elements. This allows customers to see what the final product
      will look like and how it will fit into their space. A 3D kitchen
      configurator is a powerful tool that allows customers to customize their
      kitchens to fit their unique needs and preferences. By using a 3D kitchen
      configurator, customers can choose from a range of options to create their
      dream kitchen
</p>`, "title": ($$result3) => renderTemplate`<span>Visual Appeal</span>` })} ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": "The Solution", "singleCol": true }, { "col-1": ($$result3) => renderTemplate`<p>
As a preliminary project for a kitchen configurator, Mercura has delivered
      more than 11,000 renderings and 3D models of all Multi-Living’s kitchen
      elements.
<br> <br>The quality is top notch and gives Danish kitchen consumers an
      excellent shopping experience when they have to choose between different
      elements for the kitchen. The models are also fantastically suitable for a
      configurator.
</p>`, "title": ($$result3) => renderTemplate`<span>Beautiful visualization</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": "3D Renderings for Multi-Living" })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px] px-6", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>CEO, Multi-Living A/S</p><p>Ove Dalsgaard</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]">
We have been extremely happy with the collaboration with Mercura. Their
      professionalism and quality has been of the highest order and we would
      happily recommend them to anyone else interested in 3D modeling and online
      configurators.
</p>   ` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/3d-renderings-for-multi-living.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/cases/3d-renderings-for-multi-living.astro";
const $$url = "/[locale]/cases/3d-renderings-for-multi-living";

const _3dRenderingsForMultiLiving = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3DRenderingsForMultiLiving,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _3dRenderingsForMultiLiving$2 as _, _3dRenderingsForMultiLiving$1 as a, _3dRenderingsForMultiLiving as b };
