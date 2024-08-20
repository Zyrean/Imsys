import CustomerItem from "./CustomerItem";
import DBLogo from "@/assets/Deutsche_Bahn_AG-Logo.svg";
import PorscheLogo from "@/assets/Porsche_Logo.svg";
import HerrenknechtLogo from "@/assets/Herrenknecht_logo.svg";
import BauschLogo from "@/assets/Bausch_+_Stroebel_Logo.svg";
import SchottLogo from "@/assets/Schott_(Unternehmen)_logo.svg";

function CustomerList() {
  return (
    <div className="flex justify-between px-8 lg:w-full">
      <CustomerItem
        customer="DB Netze"
        image={DBLogo}
        to="https://www.bahn.de"
      />
      <CustomerItem
        customer="Porsche"
        image={PorscheLogo}
        to="https://www.porsche.com"
      />
      <CustomerItem
        customer="Herrenknecht"
        image={HerrenknechtLogo}
        to="https://www.herrenknecht.com
      "
      />
      <CustomerItem
        customer="Bausch+Ströbel"
        image={BauschLogo}
        className="hidden lg:flex"
        to="https://www.bausch-stroebel.com"
      />
      <CustomerItem
        customer="Schott"
        image={SchottLogo}
        className="hidden lg:flex"
        to="https://www.schott.com"
      />
    </div>
  );
}

export default CustomerList;
