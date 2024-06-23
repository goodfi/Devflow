import React from 'react';
import NavContent from './NavContent';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const LeftSidebar = () => {
  return (
    <section className=" h-full fixed left-0 top-0  w-[266px] px-6 background-light900_dark200 light-border  flex-col justify-between  pb-8 hidden sm:flex ">
      <NavContent />
      <div className="flex flex-col items-center gap-4">
        <SignedOut>
          <Link href="/sign-in" className="w-full">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log In</span>
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
              Sing up
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link
            href={'/'}
            className={`'text-dark300_light900 flex items-center justify-start gap-4 bg-transparent p-4 w-full`}
          >
            <Image
              src={'/assets/icons/user.svg'}
              alt={'cos'}
              width={20}
              height={20}
              className="invert-colors"
            />
            <p className="base-medium text-dark300_light900">Logout</p>
          </Link>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
