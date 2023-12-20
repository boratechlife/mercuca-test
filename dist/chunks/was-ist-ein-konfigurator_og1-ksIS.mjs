import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Was ist ein Konfigurator?","description":"Erleben Sie die Bequemlichkeit und Flexibilität der Verwendung eines Konfigurators, um Ihre Produktauswahl anzupassen und zu personalisieren.","tags":[],"cover":"../../../assets/articles/configurator.png","language":"de","isDraft":false,"publishDate":"2023-12-12T11:28:31.171Z","slug":"was-ist-ein-konfigurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-ein-konfigurator.md";
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
