import ServiceListItem from "./ServiceListItem";
import TrainingIcon from "@/assets/training-class-svgrepo-com.svg";
import StrategyIcon from "@/assets/strategy-planning-pr-svgrepo-com.svg";
import TeamworkIcon from "@/assets/teamwork-svgrepo-com.svg";

function ServiceList() {
  return (
    <ul className=" flex flex-col justify-between gap-12 px-8 lg:flex-row">
      <ServiceListItem
        header="Beratung + Planung"
        image={StrategyIcon}
        buttonText="Hier planen"
      />
      <ServiceListItem
        header="Projektierung + Umsetzung"
        image={TeamworkIcon}
        buttonText="Hier umsetzen"
      />
      <ServiceListItem
        header="Service + Schulung"
        image={TrainingIcon}
        buttonText="Hier schulen"
      />
    </ul>
  );
}

export default ServiceList;
