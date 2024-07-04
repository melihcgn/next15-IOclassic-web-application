import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ioIcon from '@/app/favicon.ico';
import { ModeToggle } from '../molecules/Mode-toggle';
import NavbarUsername from '../atoms/Navbar-username';
const Navbar = () => {
  return (
    <header className='min-w-full relative z-10 bg-headerBgColor'>
      <nav className='max-w-full mx-auto flex justify-between items-center sm:px-16 px-6 py-2'>
        {/* Logo Section */}
        <Link href="/" className='flex items-center'>
          <Image
            src={ioIcon}
            width={50}
            height={50}
            alt="Logo"
            className='object-contain mr-2 ml-2'
          />
        </Link>

        {/* Site Title Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className='flex items-center'>
            <Image
              src={ioIcon}
              width={20}
              height={20}
              alt="Logo"
              className='object-contain mr-2 ml-2'
            />
            <h1 className="text-xl font-medium hidden md:flex text-white">Online AU</h1>
          </Link>

          {/* User Name Section */}
          <NavbarUsername></NavbarUsername>
          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
