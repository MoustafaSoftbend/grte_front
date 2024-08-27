import Link from "next/link";
import "tailwindcss/tailwind.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

const Navbar = ({ bg_status }) => {
  const nav = useRef(null);
  const nav_btn = useRef(null);
  const [scroll, setScroll] = useState(0);
  const router = useRouter;

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // if (window.scrollY && window.scrollY > 2 && nav.current && bg_status) {
      //   nav.current.style.backgroundColor = "#2b3740";
      //   nav.current.style.borderBottomStyle = "solid";
      //   nav.current.style.borderBottomColor = "#bdd5da";
      // } else {
      //   if (nav.current) {
      //     nav.current.style.backgroundColor = "transparent";
      //     nav.current.style.borderBottomStyle = "none";
      //     nav.current.style.borderBottomColor = "none";
      //   }
      // }
      setScroll(window.scrollY);
    });
    console.log(scroll);
    if (!bg_status) {
      document.querySelector(".action-menu").style.translateY = "400px";
    }
  }, []);

  const handleMenu = (e) => {
    const drawer = document.querySelector(".drawer");
    drawer.style.transform = "translateX(0%)";
  };
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.google.com/download?family=Chivo%20Mono"
        />
        <link rel="stylesheet" href="/path/to/mapbox-gl.css" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <nav
        ref={nav}
        className={`top-navigation clr-primary ${
          !bg_status ? "bkg-dark" : ""
        } ${scroll > 0 ? "bkg-dark" : ""}`}
      >
        <div className="left-navigation p-2 flex justify-start">
          <img
            className="logo-pic"
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ></img>
          <Link className="logo-name p-1 sm:text-sm font-bold" href="/">
            Sonelgaz TE
          </Link>
          {!bg_status && (
            <div className="center-navigation flex flex-row p-1 ">
              <h1 className="dash-nav-title text-lg m-1">Dashboard</h1>
              <input className="dash-nav-input m-1" type="text" />
            </div>
          )}
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
              <button
                onClick={(e) => handleMenu(e)}
                className="button hamburger"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
