import Button from "../ui/Button";

function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="place border-b-[1px] border-black pb-2"
      />
      <input
        name="e-mail"
        type="email"
        placeholder="E-Mail"
        className="place border-b-[1px] border-black pb-2"
      />
      <input
        name="firma"
        type="text"
        placeholder="Firma"
        className="place border-b-[1px] border-black pb-2"
      />
      <input
        name="telefon"
        type="number"
        placeholder="Telefon"
        className="place border-b-[1px] border-black pb-2"
      />
      <textarea
        name="contactFormText"
        rows={5}
        className="place mt-2 rounded-sm border-[1px] border-black p-2"
        placeholder="Ihre Nachricht..."
      ></textarea>

      <Button style="default" className="mt-6">
        Abschicken
      </Button>
    </form>
  );
}

export default ContactForm;
