const { build } = require('esbuild');
// const sassPlugin = require('esbuild-plugin-sass');
const cssModulePlugin = require('esbuild-css-modules-plugin');
const packageJson = require('./package.json');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const { name, version, description, author, betterdiscord, homepage } =
  packageJson;

const metaComment = {
  name,
  version: version ?? '0.0.1',
  description,
  author: author?.name ?? author ?? undefined,
  authorLink: author.url ?? homepage ?? undefined,
  authorId: betterdiscord?.discord_snowflake,
  updateUrl: betterdiscord?.update_url,
  website: betterdiscord?.website,
  source: betterdiscord?.source,
  invite: betterdiscord?.invite,
  donate: betterdiscord?.donate,
  patreon: betterdiscord?.patreon,
};

const options = {
  entryPoints: ['./src/DiscordPlugin.ts'],
  outfile: `dist/${name}-${author.name}.plugin.js`,
  bundle: true,
  minify: false,
  format: 'cjs',
  platform: 'neutral',
  sourcemap: false,
  plugins: [
    nodeExternalsPlugin(),
    // sassPlugin(),
    cssModulePlugin({
      inject: true,
    }),
  ],
  banner: {
    js:
      Object.entries(metaComment).reduce(
        (acc, [key, value]) => `${acc}\n/* @${key} ${value}`,
        '/**'
      ) + '\n*/',
  },
};

build(options).catch((err) => {
  // eslint-disable-next-line no-console
  console.warn(err);
  process.exit(1);
});
