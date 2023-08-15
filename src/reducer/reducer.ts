import { AnyAction } from 'redux';
import { TThemeMode } from '../types/themeMode.type';
import { loadFromLocalStorage } from '../services/handlerModeLocalStorage';

const initialState: TThemeMode = loadFromLocalStorage();

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SWITCH_MODE':
      return {
        ...state,
        lightMode: !state.lightMode
      };
    default:
      return state;
  }
};

export default reducer;
