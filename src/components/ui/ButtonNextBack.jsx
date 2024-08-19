import Image from "next/image";

import Arrow from "@/assets/arrow-down-svgrepo-com.svg";

function ButtonNextBack({ className }) {
  return (
    <button className="group border border-gray-400 p-1 hover:rounded-full hover:outline hover:outline-blue">
      <Image src={Arrow} alt="Arrow" height={25} className={className} />
    </button>
  );
}

export default ButtonNextBack;
