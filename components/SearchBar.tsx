'use client';

import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchManufacturer from './SearchManufacturer';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!model && !manufacturer) {
      return;
    }

    const params = new URLSearchParams(window.location.search);

    params.set('model', model.toLowerCase());
    params.set('manufacturer', manufacturer.toLowerCase());

    const newPathName = `${window.location.pathname}?${params}`;

    router.push(newPathName, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton className="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton className="sm:hidden" />
      </div>

      <SearchButton className="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
