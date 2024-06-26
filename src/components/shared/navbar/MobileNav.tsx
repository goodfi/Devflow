import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavContent from './NavContent';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="hamburger"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none "
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="devflow"
          />
          <p className="h2-bold  text-dark100_light900 font-spaceGrotesk ">
            Dev<span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className="flex flex-col justify-between h-full">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3 pb-8">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                    Sing up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
          <SignedIn>
            <Link
              href={'/'}
              className={`' flex items-center justify-start gap-4 bg-transparent p-4 w-full mb-6 primary-gradient rounded-lg `}
            >
              <Image
                src={'/assets/icons/user.svg'}
                alt={'cos'}
                width={20}
                height={20}
                className="text-light-900"
              />
              <p className="base-medium text-light-900 ">Logout</p>
            </Link>
          </SignedIn>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
