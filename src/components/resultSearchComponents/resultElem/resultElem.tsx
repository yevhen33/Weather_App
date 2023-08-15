import React from 'react';
import { TResultElemProps } from './resultElem.type';
import { getDayName } from '../../../helper/getDayName';
import Sunset from '../../../assets/icons/sunset.png';
import Sunrise from '../../../assets/icons/sunrise.png';
import Moonrise from '../../../assets/icons/moonrise.png';
import Moonset from '../../../assets/icons/moonset.png';
import { ResultItemElemOneParam } from '../resultItemElemOneParam/resultItemElemOneParam';
import { ResultItemElemTwoParams } from '../resultItemElemTwoParams/resultItemElemTwoParams';
import { ResultItemElemTwoImg } from '../resultItemElemTwoImg/resultItemElemTwoImg';
import './resultElem.scss';

export default function ResultElem(props: TResultElemProps): React.ReactElement {
  const {
    date,
    symbol,
    symbolPhrase,
    maxTemp,
    minTemp,
    maxFeelsLikeTemp,
    minFeelsLikeTemp,
    maxRelHumidity,
    minRelHumidity,
    precipAccum,
    precipProb,
    sunrise,
    sunset,
    moonrise,
    moonset,
    maxWindSpeed,
    maxWindGust,
    minVisibility,
    pressure,
    confidence
  } = props.searchData;
  return (
    <div className="result-item">
      <div className="result-item__day">
        {getDayName(date, 'en-US')}
        <span>
          <img src={'../images/' + confidence + '.png'} alt={'Confidence - ' + confidence} />
        </span>
        <em>{date}</em>
      </div>
      <div className="result-item__img">
        <img src={'../images/' + symbol + '.png'} alt={symbolPhrase} />
      </div>
      <div className="result-item__phrase">{symbolPhrase}</div>
      <div className="result-item__feels">
        <div className="result-item__feels_title">Temperature</div>
        <div className="result-item__feels_item">
          Min: <span>{minTemp}°C</span>
        </div>
        <div className="result-item__feels_item">
          Max: <span>{maxTemp}°C</span>
        </div>
      </div>
      <div className="result-item__precip">Precipitation probability - {precipProb}%</div>
      <div className="result-item__wrapper">
        <ResultItemElemTwoParams
          title="Feeling of temp"
          minParam={minFeelsLikeTemp}
          maxParam={maxFeelsLikeTemp}
          measure="°C"
        />
        <ResultItemElemTwoParams
          title="relative humidity"
          minParam={minRelHumidity}
          maxParam={maxRelHumidity}
          measure="°"
        />
        <ResultItemElemTwoImg
          title="sun"
          srcFirst={Sunrise}
          altFirst="Sunrise"
          paramFirst={sunrise}
          srcSecond={Sunset}
          altSecond="Sunset"
          paramSecond={sunset}
        />
        <ResultItemElemTwoImg
          title="moon"
          srcFirst={Moonset}
          altFirst="Moonset"
          paramFirst={moonset}
          srcSecond={Moonrise}
          altSecond="Moonrise"
          paramSecond={moonrise}
        />
        <ResultItemElemOneParam
          title="Wind speed"
          text="max: "
          params={maxWindSpeed}
          measure="m/s"
        />
        <ResultItemElemOneParam
          title="Wind gust speed"
          text="max: "
          params={maxWindGust}
          measure="m/s"
        />
        <ResultItemElemOneParam title="Min visibility" params={minVisibility} measure="m" />
        <ResultItemElemOneParam title="Medium pressure" params={pressure} measure="hPa" />
      </div>
      <div className="result-item__precip">Accumulated precipitation - {precipAccum}mm</div>
    </div>
  );
}
