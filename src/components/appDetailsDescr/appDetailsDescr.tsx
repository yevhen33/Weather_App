import React from 'react';
import Good from '../../assets/icons/g.png';
import Normal from '../../assets/icons/y.png';
import Low from '../../assets/icons/o.png';
import './appDetailsDescr.scss';

export default function AppDetailsDescr(): React.ReactElement {
  return (
    <div className="app__details_descr">
      <span>* Confidence in forecast:</span>
      <div className="app__details_descr-wrapper">
        <div className="app__details_descr-item">
          <img src={Good} alt="good" />
          <span>- good</span>
        </div>
        <div className="app__details_descr-item">
          <img src={Normal} alt="normal" />
          <span>- normal</span>
        </div>
        <div className="app__details_descr-item">
          <img src={Low} alt="low" />
          <span>- low</span>
        </div>
      </div>
    </div>
  );
}
