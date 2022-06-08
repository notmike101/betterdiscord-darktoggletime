import { React, Themes, getData, setData, injectCSS, clearCSS } from 'betterdiscord/bdapi';
import settingStyles from './style.scss';

interface SettingsPanelProps {
  updateCallback: Function;
}

export const SettingsPanel = (props: SettingsPanelProps): JSX.Element => {
  const isMounted = React.useRef(false);
  const themes: string[] = Themes.getAll().map((theme: any) => theme.name);
  const [startTime, setStartTime] = React.useState('00:00');
  const [endTime, setEndTime] = React.useState('00:00');
  const [darkTheme, setDarkTheme] = React.useState('default');
  const [lightTheme, setLightTheme] = React.useState('default');

  const mountHandler = (): void => {
    const startTime = getData('darktoggletime', 'startTime');
    const endTime = getData('darktoggletime', 'endTime');
    const darkTheme = getData('darktoggletime', 'darkTheme');
    const lightTheme = getData('darktoggletime', 'lightTheme');

    isMounted.current = true;

    if (startTime) {
      setStartTime(startTime);
    }

    if (endTime) {
      setEndTime(endTime);
    }

    if (darkTheme) {
      setDarkTheme(darkTheme);
    }

    if (lightTheme) {
      setLightTheme(lightTheme);
    }

    injectCSS('darktoggletime-settings-panel', settingStyles);
  };

  const unmountHandler = (): void => {
    isMounted.current = false;

    clearCSS('darktoggletime-settings-panel');
  }

  const startTimeChangeHandler = (event): void => {
    const startTime = event.target.value;

    setStartTime(startTime);

    setData('darktoggletime', 'startTime', startTime);
  };

  const endTimeChangeHandler = (event): void => {
    const endTime = event.target.value;
    
    setEndTime(endTime);

    setData('darktoggletime', 'endTime', endTime);
  };

  const darkThemeChangeHandler = (event): void => {
    const darkTheme = event.target.value;

    setDarkTheme(darkTheme);

    setData('darktoggletime', 'darkTheme', darkTheme);
  };

  const lightThemeChangeHandler = (event): void => {
    const lightTheme = event.target.value;

    setLightTheme(lightTheme);

    setData('darktoggletime', 'lightTheme', lightTheme);
  };

  React.useEffect((): Function => {
    if (isMounted.current === false) {
      mountHandler();
    }

    if (props.updateCallback) {
      props.updateCallback({ startTime, endTime, darkTheme, lightTheme });
    }

    return unmountHandler;
  }, [startTime, endTime, lightTheme, darkTheme]);

  return (
    <div className="darktoggletime-settings-panel">
      <div className="input-group">
        <span>Dark Theme:</span>
        <select onChange={darkThemeChangeHandler} value={darkTheme}>
          <option value="default">Default</option>
          { themes.map((theme: string) => <option key={theme}>{theme}</option>) }
        </select>
      </div>

      <div className="input-group">
        <span>Light Theme:</span>
        <select onChange={lightThemeChangeHandler} value={lightTheme}>
          <option value="default">Default</option>
          { themes.map((theme: string) => <option key={theme}>{theme}</option>) }
        </select>
      </div>
      
      <hr />

      <div className="input-group">
        <span>Start Time:</span>
        <input type="time" onChange={startTimeChangeHandler} value={startTime} />
      </div>

      <div className="input-group">
        <span>End Time:</span>
        <input type="time" onChange={endTimeChangeHandler} value={endTime} />
      </div>
    </div>
  );
};
