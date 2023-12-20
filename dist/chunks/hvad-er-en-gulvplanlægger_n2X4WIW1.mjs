import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Hvad er en gulvplanlægger?","description":"Opret grundplaner, visualiser forskellige møbelarrangementer med forskellige dekorationsstile på én nem at bruge platform.","tags":[],"cover":"../../../assets/articles/floor.png","language":"da","isDraft":false,"publishDate":"2023-12-12T11:27:52.843Z","slug":"hvad-er-en-gulvplanlægger"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-en-gulvplanlægger.md";
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
