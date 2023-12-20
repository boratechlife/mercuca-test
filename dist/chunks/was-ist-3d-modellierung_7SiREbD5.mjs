import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_modelling.png","title":"Was ist 3D-Modellierung?","description":"3D-Modellierung ist der Prozess der Erstellung einer virtuellen Darstellung eines dreidimensionalen Objekts, einer Szene oder einer Struktur mithilfe spezialisierter Software.","publishDate":"2023-12-12T11:50:45.282Z","tags":[],"language":"de","isDraft":false,"slug":"was-ist-3d-modellierung"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-ist-3d-modellierung.md";
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
