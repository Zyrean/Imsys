import Image from "next/image";
import Button from "../ui/Button";

function BlogItem({ image, interests, title, className }) {
  return (
    <li
      className={`${className} flex flex-col gap-3 rounded-md border-[1px] border-gray-300`}
    >
      <Image
        src={image}
        alt={`Image of`}
        className="rounded-tl-md rounded-tr-md lg:w-full"
      />

      <div className="mt-1 flex flex-col gap-2 px-4">
        <h5 className="text-sm font-semibold uppercase text-orange">
          {interests}
        </h5>
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-600">
          In Ihrem Gesamtkonzept für Ihre digitale Arbeitsumgebung ist das der
          wohl am meisten unterschätzte Bereich – Service und Schulung.
        </p>
        <Button style="read article" className="mb-2 mt-2">
          Artikel lesen
        </Button>
      </div>
    </li>
  );
}

export default BlogItem;
