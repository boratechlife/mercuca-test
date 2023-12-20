export { renderers } from '../../../renderers.mjs';
export { onRequest } from '../../../_empty-middleware.mjs';

const page = () => import('../../../chunks/pages/configurador-de-migatronic_FJ-6-1E1.mjs').then(n => n.c);

export { page };
