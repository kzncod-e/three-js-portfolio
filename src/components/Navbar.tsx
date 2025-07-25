import { Link } from "react-router-dom";
import { styles } from "../styles/style.js";
import { useState } from "react";
import { close, logo, menu } from "../assets/index.js";
import { navLinks } from "../constants/index.ts";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          to={"/"}>
          <img src={logo} alt="" className="w-9 h-9 object-contain " />
          <p className="text-white font-bold cursor-pointer flex  text-[1.2rem]">
            Kzn &nbsp;
            <span className="sm:block hidden">| Fullstack Developer</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[1.2rem] cursor-pointer font-medium`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[9rem]z-10 rounded-xl`}>
            <ul className="list-none flex justify-center items-start flex-col  gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins text-[1rem] cursor-pointer font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
