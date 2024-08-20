import LoesungsItem from "./LoesungsItem";
import ImgLoesungOne from "@/assets/ImgLoesung1.png";
import ImgLoesungTwo from "@/assets/ImgLoesung2.png";
import ImgLoesungThree from "@/assets/ImgLoesung3.png";
import ImgLoesungFour from "@/assets/ImgLoesung4.png";
import ImgLoesungFive from "@/assets/ImgLoesung5.png";

function LoesungenList() {
  return (
    <ul className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2">
      <LoesungsItem image={ImgLoesungOne} header="Lösung 1">
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>

      <LoesungsItem image={ImgLoesungTwo} header="Lösung 2">
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>

      <LoesungsItem image={ImgLoesungThree} header="Lösung 3">
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>

      <LoesungsItem image={ImgLoesungFour} header="Lösung 4">
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>

      <LoesungsItem
        image={ImgLoesungFive}
        header="Lösung 5"
        className="hidden lg:flex"
      >
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>

      <LoesungsItem
        image={ImgLoesungFive}
        header="Lösung 5"
        className="hidden lg:flex"
      >
        Egal von welchem Standort, unabhängig von der Teamgröße, ob innerhalb
        eines Landes oder weltweit, ob...
      </LoesungsItem>
    </ul>
  );
}

export default LoesungenList;
