'use client';

import React, { FormEvent, useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
