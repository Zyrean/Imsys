import Image from "next/image";

import MenVr from "@/assets/MenWithVr.png";
import BlogItem from "@/components/blog/BlogItem";
import Pic1 from "@/assets/Mask1.png";
import Pic2 from "@/assets/Mask2.png";
import Pic3 from "@/assets/Mask3.png";
import Pic4 from "@/assets/Mask4.png";
import Button from "@/components/ui/Button";
import ContactBlock from "@/components/contact/ContactBlock";

function BlogPage() {
  return (
    <main className="flex flex-col gap-20 pb-14">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={MenVr} alt="Picture of a men with VR" />
          <h1 className="absolute px-8 text-4xl drop-shadow-2xl">
            Perfekte Lösung <br /> finden
          </h1>
        </div>

        <p className="px-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>
      </section>

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
