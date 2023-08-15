import React, { useCallback } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { TAppLocationProps } from './appLocation.types';
import AppLocationHeader from '../appLocationHeader/appLocationHeader';
import { TCurrentDataTransform } from '../../types/Foreca.type';
import Foreca from '../../services/ForecaServices';
import SpinnerLine from '../Spinners/spinnerLine/SpinnerLine';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import './appLocation.scss';

function AppLocation(props: TAppLocationProps): React.ReactElement<TAppLocationProps> {
  const getCurrent = useCallback(() => Foreca.getCurrentWheather(props.id), [props.id]);

  const { data, loading, msgError } = useRequest<TCurrentDataTransform>(getCurrent);

  const {
    symbol,
    symbolPhrase,
    temperature,
    feelsLikeTemp,
    relHumidity,
    windSpeed,
    windDirString,
    precipProb
  } = data || {};

  return (
    <div className="app__location">
      <div className="app__location_title">Weather forecast for now</div>
      {loading ? (
        <SpinnerLine />
      ) : msgError ? (
        <ErrorMsg msg={msgError} />
      ) : (
        <AppLocationHeader
          symbol={symbol}
          symbolPhrase={symbolPhrase}
          temperature={temperature}
          feelsLikeTemp={feelsLikeTemp}
          relHumidity={relHumidity}
          windSpeed={windSpeed}
          windDirString={windDirString}
          precipProb={precipProb}
        />
      )}
      <div className="app__location_location">
        <div className="app__location_city">
          {props.name}
          <span>({props.adminArea})</span>
        </div>
        <div className="app__location_country">{props.country}</div>
      </div>
      <div className="app__location_timezone">{props.timezone}</div>
    </div>
  );
}

export default AppLocation;
