import Button from "../ui/Button";

function ContactBlock({ bgColor }) {
  return (
    <div
      className={`flex flex-col gap-6 px-8 py-6 lg:flex-row lg:items-center lg:justify-between ${bgColor} `}
    >
      <div>
        <h2 className="mb-2 text-xl font-semibold">Haben Sie Fragen?</h2>
        <p className="leading-relaxed">
          Rufen Sie uns an oder machen Sie einen Termin aus.
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button style="default small" to="/kontakt">
          Terminvereinbarung
        </Button>
        <Button style="default border" to="/kontakt">
          Kontakt
        </Button>
      </div>
    </div>
  );
}

export default ContactBlock;
