import Link from "next/link";
import "tailwindcss/tailwind.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const nav = useRef(null);
  const nav_btn = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY && window.scrollY > 2 && nav.current) {
        nav.current.style.backgroundColor = "#2b3740";
        nav.current.style.borderBottomStyle = "solid";
        nav.current.style.borderBottomColor = "#bdd5da";
      } else {
        if (nav.current) {
          nav.current.style.backgroundColor = "transparent";
          nav.current.style.borderBottomStyle = "none";
          nav.current.style.borderBottomColor = "none";
        }
      }
    });
  }, []);

  const handleMenu = (e) => {
    const drawer = document.querySelector(".drawer");
    drawer.style.transform = "translateX(0%)";
  };
  return (
    <nav ref={nav} className="top-navigation clr-primary">
      <div className="left-navigation p-2 flex justify-start">
        <img
          className="logo-pic"
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ></img>
        <Link className="logo-name p-1 sm:text-sm font-bold" href="/">
          Sonelgaz TE
        </Link>
      </div>
      <div className="right-navigation z-1">
        <ul className="side-ul flex justify-start">
          <li>
            <Link
              href="/auth"
              ref={nav_btn}
              className="p-3 button button-primary btn-round clr-black font-bold"
            >
              Login
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="button">
              Dash
            </Link>
          </li>
          <li>
            <button onClick={(e) => handleMenu(e)} className="button hamburger">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
