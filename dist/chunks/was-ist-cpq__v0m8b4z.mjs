import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Was ist CPQ?","slug":"was-ist-cpq","description":"Optimieren Sie Ihren Verkaufsprozess mit unserer leistungsstarken CPQ (Konfigurieren, Preisgestalten, Angebot) Software.","tags":[],"cover":"../../../assets/articles/cpq.png","language":"de","isDraft":false,"publishDate":"2023-12-12T11:28:09.011Z"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-cpq.md";
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
