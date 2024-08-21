import MenVr from "@/assets/MenWithVr.png";
import BlogItem from "@/components/blog/BlogItem";
import Pic1 from "@/assets/Mask1.png";
import Pic2 from "@/assets/Mask2.png";
import Pic3 from "@/assets/Mask3.png";
import Pic4 from "@/assets/Mask4.png";
import ContactBlock from "@/components/contact/ContactBlock";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import ReferenzHeaderDektop from "@/components/herausforderungen/ReferenzHeaderDektop";
import ReferenzHeaderPhone from "@/components/herausforderungen/ReferenzHeaderPhone";
import HeaderSection from "@/components/ui/HeaderSection";
import BlogList from "@/components/blog/BlogList";

function BlogPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        style="small"
        h1="Finde die Perfekte Lösung"
        h1Color="text-black"
        h1Width="w-[340px] lg:w-[470px]"
        image={MenVr}
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

      <section>
        <div className="flex flex-col gap-6">
          <HeaderSection text="Blog" className={"px-8"} style="desktop" />

          <div className="px-8">
            <ReferenzHeaderPhone />
            <ReferenzHeaderDektop />
          </div>

          <BlogList />
        </div>
      </section>

      <section>
        <ContactBlock bgColor="bg-lightBlue/15" />
      </section>
    </main>
  );
}

export default BlogPage;
