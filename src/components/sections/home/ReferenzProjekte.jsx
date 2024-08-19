import ReferenzHeaderDektop from "../../herausforderungen/ReferenzHeaderDektop";
import ReferenzHeaderPhone from "../../herausforderungen/ReferenzHeaderPhone";
import ReferenzProjektListe from "../../herausforderungen/ReferenzProjektListe";
import HeaderSection from "../../ui/HeaderSection";

function ReferenzProjekte() {
  return (
    <section className="flex flex-col gap-10">
      <HeaderSection
        style="desktop"
        text={`Referenze-projekte`}
        className={"px-8 sm:gap-32"}
      />

      <div className="flex flex-col gap-6">
        <div className="px-8">
          <ReferenzHeaderPhone />

          <ReferenzHeaderDektop />
        </div>

        <ReferenzProjektListe />
      </div>
    </section>
  );
}

export default ReferenzProjekte;
