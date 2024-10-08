import Image from "next/image";

import HeaderSection from "../../ui/HeaderSection";
import InformationBlock from "../../ui/InformationBlock";
import WomenVr from "@/assets/WomenVr.png";

function UnserUxLab() {
  return (
    <section className="flex flex-col gap-10 sm:items-center lg:flex lg:flex-row-reverse lg:justify-between lg:gap-8 lg:px-8 ">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <HeaderSection
          style="desktop"
          text={`Unser UX Lab wird zu Ihrem Testlabor`}
          className="sm:gap-32 lg:gap-24"
        />

        <div className="flex flex-col gap-10 lg:mb-8">
          <InformationBlock title="Test Vorbereitung">
            Diese kleine und abwechslungsreiche Auswahl an Aktivitäten gibt
            Ihnen einen ersten Eindruck wie kreativ und flexibel VR AR MR
            -Anwendungen sind und in der Folge echte Vorteile bieten. Sie können
            diese Vorteile für Ihre digitale Arbeitsumgebung nutzen.
          </InformationBlock>
          <InformationBlock title="Test Abschluss">
            Testen Sie persönlich Ihre zukünftige Hardware und Software im User
            Experience Lab. Wir bieten auch Vor-Ort-Tests an, um Ihnen die beste
            Entscheidungsgrundlage für Ihre digitale Arbeitsumgebung zu
            schaffen.
          </InformationBlock>
        </div>
      </div>

      <div className="h-full w-full px-8 lg:w-1/2">
        <Image
          src={WomenVr}
          alt="Team with Vr glases"
          className="h-full w-full rounded-md"
        />
      </div>
    </section>
  );
}

export default UnserUxLab;
