import PictureFour from "@/assets/Picture_4.png";
import ContactForm from "@/components/aboutUs/ContactForm";
import HeaderSection from "@/components/ui/HeaderSection";
import WebsiteInformation from "@/components/sections/home/WebsiteInformation";
import FAQList from "@/components/contact/FAQList";

function ContactPage() {
  return (
    <main className="flex flex-col gap-28 pb-14 lg:gap-36">
      <WebsiteInformation
        style="split"
        h1={`Wie können wir helfen?`}
        h1Color="text-black"
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

      <section className="bg-lightBlue/15 relative flex flex-col gap-10 px-8 py-6 lg:flex-row lg:gap-44">
        <div className="flex flex-col gap-10 lg:w-1/3">
          <HeaderSection text="Let's talk" />

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod.
          </p>
        </div>

        <ContactForm inputBgColor="bg-lightBlue/5" />
      </section>

      <section className="relative flex flex-col gap-10 px-8">
        <HeaderSection text="Häufig gestellte Fragen (FAQs)" />

        <FAQList />
      </section>
    </main>
  );
}

export default ContactPage;
