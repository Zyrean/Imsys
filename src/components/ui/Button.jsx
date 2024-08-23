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
  shadow = "lg:drop-shadow-2xl",
}) {
  if (style === "default") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={`w-fit rounded-br-3xl rounded-tl-3xl bg-blue px-10 py-5 text-white hover:rounded-3xl hover:duration-500 hover:ease-in-out ${className}`}
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
          className={`w-fit rounded-br-3xl rounded-tl-3xl bg-blue px-10 py-3 text-white hover:rounded-3xl hover:duration-500 hover:ease-in-out ${className}`}
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
          className={`w-fit rounded-br-full rounded-tl-full bg-blue px-10 py-2 text-white hover:rounded-full hover:duration-500 hover:ease-in-out ${className}`}
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
          className={`w-fit rounded-br-3xl rounded-tl-3xl border-[1px] border-blue px-10 py-[11px] text-blue hover:rounded-3xl hover:duration-500 hover:ease-in-out ${className}`}
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
          className={`flex w-auto items-center gap-4 rounded-br-3xl rounded-tl-3xl bg-orange px-8 py-5 text-white hover:rounded-3xl hover:duration-500 hover:ease-in-out ${shadow} ${className}`}
          onClick={onClick}
        >
          <p className="text-white ">{children}</p>
          <Image src={ArrowSouthEast} alt="arrow" height={12} />
        </button>
      </NavLink>
    );
  }

  if (style === "read article") {
    return (
      <NavLink to={to} arrow={false}>
        <button
          className={`group flex items-center gap-2 py-2 ${className}`}
          onClick={onClick}
        >
          <p className="text-blue group-hover:text-orange">{children}</p>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2c6b9a"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:stroke-orange"
          >
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </NavLink>
    );
  }

  if (icon === "arrow") {
    return (
      <Link href="" className="self-end">
        <button
          className={`group h-11 w-11 rounded-tr-[32px] bg-blue pl-4 ${className}`}
          // className={`group h-11 w-11 rounded-tr-[32px] bg-blue pl-2.5 hover:rotate-45 hover:bg-white hover:duration-100 ${className}`}
          onClick={onClick}
        >
          <Image src={ArrowNorthEast} alt="arrow" height={12} />
        </button>
      </Link>
    );
  }

  return <button onClick={onClick}>{children}</button>;
}

export default Button;
