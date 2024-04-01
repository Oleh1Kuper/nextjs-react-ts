'use client';

import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import setActiveClass from '@/utils/setActiveClass';

type Props = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
};

const SearchManufacturer: React.FC<Props> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query
    ? manufacturers.filter((item) => {
      const normalizeQuery = query.trim().toLowerCase();

      return item.toLowerCase().includes(normalizeQuery);
    })
    : manufacturers;

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) => `relative
                  search-manufacturer__option ${setActiveClass(active)}`}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
