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
            Wir arbeiten als Erweiterung Ihres Teams
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12 lg:text-white">
          <p>
            IMSYS ist seit über 20 Jahren eine der führenden XR-Agenturen für
            Beratung, Planung und Projektierung von digitalen Arbeitsumgebungen.
            Wir sind spezialisiert auf gut abgestimmte Medienkonzepte,
            Planungsdienstleistungen, Realisierung und Servicelösungen für
            Virtual Reality-, Augmented Reality- und Mixed Reality-Umgebungen.
          </p>

          <Button style="learn more">Mehr erfahren</Button>
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
          display="flex lg:hidden"
        />
        <h2 className="hidden text-3xl lg:block">Unsere Kunden</h2>

        <div className="flex justify-between px-8 lg:w-full">
          <CustomerItem customer="DB Netze" image={KundenLogo} />
          <CustomerItem customer="Porsche" image={KundenLogo} />
          <CustomerItem customer="Herrenknecht" image={KundenLogo} />
          <CustomerItem
            customer="Bausch+Ströbel"
            image={KundenLogo}
            className="hidden lg:flex"
          />
          <CustomerItem
            customer="Schott"
            image={KundenLogo}
            className="hidden sm:flex"
          />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col gap-10 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-0 lg:px-8 ">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <HeaderSection
            style="desktop"
            text={`Unser UX Lab wird zu Ihrem Testlabor`}
          />

          <div className="flex flex-col gap-10">
            <InformationBlock title="High Velocity">
              Willkommen in unserem UX Lab – Ihrem Testlabor für beeindruckende
              User Experience. Hier eröffnen sich Ihnen Türen in die virtuelle
              Welt dank modernster Ausstattung: Erlebnisbrillen für VR, AR und
              MR, beeindruckende Powerwall- und Cave-Systeme, eindrucksvolle
              Display-Walls sowie die innovative Green Screen Technologie.
            </InformationBlock>
            <InformationBlock title="High Velocity">
              Testen Sie persönlich Ihre zukünftige Hardware und Software im
              User Experience Lab. Wir bieten auch Vor-Ort-Tests an, um Ihnen
              die beste Entscheidungsgrundlage für Ihre digitale Arbeitsumgebung
              zu schaffen.
            </InformationBlock>
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
        <div className="flex flex-col gap-6 lg:w-1/2">
          <HeaderSection
            text={`Service & Schulung`}
            style="desktop"
            className={"px-8"}
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

        <Image
          src={TeamVr}
          alt="Team with Vr glases"
          className="w-full lg:w-1/2 lg:pr-8"
        />
      </section>

      {/* SECTION 6 */}
      <section className="flex flex-col gap-10 lg:flex-row-reverse">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <HeaderSection
            text={`Innovationstreiber`}
            style="desktop"
            className={"px-8"}
          />

          <InformationBlock>
            Jedes einzelne Kundenprojekt ist für uns wichtig, da es dazu
            beiträgt, unser Fachwissen stetig zu erweitern. Genau das ist die
            Grundlage für neue Ideen und neue Lösungen, die für Ihre digitale
            Herausforderung benötigt wird.
            <br />
            <br />
            Neben den bestehenden Lösungen und deren Umsetzung sind Innovationen
            für Ihre individuellen Herausforderungen ein entscheidender
            Grundstein für den Erfolg Ihrer digitalen Arbeitsumgebung.
          </InformationBlock>
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
          <InformationBlock title="none">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod nonumy eirmod nonumy eirmod.
          </InformationBlock>

          <NewsLetterForm />
        </div>
      </section>
    </main>
  );
}
