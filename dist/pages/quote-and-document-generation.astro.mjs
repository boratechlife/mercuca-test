export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/quote-and-document-generation_0srUfYGI.mjs').then(n => n.q);

export { page };
