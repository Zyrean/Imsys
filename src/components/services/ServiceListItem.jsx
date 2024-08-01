import Image from "next/image";

import IconResearch from "@/assets/IconResearch.png";

function ServiceListItem({ header }) {
  return (
    <li className="flex flex-col gap-6">
      <Image src={IconResearch} alt="service icon" />
      <h3 className="text-xl">{header}</h3>

      <ul className="flex list-disc flex-col gap-4 pl-4 font-medium">
        <li className="text-xs text-gray-600">
          Qualitative and quantitative user XP
        </li>
        <li className="text-xs text-gray-600">
          Qualitative and quantitative user XP
        </li>
        <li className="text-xs text-gray-600">
          Qualitative and quantitative user XP
        </li>
      </ul>
    </li>
  );
}

export default ServiceListItem;
