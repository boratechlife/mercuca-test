import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/room_designer.png","title":"¿Qué es un diseñador de habitaciones?","description":"Transforme cualquier habitación en su hogar con nuestra intuitiva herramienta de diseñador de habitaciones en 2D o en 3D.","publishDate":"2023-12-12T11:43:08.701Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-un-diseñador-de-habitaciones"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-un-diseñador-de-habitaciones.md";
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
