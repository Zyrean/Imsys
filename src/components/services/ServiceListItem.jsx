import Image from "next/image";
import Button from "../ui/Button";

function ServiceListItem({ header, className, image, buttonText }) {
  return (
    <li className={`flex flex-col`}>
      <div className="mb-2 flex flex-row-reverse justify-between lg:flex-col">
        <Image
          src={image}
          alt="service icon"
          height={40}
          className="mb-3 self-end lg:self-start"
        />
        <h2 className="mb-3 mt-6 w-44 text-2xl font-semibold">{header}</h2>
      </div>

      <p className="leading-relaxed">
        Sie stehen am Anfang Ihres Vorhabens, sind mitten in der Planung und
        brauchen mehr Orientierung oder eine zweite Meinung? Oder Sie wollen
        eine bestehende Anlage modernisieren? Mit Hilfe unserer Erfahrung und
        Kompetenz finden Sie die richtigen Antworten.
      </p>

      <Button style="read article" className="mt-1">
        {buttonText}
      </Button>
    </li>
  );
}

export default ServiceListItem;
