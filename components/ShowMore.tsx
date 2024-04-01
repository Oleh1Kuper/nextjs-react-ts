'use client';

import React from 'react';
import updateSearchParams from '@/utils/updateSearchParams';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';

type Props = {
  pageNumber: number;
  isNext: boolean;
};

const ShowMore: React.FC<Props> = ({ pageNumber, isNext }) => {
  const route = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const params = updateSearchParams('limit', newLimit.toString());

    route.push(params, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        >
          Show more
        </CustomButton>
      )}
    </div>
  );
};

export default ShowMore;
