import React, { useState, useEffect } from 'react';
import AppLocation from '../../components/appLocation/appLocation';
import AppDetails from '../../components/appDetails/appDetails';
import Spinner from '../../components/Spinners/spinerGeo/SpinnerGeo';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Foreca from '../../services/ForecaServices';
import { ILocationInfo } from '../../types/Foreca.type';

function HomePage(): React.ReactElement {
  const [info, setInfo] = useState<ILocationInfo>();
  const [loading, setLoading] = useState(true);
  const [msgError, setMsgError] = useState('');

  useEffect(() => {
    Foreca.getLocation()
      .then(setInfo)
      .catch(({ message }: Error) => {
        setMsgError(message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (info) setLoading(false);
  }, [info]);

  return loading ? (
    <Spinner />
  ) : msgError ? (
    <ErrorMsg msg={msgError} />
  ) : (
    <>
      <AppLocation
        id={info?.id}
        name={info?.name}
        adminArea={info?.adminArea}
        country={info?.country}
        timezone={info?.timezone}
      />
      <AppDetails id={info?.id} />
    </>
  );
}

export default HomePage;
