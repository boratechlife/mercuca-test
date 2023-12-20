import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_viz.png","title":"Was sind 3D-Visualisierungen?","description":"3D-Visualisierung bietet eine dynamische und interaktive Darstellung von Daten, die eine verbesserte Exploration und ein besseres Verständnis komplexer Informationen ermöglicht.","publishDate":"2023-12-12T11:46:39.418Z","tags":[],"language":"de","isDraft":false,"slug":"was-sind-3d-visualisierungen"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-sind-3d-visualisierungen.md";
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
