import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/room.png","title":"¿Qué es un planificador de habitaciones?","description":"Diseñe su espacio soñado con facilidad utilizando nuestro planificador de habitaciones interactivo en 2D y 3D.","publishDate":"2023-12-12T11:33:54.707Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-un-planificador-de-habitaciones"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-un-planificador-de-habitaciones.md";
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
