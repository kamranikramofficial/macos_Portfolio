import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;
  const { name, imageUrl, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-black flex items-center justify-center h-full">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
