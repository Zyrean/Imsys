import Image from "next/image";

import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import VrMeeting from "@/assets/Mask3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import Button from "@/components/ui/Button";
import LoesungsItem from "@/components/loesungen/LoesungsItem";
import ImgLoesungOne from "@/assets/ImgLoesung1.png";
import LoesungenList from "@/components/loesungen/LoesungenList";
import InformationBlock from "@/components/ui/InformationBlock";
import ContactBlock from "@/components/contact/ContactBlock";

function page() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        h1="Lösungen für Sie gemacht"
        h1Width="w-60 sm:w-[330px] lg:w-[470px]"
        image={VrMeeting}
        h1Color="text-white"
        buttonText="Mehr erfahren"
        buttonStyle="learn more"
        buttonHref="/blog"
      >
        <div className="flex flex-col gap-10 text-black lg:text-white">
          <p className="lg:hidden">
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
        </div>
      </WebsiteInformation>

      <section className="flex flex-col gap-10">
        <HeaderSection
          text="Unsere Lösungen"
          style="desktop"
          className="sm:gap-44"
        />
        <LoesungenList />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-1/2">
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

        <Image
          src={VrMeeting}
          alt="Team with Vr glases"
          className="w-full rounded-md lg:w-1/2 lg:pr-8"
        />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row-reverse">
        <div className="flex flex-col gap-6 lg:w-1/2">
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

        <Image
          src={VrMeeting}
          alt="Team with Vr glases"
          className="w-full rounded-md lg:w-1/2 lg:pr-8"
        />
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <HeaderSection text={`Schritt 3`} style="desktop" />

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
          src={VrMeeting}
          alt="Team with Vr glases"
          className="w-full rounded-md lg:w-1/2 lg:pr-8"
        />
      </section>

      <section>
        <ContactBlock bgColor="bg-lightBlue/15" />
      </section>
    </main>
  );
}

export default page;
