import Button from "./Button";

function HeaderSection({ text, style, to, className }) {
  if (style === "desktop") {
    return (
      <div className={`flex justify-between px-8 lg:mt-8 ${className}`}>
        <h1 className="text-4xl font-semibold lg:text-4xl">{text}</h1>

        <Button icon="arrow" className="self-end" to={to}></Button>
      </div>
    );
  }

  return (
    <div
      className={`${className} justify-between sm:text-xs lg:flex-col lg:justify-normal lg:gap-4 lg:self-end`}
    >
      <h1 className="w-52 text-4xl font-semibold lg:w-36">{text}</h1>

      <Button icon="arrow" className="self-end" to={to}></Button>
    </div>
  );
}

export default HeaderSection;
