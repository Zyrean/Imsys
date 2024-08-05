import Image from "next/image";

import PictureFour from "@/assets/Picture_4.png";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/aboutUs/ContactForm";
import HeaderSection from "@/components/ui/HeaderSection";

import FAQItem from "@/components/contact/FAQItem";

function ContactPage() {
  return (
    <main className="flex flex-col gap-20 pb-14">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={PictureFour} alt="Picture of a women with VR" />

          <h1 className="absolute px-8 text-4xl text-white drop-shadow-2xl">
            Wie können <br /> wir helfen?
          </h1>
        </div>

        <p className="px-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>

        <Button style="default" className="mx-8">
          Terminvereinbarung
        </Button>
      </section>

      {/* SECTION 2 */}
      <section className="relative flex flex-col gap-10 px-8">
        <HeaderSection text="Let's talk" />

        <ContactForm />
      </section>

      {/* SECTION 3 */}
      <section className="relative flex flex-col gap-10 px-8">
        <HeaderSection text="Häufig gestellte Fragen (FAQs)" />

        <div>
          <ul className="flex flex-col gap-8">
            <FAQItem isOpen={false}>
              A freguently asked question surrounding your services
            </FAQItem>
            <FAQItem isOpen={false}>
              A freguently asked question surrounding your services
            </FAQItem>
            <FAQItem isOpen={false}>
              A freguently asked question surrounding your services
            </FAQItem>
            <FAQItem isOpen={false}>
              A freguently asked question surrounding your services
            </FAQItem>

            <FAQItem isOpen={true}>
              A freguently asked question surrounding your services
            </FAQItem>
            <FAQItem isOpen={true}>
              A freguently asked question surrounding your services
            </FAQItem>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
