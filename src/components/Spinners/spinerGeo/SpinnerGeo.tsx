import React from 'react';
import './SpinnerGeo.scss';

export default function Spinner(): React.ReactElement {
  return (
    <div className="spinner-geo">
      <div className="spinner-geo_anime">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
