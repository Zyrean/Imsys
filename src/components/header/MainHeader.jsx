"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NavBar from "./NavBar";
import Button from "../ui/Button";
import BurgerMenu from "@/assets/menu-svgrepo-com.svg";
import NavLink from "./NavLink";
import MenuPhone from "./MenuPhone";
import OverlayBackground from "../ui/OverlayBackground";
import useClickOutside from "@/hooks/ClickOutside";

function MainHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  // TODO
  // let domNode = useClickOutside(() => {
  //   showMenu(false);
  // });

  return (
    <>
      {showMenu && (
        <OverlayBackground className="w-[390px] sm:w-[544px]">
          <MenuPhone onToggleMenu={toggleMenu} />
        </OverlayBackground>
      )}

      <header className="flex justify-between px-8 py-6 lg:hidden">
        <NavLink to="/" arrow={false}>
          <svg
            className="hover:fill-orange"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 137.3 41.1"
            fill="#2b6c9b"
            height={38}
            width={136}
          >
            <path d="M102.1 33.4c0 1.3-.6 2.5-2.4 2.4H86.1v3.7h13.6c3.7 0 6.1-1.9 6.2-6.2v-5.9h-3.7l-.1 6zm3.7-25.3h-3.7v12.1h3.7V8.1zM3.8 1.5H1.5c-.4 0-.8.3-.8.8v2.3c0 .4.3.8.8.8h2.3c.4 0 .8-.3.8-.8V2.2c0-.4-.4-.7-.8-.7zm-3 20.9c0 2.9 3.8 3.4 3.8 3.4V8.1H.8v14.3zM76.1 15H60.5c-1.4-.3-1.6-2.6 0-3.2h18.8V8.1h-19c-.9 0-5 .9-5 5.4 0 3.9 3.5 5.3 5 5.4h15.8c1.4.6 1.3 2.8 0 3.2H51.6c-1.2 0-1.2-.5-1.2-1.2v-6.6c0-3.8-1-6.1-4.9-6.2h-31c-3.4 0-4.9 1.5-5 5V17v8.9h3.8v-13c0-.7.6-1 1.1-1h12.4c.8 0 1.2.5 1.2 1.2v12.8h3.8V13.1c0-.7.6-1.2 1.2-1.2h12.4c1.2 0 1.2 1 1.2 2.4v6.6c0 3.4 1.6 5 5 5h24.5c1.3 0 4.9-1.1 4.9-5.4S77.7 15 76.1 15zm55.5.1H116c-1.2-.4-1.3-2.7.1-3.3h18.7V8.1h-18.9c-.9 0-5 1.1-5 5.5 0 3.9 3.5 5.3 5 5.4h15.8c1.3.7 1.3 2.6 0 3.1H90.9s-1.1.2-1.1-1.1v-9.4c0-2.9-3.8-3.4-3.8-3.4V21c0 3.1 1.3 4.7 4.2 4.9h0 41.5c1.3 0 4.8-1 4.9-5.3 0-4.4-3.4-5.5-5-5.5z" />
          </svg>
        </NavLink>
        <Button>
          <Image
            src={BurgerMenu}
            alt="Burger Menu"
            width={30}
            onClick={toggleMenu}
          />
        </Button>
      </header>

      <header className="mb-10 hidden items-center justify-between border-b-[1px] border-gray-200 pt-6 lg:flex">
        <NavLink to="/" arrow={false}>
          <svg
            className="hover:fill-orange"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 137.3 41.1"
            fill="#2b6c9b"
            height={38}
            width={136}
          >
            <path d="M102.1 33.4c0 1.3-.6 2.5-2.4 2.4H86.1v3.7h13.6c3.7 0 6.1-1.9 6.2-6.2v-5.9h-3.7l-.1 6zm3.7-25.3h-3.7v12.1h3.7V8.1zM3.8 1.5H1.5c-.4 0-.8.3-.8.8v2.3c0 .4.3.8.8.8h2.3c.4 0 .8-.3.8-.8V2.2c0-.4-.4-.7-.8-.7zm-3 20.9c0 2.9 3.8 3.4 3.8 3.4V8.1H.8v14.3zM76.1 15H60.5c-1.4-.3-1.6-2.6 0-3.2h18.8V8.1h-19c-.9 0-5 .9-5 5.4 0 3.9 3.5 5.3 5 5.4h15.8c1.4.6 1.3 2.8 0 3.2H51.6c-1.2 0-1.2-.5-1.2-1.2v-6.6c0-3.8-1-6.1-4.9-6.2h-31c-3.4 0-4.9 1.5-5 5V17v8.9h3.8v-13c0-.7.6-1 1.1-1h12.4c.8 0 1.2.5 1.2 1.2v12.8h3.8V13.1c0-.7.6-1.2 1.2-1.2h12.4c1.2 0 1.2 1 1.2 2.4v6.6c0 3.4 1.6 5 5 5h24.5c1.3 0 4.9-1.1 4.9-5.4S77.7 15 76.1 15zm55.5.1H116c-1.2-.4-1.3-2.7.1-3.3h18.7V8.1h-18.9c-.9 0-5 1.1-5 5.5 0 3.9 3.5 5.3 5 5.4h15.8c1.3.7 1.3 2.6 0 3.1H90.9s-1.1.2-1.1-1.1v-9.4c0-2.9-3.8-3.4-3.8-3.4V21c0 3.1 1.3 4.7 4.2 4.9h0 41.5c1.3 0 4.8-1 4.9-5.3 0-4.4-3.4-5.5-5-5.5z" />
          </svg>
        </NavLink>

        <NavBar />
        <Button style="default tiny" to="/kontakt">
          Kontakt
        </Button>
      </header>
    </>
  );
}

export default MainHeader;
