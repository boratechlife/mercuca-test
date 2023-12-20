/* empty css                           */
import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, A as AstroError, h as ImageMissingAlt, i as defineScriptVars, j as renderComponent, u as unescapeHTML, F as Fragment, k as renderHead, l as renderSlot } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_Yqwj1UQ2.mjs';

const $$Astro$u = createAstro();
const $$DownArrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$DownArrow;
  const { class: classes = "", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(classes, "class")}${spreadAttributes(props)}> <path d="M12 1.5325L6 7.5325L-5.96086e-07 1.5325L1.065 0.467501L6 5.4025L10.935 0.4675L12 1.5325Z" fill="white"></path> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/DownArrow.astro", void 0);

const eyeIcon = new Proxy({"src":"/_astro/eye.BHGUt8lr.png","width":25,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const settingIcon = new Proxy({"src":"/_astro/settings.VfDqU8wc.png","width":25,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const cubesIcon = new Proxy({"src":"/_astro/cubes.RAVWeFp3.png","width":25,"height":22,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const tagIcon = new Proxy({"src":"/_astro/tag.7LCD2BAt.png","width":25,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const pieIcon = new Proxy({"src":"/_astro/pie.JCfF9_Po.png","width":17,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const docIcon = new Proxy({"src":"/_astro/doc.L9KiAdWS.png","width":17,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const integrationIcon = new Proxy({"src":"/_astro/integration._goHjFxs.png","width":17,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$t = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro/components/Image.astro", void 0);

const $$Astro$s = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/Martin/Mercura.io%20-%20final%20v2/Mercura.io/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$r = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Menu;
  const { class: classes = "h-6 w-6 text-white", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(classes, "class")}${spreadAttributes(props)}><path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1" clip-rule="evenodd"></path></svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Menu.astro", void 0);

const aarhus = new Proxy({"src":"/_astro/aarhus.sKqVSBlO.png","width":509,"height":352,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const odense = new Proxy({"src":"/_astro/odense.eMSuo0xk.png","width":538,"height":352,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const site = {
  title: "Mercura"
};
const location = {
  country: "Denmark",
  address: {
    line_1: "Aabogade 15",
    line_2: "8200 Aarhus N"
  }
};
const contact = {
  official_name: "Mercura ApS",
  phone: "+45 20 77 12 96",
  email: "mj@mercura.io"
};
const socials = {
  facebook: "https://www.facebook.com/mercura.dk",
  linkedin: "https://www.linkedin.com/company/20479997/"
};
const offices = {
  aarhus: {
    image: aarhus,
    name: "Aarhus - Headquarters",
    country: "Denmark",
    address: {
      line_1: "Aabogade 15",
      line_2: "8200 Aarhus N"
    }
  },
  odense: {
    image: odense,
    name: "Odense",
    country: "Denmark",
    address: {
      line_1: "Forskerparken 10",
      line_2: "5230 Odense M"
    }
  }
};

const $$Astro$q = createAstro();
const $$Close = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Close;
  const { class: classes = "h-6 aspect-auto text-white", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"${addAttribute(classes, "class")}${spreadAttributes(props)}> <path d="M2.4 24.1129L0 21.7129L9.6 12.1129L0 2.51292L2.4 0.112915L12 9.71292L21.6 0.112915L24 2.51292L14.4 12.1129L24 21.7129L21.6 24.1129L12 14.5129L2.4 24.1129Z" fill="#D2D4D9"></path> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Close.astro", void 0);

const $$Astro$p = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: classes = "h-10 aspect-auto", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 37" fill="none"${addAttribute(classes, "class")}${spreadAttributes(props)}> <path d="M57.4615 9.77344L64.5207 20.6721L71.5799 9.77344H75.017V31.4477H71.3015V16.8955L64.5207 27.2059L57.7399 16.8955V31.4477H54.0244V9.77344H57.4615Z" fill="white"></path> <path d="M92.9435 24.0471C92.9435 24.3256 92.9435 24.8833 92.9129 25.4401H81.9523C82.2307 26.7406 83.7485 28.4129 86.0702 28.4129C88.6406 28.4129 90.0955 26.9265 90.0955 26.9265L91.9528 29.7134C91.9528 29.7134 89.6303 31.8186 86.0702 31.8186C81.6119 31.8186 78.1748 28.4129 78.1748 24.1091C78.1748 19.8053 81.3021 16.3997 85.5439 16.3997C89.7857 16.3997 92.9444 19.5269 92.9444 24.0471H92.9435ZM89.2279 22.7467C89.166 21.4776 87.9894 19.7739 85.543 19.7739C83.0965 19.7739 82.0753 21.4462 81.9514 22.7467H89.2279Z" fill="white"></path> <path d="M105.73 16.864L104.43 20.2077C104.43 20.2077 103.749 19.8673 102.665 19.8673C100.404 19.8673 99.383 21.8485 99.383 21.8485V31.4467H95.6675V16.7706H99.1971V18.9072C99.1971 18.9072 100.466 16.3997 103.191 16.3997C104.522 16.3997 105.73 16.864 105.73 16.864Z" fill="white"></path> <path d="M117.681 26.5557L120.128 29.0327C120.128 29.0327 118.022 31.8195 114.059 31.8195C109.662 31.8195 106.164 28.4139 106.164 24.1101C106.164 19.8063 109.663 16.4006 114.059 16.4006C117.991 16.4006 120.066 19.1255 120.066 19.1255L117.496 21.4166C117.496 21.4166 116.288 19.8683 114.059 19.8683C111.551 19.8683 109.941 21.819 109.941 24.1101C109.941 26.4012 111.551 28.3519 114.059 28.3519C116.566 28.3519 117.682 26.5557 117.682 26.5557H117.681Z" fill="white"></path> <path d="M122.542 26.2773V16.7717H126.258V25.2553C126.258 27.4224 127.28 28.3511 129.168 28.3511C131.057 28.3511 132.079 26.5549 132.079 26.5549V16.7708H135.795V31.4469H132.327V29.3103C132.327 29.3103 130.934 31.8178 127.93 31.8178C125.112 31.8178 122.542 29.8051 122.542 26.2755V26.2773Z" fill="white"></path> <path d="M149.572 16.864L148.271 20.2077C148.271 20.2077 147.591 19.8673 146.507 19.8673C144.246 19.8673 143.225 21.8485 143.225 21.8485V31.4467H139.509V16.7706H143.039V18.9072C143.039 18.9072 144.308 16.3997 147.033 16.3997C148.365 16.3997 149.572 16.864 149.572 16.864Z" fill="white"></path> <path d="M164 21.88V31.4476H160.563V29.5903C160.563 29.5903 159.046 31.8195 155.733 31.8195C152.977 31.8195 150.438 30.0232 150.438 26.8969C150.438 24.0795 153.009 22.0354 156.197 22.0354C158.891 22.0354 160.285 23.0879 160.285 23.0879V22.2518C160.285 20.3325 158.427 19.7128 157.127 19.7128C154.99 19.7128 152.73 20.7968 152.73 20.7968L151.523 17.7316C151.523 17.7316 154.247 16.3997 157.313 16.3997C161.524 16.3997 164.001 18.5363 164.001 21.88H164ZM160.285 27.0199V25.503C160.285 25.503 158.954 24.7602 156.941 24.7602C155.795 24.7602 154.216 25.256 154.216 26.8349C154.216 28.4138 155.733 28.7236 156.879 28.7236C159.108 28.7236 160.285 27.0208 160.285 27.0208V27.0199Z" fill="white"></path> <path d="M16.1502 29.7798H12.6835V18.1447C12.6835 13.4089 10.8019 8.86712 7.45371 5.51894L4.38574 2.45096L6.8376 0L9.90468 3.06707C13.9031 7.0655 16.1502 12.4892 16.1502 18.1447V29.7798Z" fill="url(#paint0_linear_1386_6944)"></path> <path d="M5.99045 36.6505H2.52371V18.9172C2.52371 16.6162 1.62739 14.4526 0 12.8252L2.45096 10.3743C4.73308 12.6564 5.98955 15.6902 5.98955 18.9172V36.6505H5.99045Z" fill="url(#paint1_linear_1386_6944)"></path> <path d="M23.2593 29.7798H26.726V17.4262C26.726 13.1502 28.4244 9.04944 31.4483 6.02637L35.0237 2.45096L32.5719 0L28.9965 3.57541C25.3232 7.24871 23.2593 12.2315 23.2593 17.4271V29.7807V29.7798Z" fill="url(#paint2_linear_1386_6944)"></path> <path d="M33.4199 36.6505H36.8867V18.9172C36.8867 16.6162 37.783 14.4526 39.4104 12.8252L36.9594 10.3743C34.6773 12.6564 33.4208 15.6902 33.4208 18.9172V36.6505H33.4199Z" fill="url(#paint3_linear_1386_6944)"></path> <defs> <linearGradient id="paint0_linear_1386_6944" x1="10.2684" y1="0" x2="10.2684" y2="29.7798" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint1_linear_1386_6944" x1="2.99522" y1="10.3743" x2="2.99522" y2="36.6505" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint2_linear_1386_6944" x1="29.1411" y1="0" x2="29.1411" y2="29.7798" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> <linearGradient id="paint3_linear_1386_6944" x1="36.4142" y1="10.3743" x2="36.4142" y2="36.6505" gradientUnits="userSpaceOnUse"> <stop stop-color="#D6545B"></stop> <stop offset="1" stop-color="#FC946D"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Logo.astro", void 0);

const locales = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  da: "Danish"
};
const defaultLang = "en";
const showDefaultLang = false;
const translations = {
  en: () => import('../en_i7EM8nRw.mjs').then((module) => module.default),
  de: () => import('../de_K7En4MHn.mjs').then((module) => module.default),
  es: () => import('../es_IORzmR0M.mjs').then((module) => module.default),
  da: () => import('../da_fuujC9iY.mjs').then((module) => module.default)
};

const en = {
	about: "about",
	analytics: "analytics",
	articles: "articles",
	"configuration-engine": "configuration-engine",
	integrations: "integrations",
	"pricing-engine": "pricing-engine",
	"product-modelling": "product-modelling",
	"quote-and-document-generation": "quote-and-document-generation",
	"request-a-demo": "request-a-demo",
	visualizations: "visualizations",
	"cases.3d-renderings-for-multi-living": "cases/3d-renderings-for-multi-living",
	"cases.audi-configurator": "cases/audi-configurator",
	cases: "cases",
	"cases.lindab-garage-door-configurator": "cases/lindab-garage-door-configurator",
	"cases.migatronic-configurator": "cases/migatronic-configurator",
	"career.digital-designer": "career/digital-designer",
	career: "career",
	contact: "contact"
};
const da = {
	about: "om-os",
	analytics: "analyse",
	articles: "artikler",
	"configuration-engine": "konfigurationsmotor",
	integrations: "integrationer",
	"pricing-engine": "prissætningsmotor",
	"product-modelling": "produktmodellering",
	"quote-and-document-generation": "tilbud-og-dokumentgenerering",
	"request-a-demo": "anmod-om-en-demo",
	visualizations: "visualiseringer",
	"cases.3d-renderings-for-multi-living": "cases/3d-renderinger-til-multi-boliger",
	"cases.audi-configurator": "cases/audi-konfigurator",
	cases: "cases",
	"cases.lindab-garage-door-configurator": "cases/lindab-garageport-konfigurator",
	"cases.migatronic-configurator": "cases/migatronic-konfigurator",
	"career.digital-designer": "karriere/digital-designer",
	career: "karriere",
	contact: "kontakt"
};
const de = {
	about: "ueber-uns",
	analytics: "analytik",
	articles: "artikel",
	"configuration-engine": "konfigurations-engine",
	integrations: "integrationen",
	"pricing-engine": "preisgestaltungs-engine",
	"product-modelling": "produktmodellierung",
	"quote-and-document-generation": "angebot-und-dokumentenerstellung",
	"request-a-demo": "demo-anfordern",
	visualizations: "visualisierungen",
	"cases.3d-renderings-for-multi-living": "cases/3d-renderings-fuer-mehrfamilienwohnhäuser",
	"cases.audi-configurator": "cases/audi-konfigurator",
	cases: "cases",
	"cases.lindab-garage-door-configurator": "cases/lindab-garagentorkonfigurator",
	"cases.migatronic-configurator": "cases/migatronic-konfigurator",
	"career.digital-designer": "karriere/digital-designer",
	career: "karriere",
	contact: "kontakt"
};
const es = {
	about: "acerca-de",
	analytics: "analitica",
	articles: "articulos",
	"configuration-engine": "motor-de-configuracion",
	integrations: "integraciones",
	"pricing-engine": "motor-de-precios",
	"product-modelling": "modelado-de-productos",
	"quote-and-document-generation": "cotizacion-y-generacion-de-documentos",
	"request-a-demo": "solicitar-una-demostracion",
	visualizations: "visualizaciones",
	"cases.3d-renderings-for-multi-living": "casos/renderizaciones-3d-para-viviendas-multifamiliares",
	"cases.audi-configurator": "casos/configurador-de-audi",
	cases: "casos",
	"cases.lindab-garage-door-configurator": "casos/configurador-de-puertas-de-garaje-lindab",
	"cases.migatronic-configurator": "casos/configurador-de-migatronic",
	"career.digital-designer": "carrera/digital-designer",
	career: "carrera",
	contact: "contacto"
};
const routes = {
	en: en,
	da: da,
	de: de,
	es: es
};

function prepareArticleRoutes(articleRoutes) {
  if (!articleRoutes)
    return [];
  return Object.entries(articleRoutes).map(([lang, route]) => {
    const IS_DEFAULT_LANG = lang === defaultLang;
    return {
      lang,
      url: IS_DEFAULT_LANG ? "/" + route : `/${lang}/${route}`
    };
  });
}
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations)
    return lang;
  return defaultLang;
}
const useTranslation = async (lang) => translations[lang]();
function useTranslatedPath(lang) {
  return function(routeKey, l = lang) {
    if (routeKey === "#" || routeKey === "") {
      return routeKey;
    }
    if (routeKey === "/") {
      return l === defaultLang ? "/" : `/${l}`;
    }
    const translatedPath = routes[l][routeKey];
    if (!translatedPath) {
      console.log(`[i18n]: ❌ key '${routeKey}' not found in routes.json`);
      return routeKey;
    }
    return l === defaultLang ? "/" + translatedPath : `/${l}/${translatedPath}`;
  };
}
function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const segments = pathname?.split("/");
  if (segments[1] === "") {
    return "/";
  }
  if (!Object.keys(routes).includes(segments[1]) && segments.length < 3) {
    return segments[1];
  }
  if (segments.length < 3) {
    return "/";
  }
  let path;
  if (!Object.keys(routes).includes(segments[1]) && segments.length > 2) {
    const [, ...pathSegments] = segments;
    path = pathSegments.join("/");
  } else {
    const [, , ...pathSegments] = segments;
    path = pathSegments.join("/");
  }
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  const reversedKey = getKeyByValue(routes[currentLang], path);
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}
function sanitizeTranslations(input) {
  const allowedTags = ["strong", "br", "em", "i", "b"];
  const htmlTagRegex = /<\/?([^\s>]+)(\s[^>]*)*(>|$)/g;
  return input.replace(htmlTagRegex, (match) => {
    const tag = match.replace(/<\/?([^\s>]+)(\s[^>]*)*(>|$)/, "$1");
    if (allowedTags.includes(tag)) {
      return match;
    } else {
      return "";
    }
  });
}
const interpolate = (localizedString, referenceString) => {
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = referenceString.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(i18n): The default slot does not include any HTML tag to interpolate! Use the `t` function directly."
    );
    return localizedString;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode) || [];
    referenceTags.push({ name, attributes });
    tagsRegex.lastIndex = 0;
  });
  let interpolatedString = localizedString;
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    interpolatedString = interpolatedString.replace(
      new RegExp(`<${index}(\\/?)>`, "g"),
      (_, isSelfClosing) => {
        if (isSelfClosing) {
          return `<${referencedTag.name}${referencedTag.attributes} />`;
        } else {
          return `<${referencedTag.name}${referencedTag.attributes}>`;
        }
      }
    );
    interpolatedString = interpolatedString.replace(
      new RegExp(`</${index}>`, "g"),
      `</${referencedTag.name}>`
    );
  }
  return interpolatedString;
};

function cn(...classNames) {
  return classNames.filter(Boolean).join(" ");
}
function slugify(str) {
  return str.toLowerCase().replace(/[\s\W-]+/g, "-").replace(/^-|-$/g, "");
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$o = createAstro();
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const currentLang = getLangFromUrl(Astro2.url);
  const { class: classes = "", mode = "page", altRoutes } = Astro2.props;
  let routeKey = "";
  if (mode === "page") {
    routeKey = getRouteFromUrl(Astro2.url) || "";
  }
  const r = useTranslatedPath(currentLang);
  const articleRoutes = prepareArticleRoutes(altRoutes);
  return renderTemplate(_a || (_a = __template(["", '<div id="i18n-language-picker" aria-label="Language picker" data-open="false"', '> <button type="button" class="flex items-center gap-1 i18n-toggle [&>*]:pointer-events-none w-max"> <span class="underline underline-offset-8 uppercase">', "</span> ", ` </button> <ul class="absolute transition-[max-height,opacity] duration-200 top-full space-y-2 mt-3 left-0 group-data-[open='false']/i18n:max-h-0 group-data-[open='true']/i18n:max-h-none overflow-hidden bg-dark-1 py-1 group-data-[open='true']/i18n:opacity-100 group-data-[open='false']/i18n:opacity-20 group-data-[open='false']/i18n:pointer-events-none pl-6"> `, " ", " </ul> </div> <script>(function(){", '\n  const i18nPicker = document.querySelector("#i18n-language-picker");\n\n  document.addEventListener("click", (e) => {\n    const isToggle = e.target.matches(".i18n-toggle");\n\n    if (isToggle) {\n      const isOpen = i18nPicker.dataset.open === "true";\n      i18nPicker.dataset.open = `${!isOpen}`;\n    } else {\n      i18nPicker.dataset.open = "false";\n    }\n  });\n})();<\/script>'], ["", '<div id="i18n-language-picker" aria-label="Language picker" data-open="false"', '> <button type="button" class="flex items-center gap-1 i18n-toggle [&>*]:pointer-events-none w-max"> <span class="underline underline-offset-8 uppercase">', "</span> ", ` </button> <ul class="absolute transition-[max-height,opacity] duration-200 top-full space-y-2 mt-3 left-0 group-data-[open='false']/i18n:max-h-0 group-data-[open='true']/i18n:max-h-none overflow-hidden bg-dark-1 py-1 group-data-[open='true']/i18n:opacity-100 group-data-[open='false']/i18n:opacity-20 group-data-[open='false']/i18n:pointer-events-none pl-6"> `, " ", " </ul> </div> <script>(function(){", '\n  const i18nPicker = document.querySelector("#i18n-language-picker");\n\n  document.addEventListener("click", (e) => {\n    const isToggle = e.target.matches(".i18n-toggle");\n\n    if (isToggle) {\n      const isOpen = i18nPicker.dataset.open === "true";\n      i18nPicker.dataset.open = \\`\\${!isOpen}\\`;\n    } else {\n      i18nPicker.dataset.open = "false";\n    }\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(cn(
    "border-l border-white py-1.5 pl-6 uppercase font-poppins text-base leading-[22px] relative isolate bg-dark-1 px-1 focus-within:bg-brand-1 group/i18n text-white",
    classes
  ), "class"), currentLang, renderComponent($$result, "DownArrow", $$DownArrow, { "class": "w-3.5 h-auto inline-block ml-1.5 group-data-[open='true']/i18n:rotate-180 transition-transform duration-200" }), mode === "page" && Object.entries(locales).map(([lang, label]) => renderTemplate`<li${addAttribute(cn(
    "border-b last:border-none border-white/60",
    lang === currentLang && "opacity-90"
  ), "class")}> <a${addAttribute(r(routeKey, lang), "href")} class="hover:text-brand-1 transition-colors duration-200  hover:bg-white/5 w-full "> ${lang} </a> </li>`), mode === "article" && articleRoutes.map(({ lang, url }) => renderTemplate`<li${addAttribute(cn(
    "border-b last:border-none border-white/60",
    lang === currentLang && "opacity-90"
  ), "class")}> <a${addAttribute(url, "href")} class="hover:text-brand-1 transition-colors duration-200  hover:bg-white/5 w-full "> ${lang} </a> </li>`), defineScriptVars({ currentLang }));
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/i18n/LanguagePicker.astro", void 0);

const $$Astro$n = createAstro();
const $$MobileLocales = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$MobileLocales;
  const currentLang = getLangFromUrl(Astro2.url);
  const routeKey = getRouteFromUrl(Astro2.url) || "";
  const r = useTranslatedPath(currentLang);
  const { class: classes = "", mode = "page", altRoutes } = Astro2.props;
  const articleRoutes = prepareArticleRoutes(altRoutes);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex gap-6", classes), "class")}> ${mode === "page" && Object.entries(locales).map(([lang, label]) => renderTemplate`<a${addAttribute(r(routeKey, lang), "href")}${addAttribute(cn(
    "border border-white  w-max  font-light text-xl text-center rounded px-2.5 py-2 block uppercase",
    lang === currentLang ? "bg-white text-primary-4" : "text-white"
  ), "class")}> ${lang} </a>`)} ${mode === "article" && articleRoutes.map(({ lang, url }) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(cn(
    "border border-white  w-max  font-light text-xl text-center rounded px-2.5 py-2 block uppercase",
    lang === currentLang ? "bg-white text-primary-4" : "text-white"
  ), "class")}> ${lang} </a>`)} </div>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/i18n/MobileLocales.astro", void 0);

const $$Astro$m = createAstro();
const $$TheNavbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$TheNavbar;
  const locale = getLangFromUrl(Astro2.url);
  const r = useTranslatedPath(locale);
  const t = await useTranslation(locale);
  const productsLinks = {
    core_features: [
      {
        icon: eyeIcon,
        title: t.navbar.products_links.core_features.visualizations,
        url: r("visualizations")
      },
      {
        icon: settingIcon,
        title: t.navbar.products_links.core_features.configuration_engine,
        url: r("configuration-engine")
      },
      {
        icon: cubesIcon,
        title: t.navbar.products_links.core_features.product_modelling,
        url: r("product-modelling")
      },
      {
        icon: tagIcon,
        title: t.navbar.products_links.core_features.pricing_engine,
        url: r("pricing-engine")
      }
    ],
    add_ons: [
      {
        icon: docIcon,
        title: t.navbar.products_links.add_ons.quote_and_document,
        url: r("quote-and-document-generation")
      },
      {
        icon: pieIcon,
        title: t.navbar.products_links.add_ons.analytics,
        url: r("analytics")
      },
      {
        icon: integrationIcon,
        title: t.navbar.products_links.add_ons.integrations,
        url: r("integrations")
      }
    ]
  };
  const aboutLinks = [
    {
      title: t.navbar.about_links.about,
      url: r("about")
    },
    {
      title: t.navbar.about_links.career,
      url: r("career")
    },
    {
      title: t.navbar.about_links.contact,
      url: r("request-a-demo")
    }
  ];
  const casesLink = {
    title: t.navbar.cases,
    url: r("cases")
  };
  const {
    theme = "blue",
    noGradient = false,
    mode = "page",
    altRoutes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-fixed="false" id="nav-wrapper"${addAttribute(`data-[fixed='true']:fixed   sticky md:static top-0 transition-colors duration-200 data-[fixed='true']:inset-0 z-50  ${theme === "blue" ? "data-[fixed='true']:bg-primary-3 lg:data-[fixed='true']:bg-blue-dark bg-blue-dark" : "data-[fixed='true']:bg-primary-3 lg:data-[fixed='true']:bg-primary-1  bg-primary-1"}`, "class")}> <div class="container h-full min-[900px]:h-auto overflow-y-auto md:overflow-y-visible py-6 md:pb-[30px] md:pt-10 xl:pt-16"> <nav class="flex flex-col min-[900px]:flex-row min-[900px]:justify-between relative h-full min-[900px]:h-auto"> <div class="min-[900px]:w-max w-full flex items-center justify-between"> <a${addAttribute(r("/"), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <button id="navToggle" data-nav-open="false" class="cursor-pointer min-[900px]:hidden group/toggle"> ${renderComponent($$result, "Menu", $$Menu, { "class": "h-9 w-auto text-white pointer-events-none group-data-[nav-open='true']/toggle:hidden" })} ${renderComponent($$result, "Close", $$Close, { "class": "h-9 w-auto text-white pointer-events-none group-data-[nav-open='false']/toggle:hidden" })} </button> </div> <ul id="main-links" data-active="false" class="hidden data-[active='true']:flex min-[900px]:flex flex-col min-[900px]:flex-row mt-20 min-[900px]:mt-0 min-[900px]:items-center gap-8"> <li data-mobile-open="false" class="group/products lg:h-full font-poppins"> <a class="text-white cursor-pointer gap-1 flex justify-between min-[900px]:justify-normal items-center font-medium text-2xl min-[900px]:text-base lg:h-full">${t.navbar.products} ${renderComponent($$result, "DownArrow", $$DownArrow, { "class": "w-4 group-data-[mobile-open='true']/products:rotate-0 -rotate-90 min-[900px]:rotate-0 min-[900px]:w-3 h-auto" })} </a> <div class="group-data-[mobile-open='true']/products:max-h-none group-data-[mobile-open='false']/products:max-h-0 group-data-[mobile-open='false']/products:overflow-hidden overflow-hidden lg:group-data-[mobile-open='false']/products:overflow-visible lg:group-data-[mobile-open='false']/products:max-h-none lg:absolute rounded-[.625rem] transition-[opacity,max-height] duration-200 lg:pointer-events-none lg:opacity-0 group-hover/products:pointer-events-auto group-hover/products:opacity-100 bg-primary-3 group-data-[mobile-open='true']/products:py-10 lg:py-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px] inset-x-0 top-full"> <div class="flex flex-col gap-4"> <p class="text-sm uppercase text-accent-2"> ${t.navbar.products_links.core_features.core_features} </p> <ul class="flex flex-wrap lg:grid md:grid-cols-2 gap-2 md:gap-4"> ${productsLinks.core_features.map((link) => renderTemplate`<li class="p-4"> <a${addAttribute(link.url, "href")} class="flex items-center gap-4 w-max capitalize text-base text-white"> ${link.icon && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": link.icon, "alt": "" })}`} ${link.title} </a> </li>`)} </ul> </div> <div class="flex flex-col gap-4"> <p class="text-sm uppercase text-accent-2"> ${t.navbar.products_links.add_ons.add_ons} </p> <ul class="flex flex-wrap md:grid md:grid-cols-2 gap-2 md:gap-4"> ${productsLinks.add_ons.map((link) => renderTemplate`<li class="p-4"> <a${addAttribute(link.url, "href")} class="flex items-center gap-4 w-max capitalize text-base text-white"> ${link.icon && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": link.icon, "alt": "" })}`} ${link.title} </a> </li>`)} </ul> </div> </div> </li> <li class="h-full"> <a${addAttribute(casesLink.url, "href")} class="font-poppins text-white font-medium text-2xl min-[900px]:text-base h-full flex items-center"> ${casesLink.title} </a> </li> <li data-mobile-open="false" class="font-poppins group/about lg:h-full"> <a class="text-white cursor-pointer gap-1 flex justify-between min-[900px]:justify-normal font-medium text-2xl min-[900px]:text-base lg:h-full items-center">${t.navbar.about_us} ${renderComponent($$result, "DownArrow", $$DownArrow, { "class": "w-4 group-data-[mobile-open='true']/about:rotate-0 transition-transform -rotate-90 min-[900px]:rotate-0 min-[900px]:w-3 h-auto" })} </a> <div class="group-data-[mobile-open='true']/about:max-h-none group-data-[mobile-open='false']/about:max-h-0 group-data-[mobile-open='false']/about:overflow-hidden overflow-hidden lg:group-data-[mobile-open='false']/about:overflow-visible lg:group-data-[mobile-open='false']/about:max-h-none lg:absolute rounded-[.625rem] transition-[opacity,max-height] duration-200 lg:pointer-events-none lg:opacity-0 group-focus/about:pointer-events-auto group-hover/about:pointer-events-auto group-hover/about:opacity-100 group-focus/about:opacity-100 bg-primary-3 group-data-[mobile-open='true']/about:py-6 lg:py-6 lg:px-6 top-full min-w-[300px]"> <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"> ${aboutLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-white p-4 block"> ${link.title} </a> </li>`)} </ul> </div> </li> </ul> <div id="right-nav" data-active="false" class="hidden data-[active='true']:flex min-[900px]:flex gap-[22px] min-[900px]:items-center flex-1 min-[900px]:flex-none min-[900px]:flex-row flex-col mt-16 min-[900px]:mt-0"> <a${addAttribute(r("request-a-demo"), "href")}${addAttribute(` block text-white rounded-lg px-8 py-5 md:py-4 md:mx-7 text-center font-bold min-[900px]:font-medium min-[900px]:mx-0 ${noGradient ? "brand-gradient lg:bg-primary-3 hover:brand-gradient transition-colors duration-200" : "brand-gradient"}`, "class")}> ${t.common.request_a_demo} </a> ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "class": "min-[900px]:block hidden", "mode": mode, "altRoutes": altRoutes })} <div class="min-[900px]:hidden mt-[200px] flex flex-col md:flex-col-reverse md:gap-24 gap-8"> ${renderComponent($$result, "MobileLocales", $$MobileLocales, { "mode": mode, "altRoutes": altRoutes })} <div class="flex flex-col gap-4 text-white text-sm font-medium capitalize pb-10 md:pb-[130px]"> <p>T: ${contact.phone}</p> <p>${t.common.email}: ${contact.email}</p> </div> </div> </div> </nav> </div> </div> `;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/TheNavbar.astro", void 0);

const $$Astro$l = createAstro();
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$k = createAstro();
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$j = createAstro();
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$i = createAstro();
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$h = createAstro();
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$g = createAstro();
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$f = createAstro();
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$e = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$d = createAstro();
const $$LinksList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LinksList;
  const { title, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-poppins"> <p class="text-primary-5 capitalize font-semibold text-base">${title}</p> <ul class="flex flex-col gap-4 mt-4"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-sm capitalize text-neutral-30"> ${link.title} </a> </li>`)} </ul> </div>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/lists/LinksList.astro", void 0);

const $$Astro$c = createAstro();
const $$Facebook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Facebook;
  const { class: classes = "h-6 w-6 text-white", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(classes, "class")}${spreadAttributes(props)}><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Facebook.astro", void 0);

const $$Astro$b = createAstro();
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const { class: classes = "h-6 w-6 text-white", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(classes, "class")}${spreadAttributes(props)}><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/Linkedin.astro", void 0);

const $$Astro$a = createAstro();
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Trans;
  const { translation } = Astro2.props;
  const referenceString = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(referenceString ? interpolate(translation, referenceString) : sanitizeTranslations(translation))}` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/i18n/Trans.astro", void 0);

const $$Astro$9 = createAstro();
const $$TheFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TheFooter;
  const lang = getLangFromUrl(Astro2.url);
  const r = useTranslatedPath(lang);
  const { navbar: t, common, footer } = await useTranslation(lang);
  const casesLink = { title: t.cases, url: r("cases") };
  const productFeatures = [
    {
      title: t.products_links.core_features.product_modelling,
      url: r("product-modelling")
    },
    {
      title: t.products_links.core_features.visualizations,
      url: r("visualizations")
    },
    {
      title: t.products_links.core_features.pricing_engine,
      url: r("pricing-engine")
    },
    {
      title: t.products_links.core_features.configuration_engine,
      url: r("configuration-engine")
    }
  ];
  const addOns = [
    {
      title: t.products_links.add_ons.quote_and_document,
      url: r("quote-and-document-generation")
    },
    {
      title: t.products_links.add_ons.integrations,
      url: r("integrations")
    },
    {
      title: t.products_links.add_ons.analytics,
      url: r("analytics")
    }
  ];
  const info = [
    {
      title: t.about_links.about,
      url: r("about")
    },
    {
      title: t.about_links.career,
      url: r("career")
    },
    {
      title: t.about_links.contact,
      url: r("request-a-demo")
    },
    {
      title: t.about_links.articles,
      url: r("articles")
    }
  ];
  const contactInformation = [
    contact.official_name,
    location.address.line_1,
    location.address.line_2,
    location.country,
    `T: ${contact.phone}`,
    `${common.email}: ${contact.email}`
  ];
  const contactInformationMinimal = [
    location.address.line_2,
    `T: ${contact.phone}`,
    `${common.email}: ${contact.email}`
  ];
  const policyLinks = [{ title: footer.links.cookies, url: "#" }];
  const legalLinks = [{ title: footer.links.cookies, url: "#" }];
  const { theme = "blue" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(` mt-auto py-12 md:py-16  ${theme === "blue" ? "bg-primary-3" : "bg-primary-1"}`, "class")}> <div class="container"> <div class="md:flex md:gap-10 md:justify-between"> <div class="sm:hidden md:block"> <a${addAttribute(r("/"), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> </div> <div class="font-poppins flex flex-col gap-4 sm:hidden my-8"> <p class="text-primary-5 capitalize font-semibold text-base"> ${footer.contact_us} </p> ${contactInformationMinimal.map((info2) => renderTemplate`<p class="text-sm capitalize text-neutral-30">${info2}</p>`)} </div> <div class="flex items-end justify-between sm:hidden"> ${renderComponent($$result, "LinksList", $$LinksList, { "title": "Legal", "links": legalLinks })} <dir class="flex gap-6 p-0 m-0"> <a${addAttribute(socials.facebook, "href")}> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "h-10 w-10 text-white" })} </a> <a${addAttribute(socials.linkedin, "href")}> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "h-10 w-10 text-white" })} </a> </dir> </div> <nav aria-label="Footer Navigation" class="sm:grid grid-cols-2 sm:grid-cols-3 lg:flex gap-14 sm:gap-10 xl:gap-[75px] hidden"> <div class="md:hidden"> <a${addAttribute(r("/"), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> </div> ${renderComponent($$result, "LinksList", $$LinksList, { "title": "Product Features", "links": productFeatures })} ${renderComponent($$result, "LinksList", $$LinksList, { "title": "Add-Ons", "links": addOns })} <div class="font-poppins"> <p class="text-primary-5 capitalize font-semibold text-base">Cases</p> <p class="mt-4 text-sm capitalize text-neutral-30"> ${renderComponent($$result, "Trans", $$Trans, { "translation": footer.cases.read_our_latest_cases }, { "default": ($$result2) => renderTemplate`
Read our latest <br> casesdsds <a${addAttribute(casesLink.url, "href")} class="underline lowercase">
here
</a> ` })} </p> </div> ${renderComponent($$result, "LinksList", $$LinksList, { "title": "Information", "links": info })} <div class="font-poppins flex flex-col gap-4"> <p class="text-primary-5 capitalize font-semibold text-base"> ${footer.contact_us} </p> ${contactInformation.map((info2) => renderTemplate`<p class="text-sm text-neutral-30">${info2}</p>`)} </div> </nav> </div> </div> <hr class="bg-neutral-30/60 border-0 h-px mt-14 mb-9 hidden sm:block"> <div class="container hidden sm:flex justify-between"> <div class="flex items-center gap-5 xl:gap-[2.75rem]"> <p class="text-primary-5 text-sm font-medium">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${contact.official_name}. All rights reserved
</p> <a href="#" class="text-sm font-medium text-neutral-30 lg:hidden"> ${footer.links.cookies} </a> ${policyLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="text-sm font-medium text-neutral-30 hidden lg:block"> ${link.title} </a>`)} </div> <dir class="flex items-center gap-6"> <a${addAttribute(socials.facebook, "href")}> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "h-10 w-10 text-white" })} </a> <a${addAttribute(socials.linkedin, "href")}> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "h-10 w-10 text-white" })} </a> </dir> </div> </footer>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/TheFooter.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const {
    title,
    description,
    theme = "blue",
    class: classes,
    languageAlternates,
    ...props
  } = Astro2.props;
  const favicons = [
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }
  ];
  const routeKey = getRouteFromUrl(Astro2.url) || "";
  const r = useTranslatedPath(lang);
  function generateAlternateLinks() {
    return Object.keys(locales).filter((l) => l != lang).map((l) => {
      return {
        hrefLang: l,
        href: new URL(
          r(routeKey, l),
          Astro2.site || Astro2.url.origin
        )
      };
    });
  }
  const alternateLinks = languageAlternates || generateAlternateLinks();
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width">${favicons.map((icon) => renderTemplate`<link${spreadAttributes(icon)}>`)}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": title, "titleDefault": site.title, "titleTemplate": `%s - ${site.title}`, "description": description, ...props, "languageAlternates": alternateLinks })}${renderHead()}</head> <body${addAttribute(cn(
    "flex flex-col min-h-full font-poppins",
    theme === "blue" ? "bg-blue-dark" : "bg-primary-1"
  ), "class")}> ${renderSlot($$result, $$slots["nav"], renderTemplate` ${renderComponent($$result, "TheNavbar", $$TheNavbar, { "theme": theme })} `)} <main${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "TheFooter", $$TheFooter, { "theme": theme })} </body></html>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/layouts/Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$ArrowTopRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowTopRight;
  const {
    class: classes = "h-3 aspect-auto text-white fill-neutral-10",
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(classes, "class")}${spreadAttributes(props)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.830845 11.782L10.9366 1.6763L2.27452 1.6763L2.20027 0.513105H12.9247V11.2376L11.7615 11.1633L11.7615 2.50125L1.6558 12.607L0.830845 11.782Z"></path> </svg>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/icons/ArrowTopRight.astro", void 0);

const $$Astro$6 = createAstro();
const $$RequestDemoLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$RequestDemoLink;
  const { class: classes = "", ...props } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const r = useTranslatedPath(lang);
  const { common } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(r("request-a-demo"), "href")}${addAttribute(`brand-gradient block text-white rounded-lg px-8 py-4 text-center font-medium ${classes}`, "class")}> ${common.request_a_demo} </a>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/RequestDemoLink.astro", void 0);

const $$Astro$5 = createAstro();
const $$ReviewCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ReviewCard;
  const {
    avatar,
    imageAlt = "",
    class: classes = "md:max-w-[700px]  px-6"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div${addAttribute(cn(" mx-auto", classes), "class")}> <blockquote> <div class="text-xl md:text-[2rem] font-light leading-tight text-neutral-10 text-center"> <q>${renderSlot($$result, $$slots["default"])}</q> </div> <div class="my-6"> ${renderComponent($$result, "Image", $$Image, { "class": "w-20 md:w-[120px] aspect-square rounded-full mx-auto", "src": avatar, "alt": imageAlt })} </div> <div class="text-center text-white text-base"> ${renderSlot($$result, $$slots["author"])} </div> </blockquote> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/ReviewCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$LetsBuildTogether = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LetsBuildTogether;
  const lang = getLangFromUrl(Astro2.url);
  const {
    common: { lets_build_together: t }
  } = await useTranslation(lang);
  const r = useTranslatedPath(lang);
  const { theme = "blue" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <div${addAttribute(cn(
    "flex flex-col gap-12  border border-primary-7 rounded-2xl py-20 px-4 text-center",
    theme === "blue" ? "bg-primary-6" : "bg-primary-4/[.27]"
  ), "class")}> <p class="text-[2rem] md:text-[4rem] md:font-medium leading-tight text-neutral-30"> ${renderComponent($$result, "Trans", $$Trans, { "translation": t.lets_build_together }, { "default": ($$result2) => renderTemplate`
Let’s build <span class="brand-gradient bg-clip-text text-transparent">together.</span> ` })} </p> <p class="md:max-w-[700px] mx-auto text-base md:text-xl md:font-light tracking-[.4px] leading-[1.4] text-neutral-30"> ${t.body} </p> <div class="flex flex-col md:flex-row items-center md:justify-center gap-6"> ${renderComponent($$result, "RequestDemoLink", $$RequestDemoLink, { "class": "w-3/5 md:w-max" })} <a${addAttribute(r("request-a-demo"), "href")} class="block text-white rounded-lg px-8 py-4 before:text-center w-3/5 md:w-max font-medium border border-white"> ${t.contact_us} </a> </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/LetsBuildTogether.astro", void 0);

const avatar = new Proxy({"src":"/_astro/photo_3.KiqePtoe.png","width":120,"height":115,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$LabelSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LabelSection;
  const { label, withLink, singleCol = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"${addAttribute(label, "aria-label")}> <div class="container space-y-12"> <h2 class="heading-2 text-neutral-30"> <span class="text-base font-medium uppercase leading-normal brand-gradient bg-clip-text text-transparent">${label}</span><br> ${renderSlot($$result, $$slots["title"])} </h2> <div${addAttribute(cn(
    "text-neutral-30 text-xl font-light leading-tight tracking-[.4px]",
    !singleCol && "grid  grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
  ), "class")}> <div${addAttribute(cn(singleCol && "w-3/5"), "class")}> ${renderSlot($$result, $$slots["col-1"])} </div> ${!singleCol && renderTemplate`<div> ${renderSlot($$result, $$slots["col-2"])} </div>`} </div> ${withLink && renderTemplate`<a${addAttribute(withLink.href, "href")} class="brand-gradient py-4 px-8 rounded-lg block text-base font-medium text-center text-white w-full md:w-max"> ${withLink.title} </a>`} </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/cases/LabelSection.astro", void 0);

const migatronic_sm = new Proxy({"src":"/_astro/case_migatronic_sm.K10oFgNH.png","width":358,"height":413,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const lindab_garage = new Proxy({"src":"/_astro/lindab_garage.TcjBIGn0.png","width":358,"height":413,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$OtherCases = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$OtherCases;
  const { cases } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const {
    common: { see_other_cases }
  } = await useTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <div class="bg-primary-4/[.27] border border-primary-7 rounded-2xl py-20 px-6 md:px-8 lg:px-12 xl:px-16"> <h2 class="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-tight text-neutral-30 text-center"> ${renderComponent($$result, "Trans", $$Trans, { "translation": see_other_cases }, { "default": ($$result2) => renderTemplate`
See our <span class="brand-gradient bg-clip-text text-transparent">other</span> cases!
` })} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"> ${cases.map(({ link, photo }) => renderTemplate`<div class=""> <div class="w-full aspect-[7/8] flex justify-center items-center bg-primary-4 rounded-2xl mb-6"> ${renderComponent($$result, "Image", $$Image, { "src": photo, "alt": link.title, "class": "rounded-2xl" })} </div> <a${addAttribute(link.href, "href")} class="text-xl text-neutral-20 leading-tight tracking-[.4px] flex items-center lg:items-end gap-5 lg:gap-0 font-light"> <span class="lg:w-3/4 xl:w-1/2">${link.title}</span> ${renderComponent($$result, "ArrowTopRight", $$ArrowTopRight, { "class": "h-3.5 md:h-3 aspect-auto text-white fill-neutral-10 inline shrink-0" })} </a> </div>`)} </div> </div> </div> </section>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/sections/cases/OtherCases.astro", void 0);

const hero = new Proxy({"src":"/_astro/case_3d_rendering_hero.v4s8ux6G.png","width":1440,"height":715,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const laptop = new Proxy({"src":"/_astro/multi_living_laptop.RiWqQyt_.png","width":1248,"height":710,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const car_audi = new Proxy({"src":"/_astro/car_audi.AnaED56s.png","width":330,"height":298,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$MultiLivingPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MultiLivingPage;
  const { locale } = Astro2.props;
  const r = useTranslatedPath(locale);
  const {
    common,
    pages: {
      multiliving_3d_renderings: t,
      lindab_garage: { heading_text: lindab_text },
      migatronic_configurator: { heading_text: migatronic_text },
      audi_configurator: { heading_text: audi_text }
    }
  } = await useTranslation(locale);
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
        title: lindab_text,
        href: r("cases.lindab-garage-door-configurator")
      }
    },
    {
      photo: car_audi,
      link: {
        title: audi_text,
        href: r("cases.audi-configurator")
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.title, "theme": "gray" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container"> <h1 class="heading-1 text-center text-neutral-20"> ${renderComponent($$result2, "Trans", $$Trans, { "translation": t.heading }, { "default": ($$result3) => renderTemplate`
3D Renderings <br> <span class="brand-gradient bg-clip-text text-transparent">for Multi-Living</span> ` })} </h1> </div> </section> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": hero, "alt": t.title })} <!-- 2xl:w-auto 2xl:mx-auto max-h-[755px] --> </div> ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.visual_appeal.label, "withLink": { title: common.see_solution, href: "#" } }, { "col-1": ($$result3) => renderTemplate`<p> ${t.visual_appeal.text_1} </p>`, "col-2": ($$result3) => renderTemplate`<p> ${t.visual_appeal.text_2} </p>`, "title": ($$result3) => renderTemplate`<span>${t.visual_appeal.heading}</span>` })} ${renderComponent($$result2, "LabelSection", $$LabelSection, { "label": t.beautiful_visualization.label, "singleCol": true }, { "col-1": ($$result3) => renderTemplate`<p> ${renderComponent($$result3, "Trans", $$Trans, { "translation": t.beautiful_visualization.text_1 })} </p>`, "title": ($$result3) => renderTemplate`<span>${t.beautiful_visualization.heading}</span>` })} <section class="py-[4.25rem]"> <div class="container"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "src": laptop, "alt": t.title })} </div> </section> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "class": "max-w-[800px] px-6", "avatar": avatar }, { "author": ($$result3) => renderTemplate`<p>${t.review.author.occupation}</p><p>${t.review.author.name}</p>`, "default": ($$result3) => renderTemplate` <p class="inline text-2xl font-normal tracking-[.48px]"> ${t.review.message} </p>   ` })} ${renderComponent($$result2, "OtherCases", $$OtherCases, { "cases": otherCases })} ${renderComponent($$result2, "LetsBuildTogether", $$LetsBuildTogether, { "theme": "gray" })} ` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/cases/MultiLivingPage.astro", void 0);

const $$Astro = createAstro();
const $$3DRenderingerTilMultiBoliger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$3DRenderingerTilMultiBoliger;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "MultiLivingPage", $$MultiLivingPage, { "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/3d-renderinger-til-multi-boliger.astro", void 0);

const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/cases/3d-renderinger-til-multi-boliger.astro";
const $$url = "/da/cases/3d-renderinger-til-multi-boliger";

const _3dRenderingerTilMultiBoliger = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3DRenderingerTilMultiBoliger,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MultiLivingPage as $, _3dRenderingerTilMultiBoliger as _, $$Image as a, $$LabelSection as b, laptop as c, $$ReviewCard as d, avatar as e, $$OtherCases as f, getLangFromUrl as g, hero as h, $$LetsBuildTogether as i, $$Layout as j, lindab_garage as k, locales as l, migatronic_sm as m, car_audi as n, $$TheNavbar as o, $$Trans as p, $$RequestDemoLink as q, offices as r, showDefaultLang as s, cn as t, useTranslation as u, contact as v, slugify as w, defaultLang as x, useTranslatedPath as y, $$ArrowTopRight as z };
