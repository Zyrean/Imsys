function TextBlock({ header, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{header}</h2>
      <p>{}</p>
    </div>
  );
}

export default TextBlock;
