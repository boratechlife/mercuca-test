/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$4 = createAstro();
const $$slug$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$slug$4;
  return renderTemplate`<!-- ---
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection(
    "articles",
    ({ data, id, slug }) => data.isDraft !== true && !!slug
  );
  return articles.map((article) => ({
    params: { slug: article.slug, locale: article.data.language },
  }));
}
---

<Layout /> -->`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler/[slug].astro", void 0);

const $$file$4 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/artikler/[slug].astro";
const $$url$4 = "/da/artikler/[slug]";

const _slug_$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$slug$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$3;
  return renderTemplate`<!-- ---
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection(
    "articles",
    ({ data, id, slug }) => data.isDraft !== true && !!slug
  );
  return articles.map((article) => ({
    params: { slug: article.slug, locale: article.data.language },
  }));
}
---

<Layout /> -->`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/artikel/[slug].astro", void 0);

const $$file$3 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/artikel/[slug].astro";
const $$url$3 = "/de/artikel/[slug]";

const _slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$slug$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$slug$2;
  return renderTemplate`<!-- ---
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection(
    "articles",
    ({ data, id, slug }) => data.isDraft !== true && !!slug
  );
  return articles.map((article) => ({
    params: { slug: article.slug, locale: article.data.language },
  }));
}
---

<Layout /> -->`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles/[slug].astro", void 0);

const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/articles/[slug].astro";
const $$url$2 = "/en/articles/[slug]";

const _slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug$1;
  return renderTemplate`<!-- ---
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection(
    "articles",
    ({ data, id, slug }) => data.isDraft !== true && !!slug
  );
  return articles.map((article) => ({
    params: { slug: article.slug, locale: article.data.language },
  }));
}
---

<Layout /> -->`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/articulos/[slug].astro", void 0);

const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/articulos/[slug].astro";
const $$url$1 = "/es/articulos/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  return renderTemplate`<!-- ---
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection(
    "articles",
    ({ data, id, slug }) => data.isDraft !== true && !!slug
  );
  return articles.map((article) => ({
    params: { slug: article.slug, locale: article.data.language },
  }));
}
---

<Layout /> -->`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/articles/[slug].astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[locale]/articles/[slug].astro";
const $$url = "/[locale]/articles/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_$4 as _, _slug_$3 as a, _slug_$2 as b, _slug_$1 as c, _slug_ as d };
