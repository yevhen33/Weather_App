import React from 'react';
import { useNavigate } from 'react-router-dom';
import City from '../../assets/icons/city.svg';
import { TSearchDataTransform } from '../../types/Foreca.type';
import './SearchListItem.scss';

function SearchListItem(props: TSearchDataTransform): React.ReactElement {
  const { id, name, country, adminArea } = props;
  const navigate = useNavigate();
  return (
    <li
      className="result-row"
      id={'l-' + id}
      onClick={() => {
        navigate(`/search/${id}`);
      }}>
      <div className="icon">
        <City />
      </div>
      <div className="name">
        <p>
          <em>{name}</em>
        </p>
        <p>
          {country}, {adminArea}
        </p>
      </div>
    </li>
  );
}

export default SearchListItem;
