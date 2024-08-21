function Qualification({ num, header, className, children }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h2 className="text-3xl text-blue">{num}</h2>
      <h3 className="text-xl font-semibold">{header}</h3>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default Qualification;
