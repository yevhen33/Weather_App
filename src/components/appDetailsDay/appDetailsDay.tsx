import React from 'react';
import { TDailyDataTransform } from '../../types/Foreca.type';
import { getDayName } from '../../helper/getDayName';
import Sunrise from '../../assets/icons/sunrise.png';
import Sunset from '../../assets/icons/sunset.png';
import './appDetailsDay.scss';

export default function AppDetailsDay(
  props: TDailyDataTransform
): React.ReactElement<TDailyDataTransform> {
  const {
    date,
    maxTemp,
    maxWindSpeed,
    minTemp,
    sunrise,
    sunset,
    symbol,
    symbolPhrase,
    confidence
  } = props;
  return (
    <div className="app__details__day">
      <div className="app__details__day-header">
        <div className="app__details__day-header_name" data-testid="date">
          {getDayName(date, 'en-US')}
        </div>
        <div className="app__details__day-header_img">
          <img
            src={'./images/' + confidence + '.png'}
            alt={'Confidence - ' + confidence}
            data-testid="confidence"
          />
        </div>
      </div>
      <div className="app__details__day-img">
        <img src={'./images/' + symbol + '.png'} alt={symbolPhrase} data-testid="symbol" />
      </div>
      <div className="app__details__day-temp">
        <div className="app__details__day-temp-item">
          min:
          <span data-testid="min-temp"> {minTemp}°</span>
        </div>
        <div className="app__details__day-temp-item">
          max:
          <span data-testid="max-temp"> {maxTemp}°</span>
        </div>
      </div>
      <div className="app__details__day-wind" data-testid="max-wind">
        Maximum wind speed:
        <br />
        {maxWindSpeed} m/s
      </div>
      <div className="app__details__day-sun">
        <div className="app__details__day-sun-item" data-testid="sunrise">
          <img src={Sunrise} alt="sunrise" />
          <br />
          {sunrise}
        </div>
        <div className="app__details__day-sun-item" data-testid="sunset">
          <img src={Sunset} alt="sunset" />
          <br />
          {sunset}
        </div>
      </div>
    </div>
  );
}
