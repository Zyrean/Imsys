import Button from "../ui/Button";

function LösungsBlock({ header, children }) {
  return (
    <div className="bg-lightBlue/15 px-8 py-10">
      <h3 className="mb-4 text-xl font-semibold">{header}</h3>
      <p className="mb-10 leading-relaxed">{children}</p>
      <Button style="default small">Weiterlesen</Button>
    </div>
  );
}

export default LösungsBlock;
