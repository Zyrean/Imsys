import Image from "next/image";

import HeaderSection from "../../ui/HeaderSection";
import TeamVr from "@/assets/TeamVr.png";
import InformationBlock from "../../ui/InformationBlock";

function ServiceUndSchulung() {
  return (
    <section className="flex flex-col gap-10 sm:items-center lg:flex-row">
      <div className="flex flex-col gap-6 lg:mb-8 lg:w-1/2">
        <HeaderSection
          text={`Service & Schulung`}
          style="desktop"
          className={"px-8 sm:gap-32"}
        />

        <InformationBlock>
          Diese kleine und abwechslungsreiche Auswahl an Aktivitäten gibt Ihnen
          einen ersten Eindruck wie kreativ und flexibel VR AR MR -Anwendungen
          sind und in der Folge echte Vorteile bieten. Sie können diese Vorteile
          für Ihre digitale Arbeitsumgebung nutzen. Diese kleine und
          abwechslungsreiche Auswahl an Aktivitäten gibt Ihnen einen ersten
          Eindruck wie kreativ und flexibel VR AR MR -Anwendungen sind und in
          der Folge echte Vorteile bieten.
        </InformationBlock>
      </div>

      <div className="h-full w-full px-8 lg:w-1/2">
        <Image
          src={TeamVr}
          alt="Employee with Vr glases"
          className="h-full w-full rounded-md"
        />
      </div>
    </section>
  );
}

export default ServiceUndSchulung;
