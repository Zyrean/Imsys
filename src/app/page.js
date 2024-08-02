import Image from "next/image";

import Picture1 from "@/assets/Picture1_390x214.png";
import Button from "@/components/ui/Button";
import ServiceList from "@/components/services/ServiceList";
import HeaderSection from "@/components/ui/HeaderSection";
import CustomerItem from "@/components/customer/CustomerItem";
import WomenVr from "@/assets/WomenVr.png";
import InformationBlock from "@/components/ui/InformationBlock";
import TeamVr from "@/assets/TeamVr.png";
import EmployeeVr from "@/assets/EmployeeVr.png";
import CustomerPost from "@/components/customer/CustomerPost";
import ButtonNextBack from "@/components/ui/ButtonNextBack";
import NewsLetterForm from "@/components/customer/NewsLetterForm";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 bg-red-100 pb-14">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={Picture1} alt="Picture of a men with VR" />

          <h1 className="absolute px-8 text-4xl text-white drop-shadow-2xl">
            We work as an extension of your team
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </p>

          <Button style="learn more">Learn More</Button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col gap-10 px-8">
        <HeaderSection text="Unsere Services" />

        <ServiceList />
      </section>

      {/* SECTION 3 */}
      <section className="flex flex-col gap-10 px-8">
        <HeaderSection text="Unsere Kunden" />

        <div className="flex justify-between px-4">
          <CustomerItem customer="Appbuster" />
          <CustomerItem customer="Appbuster" />
          <CustomerItem customer="Appbuster" />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`Wir über-zeugen weil...`} className={"px-8"} />

        <div className="flex flex-col gap-10">
          <InformationBlock title="High Velocity" />
          <InformationBlock title="High Velocity" />

          <Image src={WomenVr} alt="Women with Vr glases" />
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`Unser Prozess 1`} className={"px-8"} />

        <div className="flex flex-col gap-10">
          <InformationBlock title="High Velocity" />
          <Image src={TeamVr} alt="Team with Vr glases" />
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`Unser Prozess 2`} className={"px-8"} />

        <div className="flex flex-col gap-10">
          <InformationBlock title="High Velocity" />
          <Image src={EmployeeVr} alt="Employee with Vr glases" />
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`Referenze-projekte`} className={"px-8"} />

        <div className="flex flex-col gap-6">
          <div className="px-8">
            <ul className="flex justify-between font-semibold uppercase text-gray-600">
              <li>all</li>
              <li>vr</li>
              <li>ar</li>
              <li>mr</li>
              <li>web design</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 px-8">
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`Was unsere Kunden sagen?`} className={"px-8"} />

        <CustomerPost />

        <div className="flex justify-between px-8">
          <ButtonNextBack className="rotate-90" />
          <ButtonNextBack className="rotate-[270deg]" />
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="flex flex-col gap-10">
        <HeaderSection text={`News-letter`} className={"px-8"} />

        <InformationBlock title="none" />

        <NewsLetterForm />
      </section>
    </main>
  );
}
