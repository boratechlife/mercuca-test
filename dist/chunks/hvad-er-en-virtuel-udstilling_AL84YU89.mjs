import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/virtual_show.png","title":"Hvad er en virtuel udstilling?","description":"Oplev bekvemmeligheden og fleksibiliteten ved at gennemse og shoppe i en virtuel udstilling.","publishDate":"2023-12-12T11:44:18.008Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-en-virtuel-udstilling"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-en-virtuel-udstilling.md";
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
