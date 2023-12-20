import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/sales_config.png","title":"Hvad er en salgskonfigurator?","description":"Salgskonfiguratorer er digitale værktøjer, der giver virksomheder mulighed for at tilpasse og tilbyde produkter effektivt, hvilket forbedrer kundeoplevelsen og salgsprocesserne.","publishDate":"2023-12-12T11:52:25.784Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-en-salgskonfigurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-en-salgskonfigurator.md";
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
