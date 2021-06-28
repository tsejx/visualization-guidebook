const config = {
  mode: 'site',
  title: 'Visualization Guidebook',
  description: 'Visualization 完全知识体系',
  base: '/visualization-guidebook/',
  publicPath: '/visualization-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/visualization-guidebook-favicon.png',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/visualization-guidebook',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
