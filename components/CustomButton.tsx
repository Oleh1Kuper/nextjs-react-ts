'use client';

import Image from 'next/image';
import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton: React.FC<Props> = ({
  children,
  containerStyles,
  btnType = 'button',
  textStyles,
  rightIcon,
  isDisable = false,
  handleClick,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={isDisable}
    >
      <span className={`flex-1 ${textStyles}`}>{children}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
