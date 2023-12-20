export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/request-a-demo_TyELMv8A.mjs').then(n => n.a);

export { page };
