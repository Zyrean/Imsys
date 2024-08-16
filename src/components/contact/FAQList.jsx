import FAQItem from "./FAQItem";

function FAQList() {
  return (
    <ul className="flex flex-col gap-10 border-t-2 border-black pt-8 lg:flex-row lg:gap-10">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <FAQItem isOpen={false}>
          A freguently asked question surrounding your services
        </FAQItem>
        <FAQItem isOpen={false}>
          A freguently asked question surrounding your services
        </FAQItem>
        <FAQItem isOpen={false}>
          A freguently asked question surrounding your services
        </FAQItem>
        <FAQItem isOpen={false}>
          A freguently asked question surrounding your services
        </FAQItem>
      </div>

      <div className="flex flex-col gap-10 lg:w-1/2">
        <FAQItem isOpen={true}>
          A freguently asked question surrounding your services
        </FAQItem>
        <FAQItem isOpen={true}>
          A freguently asked question surrounding your services
        </FAQItem>
      </div>
    </ul>
  );
}

export default FAQList;
