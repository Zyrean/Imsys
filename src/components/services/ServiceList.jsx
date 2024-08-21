import ServiceListItem from "./ServiceListItem";
import TrainingIcon from "@/assets/training-class-svgrepo-com.svg";
import StrategyIcon from "@/assets/strategy-planning-pr-svgrepo-com.svg";
import TeamworkIcon from "@/assets/teamwork-svgrepo-com.svg";

function ServiceList() {
  return (
    <ul className=" flex flex-col justify-between gap-12 px-8 lg:flex-row ">
      <ServiceListItem header="Beratung + Planung" image={StrategyIcon} />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        image={TeamworkIcon}
      />
      <ServiceListItem header="Service + Schulung" image={TrainingIcon} />
      <ServiceListItem
        header="Beratung + Planung"
        image={StrategyIcon}
        className="hidden"
      />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        // className="lg:hidden"
        className="hidden"
        image={TeamworkIcon}
      />
      <ServiceListItem
        header="Service + Schulung"
        // className="lg:hidden"
        className="hidden"
        image={TrainingIcon}
      />
    </ul>
  );
}

export default ServiceList;
