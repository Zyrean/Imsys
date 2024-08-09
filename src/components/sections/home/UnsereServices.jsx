import ServiceList from "../../services/ServiceList";
import HeaderSection from "../../ui/HeaderSection";

function UnsereServices() {
  return (
    <section className="flex flex-col gap-10 px-8 lg:flex-row lg:justify-between lg:gap-0">
      <HeaderSection text="Unsere Services" to="/blog" />

      <ServiceList />
    </section>
  );
}

export default UnsereServices;
