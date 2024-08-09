import Image from "next/image";

function CustomerItem({ customer, image, className, imageHeight }) {
  return (
    <div
      className={
        `flex w-32 flex-col items-center justify-between gap-4 ` + className
      }
    >
      <div className="flex h-full">
        <Image src={image} alt="Kunden logo" height={40} />
      </div>
      <p>{customer}</p>
    </div>
  );
}

export default CustomerItem;
