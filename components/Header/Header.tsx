import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavStack from './NavStack';
import SearchBar from '../SearchBar/SearchBar';
import { getAllCategoryName } from '@services/categories/getCategories';
import NavLinkStack from './NavLinkStack';
import { HeaderMenuProvider } from '../context/HeaderMenuContext';
import { MobileHeaderMenu } from '@modules/popovers/MobileHeaderMenu';

async function Header() {
  const categoryNames = await getAllCategoryName();
  return (
    <header
      style={{
        zIndex: 1000,
        position: 'sticky',
        top: '34px',
      }}
    >
      <div className="header-nav-container">
        <div className="header-nav">
          <Link href={'/'}>
            <Image src="/logo.svg" alt="Calca Logo" width={69} height={69} priority />
          </Link>
          <HeaderMenuProvider >
            <NavLinkStack categoryNames={categoryNames} />
          </HeaderMenuProvider>
          <NavStack>
            <SearchBar />
          </NavStack>
          <MobileHeaderMenu 
           />
        </div>
      </div>
    </header>
  );
}

export { Header };
