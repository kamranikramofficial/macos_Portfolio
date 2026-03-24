import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { socials } from "#constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="window-body p-5 space-y-4">
       <img src="/images/kamran-1.png" alt="Kamran" className="w-20 rounded-full" />


        <h3>Let's Connect</h3>
        <p>
            Gont an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>
        <p><a href="mailto:kamranikramofficial@gmail.com">kamranikramofficial@gmail.com</a></p>
        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.text} className="w-8" />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;