export { renderers } from '../../../renderers.mjs';
export { onRequest } from '../../../_empty-middleware.mjs';

const page = () => import('../../../chunks/pages/digital-designer_8asaCPPB.mjs').then(n => n.f);

export { page };
