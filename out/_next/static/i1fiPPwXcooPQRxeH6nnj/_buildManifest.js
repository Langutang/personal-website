(self.__BUILD_MANIFEST = (function(s, a, c, e, t) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    '/': [
      s,
      c,
      'static/chunks/90-e13e6c02cea5948e.js',
      a,
      'static/chunks/pages/index-438b28c4ce7dbf8d.js',
    ],
    '/_error': ['static/chunks/pages/_error-4001f24620580df8.js'],
    '/about': [s, a, 'static/chunks/pages/about-1fdc6bdb6bf81b3e.js'],
    '/articles': [
      s,
      c,
      e,
      a,
      t,
      'static/chunks/pages/articles-7926e651dacf7edb.js',
    ],
    '/contact': [s, a, 'static/chunks/pages/contact-bbf531b3f03f877d.js'],
    '/lens': [s, c, e, a, t, 'static/chunks/pages/lens-97e3a128217c9262.js'],
    '/projects': [
      s,
      c,
      e,
      a,
      t,
      'static/chunks/pages/projects-58d8248c20b8a099.js',
    ],
    '/resume': [s, a, 'static/chunks/pages/resume-82311dfa0b92ddb4.js'],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/about',
      '/articles',
      '/contact',
      '/lens',
      '/projects',
      '/resume',
    ],
  };
})(
  'static/chunks/148-ed38cc5a8a7ac13f.js',
  'static/chunks/989-766459adc005ebb9.js',
  'static/chunks/51-b9a35d4093c79ec6.js',
  'static/chunks/675-e755d1910e347732.js',
  'static/chunks/201-c61d777db03219dc.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
