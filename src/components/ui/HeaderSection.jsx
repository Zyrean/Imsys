import Button from "./Button";

function HeaderSection({ text, className }) {
  return (
    <div
      className={
        "flex justify-between lg:flex-col lg:justify-normal lg:gap-4 lg:self-end " +
        className
      }
    >
      <h1 className="w-52 text-4xl font-semibold lg:w-36">{text}</h1>

      <Button icon="arrow" className="self-end"></Button>
    </div>
  );
}

export default HeaderSection;
