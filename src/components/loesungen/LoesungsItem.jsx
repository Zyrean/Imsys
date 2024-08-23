import Image from "next/image";
import Button from "../ui/Button";

function LoesungsItem({ image, header, children, className }) {
  return (
    <li
      className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 ${className}`}
    >
      <Image src={image} alt={`${image} iamge`} className="w-full rounded-md" />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-medium">{header}</h3>
        <p className="leading-relaxed">{children}</p>
        <Button style="read article">Weiter lesen</Button>
      </div>
    </li>
  );
}

export default LoesungsItem;
