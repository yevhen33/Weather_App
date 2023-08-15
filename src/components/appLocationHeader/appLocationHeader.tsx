import React from 'react';
import { TCurrentDataTransform } from '../../types/Foreca.type';
import Wind from '../../assets/icons/wind.svg';

import './appLocationHeader.scss';

function AppLocationHeader(
  props: TCurrentDataTransform
): React.ReactElement<TCurrentDataTransform> {
  return (
    <div className="app__location__header">
      <div className="app__location__header_left">
        <div className="app__location__header_left-feelsLikeTemp">
          <span>Feels like:</span>
          <br />
          {props.feelsLikeTemp}°C
        </div>
        <div className="app__location__header_left-relHumidity">
          <span>Rel. Humid:</span>
          <br />
          {props.relHumidity}%
        </div>
      </div>
      <div className="app__location__header_center">
        <div className="app__location__header_center-temperature">
          {props.temperature}
          <span>°C</span>
        </div>
        <div className="app__location__header_center-img">
          <img src={'./images/' + props.symbol + '.png'} alt={props.symbolPhrase} />
        </div>
        <div className="app__location__header_center-descr">{props.symbolPhrase}</div>
        <div className="app__location__header_center-precipProb">
          <span>Precipitation probability:</span>
          <br />
          {props.precipProb}%
        </div>
      </div>
      <div className="app__location__header_right">
        <div className="app__location__header_right-windDir">
          <Wind />
          <span>{props.windDirString}</span>
        </div>
        <div className="app__location__header_right-speed">
          <span>Speed:</span>
          <br />
          {props.windSpeed}m/s
        </div>
      </div>
    </div>
  );
}

export default AppLocationHeader;
