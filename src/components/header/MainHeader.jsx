import Image from "next/image";

import NavBar from "./NavBar";
import Button from "../ui/Button";
import ImsysLogo from "@/assets/Logo Imsys.png";
import BurgerMenu from "@/assets/menu-svgrepo-com.svg";

function MainHeader() {
  return (
    <>
      <header className="flex justify-between px-8 py-4 lg:hidden">
        <Image src={ImsysLogo} alt="Imsys Logo" />
        <Button>
          <Image src={BurgerMenu} alt="Burger Menu" width={30} />
        </Button>
      </header>

      <header className="mb-10 hidden items-center justify-between border-b-[1px] border-gray-200 py-6 lg:flex">
        <Image src={ImsysLogo} alt="Imsys Logo" />
        <NavBar />
        <Button style="default tiny">Kontakt</Button>
      </header>
    </>
  );
}

export default MainHeader;
