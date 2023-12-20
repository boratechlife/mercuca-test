import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"What is a product configurator?","description":"Easily customize and personalize your products with our advanced product configurator.","tags":[],"cover":"../../../assets/articles/configurator.png","language":"en","isDraft":false,"publishDate":"2023-12-12T11:25:55.423Z","slug":"what-is-a-product-configurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/en/what-is-a-product-configurator.md";
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
