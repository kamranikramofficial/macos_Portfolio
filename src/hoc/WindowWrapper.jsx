import React, { useLayoutEffect, useRef } from "react";

import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";

const WindowWrapper = (Component, windowkey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowkey];
    const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || !isOpen) return;

    el.style.display = "block";
  }, [isOpen]);
  useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
  }, [isOpen]);

    return (
      <section id={windowkey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };
   
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;


  return Wrapped;
};

export default WindowWrapper;
