import Image from "next/image";

import Button from "@/components/ui/Button";
import HeaderSection from "@/components/ui/HeaderSection";
import Grafic from "@/assets/VorteileGrafic.png";
import Pic1 from "@/assets/Pic1.png";
import Pic2 from "@/assets/14.png";
import Pic3 from "@/assets/Pic3.png";
import Pic4 from "@/assets/Pic4.png";
import Pic5 from "@/assets/Pic2.png";
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
        h1Width="sm:w-[340px]"
        image={Pic1}
        h1Color="text-black"
        buttonText="Zu unseren Lösungen"
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

          <div className="flex flex-col gap-6 px-8 leading-relaxed lg:flex-row">
            <p className="lg:w-1/2">
              In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
              der wohl am meisten unterschätzte Bereich – Service und Schulung.
              Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
              Ihrem Interesse. Sind Service und Wartung im Gesamtkonzept gut
              integriert, ist das eine Garantie, dass die Wertschöpfung Ihrer
              digitalen Arbeitsumgebung nicht unterbrochen wird, mit all den
              positiven Effekten auch für Sie und Ihre Mitarbeiter*innen.
            </p>
            <br />
            <p className="lg:w-1/2">
              In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
              der wohl am meisten unterschätzte Bereich – Service und Schulung.
              Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
              Ihrem Interesse. Sind Service und Wartung im Gesamtkonzept gut
              integriert, ist das eine Garantie, dass die Wertschöpfung Ihrer
              digitalen Arbeitsumgebung nicht unterbrochen wird, mit all den
              positiven Effekten auch für Sie und Ihre Mitarbeiter*innen.
            </p>
          </div>
        </div>

        <div className="mt-10 h-full w-full px-8 lg:w-3/4">
          <Image
            src={Grafic}
            alt="Grafic of company skills"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row lg:justify-between lg:gap-10 ">
        <VorteilsBlock
          header="Konstruk-tionsteam"
          className="lg:mb-8 lg:w-1/2"
          childrenPadding="px-8"
          headerGap="gap-24"
        >
          <TextBlock header="Dezentral, schnell, agil -mit VR sind Ihre Konstruktionsbesprechungen genau das.">
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
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

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={Pic5}
            alt="Women with VR glasses"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row-reverse lg:justify-between lg:gap-0">
        <VorteilsBlock
          header="Remote Service"
          className="lg:mb-8 lg:w-1/2"
          childrenPadding="px-8"
          headerGap="gap-44"
        >
          <TextBlock header="Schneller Service, schnelle Reaktion, schnelle Verfügbarkeit - Ein neues Servicelebel">
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
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

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={Pic2}
            alt="Women with VR glasses"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row lg:justify-between lg:gap-0">
        <VorteilsBlock
          header="Virtuelle Zusammen-arbeit"
          className="lg:w-1/2"
          childrenPadding="px-8 lg:mb-8"
          headerGap="gap-24 sm:gap-44"
        >
          <TextBlock header="Effektiv, abgestimmt, koordiniert -virtuelle Zusammenarbeit in der Produktionsplanung.">
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
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

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={Pic3}
            alt="Women with VR glasses"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 bg-lightBlue/15 px-8 py-10 lg:hidden lg:flex-col lg:justify-center">
          <h2 className="text-3xl sm:w-80 lg:text-4xl lg:font-medium lg:leading-[50px]">
            Wir haben die Lösung? Hier lang...
          </h2>
          <Image
            src={Pic4}
            alt="Img with a phone"
            className="w-full rounded-md sm:self-center lg:w-1/2"
          />
          <Button style="default" className="lg:mb-0">
            Zur Lösung
          </Button>
        </div>

        <div className="hidden items-center gap-10 bg-lightBlue/15 px-8 py-10 lg:flex lg:justify-between">
          <Image
            src={Pic4}
            alt="Img with a phone"
            className="w-[400px] rounded-md"
          />
          <div className="flex flex-col gap-10 lg:pr-8">
            <h2 className="w-[400px] text-4xl font-medium leading-[50px]">
              Wir haben die Lösung? Hier lang...
            </h2>
            <Button style="default" className="lg:mb-0" to="/loesungen">
              Zur Lösung
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <LösungsBlock header="Zur schnellen und einfachen Lösung mit Imsys">
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </LösungsBlock>

          <LösungsBlock header="Zur schnellen und einfachen Lösung mit Imsys">
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
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
