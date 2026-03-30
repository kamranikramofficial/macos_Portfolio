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

  const sidebarMatches = useMemo(() => {
    if (!normalizedQuery) return [];

    return [...favoriteLocations, ...workFolders].filter((item) => {
      return matchesQuery(item.name) || matchesQuery(item.type);
    });
  }, [favoriteLocations, workFolders, normalizedQuery]);

  const visibleItems = useMemo(() => {
    const folderItems = activeLocation?.children ?? [];
    if (!normalizedQuery) return folderItems;

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

  useEffect(() => {
    if (!normalizedQuery || !sidebarMatches.length) return;

    const firstMatch = sidebarMatches[0];
    if (activeLocation?.name !== firstMatch.name) {
      setActiveLocation(firstMatch);
    }
  }, [normalizedQuery, sidebarMatches, activeLocation, setActiveLocation]);

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
              normalizedQuery && matchesQuery(item.name) && "ring-1 ring-amber-300 bg-amber-50",
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
              onChange={(e) => setSearchQuery(e.target.value)}
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

      <div className="bg-white flex flex-1 min-h-0">
        <div className="sidebar">
          {renderList("Favorites", favoriteLocations)}
          {renderList("Work", workFolders)}
        </div>
        <ul className="content">
          {visibleItems.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
          {searchQuery.trim() && visibleItems.length === 0 && (
            <li className="top-10 left-8 !flex-row gap-2 text-sm text-gray-500">
              <p>No matching file found.</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;