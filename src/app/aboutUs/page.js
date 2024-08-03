import Image from "next/image";

import PictureTwo from "@/assets/Picture2.png";
import PictureThree from "@/assets/Picture3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import Qualification from "@/components/aboutUs/Qualification";

function AboutUsPage() {
  return (
    <main className="flex flex-col gap-20 bg-red-100 pb-14">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={PictureTwo} alt="Picture of a men with VR" />

          <h1 className="absolute px-8 text-4xl drop-shadow-2xl">
            Über uns <br /> wer sind wir?
          </h1>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative flex flex-col gap-10">
        <HeaderSection text="Was macht den Unterschied" className={"px-8"} />

        <div className="grid grid-cols-2 gap-4">
          <Qualification />
          <Qualification />
          <Qualification />
          <Qualification />
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
