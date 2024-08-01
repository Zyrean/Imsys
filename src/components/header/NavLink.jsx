import Image from "next/image";
import Link from "next/link";

import Arrow from "@/assets/arrow-down-svgrepo-com.svg";

function NavLink({ to, children }) {
  return (
    <li className="flex">
      <Link href={to}>{children}</Link>
      <Image src={Arrow} alt="Arrow" width={20} />
    </li>
  );
}

export default NavLink;
