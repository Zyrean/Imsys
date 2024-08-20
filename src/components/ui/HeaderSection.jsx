import Button from "./Button";

function HeaderSection({ text, style, to, className, px = "px-8" }) {
  if (style === "desktop") {
    return (
      <div className={`flex justify-between lg:mt-8 ${px} ${className}`}>
        <h1 className="text-4xl font-semibold lg:text-4xl">{text}</h1>

        <Button icon="arrow" className="self-end" to={to}></Button>
      </div>
    );
  }

  return (
    <div className={`${className} `}>
      <h1 className="w-52 text-4xl font-semibold lg:w-36">{text}</h1>

      <Button icon="arrow" className="self-end" to={to}></Button>
    </div>
  );
}

export default HeaderSection;
