function Qualification({
  num,
  header,
  h3Width = "w-[160px]",
  style,
  className,
  children,
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex justify-between gap-4 sm:flex-col-reverse">
        <h3 className={`${h3Width} text-xl font-semibold`}>{header}</h3>
        <h2 className="self-end text-3xl text-blue sm:self-start">{num}</h2>
      </div>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default Qualification;
