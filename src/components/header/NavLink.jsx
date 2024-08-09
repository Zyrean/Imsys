import Image from "next/image";
import Link from "next/link";

import Arrow from "@/assets/arrow-down-svgrepo-com.svg";

function NavLink({ to, children, arrow = true, className }) {
  return (
    <li className={`flex flex-row ` + className}>
      <Link href={to}>{children}</Link>
      {arrow && <Image src={Arrow} alt="Arrow" width={20} />}
    </li>
  );
}

export default NavLink;
