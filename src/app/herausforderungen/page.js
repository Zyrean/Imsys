import Image from "next/image";

import Button from "@/components/ui/Button";
import HeaderSection from "@/components/ui/HeaderSection";
import Grafic from "@/assets/VorteileGrafic.png";
import Pic1 from "@/assets/Pic1.png";
import Pic2 from "@/assets/Pic2.png";
import Pic3 from "@/assets/Pic3.png";
import Pic4 from "@/assets/Pic4.png";
import TextBlock from "@/components/herausforderungen/TextBlock";
import LösungsBlock from "@/components/herausforderungen/LösungsBlock";
import ContactBlock from "@/components/contact/ContactBlock";

function HerausforderungenPage() {
  return (
    <main className="flex flex-col gap-20 pb-14">
      {/* SECTION 1 */}
      <section className="relative flex flex-col gap-10">
        <div className="flex items-center">
          <Image src={Pic1} alt="Picture of an office" />

          <h1 className="absolute px-8 text-4xl">
            Standort- <br />
            übergreifendes Arbeiten
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <Button style="learn more">Zur Lösung</Button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 px-8">
          <HeaderSection text="Ihre Vorteile" />

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </p>
        </div>

        <Image src={Grafic} alt="Grafic of company skills" />
      </section>

      {/* SECTION 3 */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 px-8">
          <HeaderSection text="Konstruk- tionsteam" />

          <TextBlock
            header="Dezentral, schnell, agil -mit VR sind Ihre
              Konstruktionsbesprechungen genau das."
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header=" Die Zusammenarbeit von Konstruktionsteams mit VR/AR führt Sie zu:">
            <ul className="list-disc pl-4">
              <li>kürzeren Entwicklungszeiten</li>
              <li>schnelleren Entscheidungsfindung</li>
              <li>Kosten- und Zeitersparnis</li>
              <li>mehr Agilität</li>
            </ul>
          </TextBlock>
        </div>

        <Image src={Pic2} alt="Women with VR glasses" />
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 px-8">
          <HeaderSection text="Remote Service" />

          <TextBlock header="Schneller Service, schnelle Reaktion, schnelle Verfügbarkeit - Ein neues Servicelebel">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header="Der Einsatz von Remote-Service führt im Ergebnis zu">
            <ul className="list-disc pl-4">
              <li>Kosten- und Zeiterstarung</li>
              <li>
                Flexiblen Einsatz des Expertenwissens (standortunabhängig)
              </li>
              <li>Mehr nachhaltigkeit</li>
              <li>Höhere Wettbewerbsfähigkeit</li>
              <li>hohe Kundenzufriedenheit durch gekürzte Ausfallzeiten</li>
            </ul>
          </TextBlock>
        </div>

        <Image src={Pic3} alt="Women with VR glasses" />
      </section>

      {/* SECTION 5 */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 px-8">
          <HeaderSection text="Virtuelle Zusammen- arbeit" />

          <TextBlock header="Effektiv, abgestimmt, koordiniert -virtuelle Zusammenarbeit in der Produktionsplanung.">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed.
          </TextBlock>

          <TextBlock header="Die vurtuelle Zusammenarbeit in der Produktionsplanung führt im Ergebnis zu">
            <ul className="list-disc pl-4">
              <li>Reduzierte Reisezeiten</li>
              <li>Erhöhter Effizienz</li>
              <li>Mehr Agilität</li>
              <li>Mehr Nachhaltigkeit</li>
              <li>Optimierter Kommunikation</li>
            </ul>
          </TextBlock>
        </div>

        <Image src={Pic3} alt="Women with VR glasses" />
      </section>

      {/* SECTION 6 */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 bg-gray-200">
          <Image src={Pic4} alt="Img with a phone" />
          <div className="px-8">
            <h2 className="mb-10 text-2xl font-semibold">
              Wir haben die Lösung? <br /> Hier lang...
            </h2>
            <Button style="default" className="mb-10">
              Weiterlesen
            </Button>
          </div>
        </div>

        <LösungsBlock header="Keys to writing copy that actually converts and sells users">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod. Lorem ipsum dolor sit amet
        </LösungsBlock>

        <LösungsBlock header="Keys to writing copy that actually converts and sells users">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod. Lorem ipsum dolor sit amet
        </LösungsBlock>
      </section>

      {/* SECTION 7 */}
      <section className="flex flex-col gap-10">
        <ContactBlock />
      </section>
    </main>
  );
}

export default HerausforderungenPage;
