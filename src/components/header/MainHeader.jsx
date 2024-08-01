import Image from "next/image";

import NavBar from "./NavBar";
import Button from "../ui/Button";
import ImsysLogo from "@/assets/Logo Imsys.png";
import BurgerMenu from "@/assets/menu-svgrepo-com.svg";

function MainHeader() {
  return (
    <header className="flex justify-between px-8 py-4 ">
      <Image src={ImsysLogo} alt="Imsys Logo" />
      <Button>
        <Image src={BurgerMenu} alt="Burger Menu" width={30} />
      </Button>
    </header>
  );
  // return (
  //   <header className="flex items-center justify-between border-b-2 border-gray-100 py-6">
  //     <Image src={ImsysLogo} alt="Imsys Logo" />
  //     <NavBar />
  //     <Button style="default">Kontakt</Button>
  //   </header>
  // );
}

export default MainHeader;
