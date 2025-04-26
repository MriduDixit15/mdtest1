
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/external"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 491, hash: 'a2673a4faac5de847039f8296473f32179a282a523f9015d95baf53494b8e155', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'e3b4c8b8277b3716163bd948a3aaf4ef26c014583969b4d214a26a4f3b9911d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20977, hash: 'b23c8d3ec8e921bbebfa5780fe6236a6baafd9027ffc77f29a122b210d0b4676', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20926, hash: '0b95b0f0e1753806b39bba8cdac5617bb74414a686d7e5b52830e05e8cfb6fae', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'external/index.html': {size: 24973, hash: 'a8d6c7d4fa8a04106cee93d14a72b58484715ff315904b783a666d4518e4e20f', text: () => import('./assets-chunks/external_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
