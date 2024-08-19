import ServiceListItem from "./ServiceListItem";
import TrainingIcon from "@/assets/training-class-svgrepo-com.svg";
import StrategyIcon from "@/assets/strategy-planning-pr-svgrepo-com.svg";
import TeamworkIcon from "@/assets/teamwork-svgrepo-com.svg";

function ServiceList() {
  return (
    <ul className="grid grid-cols-2 gap-12 px-8 lg:flex lg:justify-between">
      <ServiceListItem header="Beratung + Planung" image={StrategyIcon} />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        image={TeamworkIcon}
      />
      <ServiceListItem header="Service + Schulung" image={TrainingIcon} />
      <ServiceListItem
        header="Beratung + Planung"
        // className="lg:hidden"
        image={StrategyIcon}
      />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        className="lg:hidden"
        image={TeamworkIcon}
      />
      <ServiceListItem
        header="Service + Schulung"
        className="lg:hidden"
        image={TrainingIcon}
      />
    </ul>
  );
}

export default ServiceList;
