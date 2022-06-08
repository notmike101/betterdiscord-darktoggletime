import { React, Plugins, Themes, getData, setData, showToast } from 'betterdiscord/bdapi';
import { Logger, Updater, Banners, DiscordModules } from 'betterdiscord-plugin-libs';
import { SettingsPanel } from './SettingsPanel';

interface DateInterface {
  date: Date;
  hours: number;
  minutes: number;
}

export class DarkToggleTime {
  private logger: Logger;
  private updater: Updater;
  private banners: Banners;
  private now: DateInterface;
  private startTime: string;
  private endTime: string;
  private tickInterval: number;
  private darkTheme: string;
  private lightTheme: string;
  private activeTheme: string;
  private modules: { [key: string]: any };
  private updateBannerId: number;

  constructor() {
    this.startTime = getData('darktoggletime', 'startTime');
    this.endTime = getData('darktoggletime', 'endTime');
    this.darkTheme = getData('darktoggletime', 'darkTheme');
    this.lightTheme = getData('darktoggletime', 'lightTheme');

    if (!this.startTime) {
      setData('darktoggletime', 'startTime', '00:00');
      this.startTime = '00:00';
    }

    if (!this.endTime) {
      setData('darktoggletime', 'endTime', '00:00');
      this.endTime = '00:00';
    }

    if (!this.darkTheme) {
      setData('darktoggletime', 'darkTheme', 'default');
      this.darkTheme = 'default';
    }

    if (!this.lightTheme) {
      setData('darktoggletime', 'lightTheme', 'default');
      this.lightTheme = 'default';
    }

    this.logger = new Logger('DarkToggleTime v' + PACKAGE_VERSION);

    this.tickInterval = setInterval(this.tick.bind(this), 1000);
  }

  private loadModules(): void {
    this.modules = {
      app: DiscordModules.app,
      developerMode: DiscordModules.developerMode,
    };
  }

  private tick(): void {
    const now = new Date();

    this.now = {
      date: now,
      hours: now.getHours(),
      minutes: now.getMinutes(),
    };

    this.handleThemeChange();
  }

  public start(): void {
    this.loadModules();

    this.banners = new Banners(document.querySelector('.' + this.modules.app.app));
    this.updater = new Updater({
      storagepath: Plugins.folder,
      currentVersion: PACKAGE_VERSION,
      updatePath: BETTERDISCORD_UPDATEURL,
    });

    this.update();

    this.logger.log('Started plugin');
  }

  public stop(): void {
    clearInterval(this.tickInterval);

    if (this.updateBannerId !== null) {
      this.banners.dismissBanner(this.updateBannerId);
    }

    this.logger.log('Stopped plugin');
  }

  private handleThemeChange(): void {
    if (!this.startTime || !this.endTime) return;

    const startTime: string[] = this.startTime.split(':');
    const endTime: string[] = this.endTime.split(':');
    const startHour: number = Number(startTime[0]);
    const startMinute: number = Number(startTime[1]);
    const endHour: number = Number(endTime[0]);
    const endMinute: number = Number(endTime[1]);

    if (this.now.hours === startHour && this.now.minutes === startMinute) this.changeToDarkTheme();
    if (this.now.hours === endHour && this.now.minutes === endMinute) this.changeToLightTheme();
  }

  private settingsChangeCallback(settings): void {
    this.startTime = settings.startTime;
    this.endTime = settings.endTime;
    this.darkTheme = settings.darkTheme;
    this.lightTheme = settings.lightTheme;
  }

  private changeToLightTheme(): void {
    if (this.activeTheme === 'light') return;

    this.logger.log('Changing to configured light theme');

    if (this.darkTheme && this.darkTheme !== 'default') {
      Themes.disable(this.darkTheme);
    }

    if (this.lightTheme && this.lightTheme !== 'default') {
      Themes.enable(this.lightTheme);
    }

    this.modules.developerMode.ThemeDoNotUseYet.updateSetting('light');

    this.activeTheme = 'light';
  }

  private changeToDarkTheme(): void {
    if (this.activeTheme === 'dark') return;

    this.logger.log('Changing to configured dark theme');

    if (this.lightTheme && this.lightTheme !== 'default') {
      Themes.disable(this.lightTheme);
    }

    if (this.darkTheme && this.darkTheme !== 'default') {
      Themes.enable(this.darkTheme);
    }

    this.modules.developerMode.ThemeDoNotUseYet.updateSetting('dark');

    this.activeTheme = 'dark';
  }

  private async update(): Promise<void>{
    const isUpdateAvailable: boolean = await this.updater.isUpdateAvailable();

    if (isUpdateAvailable) {
      this.updateBannerId = this.banners.createBanner('Update available for GoogleFonts', {
        acceptCallback: async () => {
          const updateSuccess = await this.updater.installUpdate();

          if (updateSuccess) {
            showToast('GoogleFonts successfully updated', { type: 'success'});
          } else {
            showToast('Failed to update GoogleFonts', { type: 'error'});
          }
        },
      });
    }
  }

  public getSettingsPanel(): JSX.Element {
    return <SettingsPanel updateCallback={this.settingsChangeCallback.bind(this)} />
  }
}
