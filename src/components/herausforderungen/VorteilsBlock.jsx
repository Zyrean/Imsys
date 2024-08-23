import HeaderSection from "../ui/HeaderSection";

function VorteilsBlock({
  header,
  childrenPadding,
  headerGap,
  className,
  children,
}) {
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <HeaderSection
        text={header}
        style="desktop"
        className={`${headerGap} px-0`}
      />
      <div className={`flex flex-col gap-10 ${childrenPadding}`}>
        {children}
      </div>
    </div>
  );
}

export default VorteilsBlock;
