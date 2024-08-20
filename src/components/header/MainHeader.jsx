"use client";

import Image from "next/image";

import NavBar from "./NavBar";
import Button from "../ui/Button";
import ImsysLogo from "@/assets/Logo Imsys.png";
import BurgerMenu from "@/assets/menu-svgrepo-com.svg";
import NavLink from "./NavLink";
import { useState } from "react";
import MenuPhone from "./MenuPhone";
import OverlayBackground from "../ui/OverlayBackground";

function MainHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {showMenu && (
        <OverlayBackground className="w-[390px] sm:w-[544px]">
          <MenuPhone onToggleMenu={toggleMenu} />
        </OverlayBackground>
      )}

      <header className="flex justify-between px-8 py-6 lg:hidden">
        <NavLink to="/" arrow={false}>
          <Image src={ImsysLogo} alt="Imsys Logo" />
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
          <Image src={ImsysLogo} alt="Imsys Logo" />
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
