import NewsLetterForm from "../../customer/NewsLetterForm";
import HeaderSection from "../../ui/HeaderSection";
import InformationBlock from "../../ui/InformationBlock";

function Newsletter() {
  return (
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
  );
}

export default Newsletter;
