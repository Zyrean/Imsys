function OverlayBackground({ className, children }) {
  return (
    <div className={`absolute z-10 h-full bg-black/50 lg:hidden ${className}`}>
      {children}
    </div>
  );
}

export default OverlayBackground;
