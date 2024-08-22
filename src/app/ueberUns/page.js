import Image from "next/image";

import PictureTwo from "@/assets/Picture2.png";
import PictureThree from "@/assets/Picture3.png";
import HeaderSection from "@/components/ui/HeaderSection";
import Qualification from "@/components/aboutUs/Qualification";
import Button from "@/components/ui/Button";
import TeamBewerben from "@/assets/Team_Bewerben.png";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import UnsereKunden from "@/components/sections/home/UnsereKunden";
import ContactFormular from "@/components/contact/ContactFormular";

function AboutUsPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        style="small"
        h1="Über uns, wer sind wir?"
        h1Color="text-black"
        h1Width="w-[340px] lg:w-[450px]"
        image={PictureTwo}
        buttonText="Kontaktieren Sie uns"
        buttonStyle="learn more"
        buttonHref="/kontakt"
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

      <section className="relative flex flex-col gap-10 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-10 lg:mb-8 lg:w-1/2">
            <HeaderSection
              text="Was macht den Unterschied"
              className="gap-10 px-8 sm:gap-[174px]"
              style="desktop"
            />

            <div className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2">
              <Qualification num="01" header="Beraten + Planen">
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
              <Qualification num="02" header="Projektierung + Umsetzung">
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
              <Qualification
                num="03"
                header="Beraten + Planen"
                className="lg:hidden"
              >
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
              <Qualification
                num="04"
                header="Projektierung + Umsetzung"
                className="lg:hidden"
              >
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
            </div>
          </div>

          <div className="h-full w-full px-8 lg:w-1/2">
            <Image
              src={PictureThree}
              alt="Picture 3"
              className="h-full w-full rounded-md"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-row-reverse lg:items-center">
          <div className="flex flex-col gap-10 lg:mb-8 lg:w-1/2">
            <div className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2">
              <Qualification num="03" header="Beraten + Planen">
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
              <Qualification num="04" header="Projektierung + Umsetzung">
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse.
              </Qualification>
            </div>
          </div>

          <div className="h-full w-full px-8 lg:w-1/2">
            <Image
              src={PictureThree}
              alt="Picture 3"
              className="h-full w-full rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-10">
        <HeaderSection
          text="Daten und Fakten"
          className="px-8 sm:gap-44"
          style="desktop"
        />

        <div className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2">
          <Qualification
            num="01"
            header="Spontan und individuell"
            h3Width="w-[200px] lg:w-[130px]"
          >
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </Qualification>
          <Qualification
            num="02"
            header="Über 1200 zufrienden Kunden"
            h3Width="w-[200px] lg:w-[200px]"
          >
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </Qualification>
          <Qualification
            num="03"
            header="25+ Jahre erfahrung"
            h3Width="w-[100px] lg:w-[120px]"
          >
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </Qualification>
          <Qualification
            num="04"
            header="Produktiv und Kompetent"
            h3Width="w-[200px] lg:w-[200px]"
          >
            In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
            wohl am meisten unterschätzte Bereich – Service und Schulung.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </Qualification>
        </div>
      </section>

      <section className="relative flex flex-col gap-10">
        <UnsereKunden />
      </section>

      <section className="relative flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <HeaderSection
            text="Das sind Wir / Karriere"
            style="desktop"
            className="flex gap-[80px] px-8 sm:gap-[210px]"
          />

          <div className="flex flex-col gap-10">
            <div className="flex justify-between gap-14 px-8 leading-relaxed">
              <p>
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse. Dement­sprechend ist dieser
                Sektor bei uns immer im Fokus, auch in Ihrem Interesse.
                Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch
                in Ihrem Interesse.
              </p>

              <p className="hidden lg:flex">
                In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das
                der wohl am meisten unterschätzte Bereich – Service und
                Schulung. Dement­sprechend ist dieser Sektor bei uns immer im
                Fokus, auch in Ihrem Interesse. Dement­sprechend ist dieser
                Sektor bei uns immer im Fokus, auch in Ihrem Interesse.
                Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch
                in Ihrem Interesse.
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full px-8 lg:mx-auto lg:w-3/4">
          <Image
            src={TeamBewerben}
            alt="Picture from the Team"
            className="h-full w-full rounded-md"
          />
        </div>

        <p className="px-8 leading-relaxed">
          In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
          wohl am meisten unterschätzte Bereich – Service und Schulung.
          Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
          Ihrem Interesse. Dement­sprechend ist dieser Sektor bei uns immer im
          Fokus, auch in Ihrem Interesse. Dement­sprechend ist dieser Sektor bei
          uns immer im Fokus, auch in Ihrem Interesse. In Ihrem Gesamtkonzept
          für Ihre digitale Arbeitsumgebung ist das der wohl am meisten
          unterschätzte Bereich – Service und Schulung. Dement­sprechend ist
          dieser Sektor bei uns immer im Fokus, auch in Ihrem Interesse.
          Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
          Ihrem Interesse.{" "}
          <span className="hidden lg:flex">
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse. In Ihrem Gesamtkonzept für Ihre digitale
            Arbeitsumgebung ist das der wohl am meisten unterschätzte Bereich –
            Service und Schulung. Dement­sprechend ist dieser Sektor bei uns
            immer im Fokus, auch in Ihrem Interesse. Dement­sprechend ist dieser
            Sektor bei uns immer im Fokus, auch in Ihrem Interesse.
            Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
            Ihrem Interesse.
          </span>
        </p>

        <Button
          style="learn more"
          className="ml-8 lg:self-start"
          to="/kontakt"
          shadow="drop-shadow-none"
        >
          Jetzt bewerben
        </Button>
      </section>

      <ContactFormular />
    </main>
  );
}

export default AboutUsPage;
