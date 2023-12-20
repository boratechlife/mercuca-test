import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Jfja3egX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"¿Qué es la realidad aumentada?","description":"Explore el mundo de la realidad aumentada, donde la información digital se integra de manera fluida en el mundo físico.","tags":[],"cover":"../../../assets/articles/ar.png","language":"es","isDraft":false,"publishDate":"2023-12-12T11:28:19.578Z","slug":"qué-es-la-realidad-aumentada"};
				const file = "/Users/Martin/Mercura.io - final v2/Mercura.io/src/content/articles/es/qué-es-la-realidad-aumentada.md";
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
