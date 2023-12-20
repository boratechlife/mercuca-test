import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/sales_config.png","title":"Was ist ein Verkaufskonfigurator?","description":"Verkaufskonfiguratoren sind digitale Tools, die Unternehmen ermöglichen, Produkte effizient anzupassen und zu kalkulieren, um die Kundenerfahrung und die Verkaufsprozesse zu verbessern.","publishDate":"2023-12-12T11:52:25.784Z","tags":[],"language":"de","isDraft":false,"slug":"was-ist-ein-verkaufskonfigurator"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-ein-verkaufskonfigurator.md";
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
