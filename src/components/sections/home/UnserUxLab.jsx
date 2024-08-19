import Image from "next/image";

import HeaderSection from "../../ui/HeaderSection";
import InformationBlock from "../../ui/InformationBlock";
import WomenVr from "@/assets/WomenVr.png";

function UnserUxLab() {
  return (
    <section className="flex flex-col gap-10 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-0 lg:px-8 ">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <HeaderSection
          style="desktop"
          text={`Unser UX Lab wird zu Ihrem Testlabor`}
          className="sm:gap-20"
        />

        <div className="flex flex-col gap-10">
          <InformationBlock title="High Velocity">
            Willkommen in unserem UX Lab – Ihrem Testlabor für beeindruckende
            User Experience. Hier eröffnen sich Ihnen Türen in die virtuelle
            Welt dank modernster Ausstattung: Erlebnisbrillen für VR, AR und MR,
            beeindruckende Powerwall- und Cave-Systeme, eindrucksvolle
            Display-Walls sowie die innovative Green Screen Technologie.
          </InformationBlock>
          <InformationBlock title="High Velocity">
            Testen Sie persönlich Ihre zukünftige Hardware und Software im User
            Experience Lab. Wir bieten auch Vor-Ort-Tests an, um Ihnen die beste
            Entscheidungsgrundlage für Ihre digitale Arbeitsumgebung zu
            schaffen.
          </InformationBlock>
        </div>
      </div>

      <Image
        src={WomenVr}
        alt="Women with Vr glases"
        className="w-full lg:w-1/2"
      />
    </section>
  );
}

export default UnserUxLab;
