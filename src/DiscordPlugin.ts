import { ExtendedWindow } from './ExtendedWindowInterface';

import globalCSS from './styles/global.scss';
import settingsPanelHtml from 'inline:./templates/SettingsPanel.html';
import settingsPanelCss from './styles/SettingsPanel.scss';

declare const window: ExtendedWindow;

const BdApi = window.BdApi || {};

class DiscordPlugin {
  public getName() {
    return 'Discord Plugin';
  }

  public getSettingsPanel(): Element {
    const template = document.createElement('template');

    template.innerHTML = settingsPanelHtml;

    return template.content.firstElementChild;
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
