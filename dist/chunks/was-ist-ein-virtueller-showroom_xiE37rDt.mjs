import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/virtual_show.png","title":"Was ist ein virtueller Showroom?","description":"Erleben Sie die Bequemlichkeit und Flexibilität des Durchsuchens und Einkaufens in einem virtuellen Showroom.","publishDate":"2023-12-12T11:44:18.008Z","tags":[],"language":"de","isDraft":false,"slug":"was-ist-ein-virtueller-showroom"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-ein-virtueller-showroom.md";
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
