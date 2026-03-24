import dayjs from "dayjs";


import { navLinks } from "#constants";
import useWindowStore from "#store/window";


import React, { useEffect, useState } from "react";
import { CircleUserRound, Search, SlidersHorizontal, Wifi, WifiOff } from "lucide-react";
const Navbar = () => {
const { openWindow } = useWindowStore();
const [isOnline, setIsOnline] = useState(true);
const [currentTime, setCurrentTime] = useState(dayjs());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(dayjs());
  }, 1000);

  return () => clearInterval(timer);
}, []);

const handleSearchClick = () => {
  openWindow("safari");
};

const handleUserClick = () => {
  openWindow("contact");
};

const handleSettingsClick = () => {
  openWindow("terminal");
};

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold"> Kamran's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name , type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <ul className="system-icons" aria-label="system controls">
          <li>
            <button
              type="button"
              className="icon"
              aria-label={isOnline ? "Set offline" : "Set online"}
              onClick={() => setIsOnline((prev) => !prev)}
            >
              {isOnline ? <Wifi size={18} /> : <WifiOff size={18} />}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="icon"
              aria-label="Open search"
              onClick={handleSearchClick}
            >
              <Search size={18} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="icon"
              aria-label="Open contact"
              onClick={handleUserClick}
            >
              <CircleUserRound size={18} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="icon"
              aria-label="Open settings"
              onClick={handleSettingsClick}
            >
              <SlidersHorizontal size={18} />
            </button>
          </li>
        </ul>
        <time dateTime={currentTime.toISOString()}>
          {currentTime.format("ddd, MMM D h:mm:ss A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
