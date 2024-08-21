import Image from "next/image";

import PictureTwo from "@/assets/Picture2.png";
import PictureThree from "@/assets/Picture3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import Qualification from "@/components/aboutUs/Qualification";
import Button from "@/components/ui/Button";
import TeamBewerben from "@/assets/Team_Bewerben.png";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import UnsereKunden from "@/components/sections/home/UnsereKunden";
import ContactFormular from "@/components/contact/ContactFormular";

function AboutUsPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        style="small"
        h1="Über uns, wer sind wir?"
        h1Color="text-black"
        h1Width="w-[340px] lg:w-[450px]"
        image={PictureTwo}
      >
        <>
          <p>
            <strong>IMSYS</strong> ist seit über 20 Jahren eine der führenden
            XR-Agenturen für Beratung, Planung und Projektierung von digitalen
            Arbeitsumgebungen. Wir sind spezialisiert auf gut abgestimmte
            Medienkonzepte, Planungsdienstleistungen, Realisierung und
            Servicelösungen für Virtual Reality-, Augmented Reality- und Mixed
            Reality-Umgebungen.
          </p>
          <p>
            <strong>IMSYS</strong> ist seit über 20 Jahren eine der führenden
            XR-Agenturen für Beratung, Planung und Projektierung von digitalen
            Arbeitsumgebungen. Wir sind spezialisiert auf gut abgestimmte
            Medienkonzepte, Planungsdienstleistungen, Realisierung und
            Servicelösungen für Virtual Reality-, Augmented Reality- und Mixed
            Reality-Umgebungen.
          </p>
        </>
      </WebsiteInformation>

      <section className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex flex-col gap-10 lg:mb-8 lg:w-1/2">
          <HeaderSection
            text="Was macht den Unterschied"
            className="gap-10 px-8 sm:gap-[174px]"
            style="desktop"
          />

          <div className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2">
            <Qualification num="01" header="High Velocity">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Qualification>
            <Qualification num="02" header="High Velocity">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Qualification>
            <Qualification
              num="03"
              header="High Velocity"
              className="lg:hidden"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Qualification>
            <Qualification
              num="04"
              header="High Velocity"
              className="lg:hidden"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Qualification>
          </div>

          <Button style="read article" className="hidden px-8 lg:flex">
            Weiter lesen
          </Button>
        </div>

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={PictureThree}
            alt="Picture 3"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="relative flex flex-col gap-10">
        <HeaderSection
          text="Daten und Fakten"
          className="px-8 sm:gap-44"
          style="desktop"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-8 sm:gap-8 lg:gap-x-20">
          <Qualification num="01" header="High Velocity">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </Qualification>
          <Qualification num="02" header="High Velocity">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </Qualification>
          <Qualification num="03" header="High Velocity">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </Qualification>
          <Qualification num="04" header="High Velocity">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </Qualification>
        </div>
      </section>

      <section className="relative flex flex-col gap-10">
        <UnsereKunden />
      </section>

      <section className="relative flex flex-col gap-10 lg:items-center">
        <div className="flex flex-col gap-10">
          <HeaderSection
            text="Das sind Wir / Karriere"
            style="desktop"
            className="flex gap-[80px] px-8 sm:gap-[210px]"
          />

          <div className="flex flex-col gap-10">
            <div className="flex justify-between gap-14 px-8 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
              </p>

              <p className="hidden lg:flex">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
              </p>
            </div>

            <Button style="learn more" className="ml-8" to="/kontakt">
              Bewerben
            </Button>
          </div>
        </div>

        <div className="h-full w-full px-8 lg:w-3/4">
          <Image
            src={TeamBewerben}
            alt="Picture from the Team"
            className="h-full w-full rounded-md"
          />
        </div>

        <p className="px-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>
      </section>

      <ContactFormular />
    </main>
  );
}

export default AboutUsPage;
