import Image from "next/image";

import ArrowSouthEast from "@/assets/ArrowSouthEast.png";
import ArrowNorthEast from "@/assets/ArrowNorthEast.png";
import ArrowEast from "@/assets/ArrowEast2.png";
import NavLink from "../header/NavLink";
import Link from "next/link";

function Button({
  children,
  className,
  style,
  icon = "false",
  onClick,
  to = "",
}) {
  if (style === "default") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={
            "w-44 rounded-br-3xl rounded-tl-3xl bg-blue py-5 text-white hover:scale-105 hover:rounded-3xl hover:duration-300 hover:ease-in-out " +
            className
          }
          onClick={onClick}
        >
          {children}
        </button>
      </NavLink>
    );
  }

  if (style === "default small") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={"w-44 rounded-br-3xl bg-blue py-3 text-white " + className}
          onClick={onClick}
        >
          {children}
        </button>
      </NavLink>
    );
  }

  if (style === "default tiny") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={
            "w-36 rounded-br-full rounded-tl-full bg-blue py-2 text-white hover:scale-105 hover:rounded-full hover:duration-500 hover:ease-in-out " +
            className
          }
          onClick={onClick}
        >
          {children}
        </button>
      </NavLink>
    );
  }

  if (style === "default border") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={
            "w-44 rounded-br-3xl border-[1px] border-blue py-2 text-blue " +
            className
          }
          onClick={onClick}
        >
          {children}
        </button>
      </NavLink>
    );
  }

  if (style === "learn more") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={
            "flex w-52 items-center gap-4 rounded-br-3xl bg-orange px-8 py-5 text-white " +
            className
          }
          onClick={onClick}
        >
          <p className="text-white">{children}</p>
          <Image src={ArrowSouthEast} alt="arrow" height={12} />
        </button>
      </NavLink>
    );
  }

  if (style === "read artical") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={"mt-6 flex items-center gap-4 px-2 py-2 " + className}
          onClick={onClick}
        >
          <p className="text-blue">{children}</p>
          <Image src={ArrowEast} alt="arrow" height={12} className="" />
        </button>
      </NavLink>
    );
  }

  if (icon === "arrow") {
    return (
      <Link href="" className="self-end">
        <button
          className={"h-11 w-11 rounded-tr-[32px] bg-blue pl-3.5 " + className}
          onClick={onClick}
        >
          <Image src={ArrowNorthEast} alt="arrow" height={12} />
        </button>
      </Link>
    );
  }

  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
