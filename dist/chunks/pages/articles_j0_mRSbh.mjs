/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslation, j as $$Layout, a as $$Image, x as defaultLang, g as getLangFromUrl } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { g as getCollection, $ as $$Breadcrumb } from './__6I_KuJGd.mjs';

const $$Astro$2 = createAstro();
const $$ArticlesPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticlesPage;
  const { locale } = Astro2.props;
  const articles = (await getCollection(
    "articles",
    ({ data }) => data.isDraft !== true && data.language === locale
  )).sort((a, b) => {
    const aDate = new Date(a.data.publishDate);
    const bDate = new Date(b.data.publishDate);
    return bDate.getTime() - aDate.getTime();
  });
  const {
    pages: { articles: t }
  } = await useTranslation(locale);
  function getArticlePath(slug) {
    if (locale === defaultLang) {
      return `/${slug}`;
    }
    return `/${locale}/${slug}`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [t.title] })} ${maybeRenderHead()}<section> <div class="container"> <h1 class="heading-1 text-center brand-gradient bg-clip-text text-transparent"> ${t.heading} </h1> <p class="mt-12 max-w-[700px] mx-auto text-xl font-light leading-tight tracking-[.4px] text-center text-white"> ${t.subtext} </p> </div> </section> <section class="py-[4.25rem]"> <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<a${addAttribute(getArticlePath(article.slug), "href")} class="block"> <article class="p-8 rounded-2xl bg-primary-4/[.11] border border-primary-5/[.41]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": article.data.cover, "alt": article.data.title })} <p class="mb-4 mt-6 text-xl font-medium leading-tight tracking-[.4px] text-neutral-10"> ${article.data.title} </p> <p class="text-base leading-[1.4] text-neutral-30"> ${article.data.description} </p> </article> </a>`)} </div> </section> ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/ArticlesPage.astro", void 0);

const $$Astro$1 = createAstro();
const $$Articles$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Articles$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ArticlesPage", $$ArticlesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/articles.astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/articles.astro";
const $$url$1 = "/articles";

const articles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Articles$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "ArticlesPage", $$ArticlesPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles.astro";
const $$url = "/en/articles";

const articles = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Articles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ArticlesPage as $, articles$1 as a, articles as b };
