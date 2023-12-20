import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"¿Qué es un planificador de pisos?","description":"Cree planos de pisos, visualize diferentes disposiciones de muebles con diversos estilos de decoración en una plataforma fácil de usar.","tags":[],"cover":"../../../assets/articles/floor.png","language":"es","isDraft":false,"publishDate":"2023-12-12T11:27:52.843Z","slug":"qué-es-un-planificador-de-pisos-es"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-un-planificador-de-pisos-es.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
