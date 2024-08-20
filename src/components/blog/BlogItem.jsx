import Image from "next/image";
import Button from "../ui/Button";

function BlogItem({ image, interests, title, className }) {
  return (
    <li
      className={`${className} flex flex-col gap-2 rounded-md border-[1px] border-gray-300`}
    >
      <Image
        src={image}
        alt={`Image of`}
        className="rounded-tl-md rounded-tr-md lg:w-full"
      />

      <div className="flex flex-col gap-2 px-2 sm:px-4">
        <h5 className="text-sm uppercase text-blue">{interests}</h5>
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod sed diam nonumy eirmod.
        </p>
        <Button style="read article" className="mb-2 mt-6 px-2">
          Artikel lesen
        </Button>
      </div>
    </li>
  );
}

export default BlogItem;
