import React, { useRef } from "react";

import useWindowStore from "#store/window.js";

const WindowWrapper = (Component, windowkey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowkey];
    const ref = useRef(null);

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
