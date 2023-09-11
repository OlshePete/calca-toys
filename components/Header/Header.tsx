import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <Link href={'/'}>
            <Image
              src="/logo.svg"
              alt="Calca Logo"
              width={69}
              height={69}
              priority
            /></Link>
      <Link href={'/catalog'}> шары</Link>
      <Link href={'/catalog'}> игрушки</Link>
      <Link href={'/catalog'}> товары для праздника</Link>
      <Link href={'/contacts'}> контакты</Link>
      <Link href={'/basket'}> basket</Link>
    </header>
  )
}

export {Header}