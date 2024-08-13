import Image from "next/image";

import MenVr from "@/assets/MenWithVr.png";
import BlogItem from "@/components/blog/BlogItem";
import Pic1 from "@/assets/Mask1.png";
import Pic2 from "@/assets/Mask2.png";
import Pic3 from "@/assets/Mask3.png";
import Pic4 from "@/assets/Mask4.png";
import Button from "@/components/ui/Button";
import ContactBlock from "@/components/contact/ContactBlock";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";

function BlogPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      {/* SECTION 1 */}
      <WebsiteInformation
        style="small"
        h1="Finde die Perfekte
        Lösung"
        image={MenVr}
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
      <section>
        <div className="flex flex-col gap-6">
          <div className="px-8">
            <ul className="flex justify-between font-semibold uppercase text-gray-600">
              <li>all</li>
              <li>mobile design</li>
              <li>web design</li>
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-4 px-8">
            <BlogItem
              image={Pic1}
              interests="alle"
              title="Mulih - Real Estat Landing Page"
            />
            <BlogItem
              image={Pic2}
              interests="alle"
              title="Mulih - Real Estat Landing Page"
            />
            <BlogItem
              image={Pic3}
              interests="alle"
              title="Mulih - Real Estat Landing Page"
            />
            <BlogItem
              image={Pic4}
              interests="alle"
              title="Mulih - Real Estat Landing Page"
            />
          </ul>
        </div>
      </section>

      {/* SECTION 2 */}
      <section>
        <ContactBlock />
      </section>
    </main>
  );
}

export default BlogPage;
