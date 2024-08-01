import { homepageInfo } from "@/services/homepage-info-data";
import ServiceListItem from "./ServiceListItem";

function ServiceList() {
  return (
    <ul className="grid grid-cols-2 gap-12">
      <ServiceListItem header="Research" />
      <ServiceListItem header="Product Design" />
      <ServiceListItem header="Research" />
      <ServiceListItem header="Product Design" />
      <ServiceListItem header="Research" />
      <ServiceListItem header="Product Design" />
    </ul>
  );
}

export default ServiceList;
