import Image from "next/image";
import KundenLogo from "@/assets/KundenLogo.png";

function CustomerItem({ customer }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={KundenLogo} alt="Kunden logo" />
      <p>{customer}</p>
    </div>
  );
}

export default CustomerItem;
