import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/team_sm.png","title":"Hvad er Mercura?","description":"Mecura, eller rettere sagt Mercura. Vi udvikler forretningen med online salgsværktøjer som produktkonfiguratorer.","publishDate":"2023-12-12T11:53:51.412Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-mercura"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-mercura.md";
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
