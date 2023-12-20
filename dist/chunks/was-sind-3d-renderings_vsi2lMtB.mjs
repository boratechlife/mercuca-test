import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_render.png","title":"Was sind 3D-Renderings?","description":"3D-Renderings sind fotorealistische Bilder oder Videos, die mit Hilfe von Computergrafik-Software erstellt werden, um Licht- und Materialeigenschaften zu simulieren und eine genaue Darstellung eines 3D-Modells zu ermöglichen.","publishDate":"2023-12-12T11:48:51.016Z","tags":[],"language":"de","isDraft":false,"slug":"was-sind-3d-renderings"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-sind-3d-renderings.md";
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
