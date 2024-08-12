import Button from "../ui/Button";

function ContactBlock() {
  return (
    <div className="flex flex-col gap-6 px-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-xl font-semibold">Haben Sie Fragen?</h2>
        <p>Rufen Sie uns an oder machen Sie einen Termin aus.</p>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row">
        <Button style="default small">Terminvereinbarung</Button>
        <Button style="default border">Kontakt</Button>
      </div>
    </div>
  );
}

export default ContactBlock;
