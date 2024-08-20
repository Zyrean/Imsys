function Qualification({ num, header, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl text-blue">{num}</h2>
      <h3 className="text-xl font-semibold">{header}</h3>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default Qualification;
