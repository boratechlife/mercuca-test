import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cover":"../../../assets/articles/3d_animation.png","title":"Was sind 3D-Animationen?","description":"3D-Animationen bringen Designs, Modelle und Charaktere zum Leben, indem sie fließende Bewegungen in einer digital generierten Umgebung erzeugen.","publishDate":"2023-12-12T11:48:01.638Z","tags":[],"language":"de","isDraft":false,"slug":"was-sind-3d-animationen"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/de/was-sind-3d-animationen.md";
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
