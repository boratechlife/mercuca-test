import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/sales_config.png","title":"¿Qué es un configurador de ventas?","description":"Los Configuradores de Ventas son herramientas digitales que permiten a las empresas personalizar y cotizar productos de manera eficiente, mejorando la experiencia del cliente y los procesos de ventas.","publishDate":"2023-12-12T11:52:25.784Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-un-configurador-de-ventas"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-un-configurador-de-ventas.md";
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
