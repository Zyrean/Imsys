import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import UnsereServices from "@/components/sections/home/UnsereServices";
import UnsereKunden from "@/components/sections/home/UnsereKunden";
import UnserUxLab from "@/components/sections/home/UnserUxLab";
import ServiceUndSchulung from "@/components/sections/home/ServiceUndSchulung";
import Innovationstreiber from "@/components/sections/home/Innovationstreiber";
import ReferenzProjekte from "@/components/sections/home/ReferenzProjekte";
import KundenPosts from "@/components/sections/home/KundenPosts";
import Newsletter from "@/components/sections/home/Newsletter";
import Picture1 from "@/assets/Picture1_1200x660.png";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      {/* SECTION 1 */}
      <WebsiteInformation
        h1="Wir arbeiten als Erweiterung Ihres Teams"
        image={Picture1}
        buttonText="Mehr erfahren"
        buttonStyle="learn more"
        buttonHref="/loesungen"
      >
        <strong>IMSYS</strong> ist seit über 20 Jahren eine der führenden
        XR-Agenturen für Beratung, Planung und Projektierung von digitalen
        Arbeitsumgebungen. Wir sind spezialisiert auf gut abgestimmte
        Medienkonzepte, Planungsdienstleistungen, Realisierung und
        Servicelösungen für Virtual Reality-, Augmented Reality- und Mixed
        Reality-Umgebungen.
      </WebsiteInformation>

      {/* SECTION 2 */}
      <UnsereServices />

      {/* SECTION 3 */}
      <UnsereKunden />

      {/* SECTION 4 */}
      <UnserUxLab />

      {/* SECTION 5 */}
      <ServiceUndSchulung />

      {/* SECTION 6 */}
      <Innovationstreiber />

      {/* SECTION 7 */}
      <ReferenzProjekte />

      {/* SECTION 8 */}
      <KundenPosts />

      {/* SECTION 9 */}
      <Newsletter />
    </main>
  );
}
