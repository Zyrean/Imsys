import Image from "next/image";

import Picture1 from "@/assets/Picture1_390x214.png";

import Button from "@/components/ui/Button";
import ServiceList from "@/components/services/ServiceList";
import HeaderSection from "@/components/ui/HeaderSection";
import CustomerItem from "@/components/customer/CustomerItem";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 bg-red-100">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={Picture1} alt="Picture of a men with VR" />

          <h1
            className="absolute px-8
          text-4xl text-white drop-shadow-2xl"
          >
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
      <section className="flex flex-col gap-10 px-8">
        <HeaderSection text="Wir über-zeugen weil..." />
      </section>
    </main>
  );
}
