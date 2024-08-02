import Image from "next/image";

import Arrow from "@/assets/arrow-down-svgrepo-com.svg";

function ButtonNextBack({ className }) {
  return (
    <button className="border border-gray-400 p-1">
      <Image src={Arrow} alt="Arrow" height={25} className={className} />
    </button>
  );
}

export default ButtonNextBack;
