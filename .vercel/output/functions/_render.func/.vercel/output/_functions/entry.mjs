import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_x6B2xyiA.mjs';
import { manifest } from './manifest_BnJlJUdg.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/api/logout.astro.mjs');
const _page3 = () => import('./pages/login.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.ts", _page1],
    ["src/pages/api/logout.ts", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "124f9947-2b36-4e55-a24d-19aa298e3da2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
