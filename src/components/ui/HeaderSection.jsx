import Button from "./Button";

function HeaderSection({ text }) {
  return (
    <div className="flex justify-between">
      <h1 className="w-48 text-4xl font-semibold">{text}</h1>

      <Button icon="arrow" className="self-end"></Button>
    </div>
  );
}

export default HeaderSection;
