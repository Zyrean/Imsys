import Image from "next/image";

import Button from "@/components/ui/Button";
import HeaderSection from "@/components/ui/HeaderSection";
import Grafic from "@/assets/VorteileGrafic.png";
import Pic1 from "@/assets/Pic1.png";
import Pic2 from "@/assets/Pic2.png";
import Pic3 from "@/assets/Pic3.png";
import Pic4 from "@/assets/Pic4.png";
import TextBlock from "@/components/herausforderungen/TextBlock";
import LösungsBlock from "@/components/herausforderungen/LösungsBlock";
import ContactBlock from "@/components/contact/ContactBlock";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import VorteilsBlock from "@/components/herausforderungen/VorteilsBlock";

function HerausforderungenPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        h1="Standort-
            übergreifendes Arbeiten"
        image={Pic1}
        h1Color="text-black"
        buttonText="Zur Lösung"
        buttonStyle="learn more"
        buttonHref="/loesungen"
      >
        <p className="leading-relaxed text-black">
          <strong>IMSYS</strong> ist seit über 20 Jahren eine der führenden
          XR-Agenturen für Beratung, Planung und Projektierung von digitalen
          Arbeitsumgebungen. Wir sind spezialisiert auf gut abgestimmte
          Medienkonzepte, Planungsdienstleistungen, Realisierung und
          Servicelösungen für Virtual Reality-, Augmented Reality- und Mixed
          Reality-Umgebungen.
        </p>
      </WebsiteInformation>

      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10">
          <HeaderSection
            text="Ihre Vorteile"
            className="gap-20 sm:gap-72"
            style="desktop"
          />

          <div className="flex flex-col leading-relaxed lg:flex-row">
            <p className="px-8 lg:w-1/2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed.
            </p>
            <br />
            <p className="px-8 lg:w-1/2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed.
            </p>
          </div>
        </div>

        <Image
          src={Grafic}
          alt="Grafic of company skills"
          className="mt-10 w-full lg:w-3/4"
        />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-10">
        <VorteilsBlock
          header="Konstruk-tionsteam"
          className="lg:w-1/2"
          childrenPadding="px-8"
          headerGap="gap-24"
        >
          <TextBlock header="Dezentral, schnell, agil -mit VR sind Ihre Konstruktionsbesprechungen genau das.">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header=" Die Zusammenarbeit von Konstruktionsteams mit VR/AR führt Sie zu:">
            <ul className="list-disc pl-4">
              <li>kürzeren Entwicklungszeiten</li>
              <li>schnelleren Entscheidungsfindung</li>
              <li>Kosten- und Zeitersparnis</li>
              <li>mehr Agilität</li>
            </ul>
          </TextBlock>
        </VorteilsBlock>

        <Image
          src={Pic2}
          alt="Women with VR glasses"
          className="rounded-md sm:w-full lg:w-1/2"
        />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:gap-0">
        <VorteilsBlock
          header="Remote Service"
          className="lg:w-1/2"
          childrenPadding="px-8"
          headerGap="gap-44"
        >
          <TextBlock header="Schneller Service, schnelle Reaktion, schnelle Verfügbarkeit - Ein neues Servicelebel">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header="Der Einsatz von Remote-Service führt im Ergebnis zu">
            <ul className="list-disc pl-4">
              <li>Kosten- und Zeiterstarung</li>
              <li>
                Flexiblen Einsatz des Expertenwissens (standortunabhängig)
              </li>
              <li>Mehr nachhaltigkeit</li>
              <li>Höhere Wettbewerbsfähigkeit</li>
              <li>hohe Kundenzufriedenheit durch gekürzte Ausfallzeiten</li>
            </ul>
          </TextBlock>
        </VorteilsBlock>

        <Image
          src={Pic3}
          alt="Women with VR glasses"
          className="rounded-md sm:w-full lg:w-1/2"
        />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <VorteilsBlock
          header="Virtuelle Zusammen-arbeit"
          className="lg:w-1/2"
          childrenPadding="px-8"
          headerGap="gap-24 sm:gap-44"
        >
          <TextBlock header="Effektiv, abgestimmt, koordiniert -virtuelle Zusammenarbeit in der Produktionsplanung.">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header="Die vurtuelle Zusammenarbeit in der Produktionsplanung führt im Ergebnis zu">
            <ul className="list-disc pl-4">
              <li>Reduzierte Reisezeiten</li>
              <li>Erhöhter Effizienz</li>
              <li>Mehr Agilität</li>
              <li>Mehr Nachhaltigkeit</li>
              <li>Optimierter Kommunikation</li>
            </ul>
          </TextBlock>
        </VorteilsBlock>

        <Image
          src={Pic2}
          alt="Women with VR glasses"
          className="rounded-md sm:w-full lg:w-1/2"
        />
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 bg-lightBlue/15 lg:flex-row">
          <Image
            src={Pic4}
            alt="Img with a phone"
            className="w-full rounded-md lg:w-1/2"
          />

          <div className="px-8 lg:flex lg:flex-col lg:justify-center">
            <h2 className="mb-10 text-2xl font-semibold lg:text-4xl lg:font-medium lg:leading-[50px]">
              Wir haben die Lösung? <br /> Hier lang...
            </h2>
            <Button style="default" className="mb-10 lg:mb-0">
              Weiterlesen
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <LösungsBlock header="Keys to writing copy that actually converts and sells users">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet
          </LösungsBlock>

          <LösungsBlock header="Keys to writing copy that actually converts and sells users">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet
          </LösungsBlock>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <ContactBlock />
      </section>
    </main>
  );
}

export default HerausforderungenPage;
