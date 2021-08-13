class DiscordPlugin {
  public getName() {
    return 'Discord Plugin';
  }

  public load() {
    console.log('loaded');
  }

  public async start() {
    console.log('started');
  }

  public stop() {
    console.log('stopped');
  }
}

module.exports = DiscordPlugin;
