const { build } = require('esbuild');
const { meta, packageName: name, packageMain: main } = require('./meta.cjs');

const inlineImportPlugin = require('esbuild-plugin-inline-import');
const { sassPlugin } = require('esbuild-sass-plugin');

const options = {
  entryPoints: [main],
  outfile: `dist/${name}.plugin.js`,
  bundle: true,
  minify: false,
  format: 'cjs',
  platform: 'browser',
  sourcemap: false,
  plugins: [
    inlineImportPlugin(),
    sassPlugin({
      type: 'css-text',
    }),
  ],
  banner: {
    js: meta,
  },
};

build(options)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Done!');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.warn(err);
    process.exit(1);
  });
