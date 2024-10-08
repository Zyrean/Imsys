import Image from "next/image";

import InformationBlock from "../../ui/InformationBlock";
import HeaderSection from "../../ui/HeaderSection";
import EmployeeVr from "@/assets/EmployeeVr.png";

function Innovationstreiber() {
  return (
    <section className="flex flex-col gap-10 sm:items-center lg:flex-row-reverse">
      <div className="flex flex-col gap-6 lg:mb-8 lg:w-1/2">
        <HeaderSection
          text={`Innovations-treiber`}
          style="desktop"
          className={"px-8 sm:gap-32"}
        />

        <InformationBlock>
          Jedes einzelne Kundenprojekt ist für uns wichtig, da es dazu beiträgt,
          unser Fachwissen stetig zu erweitern. Genau das ist die Grundlage für
          neue Ideen und neue Lösungen, die für Ihre digitale Herausforderung
          benötigt wird.
          <br />
          <br />
          Neben den bestehenden Lösungen und deren Umsetzung sind Innovationen
          für Ihre individuellen Herausforderungen ein entscheidender Grundstein
          für den Erfolg Ihrer digitalen Arbeitsumgebung.
        </InformationBlock>
      </div>

      <div className="h-full w-full px-8 lg:w-1/2">
        <Image
          src={EmployeeVr}
          alt="Employee with Vr glases"
          className="h-full w-full rounded-md"
        />
      </div>
    </section>
  );
}

export default Innovationstreiber;
