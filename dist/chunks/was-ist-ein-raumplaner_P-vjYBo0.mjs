import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Was ist ein Raumplaner?","description":"Erstellen Sie Grundrisse, visualisieren Sie verschiedene Möbelarrangements mit verschiedenen Dekorstilen auf einer benutzerfreundlichen Plattform.","tags":[],"cover":"../../../assets/articles/floor.png","language":"de","isDraft":false,"publishDate":"2023-12-12T11:27:52.843Z","slug":"was-ist-ein-raumplaner"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-ein-raumplaner.md";
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
