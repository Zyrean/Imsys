import HeaderSection from "../ui/HeaderSection";
import ContactForm from "./ContactForm";

function ContactFormular() {
  return (
    <section className="relative flex flex-col gap-10 bg-lightBlue/25 px-8 py-6 lg:flex-row lg:gap-44">
      <div className="flex flex-col gap-10 lg:w-1/3">
        <HeaderSection text="Let's talk" style="desktop" px="px-0" />

        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </p>
      </div>

      <ContactForm inputBgColor="bg-lightBlue/5" />
    </section>
  );
}

export default ContactFormular;
