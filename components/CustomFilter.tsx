'use client';

import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import setActiveClass from '@/utils/setActiveClass';
import { useRouter } from 'next/navigation';
import updateSearchParams from '@/utils/updateSearchParams';

type Option = {
  title: string;
  value: string;
}

type Props = {
  title: string;
  options: Option[];
};

const CustomFilter: React.FC<Props> = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const route = useRouter();

  const handleUpdateParams = ({ value }: Option) => {
    const params = updateSearchParams(title, value);

    route.push(params, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selectedOption}
        onChange={(event) => {
          setSelectedOption(event);
          handleUpdateParams(event);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selectedOption.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up-down"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) => `relative cursor-pointer
                  select-none py-2 pl-10 pr-4 ${setActiveClass(active)}`}
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
