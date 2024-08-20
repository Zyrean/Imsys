import Image from "next/image";

import NavLink from "./NavLink";
import NavBar from "./NavBar";
import Button from "../ui/Button";
import ImsysLogo from "@/assets/Logo Imsys.png";
import Close from "@/assets/close.svg";

function MenuPhone({ onToggleMenu }) {
  return (
    <div className="absolute z-10 flex w-full flex-col items-center gap-8 rounded-b-md border-b border-blue bg-white px-8 py-6 shadow-2xl">
      <div className="flex w-full justify-between self-start border-b-[1px] border-blue pb-6">
        <NavLink to="/" arrow={false}>
          <Image src={ImsysLogo} alt="Imsys Logo" />
        </NavLink>

        <Button>
          <Image
            src={Close}
            alt="Burger Menu"
            width={20}
            onClick={onToggleMenu}
          />
        </Button>
      </div>

      <NavBar type="mobile" className="self-start" />
      <Button style="default tiny" to="/kontakt" className="mt-6">
        Kontakt
      </Button>
    </div>
  );
}

export default MenuPhone;
