import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/team_sm.png","title":"¿Qué es Mercura?","description":"Mecura o mejor dicho Mercura. Hacemos crecer los negocios con herramientas de venta en línea como configuradores de productos.","publishDate":"2023-12-12T11:53:51.412Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-mercura"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-mercura.md";
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
