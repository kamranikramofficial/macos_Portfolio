import { Mail, Search } from "lucide-react";

import WindowControls from "#components/WindowControls";
import React, { useEffect, useMemo, useRef, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Photo = () => {
  const { openWindow, windows } = useWindowStore();
  const { isMinimized, isOpen } = windows.photos;
  const [activeTab, setActiveTab] = useState("Library");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const visibleGallery = useMemo(() => {
    if (activeTab === "Library") return gallery;
    if (activeTab === "Memories") return gallery.slice(0, 2);
    if (activeTab === "Places") return gallery.slice(1, 4);
    if (activeTab === "People") return gallery.slice(0, 3);
    if (activeTab === "Favorites") return [gallery[0], gallery[3]].filter(Boolean);
    return gallery;
  }, [activeTab]);

  const filteredGallery = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return visibleGallery;

    return visibleGallery.filter(({ id, img, name }) => {
      return `${name ?? ""} gallery ${id} ${img}`.toLowerCase().includes(query);
    });
  }, [visibleGallery, searchQuery]);

  const hasNoResults =
    searchQuery.trim().length > 0 && filteredGallery.length === 0;

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMinimized || !isOpen) {
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  }, [isMinimized, isOpen]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-2 text-gray-500">
          {isSearchOpen && (
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search photos"
              className="h-8 w-44 rounded-md border border-gray-300 bg-white px-2 text-xs text-gray-700 outline-none focus:border-blue-400"
            />
          )}

          <button
            type="button"
            className="icon"
            aria-label="Open contact"
            onClick={() => openWindow("contact")}
          >
            <Mail className="size-5" />
          </button>

          <button
            type="button"
            className="icon"
            aria-label="Toggle search"
            onClick={() => {
              if (isSearchOpen) setSearchQuery("");
              setIsSearchOpen((prev) => !prev);
            }}
          >
            <Search className="size-5" />
          </button>
        </div>
      </div>

      <div className="flex max-sm:flex-col w-full flex-1 min-h-0">
        <div className="sidebar">
          <h2>photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                className={activeTab === title ? "active" : "not-active"}
                onClick={() => setActiveTab(title)}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <h3>{activeTab}</h3>
          {hasNoResults ? (
            <div className="gallery-empty">
              <p>Image not found.</p>
            </div>
          ) : (
            <ul>
              {filteredGallery.map(({ id, img, name }) => (
                <li
                  key={id}
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name: name ?? "Gallery image",
                      kind: "file",
                      fileType: "image",
                      imageUrl: img,
                    })
                  }
                >
                  <img src={img} alt={`Gallery ${id}`} />
                  <p>{name ?? `Gallery ${id}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};


const PhotoGallery = WindowWrapper(Photo, "photos");

export default PhotoGallery;
