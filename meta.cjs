const {
  name,
  version,
  description,
  author,
  betterdiscord,
  homepage,
} = require('./package.json');

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

Object.keys(metaComment).forEach((key) => {
  if (metaComment[key] === undefined) {
    delete metaComment[key];
  }
});

module.exports =
  Object.entries(metaComment).reduce(
    (acc, [key, value]) => `${acc}\n * @${key} ${value}`,
    '/**'
  ) + '\n */\n';
