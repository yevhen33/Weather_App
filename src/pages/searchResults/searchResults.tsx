import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TParams } from './searchResults.type';
import { TLocation } from '../../types/Foreca.type';
import Foreca from '../../services/ForecaServices';
import ResultHeader from '../../components/resultSearchComponents/resultHeader/resultHeader';
import ResultContent from '../../components/resultSearchComponents/resultContent/resultContent';
import SpinnerLine from '../../components/Spinners/spinnerLine/SpinnerLine';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import './searchResults.scss';

function SearchResults(): React.ReactElement {
  const { id } = useParams<TParams>();
  const [location, setLocation] = useState<TLocation>();
  const [loading, setLoading] = useState(true);
  const [msgError, setMsgError] = useState('');
  useEffect(() => {
    if (id) {
      Foreca.getLocationByID(id)
        .then(setLocation)
        .then(() => setLoading(false))
        .catch(({ message }: Error) => {
          setMsgError(message);
          setLoading(false);
        });
    }
  }, [id]);
  return (
    <div className="result">
      {loading ? (
        <SpinnerLine />
      ) : msgError ? (
        <ErrorMsg msg={msgError} />
      ) : (
        <>
          <ResultHeader
            name={location?.name}
            country={location?.country}
            adminArea={location?.adminArea}
            timezone={location?.timezone}
          />
          <ResultContent id={id} />
        </>
      )}
    </div>
  );
}

export default SearchResults;
