export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/integraciones_SD-FV4YF.mjs').then(n => n.i);

export { page };
