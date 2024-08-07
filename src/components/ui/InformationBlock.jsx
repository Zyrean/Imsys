import Image from "next/image";

import TeamMeeting from "@/assets/TeamMeeting.png";

function InformationBlock({ title = "", type, children }) {
  if (title === "none") {
    return <p className="px-8 text-gray-600">{children}</p>;
  }

  if (type === "small") {
    return (
      <div className="flex flex-col gap-4">
        <Image
          src={TeamMeeting}
          alt="Picture of a groupe having a meeting"
          className="md:w-full"
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl">{title}</h2>
          <p className="text-gray-600">{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-8">
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

export default InformationBlock;
