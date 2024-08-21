import PictureFour from "@/assets/Picture_4.png";
import HeaderSection from "@/components/ui/HeaderSection";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import FAQList from "@/components/contact/FAQList";
import ContactFormular from "@/components/contact/ContactFormular";

function ContactPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        style="split"
        h1={`Wie können wir helfen?`}
        h1Color="text-black"
        h1Width="w-60 sm:w-[300px] lg:w-[270px]"
        image={PictureFour}
        buttonText="Terminvereinbarung"
        buttonStyle="default"
        buttonHref="/loesungen"
      >
        <strong>IMSYS</strong> ist seit über 20 Jahren eine der führenden
        XR-Agenturen für Beratung, Planung und Projektierung von digitalen
        Arbeitsumgebungen. Wir sind spezialisiert auf gut abgestimmte
        Medienkonzepte, Planungsdienstleistungen, Realisierung und
        Servicelösungen für Virtual Reality-, Augmented Reality- und Mixed
        Reality-Umgebungen.
      </WebsiteInformation>

      <ContactFormular />

      <section className="relative flex flex-col gap-10 px-8">
        <HeaderSection
          text="Häufig gestellte Fragen"
          style="desktop"
          px="px-0"
          className="gap-4 sm:gap-24"
        />

        <FAQList />
      </section>
    </main>
  );
}

export default ContactPage;
