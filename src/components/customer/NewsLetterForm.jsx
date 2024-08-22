import Button from "../ui/Button";

function NewsLetterForm({ inputBgColor }) {
  return (
    <form className="flex flex-col gap-6 px-8">
      <input
        type="email"
        name="newsletter"
        placeholder="E-Mail hier eintragen..."
        className={`w-72 border-b-[2px] border-black p-2 placeholder-gray-700 ${inputBgColor}`}
      />

      <Button style="default">Abonnieren</Button>
    </form>
  );
}

export default NewsLetterForm;
