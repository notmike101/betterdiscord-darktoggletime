# Better Discord Typescript Plugin Template

## What This Is

This is a template for BetterDiscord plugins that uses TypeScript

This will allow you to use both ESM format as well as TypeScript, because why not?

The final build file will have all of your included files bundled as a CJS module for use in BetterDiscord.

## Setup

1. Run `npm install`
2. Modify `package.json` to fit your needs
  * PAY ATTENTION TO THE `betterdiscord` OPTIONS
3. Change the `getPluginName` return value in the `./src/DiscordPlugin.ts` file.

## How To Build

Run `npm run build` or `npx esbuild esbuild.config.cjs`

The final build file will be in the `./dist` folder.
