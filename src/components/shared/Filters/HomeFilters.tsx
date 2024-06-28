'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

import { HomePageFilters } from '@/constants/filtr';

const HomeFilters = () => {
  const active = 'newest';
  return (
    <>
      <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {HomePageFilters.map(({ name, value }) => {
          return (
            <Button
              key={value}
              onClick={() => {}}
              className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
                active === value
                  ? 'bg-primary-100 text-primary-500'
                  : 'dark:text-light-500 bg-light-800 hover:bg-light-800 dark:bg-dark-300 dark:hover:bg-dark-300'
              }`}
            >
              {name}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default HomeFilters;
