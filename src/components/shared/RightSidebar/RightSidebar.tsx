import React from 'react';
import HotPost from './HotPost';
import PopularTag from './PopularTag';

const RightSidebar = () => {
  return (
    <section className=" h-screen sticky right-0 top-0  w-[330px]  background-light900_dark200 light-border  flex-col gap-12  pt-36 flex custom-scrollbar border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <HotPost />
      <PopularTag />
    </section>
  );
};

export default RightSidebar;
