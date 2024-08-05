import { homepageInfo } from "@/services/homepage-info-data";
import ServiceListItem from "./ServiceListItem";

function ServiceList() {
  return (
    <ul className="grid grid-cols-2 gap-12 lg:flex lg:gap-6">
      <ServiceListItem header="Research" />
      <ServiceListItem header="Product Design" />
      <ServiceListItem header="Research" />
      <ServiceListItem header="Product Design" className="lg:hidden" />
      <ServiceListItem header="Research" className="lg:hidden" />
      <ServiceListItem header="Product Design" className="lg:hidden" />
    </ul>
  );
}

export default ServiceList;
