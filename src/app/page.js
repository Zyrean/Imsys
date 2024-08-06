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
import KundenLogo from "@/assets/KundenLogo.png";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20 pb-14 lg:gap-28">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center lg:items-start">
          <Image
            src={Picture1}
            alt="Picture of a men with VR"
            className="w-full"
          />

          <h1 className="absolute px-8 text-4xl text-white drop-shadow-2xl sm:top-12 sm:w-80 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl">
            We work as an extension of your team
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-20 lg:w-[540px] lg:px-12 lg:text-white">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>

          <Button style="learn more">Learn More</Button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col gap-10 px-8 lg:flex-row lg:justify-between lg:gap-0">
        <HeaderSection text="Unsere Services" />

        <ServiceList />
      </section>

      {/* SECTION 3 */}
      <section className="flex flex-col gap-10 lg:items-center lg:justify-between">
        <HeaderSection
          text="Unsere Kunden"
          style="desktop"
          display="lg:hidden"
        />
        <h2 className="hidden text-2xl lg:block">Unsere Kunden</h2>

        <div className="flex justify-between px-8 lg:w-full">
          <CustomerItem customer="Appbuster" image={KundenLogo} />
          <CustomerItem customer="Appbuster" image={KundenLogo} />
          <CustomerItem customer="Appbuster" image={KundenLogo} />
          <CustomerItem
            customer="Appbuster"
            image={KundenLogo}
            className="hidden lg:flex"
          />
          <CustomerItem
            customer="Appbuster"
            image={KundenLogo}
            className="hidden sm:flex"
          />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col gap-10 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-0 lg:px-8 ">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <HeaderSection style="desktop" text={`Wir über- zeugen weil...`} />

          <div className="flex flex-col gap-10">
            <InformationBlock title="High Velocity" />
            <InformationBlock title="High Velocity" />
          </div>
        </div>

        <Image
          src={WomenVr}
          alt="Women with Vr glases"
          className="w-full lg:w-1/2"
        />
      </section>

      {/* SECTION 5 */}
      <section className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <HeaderSection
            text={`Unser Prozess 1`}
            style="desktop"
            className={"px-8"}
          />

          <InformationBlock title="High Velocity" />
        </div>

        <Image
          src={TeamVr}
          alt="Team with Vr glases"
          className="w-full lg:w-1/2 lg:pr-8"
        />
      </section>

      {/* SECTION 6 */}
      <section className="flex flex-col gap-10 lg:flex-row-reverse">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <HeaderSection
            text={`Unser Prozess 2`}
            style="desktop"
            className={"px-8"}
          />

          <InformationBlock title="High Velocity" />
        </div>

        <Image
          src={EmployeeVr}
          alt="Employee with Vr glases"
          className="w-full lg:w-1/2 lg:pl-8"
        />
      </section>

      {/* SECTION 7 */}
      <section className="flex flex-col gap-10">
        <HeaderSection
          style="desktop"
          text={`Referenze-projekte`}
          className={"px-8"}
        />

        <div className="flex flex-col gap-6">
          <div className="px-8">
            <ul className="flex justify-between font-semibold uppercase text-gray-600 lg:hidden">
              <li>all</li>
              <li>vr</li>
              <li>ar</li>
              <li>mr</li>
              <li>web design</li>
            </ul>

            <ul className="hidden justify-between font-semibold uppercase text-gray-600 lg:flex">
              <li>all</li>
              <li>mobile design</li>
              <li>web design</li>
              <li>branding</li>
              <li>illustration</li>
              <li>typography</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 px-8 md:gap-8">
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
            <InformationBlock type="small" title="Real Estat Landing Page" />
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="flex flex-col gap-10">
        <HeaderSection
          text={`Was unsere Kunden sagen?`}
          className={"px-8"}
          style="desktop"
        />

        <div className="lg:flex lg:gap-4 lg:px-8">
          <CustomerPost />
          <CustomerPost display="hidden lg:flex" />
          <CustomerPost display="hidden lg:flex" />
        </div>

        <div className="flex justify-between px-8 lg:justify-end lg:gap-4">
          <ButtonNextBack className="rotate-90" />
          <ButtonNextBack className="rotate-[270deg]" />
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="flex flex-col justify-between gap-10 lg:flex-row">
        <HeaderSection
          style="desktop"
          text={`News-letter`}
          className={"px-8"}
          display="lg:hidden"
        />

        <h1 className="hidden w-80 pl-8 text-4xl font-semibold lg:block">
          Bleib mit dem Newsletter auf dem Laufenden
        </h1>

        <div className="flex flex-col gap-10 lg:w-1/2">
          <InformationBlock title="none" />

          <NewsLetterForm />
        </div>
      </section>
    </main>
  );
}
