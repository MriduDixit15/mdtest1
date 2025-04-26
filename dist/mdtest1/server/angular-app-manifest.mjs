
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
    'index.csr.html': {size: 491, hash: 'fe91b9170093abdee58d03a7390dddc02d6fe77b08a10734c01642ae90883446', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'c4ed1e4e3fcae93edcf20756b6892fa4fa9bdfe27d0dab0e1f1651f8e428ec34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20977, hash: '5998ea499cfc987102573a17f46df25a85446f7d5837d49f7fb807f1acfe4d6b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20926, hash: '8d97ae9421321d22da498d8ce0ef06dd9284ad0a208ca52516102748acd304f3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'external/index.html': {size: 24973, hash: 'c5c957d437c27fbcb2d79bcb59c6115c5d8b80bf6bb664388b0ade4d15a9fcc4', text: () => import('./assets-chunks/external_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
