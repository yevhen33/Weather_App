import React, { useCallback } from 'react';
import { useRequest } from '../../hooks/useRequest';
import AppDetailsDescr from '../appDetailsDescr/appDetailsDescr';
import AppDetailsDay from '../appDetailsDay/appDetailsDay';
import SpinnerLine from '../Spinners/spinnerLine/SpinnerLine';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Foreca from '../../services/ForecaServices';
import { IAppDetailsProps } from './appDetails.type';
import { TDailyInfoTransform } from '../../types/Foreca.type';
import './appDetails.scss';

function AppDetails(props: IAppDetailsProps): React.ReactElement {
  const getDaily = useCallback(() => Foreca.getDailyWheather(props.id), [props.id]);

  const { data, loading, msgError } = useRequest<TDailyInfoTransform>(getDaily);

  const weatherWeek = data?.map(
    ({
      date,
      maxTemp,
      maxWindSpeed,
      minTemp,
      sunrise,
      sunset,
      symbol,
      symbolPhrase,
      confidence
    }) => (
      <AppDetailsDay
        key={date}
        date={date}
        maxTemp={maxTemp}
        maxWindSpeed={maxWindSpeed}
        minTemp={minTemp}
        sunrise={sunrise}
        sunset={sunset}
        symbol={symbol}
        symbolPhrase={symbolPhrase}
        confidence={confidence}
      />
    )
  );

  return (
    <div className="app__details">
      {loading ? (
        <SpinnerLine />
      ) : msgError ? (
        <ErrorMsg msg={msgError} />
      ) : (
        <>
          <div className="app__details_title">Weather forecast for 12 days</div>
          <div className="app__details_wrapper">{weatherWeek}</div>
          <AppDetailsDescr />
        </>
      )}
    </div>
  );
}

export default AppDetails;
