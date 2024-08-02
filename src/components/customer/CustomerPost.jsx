import Image from "next/image";

import Avatar from "@/assets/Avatar.png";
import QuoteIcon from "@/assets/QuoteIcon.png";

function CustomerPost() {
  return (
    <div className="mx-8 flex flex-col gap-4 border border-gray-400 px-4 py-6">
      <Image src={QuoteIcon} alt="Quote icon" />
      <h3 className="font-semibold">
        They imporved our Google rankings, increased traffic to our website
      </h3>
      <p className="text-xs leading-6 text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod nonumy eirmod nonumy eirmod.
      </p>

      <div className="flex items-center gap-4">
        <div>
          <Image src={Avatar} alt="Avatar" />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Jaydon Aminoff</h3>
          <p className="text-xs text-gray-600">CTO Sport</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerPost;
