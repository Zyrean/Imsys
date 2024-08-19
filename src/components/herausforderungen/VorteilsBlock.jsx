import HeaderSection from "../ui/HeaderSection";
import TextBlock from "./TextBlock";

function VorteilsBlock({ header, children, className }) {
  return (
    <div className={`flex flex-col gap-10 px-8 ${className}`}>
      <HeaderSection text={header} style="desktop" className={"gap-20 px-0"} />
      {children}
    </div>
  );
}

export default VorteilsBlock;
