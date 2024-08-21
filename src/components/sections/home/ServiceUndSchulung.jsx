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
          In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
          wohl am meisten unterschätzte Bereich – Service und Schulung.
          Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
          Ihrem Interesse. Sind Service und Wartung im Gesamtkonzept gut
          integriert, ist das eine Garantie, dass die Wertschöpfung Ihrer
          digitalen Arbeitsumgebung nicht unterbrochen wird, mit all den
          positiven Effekten auch für Sie und Ihre Mitarbeiter*innen.
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
