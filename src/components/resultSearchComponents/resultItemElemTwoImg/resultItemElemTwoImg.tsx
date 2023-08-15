import React from 'react';
import { ITwoImgParamsProps } from './resultItemElemTwoImg.type';

export function ResultItemElemTwoImg(props: ITwoImgParamsProps): React.ReactElement {
  const { title, srcFirst, altFirst, paramFirst, srcSecond, altSecond, paramSecond } = props;
  return (
    <div className="result-item__data">
      <div className="result-item__data_title">{title}</div>
      <div className="result-item__data_content">
        <div className="result-item__data_item">
          <div className="result-item__data_item-img">
            <img src={srcFirst} alt={altFirst} />
          </div>
          <span>{paramFirst}</span>
        </div>
        <div className="result-item__data_item">
          <div className="result-item__data_item-img">
            <img src={srcSecond} alt={altSecond} />
          </div>
          <span>{paramSecond}</span>
        </div>
      </div>
    </div>
  );
}
