import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"What is a floor planner?","description":"Create floor plans, visualize different furniture arrangements with various decor styles in one easy-to-use platform.","tags":[],"cover":"../../../assets/articles/floor.png","language":"en","isDraft":false,"publishDate":"2023-12-12T11:27:52.843Z","slug":"what-is-a-floor-planner"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/en/what-is-a-floor-planner.md";
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
