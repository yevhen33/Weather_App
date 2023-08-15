import React, { useState, useEffect, useRef } from 'react';
import SearchImg from '../../assets/icons/search.svg';
import LocationImg from '../../assets/icons/location.svg';
import SearchListItem from '../SearchListItem/SearchListItem';
import Foreca from '../../services/ForecaServices';
import { TSearchInfoTransform } from '../../types/Foreca.type';
import './SearchBar.scss';

function SearchBar(): React.ReactElement {
  const [info, setInfo] = useState<TSearchInfoTransform>();
  const [searchInput, setSearchInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchInput.length > 2) {
      Foreca.getSearchData(searchInput).then(setInfo);
    } else {
      setShowResult(false);
    }
  }, [searchInput]);

  useEffect(() => {
    if (info && info?.length > 0) {
      setShowResult(true);
    }
  }, [info]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowResult(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const searchList = info?.map(({ id, name, country, adminArea }) => (
    <SearchListItem key={id} name={name} country={country} adminArea={adminArea} id={id} />
  ));

  return (
    <div className="search-bar" ref={ref}>
      <div className="search-bar_wrapper">
        <div className="search-bar_icon">
          <SearchImg />
        </div>
        <input
          type="text"
          className="search-bar_input"
          placeholder="Search here"
          onChange={handleChange}
        />
        <div className="search-bar_icon">
          <LocationImg />
        </div>
      </div>
      <ul className={showResult ? 'show' : ''}>{searchList}</ul>
    </div>
  );
}

export default SearchBar;
