import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './searchPage.scss';

function SearchPage(): React.ReactElement {
  return (
    <div className="search">
      <h1>See the weather in any city in the world!</h1>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
