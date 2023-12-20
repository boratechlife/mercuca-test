export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/migatronic-configurator_Am_5-O67.mjs').then(n => n.m);

export { page };
