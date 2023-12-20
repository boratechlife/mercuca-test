import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/sales_config.png","title":"What is a sales configurator?","description":"Sales Configurators are digital tools that allow businesses to customize and quote products efficiently, enhancing customer experience and sales processes.","publishDate":"2023-12-12T11:52:25.784Z","tags":[],"language":"en","isDraft":false,"slug":"what-is-a-sales-configurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/en/what-is-a-sales-configurator.md";
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
