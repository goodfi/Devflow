'use client';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

interface Props {
  route: string;
  placeholder?: string;
  imgSrc: string;
  iconPosition: 'left' | 'right';
  otherClasses?: string;
}

const LocalSearchbar = ({
  placeholder,
  route,
  imgSrc,
  iconPosition,
  otherClasses,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className=" cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="no-focus paragraph-regular placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
