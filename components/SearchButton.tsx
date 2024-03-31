import React from 'react';
import Image from 'next/image';

type Props = {
  className: string;
};

const SearchButton: React.FC<Props> = ({ className }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${className}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
