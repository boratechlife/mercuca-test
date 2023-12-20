import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_modelling.png","title":"What is 3D modelling?","description":"3D modelling is the process of creating a virtual representation of a three-dimensional object, scene, or structure using specialized software.","publishDate":"2023-12-12T11:50:45.282Z","tags":[],"language":"es","isDraft":false,"slug":"que-es-el-modelado-3d"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/que-es-el-modelado-3d.md";
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
