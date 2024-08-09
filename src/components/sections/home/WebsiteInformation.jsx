import Image from "next/image";

import Picture1 from "@/assets/Picture1_390x214.png";
import Button from "../../ui/Button";

function WebsiteInformation() {
  return (
    <section className="relative flex flex-col gap-10">
      <div className="flex items-center lg:items-start">
        <Image
          src={Picture1}
          alt="Picture of a men with VR"
          className="w-full"
        />

        <h1 className="absolute px-8 text-4xl text-white drop-shadow-2xl sm:top-12 sm:w-80 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl">
          Wir arbeiten als Erweiterung Ihres Teams
        </h1>
      </div>

      <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12 lg:text-white">
        <p>
          IMSYS ist seit über 20 Jahren eine der führenden XR-Agenturen für
          Beratung, Planung und Projektierung von digitalen Arbeitsumgebungen.
          Wir sind spezialisiert auf gut abgestimmte Medienkonzepte,
          Planungsdienstleistungen, Realisierung und Servicelösungen für Virtual
          Reality-, Augmented Reality- und Mixed Reality-Umgebungen.
        </p>

        <Button style="learn more" to="/loesungen">
          Mehr erfahren
        </Button>
      </div>
    </section>
  );
}

export default WebsiteInformation;
