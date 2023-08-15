import React from 'react';
import { IOneParamsProps } from './resultItemElemOneParam.type';

export function ResultItemElemOneParam(props: IOneParamsProps): React.ReactElement {
  const { title, text, params, measure } = props;
  return (
    <div className="result-item__data">
      <div className="result-item__data_title">{title}</div>
      <div className="result-item__data_descr">
        <div className="result-item__data_descr-text">
          {text}
          <span>{params}</span>
          {measure}
        </div>
      </div>
    </div>
  );
}
