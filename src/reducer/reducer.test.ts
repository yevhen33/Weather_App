import reducer from './reducer';
import { changeMode } from '../actions';
import { loadFromLocalStorage } from '../services/handlerModeLocalStorage';

describe('Testing reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'ANI' })).toEqual({ lightMode: true });
  });
  it('should handle SWITCH_MODE', () => {
    const state = loadFromLocalStorage();
    expect(reducer(state, changeMode())).toEqual({ lightMode: !state.lightMode });
  });
});
