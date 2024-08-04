import Image from "next/image";

import Plus from "@/assets/plus.png";
import Minus from "@/assets/minus.png";

function FAQItem({ isOpen, children }) {
  if (isOpen) {
    return (
      <li className="flex flex-col gap-4 border-b-2 border-black pb-4">
        <div className="flex items-center gap-8">
          <p>{children}</p>
          <Image src={Minus} alt={`Minus icon`} width={30} height={30} />
        </div>

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod.
        </p>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-8 border-b-2 border-black pb-4">
      <p>{children}</p>
      <Image src={Plus} alt={`Plus icon`} width={30} height={30} />
    </li>
  );
}

export default FAQItem;
