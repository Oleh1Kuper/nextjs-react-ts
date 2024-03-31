'use client';

import React, { useState } from 'react';
import { Car } from '@/types/Car';
import calculateCarRent from '@/utils/getCarRent';
import Image from 'next/image';
import genarateCarImgUrl from '@/utils/carImageUrl';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

type Props = {
  car: Car;
};

const CarCard: React.FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    model,
    make,
    year,
    city_mpg,
    transmission,
    drive,
  } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h3 className="car-card__content-title">{`${make} ${model}`}</h3>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image
          src={genarateCarImgUrl(car, '01')}
          fill
          priority
          alt="Car model"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div
          className="flex w-full justify-between
          text-grey group-hover:invisible"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="tire"
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="gas logo"
            />
            <p className="text-[14px]">
              {`${city_mpg} MPG`}
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          >
            View more
          </CustomButton>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
