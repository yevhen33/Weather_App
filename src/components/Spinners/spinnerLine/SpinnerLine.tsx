import React from 'react';
import './SpinnerLine.scss';

export default function SpinnerLine(): React.ReactElement {
  return (
    <div className="spinner-line">
      <div className="spinner-line_anime">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
