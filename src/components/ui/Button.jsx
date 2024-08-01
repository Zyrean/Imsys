import Image from "next/image";

import ArrowSouthEast from "@/assets/ArrowSouthEast.png";
import ArrowNorthEast from "@/assets/ArrowNorthEast.png";

function Button({ children, className, style, icon = "false" }) {
  if (style === "default") {
    return (
      <button className="bg-blue rounded-br-full px-10 py-1.5 text-white">
        {children}
      </button>
    );
  }

  if (style === "learn more") {
    return (
      <button className="bg-orange flex w-44 items-center gap-4 rounded-br-3xl px-8 py-5 text-white">
        <p>Learn More</p>
        <Image src={ArrowSouthEast} alt="arrow" height={12} />
      </button>
    );
  }

  if (icon === "arrow") {
    return (
      <button
        className={"bg-blue h-11 w-11 rounded-tr-[32px] pl-3.5 " + className}
      >
        <Image src={ArrowNorthEast} alt="arrow" height={12} />
      </button>
    );
  }

  return <button className="">{children}</button>;
}

export default Button;
