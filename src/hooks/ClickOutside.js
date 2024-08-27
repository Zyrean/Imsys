import { useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let domRef = useRef();

  useEffect(() => {
    let maybeHandler = (e) => {
      if (!domRef.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domRef;
};

export default useClickOutside;
