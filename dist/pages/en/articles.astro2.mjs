export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/articles_j0_mRSbh.mjs').then(n => n.b);

export { page };
