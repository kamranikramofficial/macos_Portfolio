import dayjs from "dayjs";


import { navLinks ,navIcons } from "#constants";

import React from "react";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold"> Kamran's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
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

      <time> {dayjs().format("ddd mmm D h : mm A")}</time>
    </nav>
  );
};

export default Navbar;
