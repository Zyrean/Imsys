import Button from "../ui/Button";

function ContactForm({ style, inputBgColor }) {
  return (
    <>
      <form className="hidden w-2/3 flex-col items-end gap-12 lg:flex">
        <div className="flex w-full justify-between gap-28">
          <div className="flex w-1/2 flex-col gap-12">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={
                `place border-b-[1px] border-black pb-2 ` + inputBgColor
              }
            />
            <input
              name="e-mail"
              type="email"
              placeholder="E-Mail"
              className={
                `place border-b-[1px] border-black pb-2 ` + inputBgColor
              }
            />
          </div>

          <div className="flex w-1/2 flex-col gap-12">
            <input
              name="firma"
              type="text"
              placeholder="Firma"
              className={
                `place border-b-[1px] border-black pb-2 ` + inputBgColor
              }
            />
            <input
              name="telefon"
              type="number"
              placeholder="Telefon"
              className={
                `place border-b-[1px] border-black pb-2 ` + inputBgColor
              }
            />
          </div>
        </div>

        <textarea
          name="contactFormText"
          rows={5}
          className={
            `mt-2 w-full rounded-sm border-[1px] border-black p-2 ` +
            inputBgColor
          }
          placeholder="Ihre Nachricht..."
        ></textarea>

        <Button style="default" className="">
          Abschicken
        </Button>
      </form>

      <form className="flex flex-col gap-4 lg:hidden lg:w-2/3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className={`place border-b-[1px] border-black pb-2 ` + inputBgColor}
        />
        <input
          name="e-mail"
          type="email"
          placeholder="E-Mail"
          className={`place border-b-[1px] border-black pb-2 ` + inputBgColor}
        />

        <input
          name="firma"
          type="text"
          placeholder="Firma"
          className={`place border-b-[1px] border-black pb-2 ` + inputBgColor}
        />
        <input
          name="telefon"
          type="number"
          placeholder="Telefon"
          className={`place border-b-[1px] border-black pb-2 ` + inputBgColor}
        />
        {/* className="w-36 border-b-2 border-black py-2 placeholder-gray-700" */}

        <textarea
          name="contactFormText"
          rows={5}
          className={
            `place mt-2 rounded-sm border-[1px] border-black p-2 ` +
            inputBgColor
          }
          placeholder="Ihre Nachricht..."
        ></textarea>

        <Button style="default" className="mt-6">
          Abschicken
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
