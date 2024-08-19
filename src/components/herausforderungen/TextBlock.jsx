function TextBlock({ header, className, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold lg:text-2xl">{header}</h2>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default TextBlock;
