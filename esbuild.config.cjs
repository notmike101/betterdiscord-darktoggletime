const { build } = require('esbuild');
const packageJson = require('./package.json');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const {
  name,
  version,
  description,
  author,
  betterdiscord,
  homepage
} = packageJson;

const options = {
  entryPoints: ['./src/DiscordPlugin.ts'],
  outfile: `dist/${name}-${author.name}.plugin.js`,
  bundle: true,
  minify: false,
  format: 'cjs',
  platform: 'neutral',
  sourcemap: false,
  plugins: [nodeExternalsPlugin()],
  banner: {
    js: `/**
  * @name ${name}
  * @version ${version ?? '0.0.1'}
  * @description ${description || 'Plugin description'}
  * @author ${author.name ?? author ?? 'Someone'}
  * @authorLink ${author.url ?? homepage ?? ''}
  * @authorId ${betterdiscord.discord_snowflake ?? ''}
  * @updateUrl ${betterdiscord?.update_url ?? ''}
  * @website ${author.url ?? homepage ?? ''}
  * @source ${betterdiscord?.source_url ?? ''}
  * @invite ${betterdiscord?.invite ?? ''}
  * @donate ${betterdiscord?.donate ?? ''}
  * @patreon ${betterdiscord?.patreon ?? ''}
  */`
  }
};

build(options).catch((err) => {
  console.warn(err);
  process.exit(1)
});
