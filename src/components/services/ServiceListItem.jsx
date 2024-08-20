import Image from "next/image";

function ServiceListItem({ header, className, image }) {
  return (
    <li className={`flex flex-col ` + className}>
      <Image src={image} alt="service icon" height={40} />
      <h2 className="mb-3 mt-6 w-36 text-xl font-semibold">{header}</h2>

      <ul className="flex list-disc flex-col gap-4 pl-4 font-medium lg:max-w-44 lg:gap-2">
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
