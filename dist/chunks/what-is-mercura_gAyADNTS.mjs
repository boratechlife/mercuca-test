import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/team_sm.png","title":"What is Mekura?","description":"Mecura or rather Mercura. We grow business with online sales tool such as product configurators.","publishDate":"2023-12-12T11:53:51.412Z","tags":[],"language":"en","isDraft":false};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/en/what-is-mercura.md";
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
