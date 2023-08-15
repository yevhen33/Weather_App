import React, { useCallback } from 'react';
import { useRequest } from '../../../hooks/useRequest';
import Foreca from '../../../services/ForecaServices';
import { TWeatherSearchLoc } from '../../../types/Foreca.type';
import Spinner from '../../Spinners/spinerGeo/SpinnerGeo';
import ErrorMsg from '../../ErrorMsg/ErrorMsg';
import AppDetailsDescr from '../../appDetailsDescr/appDetailsDescr';
import ResultElem from '../resultElem/resultElem';
import './resultContent.scss';

export default function ResultContent(props: { id?: string }): React.ReactElement {
  const getWeather = useCallback(() => Foreca.getSearchWheather(props.id), [props.id]);

  const { data, loading, msgError } = useRequest<TWeatherSearchLoc>(getWeather);

  const forecast = data?.map(item => <ResultElem key={item.date} searchData={item} />);
  return (
    <div className="result-content">
      {loading ? (
        <Spinner />
      ) : msgError ? (
        <ErrorMsg msg={msgError} />
      ) : (
        <>
          <div className="result-content__wrapper">{forecast}</div>
          <AppDetailsDescr />
        </>
      )}
    </div>
  );
}
