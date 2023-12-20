import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_animation.png","title":"Hvad er 3D-animationer?","description":"3D-animationer bringer design, modeller og figurer til live gennem skabelsen af glidende, flydende bevægelser i en digitalt genereret omgivelse.","publishDate":"2023-12-12T11:48:01.638Z","tags":[],"language":"da","isDraft":false,"slug":"hvad-er-3d-animationer"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/da/hvad-er-3d-animationer.md";
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
