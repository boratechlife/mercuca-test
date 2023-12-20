/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, j as renderComponent, u as unescapeHTML } from '../astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslation, j as $$Layout, s as showDefaultLang, o as $$TheNavbar } from './3d-renderinger-til-multi-boliger_wSp8doCH.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

const $$Astro$6 = createAstro();
const $$Breadcrumb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const lang = getLangFromUrl(Astro2.url);
  const {
    common: { breadcrumb }
  } = await useTranslation(lang);
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <ol${addAttribute(breadcrumb.label, "aria-label")} class="flex items-center gap-2 text-white capitalize font-medium text-base container" role="list"> ${links.map((link, index) => renderTemplate`<li class="flex gap-2 items-center"> ${index !== 0 && renderTemplate`<span>&gt;</span>`} <span>${link}</span> </li>`)} </ol> </div>`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/components/Breadcrumb.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/da/hvad-er-3d-animationer.md": () => import('../hvad-er-3d-animationer_MYhHjkDU.mjs'),"/src/content/articles/da/hvad-er-3d-modellering.md": () => import('../hvad-er-3d-modellering_zqFq0Pk2.mjs'),"/src/content/articles/da/hvad-er-3d-renderinger.md": () => import('../hvad-er-3d-renderinger_P3YskhRW.mjs'),"/src/content/articles/da/hvad-er-3d-visualiseringer.md": () => import('../hvad-er-3d-visualiseringer_GBbSj8BY.mjs'),"/src/content/articles/da/hvad-er-augmented-reality.md": () => import('../hvad-er-augmented-reality_P1OGXkXe.mjs'),"/src/content/articles/da/hvad-er-cpq.md": () => import('../hvad-er-cpq_qjqudq08.mjs'),"/src/content/articles/da/hvad-er-en-gulvplanlægger.md": () => import('../hvad-er-en-gulvplanlægger_WqzAA4w8.mjs'),"/src/content/articles/da/hvad-er-en-konfigurator.md": () => import('../hvad-er-en-konfigurator_NjtMoJk1.mjs'),"/src/content/articles/da/hvad-er-en-produktkonfigurator.md": () => import('../hvad-er-en-produktkonfigurator_eFghvTT4.mjs'),"/src/content/articles/da/hvad-er-en-rumdesigner.md": () => import('../hvad-er-en-rumdesigner_SujaPU7C.mjs'),"/src/content/articles/da/hvad-er-en-rumplanlægger.md": () => import('../hvad-er-en-rumplanlægger_8EaYhHOB.mjs'),"/src/content/articles/da/hvad-er-en-salgskonfigurator.md": () => import('../hvad-er-en-salgskonfigurator_P7OigZvc.mjs'),"/src/content/articles/da/hvad-er-en-virtuel-udstilling.md": () => import('../hvad-er-en-virtuel-udstilling_Z5gIqVW9.mjs'),"/src/content/articles/da/hvad-er-mecura.md": () => import('../hvad-er-mecura_whU8oXmi.mjs'),"/src/content/articles/da/hvad-er-mercura.md": () => import('../hvad-er-mercura_pMxPoiyx.mjs'),"/src/content/articles/da/hvad-er-visuel-cpq-da.md": () => import('../hvad-er-visuel-cpq-da_r_nWxM4E.mjs'),"/src/content/articles/de/qué-es-cpq-visual-es.md": () => import('../qué-es-cpq-visual-es_RVWLzgcC.mjs'),"/src/content/articles/de/was-ist-3d-modellierung.md": () => import('../was-ist-3d-modellierung_n33SRScH.mjs'),"/src/content/articles/de/was-ist-augmented-reality.md": () => import('../was-ist-augmented-reality_IQPUk7st.mjs'),"/src/content/articles/de/was-ist-cpq.md": () => import('../was-ist-cpq_MyfBLb5B.mjs'),"/src/content/articles/de/was-ist-ein-konfigurator.md": () => import('../was-ist-ein-konfigurator_yY-ZXY5I.mjs'),"/src/content/articles/de/was-ist-ein-produktkonfigurator.md": () => import('../was-ist-ein-produktkonfigurator_Cm4sUbtB.mjs'),"/src/content/articles/de/was-ist-ein-raumdesigner.md": () => import('../was-ist-ein-raumdesigner_Oxa2uDBm.mjs'),"/src/content/articles/de/was-ist-ein-raumplaner.md": () => import('../was-ist-ein-raumplaner_a7EJAaBb.mjs'),"/src/content/articles/de/was-ist-ein-verkaufskonfigurator.md": () => import('../was-ist-ein-verkaufskonfigurator_WcJjAGQz.mjs'),"/src/content/articles/de/was-ist-ein-virtueller-showroom.md": () => import('../was-ist-ein-virtueller-showroom_wuFkDvIa.mjs'),"/src/content/articles/de/was-ist-mecura.md": () => import('../was-ist-mecura_OaaMjbvZ.mjs'),"/src/content/articles/de/was-ist-mercura.md": () => import('../was-ist-mercura_zwAcZB5N.mjs'),"/src/content/articles/de/was-sind-3d-animationen.md": () => import('../was-sind-3d-animationen_ksadOrwj.mjs'),"/src/content/articles/de/was-sind-3d-renderings.md": () => import('../was-sind-3d-renderings_j0dUFDH1.mjs'),"/src/content/articles/de/was-sind-3d-visualisierungen.md": () => import('../was-sind-3d-visualisierungen_7_ObRAZc.mjs'),"/src/content/articles/en/what-are-3d-animations.md": () => import('../what-are-3d-animations_v9oDOuy0.mjs'),"/src/content/articles/en/what-are-3d-renderings.md": () => import('../what-are-3d-renderings_dwuE0zP6.mjs'),"/src/content/articles/en/what-are-3d-visualizations.md": () => import('../what-are-3d-visualizations_Sh4KTbtw.mjs'),"/src/content/articles/en/what-is-3d-modelling.md": () => import('../what-is-3d-modelling_O3zR7qCU.mjs'),"/src/content/articles/en/what-is-a-configurator.md": () => import('../what-is-a-configurator_VwOsUwU0.mjs'),"/src/content/articles/en/what-is-a-floor-planner.md": () => import('../what-is-a-floor-planner_vmqci7HZ.mjs'),"/src/content/articles/en/what-is-a-product-configurator.md": () => import('../what-is-a-product-configurator_gCygf9-y.mjs'),"/src/content/articles/en/what-is-a-room-designer.md": () => import('../what-is-a-room-designer_UUnS-ME6.mjs'),"/src/content/articles/en/what-is-a-room-planner.md": () => import('../what-is-a-room-planner_ujvsNNjU.mjs'),"/src/content/articles/en/what-is-a-sales-configurator.md": () => import('../what-is-a-sales-configurator_6yR983eW.mjs'),"/src/content/articles/en/what-is-a-virtual-showroom.md": () => import('../what-is-a-virtual-showroom_fUU1bAba.mjs'),"/src/content/articles/en/what-is-augmented-reality.md": () => import('../what-is-augmented-reality_17stAjeT.mjs'),"/src/content/articles/en/what-is-cpq.md": () => import('../what-is-cpq_noWFeHxS.mjs'),"/src/content/articles/en/what-is-mecura.md": () => import('../what-is-mecura_e7Meoc5Z.mjs'),"/src/content/articles/en/what-is-mercura.md": () => import('../what-is-mercura_zwa2yPm2.mjs'),"/src/content/articles/en/what-is-merkura.md": () => import('../what-is-merkura_2fSkBTaF.mjs'),"/src/content/articles/en/what-is-visual-cpq copy 2.md": () => import('../what-is-visual-cpq copy 2_lZnNyPd6.mjs'),"/src/content/articles/en/what-is-visual-cpq.md": () => import('../what-is-visual-cpq_B1Mb4D0a.mjs'),"/src/content/articles/es/que-es-cpq-visual-es.md": () => import('../que-es-cpq-visual-es_JfRfIFNQ.mjs'),"/src/content/articles/es/que-es-el-modelado-3d.md": () => import('../que-es-el-modelado-3d_2jPLNaBO.mjs'),"/src/content/articles/es/que-es-un-configurador-es.md": () => import('../que-es-un-configurador-es_T8-yyhwY.mjs'),"/src/content/articles/es/que-son-las-animaciones-3d.md": () => import('../que-son-las-animaciones-3d_3HVxa8Cr.mjs'),"/src/content/articles/es/que-son-las-visualizaciones-3d.md": () => import('../que-son-las-visualizaciones-3d_V8b3Tvhb.mjs'),"/src/content/articles/es/que-son-los-renderings-3d.md": () => import('../que-son-los-renderings-3d_S6sUCI6t.mjs'),"/src/content/articles/es/qué-es-cpq-es.md": () => import('../qué-es-cpq-es_9OaHH5rJ.mjs'),"/src/content/articles/es/qué-es-cpq-visual.md": () => import('../qué-es-cpq-visual_QqWTqQGD.mjs'),"/src/content/articles/es/qué-es-la-realidad-aumentada.md": () => import('../qué-es-la-realidad-aumentada_2IhMjPFj.mjs'),"/src/content/articles/es/qué-es-mecura.md": () => import('../qué-es-mecura_QMik9nSR.mjs'),"/src/content/articles/es/qué-es-mercura.md": () => import('../qué-es-mercura_nnw2rZgE.mjs'),"/src/content/articles/es/qué-es-un-configurador-de-productos.md": () => import('../qué-es-un-configurador-de-productos_wxVRhN5z.mjs'),"/src/content/articles/es/qué-es-un-configurador-de-ventas.md": () => import('../qué-es-un-configurador-de-ventas_gC5gNLeM.mjs'),"/src/content/articles/es/qué-es-un-diseñador-de-habitaciones.md": () => import('../qué-es-un-diseñador-de-habitaciones_XeRrzl4h.mjs'),"/src/content/articles/es/qué-es-un-planificador-de-habitaciones.md": () => import('../qué-es-un-planificador-de-habitaciones_A2JODqOg.mjs'),"/src/content/articles/es/qué-es-un-planificador-de-pisos-es.md": () => import('../qué-es-un-planificador-de-pisos-es_f39iz_i0.mjs'),"/src/content/articles/es/qué-es-un-showroom-virtual.md": () => import('../qué-es-un-showroom-virtual_F8apuiJi.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"articles":{"type":"content","entries":{"qué-es-cpq-visual-es":"/src/content/articles/de/qué-es-cpq-visual-es.md","was-ist-3d-modellierung":"/src/content/articles/de/was-ist-3d-modellierung.md","was-ist-augmented-reality":"/src/content/articles/de/was-ist-augmented-reality.md","was-ist-cpq":"/src/content/articles/de/was-ist-cpq.md","was-ist-ein-konfigurator":"/src/content/articles/de/was-ist-ein-konfigurator.md","was-ist-ein-produktkonfigurator":"/src/content/articles/de/was-ist-ein-produktkonfigurator.md","was-ist-ein-raumdesigner":"/src/content/articles/de/was-ist-ein-raumdesigner.md","was-ist-ein-raumplaner":"/src/content/articles/de/was-ist-ein-raumplaner.md","was-ist-ein-verkaufskonfigurator":"/src/content/articles/de/was-ist-ein-verkaufskonfigurator.md","was-ist-ein-virtueller-showroom":"/src/content/articles/de/was-ist-ein-virtueller-showroom.md","was-ist-mecura":"/src/content/articles/de/was-ist-mecura.md","was-ist-mercura":"/src/content/articles/de/was-ist-mercura.md","was-sind-3d-animationen":"/src/content/articles/de/was-sind-3d-animationen.md","was-sind-3d-renderings":"/src/content/articles/de/was-sind-3d-renderings.md","was-sind-3d-visualisierungen":"/src/content/articles/de/was-sind-3d-visualisierungen.md","hvad-er-3d-animationer":"/src/content/articles/da/hvad-er-3d-animationer.md","hvad-er-3d-modellering":"/src/content/articles/da/hvad-er-3d-modellering.md","hvad-er-augmented-reality":"/src/content/articles/da/hvad-er-augmented-reality.md","hvad-er-3d-visualiseringer":"/src/content/articles/da/hvad-er-3d-visualiseringer.md","hvad-er-3d-renderinger":"/src/content/articles/da/hvad-er-3d-renderinger.md","hvad-er-en-gulvplanlægger":"/src/content/articles/da/hvad-er-en-gulvplanlægger.md","hvad-er-cpq":"/src/content/articles/da/hvad-er-cpq.md","hvad-er-en-konfigurator":"/src/content/articles/da/hvad-er-en-konfigurator.md","hvad-er-en-rumdesigner":"/src/content/articles/da/hvad-er-en-rumdesigner.md","hvad-er-en-rumplanlægger":"/src/content/articles/da/hvad-er-en-rumplanlægger.md","hvad-er-en-salgskonfigurator":"/src/content/articles/da/hvad-er-en-salgskonfigurator.md","hvad-er-en-produktkonfigurator":"/src/content/articles/da/hvad-er-en-produktkonfigurator.md","hvad-er-en-virtuel-udstilling":"/src/content/articles/da/hvad-er-en-virtuel-udstilling.md","hvad-er-mercura":"/src/content/articles/da/hvad-er-mercura.md","hvad-er-mecura":"/src/content/articles/da/hvad-er-mecura.md","hvad-er-visuel-cpq-da":"/src/content/articles/da/hvad-er-visuel-cpq-da.md","what-are-3d-renderings":"/src/content/articles/en/what-are-3d-renderings.md","what-are-3d-visualizations":"/src/content/articles/en/what-are-3d-visualizations.md","what-are-3d-animations":"/src/content/articles/en/what-are-3d-animations.md","what-is-3d-modelling":"/src/content/articles/en/what-is-3d-modelling.md","what-is-a-configurator":"/src/content/articles/en/what-is-a-configurator.md","what-is-a-floor-planner":"/src/content/articles/en/what-is-a-floor-planner.md","what-is-a-product-configurator":"/src/content/articles/en/what-is-a-product-configurator.md","what-is-a-room-designer":"/src/content/articles/en/what-is-a-room-designer.md","what-is-a-room-planner":"/src/content/articles/en/what-is-a-room-planner.md","what-is-a-sales-configurator":"/src/content/articles/en/what-is-a-sales-configurator.md","what-is-a-virtual-showroom":"/src/content/articles/en/what-is-a-virtual-showroom.md","what-is-augmented-reality":"/src/content/articles/en/what-is-augmented-reality.md","what-is-cpq":"/src/content/articles/en/what-is-cpq.md","what-is-mecura":"/src/content/articles/en/what-is-mecura.md","en/what-is-mercura":"/src/content/articles/en/what-is-mercura.md","en/what-is-visual-cpq-copy-2":"/src/content/articles/en/what-is-visual-cpq copy 2.md","what-is-merkura":"/src/content/articles/en/what-is-merkura.md","que-es-cpq-visual":"/src/content/articles/es/que-es-cpq-visual-es.md","what-is-visual-cpq":"/src/content/articles/en/what-is-visual-cpq.md","que-es-el-modelado-3d":"/src/content/articles/es/que-es-el-modelado-3d.md","que-son-las-animaciones-3d":"/src/content/articles/es/que-son-las-animaciones-3d.md","que-son-las-visualizaciones-3d":"/src/content/articles/es/que-son-las-visualizaciones-3d.md","que-son-los-renderings-3d":"/src/content/articles/es/que-son-los-renderings-3d.md","qué-es-cpq-es":"/src/content/articles/es/qué-es-cpq-es.md","qué-es-la-realidad-aumentada":"/src/content/articles/es/qué-es-la-realidad-aumentada.md","qué-es-cpq-visual":"/src/content/articles/es/qué-es-cpq-visual.md","que-es-un-configurador-es":"/src/content/articles/es/que-es-un-configurador-es.md","qué-es-mecura":"/src/content/articles/es/qué-es-mecura.md","qué-es-mercura":"/src/content/articles/es/qué-es-mercura.md","qué-es-un-configurador-de-productos":"/src/content/articles/es/qué-es-un-configurador-de-productos.md","qué-es-un-configurador-de-ventas":"/src/content/articles/es/qué-es-un-configurador-de-ventas.md","qué-es-un-diseñador-de-habitaciones":"/src/content/articles/es/qué-es-un-diseñador-de-habitaciones.md","qué-es-un-planificador-de-habitaciones":"/src/content/articles/es/qué-es-un-planificador-de-habitaciones.md","qué-es-un-showroom-virtual":"/src/content/articles/es/qué-es-un-showroom-virtual.md","qué-es-un-planificador-de-pisos-es":"/src/content/articles/es/qué-es-un-planificador-de-pisos-es.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/da/hvad-er-3d-animationer.md": () => import('../hvad-er-3d-animationer_k4VABZTr.mjs'),"/src/content/articles/da/hvad-er-3d-modellering.md": () => import('../hvad-er-3d-modellering_PMQfaer6.mjs'),"/src/content/articles/da/hvad-er-3d-renderinger.md": () => import('../hvad-er-3d-renderinger_K3S8DM15.mjs'),"/src/content/articles/da/hvad-er-3d-visualiseringer.md": () => import('../hvad-er-3d-visualiseringer_2yVxFj3Z.mjs'),"/src/content/articles/da/hvad-er-augmented-reality.md": () => import('../hvad-er-augmented-reality_j7Z10kaA.mjs'),"/src/content/articles/da/hvad-er-cpq.md": () => import('../hvad-er-cpq_dMV9W7t4.mjs'),"/src/content/articles/da/hvad-er-en-gulvplanlægger.md": () => import('../hvad-er-en-gulvplanlægger_omNOAths.mjs'),"/src/content/articles/da/hvad-er-en-konfigurator.md": () => import('../hvad-er-en-konfigurator_ipTzwin9.mjs'),"/src/content/articles/da/hvad-er-en-produktkonfigurator.md": () => import('../hvad-er-en-produktkonfigurator_n74nLDdZ.mjs'),"/src/content/articles/da/hvad-er-en-rumdesigner.md": () => import('../hvad-er-en-rumdesigner_znHz39rr.mjs'),"/src/content/articles/da/hvad-er-en-rumplanlægger.md": () => import('../hvad-er-en-rumplanlægger_va7ayrj_.mjs'),"/src/content/articles/da/hvad-er-en-salgskonfigurator.md": () => import('../hvad-er-en-salgskonfigurator_9EJgGa_U.mjs'),"/src/content/articles/da/hvad-er-en-virtuel-udstilling.md": () => import('../hvad-er-en-virtuel-udstilling_MSZQ4X1U.mjs'),"/src/content/articles/da/hvad-er-mecura.md": () => import('../hvad-er-mecura_UiStnCBS.mjs'),"/src/content/articles/da/hvad-er-mercura.md": () => import('../hvad-er-mercura_9n43rlDT.mjs'),"/src/content/articles/da/hvad-er-visuel-cpq-da.md": () => import('../hvad-er-visuel-cpq-da_T30Q6b29.mjs'),"/src/content/articles/de/qué-es-cpq-visual-es.md": () => import('../qué-es-cpq-visual-es_JtU2jq1g.mjs'),"/src/content/articles/de/was-ist-3d-modellierung.md": () => import('../was-ist-3d-modellierung_Q5yzm5O7.mjs'),"/src/content/articles/de/was-ist-augmented-reality.md": () => import('../was-ist-augmented-reality_xDGbjMpT.mjs'),"/src/content/articles/de/was-ist-cpq.md": () => import('../was-ist-cpq_XNVPJ7bw.mjs'),"/src/content/articles/de/was-ist-ein-konfigurator.md": () => import('../was-ist-ein-konfigurator_JSIS5RII.mjs'),"/src/content/articles/de/was-ist-ein-produktkonfigurator.md": () => import('../was-ist-ein-produktkonfigurator_bFXVnZK2.mjs'),"/src/content/articles/de/was-ist-ein-raumdesigner.md": () => import('../was-ist-ein-raumdesigner_SvH9XuFb.mjs'),"/src/content/articles/de/was-ist-ein-raumplaner.md": () => import('../was-ist-ein-raumplaner_9zEqUqhD.mjs'),"/src/content/articles/de/was-ist-ein-verkaufskonfigurator.md": () => import('../was-ist-ein-verkaufskonfigurator_b6OtVHG_.mjs'),"/src/content/articles/de/was-ist-ein-virtueller-showroom.md": () => import('../was-ist-ein-virtueller-showroom_DZ2lA-dS.mjs'),"/src/content/articles/de/was-ist-mecura.md": () => import('../was-ist-mecura_5s-gr6-j.mjs'),"/src/content/articles/de/was-ist-mercura.md": () => import('../was-ist-mercura_kP8apkmb.mjs'),"/src/content/articles/de/was-sind-3d-animationen.md": () => import('../was-sind-3d-animationen_CEHZXL-s.mjs'),"/src/content/articles/de/was-sind-3d-renderings.md": () => import('../was-sind-3d-renderings_satM4aRL.mjs'),"/src/content/articles/de/was-sind-3d-visualisierungen.md": () => import('../was-sind-3d-visualisierungen_3BhBYbYu.mjs'),"/src/content/articles/en/what-are-3d-animations.md": () => import('../what-are-3d-animations_qU7skDi7.mjs'),"/src/content/articles/en/what-are-3d-renderings.md": () => import('../what-are-3d-renderings_GGaXIeKz.mjs'),"/src/content/articles/en/what-are-3d-visualizations.md": () => import('../what-are-3d-visualizations_wFjQgsgN.mjs'),"/src/content/articles/en/what-is-3d-modelling.md": () => import('../what-is-3d-modelling_SFGcXze2.mjs'),"/src/content/articles/en/what-is-a-configurator.md": () => import('../what-is-a-configurator_lsFig3gg.mjs'),"/src/content/articles/en/what-is-a-floor-planner.md": () => import('../what-is-a-floor-planner_F8dOMd93.mjs'),"/src/content/articles/en/what-is-a-product-configurator.md": () => import('../what-is-a-product-configurator_5iblvno-.mjs'),"/src/content/articles/en/what-is-a-room-designer.md": () => import('../what-is-a-room-designer_NbgRC7HJ.mjs'),"/src/content/articles/en/what-is-a-room-planner.md": () => import('../what-is-a-room-planner_p_4Pt2PK.mjs'),"/src/content/articles/en/what-is-a-sales-configurator.md": () => import('../what-is-a-sales-configurator_AYa5KIZa.mjs'),"/src/content/articles/en/what-is-a-virtual-showroom.md": () => import('../what-is-a-virtual-showroom_ZfMH-NvT.mjs'),"/src/content/articles/en/what-is-augmented-reality.md": () => import('../what-is-augmented-reality_LurAudLO.mjs'),"/src/content/articles/en/what-is-cpq.md": () => import('../what-is-cpq_XVFsZuoY.mjs'),"/src/content/articles/en/what-is-mecura.md": () => import('../what-is-mecura_MZ_AubGm.mjs'),"/src/content/articles/en/what-is-mercura.md": () => import('../what-is-mercura__lGQ-n_M.mjs'),"/src/content/articles/en/what-is-merkura.md": () => import('../what-is-merkura_en9i2AeR.mjs'),"/src/content/articles/en/what-is-visual-cpq copy 2.md": () => import('../what-is-visual-cpq copy 2_8TkSlPLs.mjs'),"/src/content/articles/en/what-is-visual-cpq.md": () => import('../what-is-visual-cpq__uF2E7Tr.mjs'),"/src/content/articles/es/que-es-cpq-visual-es.md": () => import('../que-es-cpq-visual-es_I-b_idAt.mjs'),"/src/content/articles/es/que-es-el-modelado-3d.md": () => import('../que-es-el-modelado-3d_9KAUJG1c.mjs'),"/src/content/articles/es/que-es-un-configurador-es.md": () => import('../que-es-un-configurador-es_NbYctDy8.mjs'),"/src/content/articles/es/que-son-las-animaciones-3d.md": () => import('../que-son-las-animaciones-3d_7cokDMEp.mjs'),"/src/content/articles/es/que-son-las-visualizaciones-3d.md": () => import('../que-son-las-visualizaciones-3d_fmjZj4R_.mjs'),"/src/content/articles/es/que-son-los-renderings-3d.md": () => import('../que-son-los-renderings-3d_epvl7w5T.mjs'),"/src/content/articles/es/qué-es-cpq-es.md": () => import('../qué-es-cpq-es_Rojc8fcY.mjs'),"/src/content/articles/es/qué-es-cpq-visual.md": () => import('../qué-es-cpq-visual_Ar28TYhE.mjs'),"/src/content/articles/es/qué-es-la-realidad-aumentada.md": () => import('../qué-es-la-realidad-aumentada_apk0uqXy.mjs'),"/src/content/articles/es/qué-es-mecura.md": () => import('../qué-es-mecura_oXqNrRtt.mjs'),"/src/content/articles/es/qué-es-mercura.md": () => import('../qué-es-mercura_VHokuizv.mjs'),"/src/content/articles/es/qué-es-un-configurador-de-productos.md": () => import('../qué-es-un-configurador-de-productos_RK0mGeW1.mjs'),"/src/content/articles/es/qué-es-un-configurador-de-ventas.md": () => import('../qué-es-un-configurador-de-ventas_7-YfNbfM.mjs'),"/src/content/articles/es/qué-es-un-diseñador-de-habitaciones.md": () => import('../qué-es-un-diseñador-de-habitaciones_XY_knLTF.mjs'),"/src/content/articles/es/qué-es-un-planificador-de-habitaciones.md": () => import('../qué-es-un-planificador-de-habitaciones_dQu1DNZ1.mjs'),"/src/content/articles/es/qué-es-un-planificador-de-pisos-es.md": () => import('../qué-es-un-planificador-de-pisos-es_cRFXfF85.mjs'),"/src/content/articles/es/qué-es-un-showroom-virtual.md": () => import('../qué-es-un-showroom-virtual_CY9YBU6W.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro();
const $$ArticlePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ArticlePage;
  const { article, locale } = Astro2.props;
  const { common } = await useTranslation(locale);
  const { Content } = await article.render();
  let defaultLink = {};
  defaultLink[locale] = article.slug;
  let AltLinks = article.data.alternate;
  if (AltLinks && !AltLinks[locale]) {
    AltLinks[locale] = article.slug;
  }
  const alternateLinks = Object.entries(AltLinks || {}).map(([lang, slug]) => {
    const articlePath = locale === lang && !showDefaultLang ? `/${slug}` : `/${lang}/${slug}`;
    return {
      hrefLang: lang,
      href: new URL(articlePath, Astro2.site || Astro2.url.origin)
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.data.title, "description": article.data.description, "languageAlternates": alternateLinks }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "links": [common.breadcrumb.articles, article.data.title] })} ${maybeRenderHead()}<section class="py-[4.25rem]"> <div class="container relative gap-6 md:gap-12 xl:gap-20 grid grid-cols-1 lg:grid-cols-2 text-neutral-10 mb-[4.25rem]"> <div> <h1 class="text-neutral-10 heading-1">${article.data.title}</h1> </div> <div> <p class="text-2xl lg:text-[2rem] leading-tight text-neutral-10"> ${article.data.description} </p> </div> </div> </section> <section class="py-[4.25rem]"> <div class="container"> <div class="prose text-neutral-10 prose-headings:text-neutral-10"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </section> `, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "TheNavbar", $$TheNavbar, { "slot": "nav", "mode": "article", "altRoutes": AltLinks || defaultLink })}` })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/blocks/ArticlePage.astro", void 0);

const $$Astro$4 = createAstro();
async function getStaticPaths$4() {
  const articles = await getCollection("articles", ({ data, id, slug }) => {
    const DRAFT_FILTER = data.isDraft !== true ;
    return DRAFT_FILTER;
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$4;
  const lang = getLangFromUrl(Astro2.url);
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticlePage", $$ArticlePage, { "article": article, "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/[...slug].astro", void 0);
const $$file$4 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/da/[...slug].astro";
const $$url$4 = "/da/[...slug]";

const ____slug_$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$4,
  file: $$file$4,
  getStaticPaths: getStaticPaths$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
async function getStaticPaths$3() {
  const articles = await getCollection("articles", ({ data, id, slug }) => {
    const DRAFT_FILTER = data.isDraft !== true ;
    return DRAFT_FILTER;
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$3;
  const lang = getLangFromUrl(Astro2.url);
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticlePage", $$ArticlePage, { "article": article, "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/[...slug].astro", void 0);
const $$file$3 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/de/[...slug].astro";
const $$url$3 = "/de/[...slug]";

const ____slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
async function getStaticPaths$2() {
  const articles = await getCollection("articles", ({ data, id, slug }) => {
    const DRAFT_FILTER = data.isDraft !== true ;
    return DRAFT_FILTER;
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const lang = getLangFromUrl(Astro2.url);
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticlePage", $$ArticlePage, { "article": article, "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/[...slug].astro", void 0);
const $$file$2 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/en/[...slug].astro";
const $$url$2 = "/en/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  const articles = await getCollection("articles", ({ data, id, slug }) => {
    const DRAFT_FILTER = data.isDraft !== true ;
    return DRAFT_FILTER;
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const lang = getLangFromUrl(Astro2.url);
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticlePage", $$ArticlePage, { "article": article, "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/[...slug].astro", void 0);
const $$file$1 = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/es/[...slug].astro";
const $$url$1 = "/es/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const articles = await getCollection("articles", ({ data }) => {
    const DRAFT_FILTER = data.isDraft !== true ;
    return DRAFT_FILTER;
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = getLangFromUrl(Astro2.url);
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticlePage", $$ArticlePage, { "article": article, "locale": lang })}`;
}, "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[...slug].astro", void 0);
const $$file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Breadcrumb as $, ____slug_$4 as _, ____slug_$3 as a, ____slug_$2 as b, ____slug_$1 as c, ____slug_ as d, getCollection as g };
