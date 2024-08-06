import Button from "./Button";

function HeaderSection({ text, display = "flex", style }) {
  if (style === "desktop") {
    return (
      <div className={`${display} justify-between px-8 lg:mt-8`}>
        <h1 className="text-4xl font-semibold sm:w-60 lg:w-60 lg:text-4xl">
          {text}
        </h1>

        <Button icon="arrow" className="self-end"></Button>
      </div>
    );
  }

  return (
    <div
      className={`${display} justify-between sm:text-xs lg:flex-col lg:justify-normal lg:gap-4 lg:self-end `}
    >
      <h1 className="w-52 text-4xl font-semibold lg:w-36">{text}</h1>

      <Button icon="arrow" className="self-end"></Button>
    </div>
  );
}

export default HeaderSection;
