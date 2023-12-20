import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_animation.png","title":"What are 3D animations?","description":"3D animations bring designs, models, and characters to life through the creation of smooth, flowing movements in a digitally generated environment.","publishDate":"2023-12-12T11:48:01.638Z","tags":[],"language":"es","isDraft":false,"slug":"que-son-las-animaciones-3d"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/que-son-las-animaciones-3d.md";
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
