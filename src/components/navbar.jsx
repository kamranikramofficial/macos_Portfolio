import dayjs from "dayjs";


import { navLinks ,navIcons } from "#constants";
import useWindowStore from "#store/window";


import React from "react";
const Navbar = () => {
const { openWindow } = useWindowStore();

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
      <div>
        <ul>
            {navIcons.map(({ id, img }) => (
                <li key={id}>
                   <img src={img} alt={`icon-${id}`} />     
                </li>
            ))}
        </ul>
      </div>

      <time>{dayjs().format("ddd M D h:mm A")}</time>
    </nav>
  );
};

export default Navbar;
