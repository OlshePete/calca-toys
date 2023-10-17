import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderGlobalInfo from "./HeaderGlobalInfo";
import NavStack from "./NavStack";
import SearchBar from "../SearchBar/SearchBar";
import ContentContainer from "../ContentContainer/ContentContainer";
import BasketPopover from "@/modules/popovers/BasketPopover";
import BasketUpdateNotification from "@/modules/modals/BasketUpdateNotification";

function Header() {
  console.log('Header')
  return (
    <header>
      {/* <HeaderGlobalInfo theme="dark" /> */}
  <div className="header-nav-container" >
     <div className="header-nav" style={{
      zIndex:1000
      }}>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Calca Logo"
            width={69}
            height={69}
            priority
          />
        </Link>
        <p className="text_test">text_test</p>
        <NavStack>
          <>
            <Link href={"/catalog"}> шары</Link>
            <Link href={"/catalog"}> игрушки</Link>
            <Link href={"/catalog"}> упаковка</Link>
            <Link href={"/catalog"}> товары для праздника</Link>
            <Link href={"/contacts"}> контакты</Link>
          </>
        </NavStack>
        <NavStack>
          <SearchBar />
          {/* <BasketPopover
          /> */}
          {/* <BasketUpdateNotification/> */}
          <Link href={"/basket"} className="basket-icon">
            <Image
              src="/basket.svg"
              alt="BasketItem icon"
              width={40}
              height={40}
              priority
            />
          </Link>
        </NavStack>
      </div> 
      </div> 
    </header>
  );
}

export { Header };
