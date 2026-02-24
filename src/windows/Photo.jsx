import { Mail, Search } from "lucide-react";

import WindowControls from "#components/WindowControls";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Photo = () => {
  const { openWindow } = useWindowStore();
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex max-sm:flex-col w-full">
        <div className="sidebar">
          <h2>photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    kind: "file",
                    fileType: "image",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={`Gallery ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


const PhotoGallery = WindowWrapper(Photo, "photos");

export default PhotoGallery;
