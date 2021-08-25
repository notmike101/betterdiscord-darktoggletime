const { build } = require('esbuild');
const packageJson = require('./package.json');
const inlineImportPlugin = require('esbuild-plugin-inline-import');
const { sassPlugin } = require('esbuild-sass-plugin');
const meta = require('./meta.cjs');

const { main, name } = packageJson;

const bdApiIgnore = {
  name: 'bdapi-ignore',
  setup(build) {
    build.onResolve({ filter: /bandagedbd__bdapi/ }, (args) => {
      return null;
    });
  },
};

const options = {
  entryPoints: [main],
  outfile: `dist/${name}.plugin.js`,
  bundle: true,
  minify: false,
  format: 'cjs',
  platform: 'node',
  sourcemap: false,
  plugins: [
    inlineImportPlugin(),
    sassPlugin({
      type: 'css-text',
    }),
    bdApiIgnore,
  ],
  external: ['@bandagedbd/bdapi'],
  banner: {
    js: meta,
  },
};

build(options).catch((err) => {
  // eslint-disable-next-line no-console
  console.warn(err);
  process.exit(1);
});
