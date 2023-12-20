import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"qué-es-cpq-visual\">¿Qué es CPQ visual?</h1>\n<p>CPQ visual optimiza la configuración de productos y la elaboración de presupuestos mediante la integración de visualizaciones 2D/3D, mejorando la participación del cliente, reduciendo errores y agilizando las ventas.</p>";

				const frontmatter = {"cover":"../../../assets/articles/visual_cpq.png","title":"¿Qué es CPQ visual?","description":"CPQ visual optimiza la configuración de productos y la elaboración de presupuestos mediante la integración de visualizaciones 2D/3D, mejorando la participación del cliente, reduciendo errores y agilizando las ventas.","publishDate":"2023-12-12T11:51:29.894Z","tags":[],"language":"es","isDraft":false,"slug":"que-es-cpq-visual"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/que-es-cpq-visual-es.md";
				const url = undefined;
				function rawContent() {
					return "\n# ¿Qué es CPQ visual?\n\nCPQ visual optimiza la configuración de productos y la elaboración de presupuestos mediante la integración de visualizaciones 2D/3D, mejorando la participación del cliente, reduciendo errores y agilizando las ventas.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"qué-es-cpq-visual","text":"¿Qué es CPQ visual?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
