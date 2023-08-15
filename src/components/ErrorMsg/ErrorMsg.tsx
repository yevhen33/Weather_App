import React from 'react';
import SpinnerGeo from '../Spinners/spinerGeo/SpinnerGeo';
import './ErrorMsg.scss';

export default function ErrorMsg(props: { msg: string }): React.ReactElement {
  return (
    <div className="error">
      <div className="error__spinner">
        <SpinnerGeo />
      </div>
      <h1>Something went wrong!</h1>
      <div className="error__msg">
        An error occurred in the application. <br />
        Correct the error based on the description below and try again!
      </div>
      <h3>Error description:</h3>
      <h2>{props.msg}</h2>
    </div>
  );
}
