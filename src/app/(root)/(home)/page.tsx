'use client';
import { useTheme } from '@/context/ThemeProvider';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const page = () => {
  const { mode } = useTheme();
  return (
    <div>
      {mode}
      <UserButton />
    </div>
  );
};

export default page;
