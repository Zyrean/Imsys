import NewsLetterForm from "../../customer/NewsLetterForm";
import HeaderSection from "../../ui/HeaderSection";
import InformationBlock from "../../ui/InformationBlock";

function Newsletter() {
  return (
    <section className="flex flex-col justify-between gap-10 bg-lightBlue/15 py-6 lg:flex-row">
      <HeaderSection
        style="desktop"
        text={`News-letter`}
        className={"gap-24 px-8 lg:hidden"}
      />

      <h1 className="hidden w-80 pl-8 text-4xl font-semibold lg:block">
        Bleib mit dem Newsletter auf dem Laufenden
      </h1>

      <div className="flex flex-col gap-10 lg:w-1/2">
        <InformationBlock title="none">
          In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
          wohl am meisten unterschätzte Bereich – Service und Schulung.
          Dement­sprechend ist dieser Sektor bei uns immer im Fokus, auch in
          Ihrem Interesse.
        </InformationBlock>

        <NewsLetterForm inputBgColor="bg-lightBlue/5" />
      </div>
    </section>
  );
}

export default Newsletter;
