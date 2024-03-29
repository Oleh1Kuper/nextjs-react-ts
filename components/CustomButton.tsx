'use client';

import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  containerStyles?: string;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton: React.FC<Props> = ({
  children,
  containerStyles,
  btnType = 'button',
  handleClick,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={false}
    >
      <span className="flex-1">{children}</span>
    </button>
  );
};

export default CustomButton;
