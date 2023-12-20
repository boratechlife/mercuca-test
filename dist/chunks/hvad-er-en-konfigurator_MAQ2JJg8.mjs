import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Hvad er en konfigurator?","description":"Oplev bekvemmeligheden og fleksibiliteten ved at bruge en konfigurator til at tilpasse og personalisere dine produktvalg.","tags":[],"cover":"../../../assets/articles/configurator.png","language":"da","isDraft":false,"publishDate":"2023-12-12T11:28:31.171Z","slug":"hvad-er-en-konfigurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-en-konfigurator.md";
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
