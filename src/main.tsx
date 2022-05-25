import { getData, setData, injectCSS, clearCSS } from 'betterdiscord/bdapi';

class Plugin {
  public load(): void {
    console.log('loaded');
  }

  public start(): void {
    console.log('started');
  }

  public stop(): void {
    console.log('stopped');
  }

  public getSettingsPanel(): JSX.Element {
    return <div>SettingsPanel</div>
  }
}

export default Plugin;
