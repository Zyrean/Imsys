import ServiceList from "../../services/ServiceList";
import HeaderSection from "../../ui/HeaderSection";

function UnsereServices() {
  return (
    <section className="flex flex-col gap-10">
      <HeaderSection
        text="Unsere Services"
        to="/blog"
        style="desktop"
        className="gap-10 sm:gap-44"
      />

      <ServiceList />
    </section>
  );
}

export default UnsereServices;
