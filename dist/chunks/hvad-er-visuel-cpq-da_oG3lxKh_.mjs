import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"hvad-er-visuel-cpq\">Hvad er visuel CPQ?</h1>\n<p>Visuel CPQ optimerer produktkonfiguration og tilbud ved at integrere 2D/3D visualiseringer, forbedre kundeinteraktion, reducere fejl og fremskynde salget.</p>";

				const frontmatter = {"cover":"../../../assets/articles/visual_cpq.png","title":"Hvad er visuel CPQ?","description":"Visuel CPQ optimerer produktkonfiguration og tilbud ved at integrere 2D/3D visualiseringer, forbedre kundeinteraktion, reducere fejl og fremskynde salget.","publishDate":"2023-12-12T11:51:29.894Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-visuel-cpq-da","alternate":{"es":"que-es-cpq-visual-es","de":"was-ist-visuelle-cpq-de","en":"what-is-visual-cpq"}};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-visuel-cpq-da.md";
				const url = undefined;
				function rawContent() {
					return "\n# Hvad er visuel CPQ?\n\nVisuel CPQ optimerer produktkonfiguration og tilbud ved at integrere 2D/3D visualiseringer, forbedre kundeinteraktion, reducere fejl og fremskynde salget.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hvad-er-visuel-cpq","text":"Hvad er visuel CPQ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
