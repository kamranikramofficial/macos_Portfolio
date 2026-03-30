import React, { useEffect, useMemo, useRef, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";

const Finder = () => {
  const { openWindow, windows } = useWindowStore();
  const { isMinimized, isOpen } = windows.finder;
  const { activeLocation, setActiveLocation } = useLocationStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const favoriteLocations = useMemo(() => Object.values(locations), []);
  const workFolders = useMemo(() => locations.work.children ?? [], []);

  const matchesQuery = (value) => `${value ?? ""}`.toLowerCase().includes(normalizedQuery);

  const visibleItems = useMemo(() => {
    const folderItems = activeLocation?.children ?? [];
    if (!normalizedQuery) return folderItems;

    const isLocationMatch =
      matchesQuery(activeLocation?.name) || matchesQuery(activeLocation?.type);
    if (isLocationMatch) return folderItems;

    return folderItems.filter((item) => {
      const descriptionText = Array.isArray(item.description)
        ? item.description.join(" ")
        : item.description;

      return `${item.name ?? ""} ${item.kind ?? ""} ${item.fileType ?? ""} ${item.subtitle ?? ""} ${descriptionText ?? ""}`
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeLocation, normalizedQuery]);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMinimized || !isOpen) {
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  }, [isMinimized, isOpen]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);

    const query = value.trim().toLowerCase();
    if (!query) return;

    const firstMatch = [...favoriteLocations, ...workFolders].find((item) => {
      return `${item.name ?? ""} ${item.type ?? ""}`.toLowerCase().includes(query);
    });

    if (firstMatch && activeLocation?.name !== firstMatch.name) {
      setActiveLocation(firstMatch);
    }
  };

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <div className="flex items-center gap-2">
          {isSearchOpen && (
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search files and sidebar"
              className="h-8 w-44 rounded-md border border-gray-300 bg-white px-2 text-xs text-gray-700 outline-none focus:border-blue-400"
            />
          )}
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

      <div className="bg-white flex min-h-0" style={{ height: "calc(100% - 57px)" }}>
        <div className="sidebar">
          {renderList("Favorites", favoriteLocations)}
          {renderList("Work", workFolders)}
        </div>
        <div className={clsx("content", visibleItems.length === 0 && "content-no-scroll") }>
          {visibleItems.length > 0 ? (
            <ul className="content-canvas">
              {visibleItems.map((item) => (
                <li
                  key={item.id}
                  className="finder-item"
                  onClick={() => openItem(item)}
                >
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="content-empty-state">
              <p>{searchQuery.trim() ? "No matching file found." : "No items in this folder."}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;