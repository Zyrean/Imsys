import Image from "next/image";

import Plus from "@/assets/plus.png";
import Minus from "@/assets/minus.png";

function FAQItem({ isOpen, children }) {
  if (isOpen) {
    return (
      <li className="flex flex-col gap-4 border-b-[1px] border-black/25 pb-4 sm:pb-[18px]">
        <div className="flex items-center justify-between gap-8">
          <p className="font-medium text-blue">{children}</p>
          <Image src={Minus} alt={`Minus icon`} width={24} />
        </div>

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod. consetetur sadipscing elitr, sed diam
          nonumy eirmod. consetetur sadipscing elitr.
        </p>
      </li>
    );
  }

  return (
    <li className="flex items-center justify-between border-b-[1px] border-black/25 pb-4 sm:pb-6">
      <p className="w-64 sm:w-full">{children}</p>
      <Image src={Plus} alt={`Plus icon`} width={24} />
    </li>
  );
}

export default FAQItem;
