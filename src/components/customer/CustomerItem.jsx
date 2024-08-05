import Image from "next/image";

function CustomerItem({ customer, image, className }) {
  return (
    <div className={`flex flex-col items-center gap-4 ` + className}>
      <Image src={image} alt="Kunden logo" height={60} />
      <p>{customer}</p>
    </div>
  );
}

export default CustomerItem;
