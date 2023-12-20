import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"was-ist-visuelle-cpq\">Was ist visuelle CPQ?</h1>\n<p>Visuelle CPQ optimiert die Produktkonfiguration und Angebotsstellung durch die Integration von 2D/3D-Visualisierungen, Verbesserung der Kundeninteraktion, Fehlerreduzierung und Beschleunigung des Verkaufs.</p>";

				const frontmatter = {"cover":"../../../assets/articles/visual_cpq.png","title":"¿Qué es CPQ visual?","description":"CPQ visual optimiza la configuración de productos y cotización mediante la integración de visualizaciones en 2D/3D, mejorando la participación del cliente, reduciendo errores y acelerando las ventas.","publishDate":"2023-12-12T11:51:29.894Z","tags":[],"language":"es","isDraft":false,"slug":"qué-es-cpq-visual-es","alternate":{"es":"que-es-cpq-visual-es","da":"hvad-er-visuel-cpq-da","en":"what-is-visual-cpq"}};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/qué-es-cpq-visual-es.md";
				const url = undefined;
				function rawContent() {
					return "\n# Was ist visuelle CPQ?\n\nVisuelle CPQ optimiert die Produktkonfiguration und Angebotsstellung durch die Integration von 2D/3D-Visualisierungen, Verbesserung der Kundeninteraktion, Fehlerreduzierung und Beschleunigung des Verkaufs.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"was-ist-visuelle-cpq","text":"Was ist visuelle CPQ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
