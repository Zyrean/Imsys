import Image from "next/image";

import TeamMeeting from "@/assets/TeamMeeting.png";

function InformationBlock({ title, type }) {
  if (title === "none") {
    return (
      <p className="px-8 text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr.
      </p>
    );
  }

  if (type === "small") {
    return (
      <div className="flex flex-col gap-4">
        <Image src={TeamMeeting} alt="Picture of a groupe having a meeting" />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl">{title}</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-8">
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr.
      </p>
    </div>
  );
}

export default InformationBlock;
