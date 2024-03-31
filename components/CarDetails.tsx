'use client';

import React, { Fragment } from 'react';
import { Car } from '@/types/Car';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  car: Car;
  closeModal: () => void;
};

const CarDetails: React.FC<Props> = ({ isOpen, car, closeModal }) => {
  const { make, model } = car;

  return (
    <Transition as={Fragment} appear show={isOpen}>
      <Dialog
        className="relative z-10"
        as="div"
        open={isOpen}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className="flex min-h-full items-center
            justify-center p-4 text-center"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="relative w-full max-w-lg max-h-[90vh]
                transform overflow-y-auto p-6
                rounded-2xl bg-white text-left
                align-middle shadow-xl transition-all
                flex flex-col gap-5"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2
                  bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    width={20}
                    height={20}
                    className="object-contain"
                    alt="Close icon"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div
                    className="relative w-full h-40
                    bg-pattern bg-cover bg-center rounded-lg"
                  >
                    <Image
                      src="/hero.png"
                      fill
                      priority
                      alt="Car model"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div
                      className="flex-1 relative w-full h-24
                      bg-primary-blue-100 rounded-lg"
                    >
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        alt="Car model"
                        className="object-contain"
                      />
                    </div>

                    <div
                      className="flex-1 relative w-full h-24
                      bg-primary-blue-100 rounded-lg"
                    >
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        alt="Car model"
                        className="object-contain"
                      />
                    </div>

                    <div
                      className="flex-1 relative w-full h-24
                      bg-primary-blue-100 rounded-lg"
                    >
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        alt="Car model"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex-col gap-2">
                  <h3 className="car-card__content-title">
                    {`${make} ${model}`}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5
                        w-full text-right"
                        key={key}
                      >
                        <h4 className="text-gray capitalize">
                          {key.split('_').join(' ')}
                        </h4>

                        <p className="text-black-100 font-semibold">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
