import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/room_designer.png","title":"Was ist ein Raumdesigner?","description":"Verwandeln Sie jeden Raum in Ihrem Zuhause mit unserem intuitiven Raumdesigner-Tool in 2D oder 3D.","publishDate":"2023-12-12T11:43:08.701Z","tags":[],"language":"de","isDraft":false,"slug":"was-ist-ein-raumdesigner"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-ein-raumdesigner.md";
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
