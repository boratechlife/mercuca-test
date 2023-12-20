import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_viz.png","title":"Hvad er 3D-visualiseringer?","description":"3D-visualisering giver en dynamisk og interaktiv repræsentation af data, hvilket muliggør forbedret udforskning og forståelse af kompleks information.","publishDate":"2023-12-12T11:46:39.418Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-3d-visualiseringer"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-3d-visualiseringer.md";
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
