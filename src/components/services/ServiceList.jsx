import { homepageInfo } from "@/services/homepage-info-data";
import ServiceListItem from "./ServiceListItem";

function ServiceList() {
  return (
    <ul className="grid grid-cols-2 gap-12 lg:flex lg:gap-14">
      <ServiceListItem header="Beratung + Planung" />
      <ServiceListItem header="Projektierung + Umsetzung" />
      <ServiceListItem header="Service + Schulung" />
      <ServiceListItem header="Beratung + Planung" className="lg:hidden" />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        className="lg:hidden"
      />
      <ServiceListItem header="Service + Schulung" className="lg:hidden" />
    </ul>
  );
}

export default ServiceList;
