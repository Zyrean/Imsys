import Image from "next/image";

import ArrowSouthEast from "@/assets/ArrowSouthEast.png";
import ArrowNorthEast from "@/assets/ArrowNorthEast.png";
import ArrowEast from "@/assets/ArrowEast2.png";

function Button({ children, className, style, icon = "false" }) {
  if (style === "default") {
    return (
      <button
        className={"w-44 rounded-br-3xl bg-blue py-5 text-white " + className}
      >
        {children}
      </button>
    );
  }

  if (style === "default small") {
    return (
      <button
        className={"w-44 rounded-br-3xl bg-blue py-3 text-white " + className}
      >
        {children}
      </button>
    );
  }

  if (style === "default tiny") {
    return (
      <button
        className={"w-36 rounded-br-full bg-blue py-2 text-white " + className}
      >
        {children}
      </button>
    );
  }

  if (style === "default border") {
    return (
      <button
        className={
          "w-44 rounded-br-3xl border-[1px] border-blue py-2 text-blue " +
          className
        }
      >
        {children}
      </button>
    );
  }

  if (style === "learn more") {
    return (
      <button
        className={
          "flex w-52 items-center gap-4 rounded-br-3xl bg-orange px-8 py-5 text-white " +
          className
        }
      >
        <p className="text-white">{children}</p>
        <Image src={ArrowSouthEast} alt="arrow" height={12} />
      </button>
    );
  }

  if (style === "read artical") {
    return (
      <button className={"mt-6 flex items-center gap-4 px-2 py-2 " + className}>
        <p className="text-blue">{children}</p>
        <Image src={ArrowEast} alt="arrow" height={12} className="" />
      </button>
    );
  }

  if (icon === "arrow") {
    return (
      <button
        className={"h-11 w-11 rounded-tr-[32px] bg-blue pl-3.5 " + className}
      >
        <Image src={ArrowNorthEast} alt="arrow" height={12} />
      </button>
    );
  }

  return <button className="">{children}</button>;
}

export default Button;
