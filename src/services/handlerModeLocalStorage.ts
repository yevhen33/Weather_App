import { TThemeMode } from '../types/themeMode.type';

const defaultState: TThemeMode = {
  lightMode: true
};

export function loadFromLocalStorage(): TThemeMode {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return defaultState;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return defaultState;
  }
}

export function saveToLocalStorage(state: TThemeMode) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
