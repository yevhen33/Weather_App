import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../actions';
import Night from '../../assets/icons/night-mode.svg';
import Light from '../../assets/icons/light-mode.svg';

import './appMode.scss';

function AppMode(): React.ReactElement {
  const dispatch = useDispatch();
  return (
    <div className="app__theme" onClick={() => dispatch(changeMode())}>
      <Night />
      <Light />
    </div>
  );
}

export default AppMode;
