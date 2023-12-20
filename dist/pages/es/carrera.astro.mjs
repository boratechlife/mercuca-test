export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/index_HRybPAWZ.mjs').then(n => n.r);

export { page };
