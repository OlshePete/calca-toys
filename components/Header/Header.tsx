
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderGlobalInfo from './HeaderGlobalInfo'
import NavStack from './NavStack'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
  return (
    <header>
      <HeaderGlobalInfo/>
      <div className='header-nav'>
      <Link href={'/'}>
            <Image
              src="/logo.svg"
              alt="Calca Logo"
              width={69}
              height={69}
              priority
            /></Link>
            <NavStack>
              <>
              
              <Link href={'/catalog'}> шары</Link>
              <Link href={'/catalog'}> игрушки</Link>
              <Link href={'/catalog'}> упаковка</Link>
              <Link href={'/catalog'}> товары для праздника</Link>
              <Link href={'/contacts'}> контакты</Link></>
            </NavStack>
            <NavStack>
            <SearchBar/>
      <Link href={'/basket'} className='basket-icon'> 
            <Image
              src="/basket.svg"
              alt="Basket icon"
              width={40}
              height={40}
              priority
            /></Link>
            </NavStack>

      </div>
    </header>
  )
}

export {Header}