import Image from "next/image";

import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import VrMeeting from "@/assets/Mask3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import LoesungenList from "@/components/loesungen/LoesungenList";
import InformationBlock from "@/components/ui/InformationBlock";
import ContactBlock from "@/components/contact/ContactBlock";
import Picture1 from "@/assets/Picture1_1200x660.png";
import ImgLösungen from "@/assets/Lösungen.png";

function page() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        h1="Lösungen für Sie leicht gemacht"
        h1Width="sm:w-[280px]"
        h1Color="text-black"
        image={ImgLösungen}
        buttonText="Zu unserem Blog"
        buttonStyle="learn more"
        buttonHref="/blog"
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

      <section className="flex flex-col gap-10">
        <HeaderSection
          text="Unsere Lösungen"
          style="desktop"
          className="sm:gap-44"
        />
        <LoesungenList />
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row">
        <div className="flex flex-col gap-6 lg:mb-8 lg:w-1/2">
          <HeaderSection
            text={`Schritt 1`}
            style="desktop"
            className="gap-24"
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

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={VrMeeting}
            alt="Team with Vr glases"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row-reverse">
        <div className="flex flex-col gap-6 lg:mb-8 lg:w-1/2">
          <HeaderSection
            text={`Schritt 2`}
            style="desktop"
            className="gap-24"
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

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={VrMeeting}
            alt="Team with Vr glases"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:items-center lg:flex-row">
        <div className="flex flex-col gap-6 lg:mb-8 lg:w-1/2">
          <HeaderSection text={`Schritt 3`} style="desktop" />

          <InformationBlock>
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich - Service und Schulung.
            Dementsprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse. Sind Service und Wartung im Gesamtkonzept gut
            integriert, ist das eine Garantie, dass die Wertschöpfung Ihrer
            digitalen Arbeitsumgebung nicht unterbrochen wird, mit all den
            positiven Effekten auch für Sie und Ihre Mitarbeiter*innen.
          </InformationBlock>
        </div>

        <div className="h-full w-full px-8 lg:w-1/2">
          <Image
            src={VrMeeting}
            alt="Team with Vr glases"
            className="h-full w-full rounded-md"
          />
        </div>
      </section>

      <section>
        <ContactBlock />
      </section>
    </main>
  );
}

export default page;
