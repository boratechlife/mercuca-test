/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Image, g as getLangFromUrl, u as useTranslation, e as avatar, w as slugify, j as $$Layout } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { f as $$GetInTouchForm } from './analitica_JKbx2oR0.mjs';

const uniqa = new Proxy({"src":"/_astro/uniqa.ZCWnsxbu.png","width":136,"height":49,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const winncare = new Proxy({"src":"/_astro/Winncare.gTjU6-H9.svg","width":539,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const husqvarna = new Proxy({"src":"/_astro/Husqvarna.7KBo67LT.svg","width":765,"height":150,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const achydraulic = new Proxy({"src":"/_astro/AC-Hydraulic.INDZSWTa.svg","width":1024,"height":291,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const aeronordic = new Proxy({"src":"/_astro/AeroNordic.jjjex9km.svg","width":1167,"height":319,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const bluetop = new Proxy({"src":"/_astro/Bluetop.yCH_rZ13.svg","width":591,"height":150,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const lindab = new Proxy({"src":"/_astro/Lindab.x339Lp4u.svg","width":460,"height":151,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const migatronic = new Proxy({"src":"/_astro/Migatronic.Kc2FELw6.svg","width":1467,"height":150,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logos;
  const items = [
    {
      title: "Uniqa",
      image: uniqa
    },
    {
      title: "Winncare",
      image: winncare
    },
    {
      title: "Husqvarna",
      image: husqvarna
    },
    {
      title: "AC-Hydraulic",
      image: achydraulic
    },
    {
      title: "AeroNordic",
      image: aeronordic
    },
    {
      title: "Bluetop",
      image: bluetop
    },
    {
      title: "Lindab",
      image: lindab
    },
    {
      title: "Migatronic",
      image: migatronic
    }
  ];
  const { class: classes = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`scroller overflow-hidden py-6 md:py-[100px] ${classes}`, "class")}> <ul class="scroll-container flex items-center gap-10 justify-center md:justify-normal md:gap-32 px-4 md:w-max flex-wrap md:flex-nowrap md:animate-[scroll_60s_linear_infinite] [&>[aria-hidden='true']]:hidden md:[&>[aria-hidden='true']]:block"> ${items.map((item) => renderTemplate`<li class="scroll-item  "> ${renderComponent($$result, "Image", $$Image, { "class": "max-w-[124px] max-h-9 md:max-h-12", "src": item.image, "alt": item.title })} </li>`)} </ul> </section> `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/Logos.astro", void 0);

const photo_1 = new Proxy({"src":"/_astro/photo_1.Pbut27Tb.png","width":55,"height":52,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const photo_2 = new Proxy({"src":"/_astro/photo_2.vWMaE3XB.png","width":55,"height":53,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Reviews;
  const lang = getLangFromUrl(Astro2.url);
  const {
    pages: { request_a_demo: t }
  } = await useTranslation(lang);
  const reviews = [
    {
      avatar: photo_1,
      ...t.reviews.birgitte
    },
    {
      avatar: avatar,
      ...t.reviews.ove
    },
    {
      avatar: photo_2,
      ...t.reviews.linda
    }
  ];
  const tabReviews = reviews.map((review, index) => ({
    ...review,
    id: slugify(review.name + "_" + (index + 1))
  }));
  return renderTemplate`${maybeRenderHead()}<section class="pt-20 pb-[100px]"${addAttribute(t.what_our_clients_say, "arial-label")}> <div class="container"> <p class="brand-gradient bg-clip-text text-transparent uppercase text-base font-medium text-center"> ${t.company_relationships} </p> <h2 class="text-[2rem] font-medium leading-[1.2] capitalize tracking-[1.6px] text-neutral-30 text-center mt-2.5 mb-[90px]"> ${t.what_our_clients_say} </h2> <div id="tabs-container" class="grid-cols-1 lg:grid-cols-[40%,1fr] grid gap-20"> <ul role="tablist" aria-orientation="vertical" tabindex="-1" class="flex flex-col gap-2 list-none"> ${tabReviews.map(({ name, occupation, avatar, id }, index) => renderTemplate`<li role="presentation"> <a${addAttribute(`tab-${index + 1}`, "id")}${addAttribute(`#${id}`, "href")} aria-selected="false" class="w-full group/tab" role="tab"> <div class="flex gap-3.5 py-5 px-8  group-aria-selected/tab:bg-primary-4 rounded-lg"> ${renderComponent($$result, "Image", $$Image, { "class": "shrink-0 w-[54px] h-[51px]", "src": avatar, "alt": `${name}` })} <div> <p class="text-white text-xl font-semibold ">${name}</p> <p class="text-xs text-white">${occupation}</p> </div> </div> </a> </li>`)} </ul> ${tabReviews.map(({ message, headline, id }, index) => renderTemplate`<div role="tabpanel"${addAttribute(`${id}`, "id")} hidden="true"> <div> <p class="text-[25px] font-bold leading-[1.2] tracking-[1.25px] text-[#DCD7D5] mb-6"> ${headline} </p> <p class="text-base leading-[1.4] text-neutral-20">${message}</p> </div> </div>`)} </div> </div> </section> `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/request-a-demo/Reviews.astro", void 0);

const $$Astro$1 = createAstro();
const $$RequestDemoPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RequestDemoPage;
  const { locale } = Astro2.props;
  const {
    pages: { request_a_demo }
  } = await useTranslation(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Request a Demo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GetInTouchForm", $$GetInTouchForm, { "kind": "full" })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <p class="brand-gradient bg-clip-text text-transparent uppercase text-base font-medium text-center"> ${request_a_demo.company_relationships} </p> <h2 class="text-[2rem] font-medium leading-[1.2] capitalize tracking-[1.6px] text-neutral-30 text-center mt-2.5 mb-8"> ${request_a_demo.mercura_clients} </h2> ${renderComponent($$result2, "Logos", $$Logos, { "class": "!py-10 bg-primary-5" })} </section> ${renderComponent($$result2, "Reviews", $$Reviews, {})} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/RequestDemoPage.astro", void 0);

const $$Astro = createAstro();
const $$AnmodOmEnDemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnmodOmEnDemo;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "RequestDemoPage", $$RequestDemoPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/anmod-om-en-demo.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/anmod-om-en-demo.astro";
const $$url = "/da/anmod-om-en-demo";

const anmodOmEnDemo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AnmodOmEnDemo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$RequestDemoPage as $, $$Logos as a, $$Reviews as b, anmodOmEnDemo as c };
