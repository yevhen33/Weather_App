import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../assets/images/error.png';
import AppButton from '../../components/appButton/appButton';
import './pageNotFound.scss';

export default function PageNotFound(): React.ReactElement {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="not_found">
      <h1>Error 404</h1>
      <img src={ErrorImg} alt="Error. Page not found" />
      <h2>Page not found!</h2>
      <div className="not_found-descr">
        Sorry, we couldn't find the page at the given address. <br />
        Go back or home using the buttons below.
      </div>
      <div className="not_found-btn">
        <AppButton onClick={goBack} name={'button pulse'} text={'go back'} />
      </div>
    </div>
  );
}
