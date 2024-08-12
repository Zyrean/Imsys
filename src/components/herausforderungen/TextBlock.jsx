function TextBlock({ header, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold lg:text-2xl">{header}</h2>
      <p>{children}</p>
    </div>
  );
}

export default TextBlock;
