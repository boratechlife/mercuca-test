import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_render.png","title":"Hvad er 3D-renderinger?","description":"3D-renderinger er fotorealistiske billeder eller videoer, der er skabt ved hjælp af computergrafik-software til at simulere lys- og materialeegenskaber for en nøjagtig repræsentation af en 3D-model.","publishDate":"2023-12-12T11:48:51.016Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-3d-renderinger"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-3d-renderinger.md";
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
