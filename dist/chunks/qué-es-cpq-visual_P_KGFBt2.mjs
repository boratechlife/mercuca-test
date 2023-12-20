import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/visual_cpq.png","title":"¿Qué es CPQ visual?","description":"CPQ visual optimiza la configuración de productos y la cotización mediante la integración de visualizaciones en 2D/3D, mejorando la participación del cliente, reduciendo errores y acelerando las ventas.","publishDate":"2023-12-12T11:51:29.894Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-cpq-visual"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-cpq-visual.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
