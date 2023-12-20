import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Hvad er augmented reality?","description":"Udforsk verden af augmented reality, hvor digital information nahtlos integriert ist i den fysiske verden.","tags":[],"cover":"../../../assets/articles/ar.png","language":"da","isDraft":false,"publishDate":"2023-12-12T11:28:19.578Z","slug":"hvad-er-augmented-reality"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-augmented-reality.md";
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
