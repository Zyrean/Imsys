import CustomerPost from "../../customer/CustomerPost";
import ButtonNextBack from "../../ui/ButtonNextBack";
import HeaderSection from "../../ui/HeaderSection";

function KundenPosts() {
  return (
    <section className="flex flex-col gap-10">
      <HeaderSection
        text={`Was unsere Kunden sagen?`}
        className={"gap-4 px-8 sm:gap-24"}
        style="desktop"
      />

      <div className="lg:flex lg:gap-4 lg:px-8">
        <CustomerPost />
        <CustomerPost display="hidden lg:flex" />
        <CustomerPost display="hidden lg:flex" />
      </div>

      <div className="flex justify-between px-8 lg:justify-end lg:gap-4">
        <ButtonNextBack className="rotate-90" />
        <ButtonNextBack className="rotate-[270deg]" />
      </div>
    </section>
  );
}

export default KundenPosts;
