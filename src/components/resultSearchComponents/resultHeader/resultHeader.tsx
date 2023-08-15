import React from 'react';
import { TLocation } from '../../../types/Foreca.type';
import './resultHeader.scss';

export default function ResultHeader(props: TLocation): React.ReactElement {
  const { name, country, adminArea, timezone } = props;
  return (
    <div className="result-header">
      <h1>
        Weather forecast for 3 days for
        <br />
        <span>
          {name}, country - {country}, {adminArea}
        </span>
      </h1>
      <div className="result-header__data">Time zone - {timezone}.</div>
    </div>
  );
}
