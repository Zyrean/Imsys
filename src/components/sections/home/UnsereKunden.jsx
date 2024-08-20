import CustomerList from "../../customer/CustomerList";
import HeaderSection from "../../ui/HeaderSection";

function UnsereKunden() {
  return (
    <section className="flex flex-col gap-10 lg:items-center lg:justify-between">
      <HeaderSection
        text="Unsere Kunden"
        style="desktop"
        className="gap-24 sm:gap-44 lg:hidden"
      />
      <h2 className="hidden text-3xl lg:block">Unsere Kunden</h2>

      <CustomerList />
    </section>
  );
}

export default UnsereKunden;
