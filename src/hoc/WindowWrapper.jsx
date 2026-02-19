import React, { useLayoutEffect, useRef } from "react";

import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";
import gsap from "gsap";

const WindowWrapper = (Component, windowkey) => {
  const Wrapped = (props) => {
    const { focusWindow, restoreWindow, windows } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowkey];
    const ref = useRef(null);
    const draggableRef = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || !isOpen) return;

    el.style.display = "block";

    gsap.fromTo( el ,{ scale:0.8 , opacity:0  , y:40}
    ,{ scale:1 , opacity:1 , y:0 , duration:0.4, ease:"power3.out" }
    )
  }, [isOpen]);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const [intence]= Draggable.create(el,{onPress:()=> focusWindow(windowkey)});
    draggableRef.current = intence;

    return () => intence.kill();
  },[])

  // Handle minimize animation
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !isOpen) return;

    if (isMinimized) {
      gsap.to(el, {
        scale: 0.4,
        opacity: 0,
        y: 300,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => { el.style.display = "none"; }
      });
    } else {
      el.style.display = "block";
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out"
      });
    }
  }, [isMinimized, isOpen]);

  // Handle maximize / restore toggle
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !isOpen || isMinimized) return;
    const drag = draggableRef.current;

    if (isMaximized) {
      // Disable dragging in maximized mode
      if (drag) drag.disable();
      gsap.to(el, {
        top: 40,
        left: 0,
        width: "100vw",
        height: "calc(100vh - 40px - 80px)",
        x: 0,
        y: 0,
        duration: 0.35,
        ease: "power3.out"
      });
    } else {
      // Restore to original size and re-enable dragging
      if (drag) drag.enable();
      gsap.to(el, {
        top: "",
        left: "",
        width: "",
        height: "",
        duration: 0.35,
        ease: "power3.out"
      });
    }
  }, [isMaximized, isOpen, isMinimized]);

  useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
  }, [isOpen]);

    return (
      <section id={windowkey} ref={ref} style={{ zIndex }} className={`absolute ${isMaximized ? "!rounded-none" : ""}`}>
        <Component {...props} />
      </section>
    );
  };
   
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;


  return Wrapped;
};

export default WindowWrapper;
