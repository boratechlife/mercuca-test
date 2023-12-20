import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_viz.png","title":"What are 3D visualizations?","description":"3D visualization provides a dynamic and interactive representation of data, allowing for enhanced exploration and understanding of complex information.","publishDate":"2023-12-12T11:46:39.418Z","tags":[],"language":"en","isDraft":false,"slug":"what-are-3d-visualizations"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/en/what-are-3d-visualizations.md";
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
