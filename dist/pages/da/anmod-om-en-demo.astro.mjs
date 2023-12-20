export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/anmod-om-en-demo__OaSrvtk.mjs').then(n => n.c);

export { page };
