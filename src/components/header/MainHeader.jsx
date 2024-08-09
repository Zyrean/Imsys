import Image from "next/image";

import NavBar from "./NavBar";
import Button from "../ui/Button";
import ImsysLogo from "@/assets/Logo Imsys.png";
import BurgerMenu from "@/assets/menu-svgrepo-com.svg";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <>
      <header className="flex justify-between px-8 py-4 lg:hidden">
        <NavLink to="/" arrow={false}>
          <Image src={ImsysLogo} alt="Imsys Logo" />
        </NavLink>
        <Button>
          <Image src={BurgerMenu} alt="Burger Menu" width={30} />
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
