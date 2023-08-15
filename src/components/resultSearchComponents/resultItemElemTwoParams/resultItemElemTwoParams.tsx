import React from 'react';
import { ITwoParamsProps } from './resultItemElemTwoParams.type';

export function ResultItemElemTwoParams(props: ITwoParamsProps): React.ReactElement {
  const { title, minParam, maxParam, measure } = props;
  return (
    <div className="result-item__data">
      <div className="result-item__data_title">{title}</div>
      <div className="result-item__data_descr">
        <div className="result-item__data_descr-item">
          min
          <br />
          <span>
            {minParam}
            {measure}
          </span>
        </div>
        <div className="result-item__data_descr-item">
          max
          <br />
          <span>
            {maxParam}
            {measure}
          </span>
        </div>
      </div>
    </div>
  );
}
