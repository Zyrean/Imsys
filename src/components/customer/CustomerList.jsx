import CustomerItem from "./CustomerItem";
import DBLogo from "@/assets/Deutsche_Bahn_AG-Logo.svg";
import PorscheLogo from "@/assets/Porsche_Logo.svg";
import HerrenknechtLogo from "@/assets/Herrenknecht_logo.svg";
import BauschLogo from "@/assets/Bausch_+_Stroebel_Logo.svg";
import SchottLogo from "@/assets/Schott_(Unternehmen)_logo.svg";

function CustomerList() {
  return (
    <div className="flex justify-between px-8 lg:w-full">
      <CustomerItem customer="DB Netze" image={DBLogo} />
      <CustomerItem customer="Porsche" image={PorscheLogo} />
      <CustomerItem customer="Herrenknecht" image={HerrenknechtLogo} />
      <CustomerItem
        customer="Bausch+Ströbel"
        image={BauschLogo}
        className="hidden lg:flex"
      />
      <CustomerItem
        customer="Schott"
        image={SchottLogo}
        className="hidden lg:flex"
      />
    </div>
  );
}

export default CustomerList;
