import Image from "next/image";

import PictureTwo from "@/assets/Picture2.png";
import PictureThree from "@/assets/Picture3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import Qualification from "@/components/aboutUs/Qualification";
import LogoOne from "@/assets/Logo 2.png";
import LogoTwo from "@/assets/Logo10.png";
import LogoThree from "@/assets/Logo11.png";
import LogoFour from "@/assets/Logo12.png";
import CustomerItem from "@/components/customer/CustomerItem";
import Button from "@/components/ui/Button";
import TeamBewerben from "@/assets/Team_Bewerben.png";
import ContactForm from "@/components/aboutUs/ContactForm";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import UnsereKunden from "@/components/sections/home/UnsereKunden";

function AboutUsPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      {/* SECTION 1 */}

      <WebsiteInformation
        style="small"
        h1="Über uns
        wer sind wir?"
        image={PictureTwo}
        h1Color="text-black"
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

      {/* SECTION 2 */}
      <section className="relative flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <HeaderSection text="Was macht den Unterschied" className={"px-8"} />

          {/* <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-8 sm:gap-8 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-8 sm:gap-8">
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
          </div>
        </div>

        <Image src={PictureThree} alt="Picture 3" className="w-full lg:w-1/2" />
      </section>

      {/* SECTION 3 */}
      <section className="relative flex flex-col gap-10">
        <HeaderSection text="Daten und Fakten" className={"px-8"} />

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-8 sm:gap-8">
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
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="relative flex flex-col gap-10">
        <UnsereKunden />
      </section>

      {/* SECTION 4 */}
      <section className="relative flex flex-col gap-10">
        <HeaderSection text="Das sind Wir / Karriere" className={"px-8"} />

        <p className="px-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>

        <Button style="learn more" className="ml-8">
          Bewerben
        </Button>

        <Image src={TeamBewerben} alt="Picture from the Team" />

        <p className="px-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="relative flex flex-col gap-10 px-8">
        <HeaderSection text="Let's talk" />

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>

        <ContactForm />
      </section>
    </main>
  );
}

export default AboutUsPage;
