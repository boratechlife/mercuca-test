import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"What is a configurator?","description":"Experience the convenience and flexibility of using a configurator to customize and personalize your product choices.","tags":[],"cover":"../../../assets/articles/configurator.png","language":"es","isDraft":false,"publishDate":"2023-12-12T11:28:31.171Z","slug":"que-es-un-configurador-es"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/que-es-un-configurador-es.md";
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
