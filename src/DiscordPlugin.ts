class DiscordPlugin {
  public getName() {
    return 'Discord Plugin';
  }

  public load() {
    // eslint-disable-next-line no-console
    console.log('loaded');
  }

  public async start() {
    // eslint-disable-next-line no-console
    console.log('started');
  }

  public stop() {
    // eslint-disable-next-line no-console
    console.log('stopped');
  }
}

module.exports = DiscordPlugin;
