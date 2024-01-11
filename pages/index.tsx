import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "../Components/Drawer";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SvgTree from "../Components/SvgTree";

import { fadeObserver } from "../utils/fadeObservers";

const Home: NextPage = () => {
  var vid_src;
  var img_src;
  const [trigger, setTrigger] = useState(false);

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(0);
  // const [firstScrollPoint, setFirstScrollPoint] = useState(0);
  // const [secondScrollPoint, setSecondScrollPoint] = useState(0);
  // const [thirdScrollPoint, setThirdScrollPoint] = useState(0);
  // const [position_zero, setPosition_zero] = useState(0);
  // const [position_one, setPosition_one] = useState(0);
  // const [position_two, setPosition_two] = useState(0);

  const video_click = (e) => {
    const selected = document.querySelector(".vid-selected");
    setTrigger(!trigger);
    if (selected) {
      selected.classList.remove("vid-selected");
    }
    if (e.target.classList[0] !== "vid-container") {
      e.target.parentElement.classList.add("vid-selected");
    } else {
      e.target.classList.add("vid-selected");
      vid_src = document.querySelector(".vid-selected").childNodes[1].src;
      document.querySelector(".main-vid").remove();
      img_src = document.createElement("img");
      img_src.src = vid_src;
      img_src.classList.add("main-vid");
      document.querySelector(".main-grid-view").appendChild(img_src);
    }
  };
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   setScrollPosition(window.scrollY);
    // });

    // window.addEventListener("resize", () => {
    //   setWindowWidth(window.innerWidth);
    // });

    // setFirstScrollPoint(
    //   parseFloat(document.querySelector("header").clientHeight),
    // );
    // setSecondScrollPoint(
    //   parseFloat(document.querySelector(".grid-show").clientHeight),
    // );
    // setThirdScrollPoint(
    //   parseFloat(document.querySelector(".card-section").clientHeight),
    // );
    // setPosition_zero(parseInt(scrollPosition - firstScrollPoint));
    // setPosition_one(
    //   parseInt(scrollPosition - firstScrollPoint - secondScrollPoint),
    // );
    // setPosition_two(
    //   parseInt(
    //     scrollPosition -
    //       firstScrollPoint -
    //       secondScrollPoint -
    //       thirdScrollPoint,
    //   ),
    // );
    vid_src = document.querySelector(".vid-selected").childNodes[1].src;
    document.querySelector(".main-vid").remove();
    img_src = document.createElement("img");
    img_src.src = vid_src;
    img_src.classList.add("main-vid");
    document.querySelector(".main-grid-view").appendChild(img_src);

    fadeObserver(".fade-left");
    fadeObserver(".fade-right");
    fadeObserver(".fade-bottom");
  }, [trigger]);
  return (
    <>
      <Drawer />
      <div className="layout">
        <header className="navbar clr-primary">
          <div className="nav-content relative clr-primary">
            <Navbar bg_status={true} />
            <div className="showcase z-0">
              <video
                autoPlay
                muted
                loop
                className="showcase-img"
                src="https://cdn.pixabay.com/vimeo/585553989/windmill-84625.mp4?rendition=source&expiry=1699440685&hash=51f33d88f1e561690c2cae5973ddade956181039"
              ></video>
              <div className="overlay ov-1"></div>
            </div>
            <div className="nav-body z-1 absolute bottom-10 left-0 right-0 md:bottom-[10%]">
              <div className="c_container relative">
                <div className="nav-upper-body c_container">
                  <div className="left-nav-body md:text-center p-2 h-fit fade-left">
                    <h1 className="text-title p-4 md:text-[4rem] md:text-left">
                      Welcome to our company
                    </h1>
                    <div className="stats flex flex-row justify-between w-4/5 mx-auto ">
                      <div className="stats-box">
                        <h3 className="stats-num text-title md:text-[1.2rem]">
                          21 MWp
                        </h3>
                        <p className="text-md">Energy Production</p>
                      </div>
                      <div className="stats-box">
                        <h3 className="stats-num text-title md:text-[1.2rem]">
                          211
                        </h3>
                        <p className="text-md">Facilities</p>
                      </div>
                      <div className="stats-box">
                        <h3 className="stats-num text-title md:text-[1.2rem]">
                          17 MWp
                        </h3>
                        <p className="text-md">Energy Consumption</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-nav-body md:text-center h-fit fade-right">
                    <div className="news-slider">
                      <button
                        type="button"
                        className="news-slider-btn text-title p-3 md:text-[1.5rem]"
                      >
                        Vistes
                      </button>
                      <div className="v-seperation"></div>
                      <button className="text-title p-3 md:text-[1.5rem]">
                        Developpement
                      </button>
                    </div>
                    <div className="news-slider-body p-3 m-3">
                      <h2 className="color-primary text-lg lg:text-[2.2rem] lg:w-[50%] lg:text-left lg:ml-[15vw] leading-[3.5rem]">
                        These are the new objectives of the enterprise based on
                        new decisions
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-5 md:bottom-0 fade-bottom">
                  <Link
                    href=""
                    className="button button-primary btn-round ml-[3rem] block w-[40%] text-center clr-black font-bold text-lg"
                  >
                    Click for reading more
                  </Link>
                  <Link className="arrow-container" href="">
                    <FontAwesomeIcon
                      className="arrow arrow-light p-4 text-title"
                      icon={faArrowDown}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="clr-primary">
          <section className="grid-show clr-primary relative top-0 left-0">
            <div className="showcase absolute">
              <img
                src="https://unsplash.com/photos/E72PVn1qi30/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YWxnZXJpYXxlbnwwfHx8fDE2ODUxODMzODN8MA&force=true"
                className="showcase-img"
              ></img>
              <div className="overlay ov-2"></div>
            </div>
            <div className="grid-show-content c_container">
              <div className="grid-show-content-container h-fit">
                <div className="side-grid fade-left">
                  <h1 className="side-grid-title text-title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, atque?
                  </h1>
                  <p className="text-side-title clr-primary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="button button-primary btn-round side-grid-btn clr-black mt-5"
                  >
                    learn more
                  </Link>
                </div>
                <div className="mosaic md:row-span-2 fade-right">
                  <div className="mosaic-container md:mt-4">
                    <Link
                      className="mosaic-view-panel col-span-2 row-span-1"
                      href=""
                    >
                      <img
                        src="https://unsplash.com/photos/a1Lm99Kkqtg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true&w=2400"
                        alt=""
                      />
                    </Link>
                    <Link className="col-span-1" href="">
                      <img
                        src="https://unsplash.com/photos/WYGhTLym344/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true"
                        alt=""
                      />
                    </Link>
                    <Link className="h-[80%]" href="">
                      <img
                        src="https://unsplash.com/photos/WYGhTLym344/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="grid-show-info p-1 fade-left">
                  <p className="text-lg p-3 m-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde, cumque?
                  </p>
                  <Link
                    href=""
                    className="button button-secondary btn-round m-5 mt-10 font-bold px-10 flex flex-row justify-between"
                  >
                    <p className="text-lg">Meher Shehn</p>
                    <FontAwesomeIcon
                      className="arrow arrow-primary"
                      icon={faArrowRight}
                    />
                  </Link>
                </div>
                <div className="partner-companies col-span-2 fade-bottom">
                  <h1 className="companies-header text-title text-center">
                    Some of our long term partners
                  </h1>
                  <div className="partners-container">
                    <img
                      className="company-logo"
                      src="https://yt3.googleusercontent.com/ytc/APkrFKZZHsrqMc5cXu-GlPBTpeRRGCj5X0jzBmfGitvhw2c=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                      srcset=""
                    />
                    <img
                      className="company-logo"
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                    />
                    <img
                      className="company-logo"
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                    />
                    <img
                      className="company-logo"
                      src="https://global-uploads.webflow.com/63f6e52346a353ca1752970e/644fb7a6c824c71d276a1768_20230501T1259-9653b395-fc0f-470f-8fef-b2e3747837e1.jpeg"
                      alt=""
                      srcset=""
                    />
                    <img
                      className="company-logo"
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card-section">
            <div className="c_container relative">
              <SvgTree
              // scrollPosition={scrollPosition}
              // windowWidth={windowWidth}
              // firstScrollPoint={firstScrollPoint}
              // secondScrollPoint={secondScrollPoint}
              // thirdScrollPoint={thirdScrollPoint}
              // position_zero={position_zero}
              // position_one={position_one}
              // position_two={position_two}
              />
              <div className="card-section-content">
                <div className="article relative fade-left">
                  <div>
                    <div className="article-head">
                      <h2 className="text-title">
                        Lorem ipsum dolor sit amet.
                      </h2>
                      <h3 className="text-side-title clr-primary">
                        Lorem ipsum dolor sit.
                      </h3>
                      <div className="article-separation"></div>
                    </div>
                    <p className="article-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor nobis id, sed distinctio consequuntur assumenda
                      omnis amet culpa obcaecati deserunt.
                    </p>
                    <div className="article-footer">
                      <small className="article">
                        #Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                    <div className="global-separation"></div>
                  </div>
                  <a
                    href=""
                    className="button button-primary clr-black text-center font-bold bottom-0"
                  >
                    click
                  </a>
                </div>

                <div className="card fade-right">
                  <div className="card-header">
                    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <Link className="card-link" href="/">
                    <img
                      className="card-image"
                      src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                    ></img>
                  </Link>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nobis id, sed distinctio consequuntur assumenda omnis
                    amet culpa obcaecati deserunt.
                  </p>
                  <div className="global-separation"></div>
                </div>

                <div className="article relative fade-left">
                  <div>
                    <div className="article-head">
                      <h2 className="text-title">
                        Lorem ipsum dolor sit amet.
                      </h2>
                      <h3 className="text-side-title clr-blue">
                        Lorem ipsum dolor sit.
                      </h3>
                      <div className="article-separation"></div>
                    </div>
                    <p className="article-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor nobis id, sed distinctio consequuntur assumenda
                      omnis amet culpa obcaecati deserunt.
                    </p>
                    <div className="article-footer">
                      <small className="article">
                        #Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                    <div className="global-separation"></div>
                  </div>
                  <a
                    href=""
                    className="button button-primary clr-black text-center font-bold bottom-0"
                  >
                    click
                  </a>
                </div>

                <div className="card fade-right">
                  <div className="card-header">
                    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <Link className="card-link" href="/">
                    <img
                      className="card-image"
                      src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                    ></img>
                  </Link>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nobis id, sed distinctio consequuntur assumenda omnis
                    amet culpa obcaecati deserunt.
                  </p>
                  <div className="global-separation"></div>
                </div>
                <div className="article relative fade-left">
                  <div>
                    <div className="article-head">
                      <h2 className="text-title">
                        Lorem ipsum dolor sit amet.
                      </h2>
                      <h3 className="text-side-title clr-blue">
                        Lorem ipsum dolor sit.
                      </h3>
                      <div className="article-separation"></div>
                    </div>
                    <p className="article-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor nobis id, sed distinctio consequuntur assumenda
                      omnis amet culpa obcaecati deserunt.
                    </p>
                    <div className="article-footer">
                      <small className="article">
                        #Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                    <div className="global-separation"></div>
                  </div>
                  <a
                    href=""
                    className="button button-primary clr-black text-center font-bold bottom-0"
                  >
                    click
                  </a>
                </div>

                <div className="card fade-right">
                  <div className="card-header">
                    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <Link className="card-link" href="/">
                    <img
                      className="card-image"
                      src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                    ></img>
                  </Link>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nobis id, sed distinctio consequuntur assumenda omnis
                    amet culpa obcaecati deserunt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="video-section">
            <div className="video-grid">
              <div className="main-grid-view">
                <img className="main-vid" src={vid_src}></img>
              </div>
              <div className="grid-slider-view">
                <div className="slider-elements">
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container"
                  >
                    <div className="overlay"></div>
                    <img
                      id="1"
                      className="vid"
                      src="https://unsplash.com/photos/VuR4oHZ3ucc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cG93ZXIlMjBzdWJzdGF0aW9ufGVufDB8fHx8MTY5NDYzMjM1OHww&force=true"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container vid-selected"
                  >
                    <div className="overlay"></div>
                    <img
                      id="2"
                      className="vid"
                      src="https://images.pexels.com/photos/4320473/pexels-photo-4320473.jpeg?cs=srgb&dl=pexels-kelly-4320473.jpg&fm=jpg&w=5464&h=3070"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container"
                  >
                    <div className="overlay"></div>
                    <img
                      id="3"
                      className="vid"
                      src="https://images.pexels.com/photos/171428/pexels-photo-171428.jpeg?cs=srgb&dl=pexels-pok-rie-171428.jpg&fm=jpg&w=2300&h=1533"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container"
                  >
                    <div className="overlay"></div>
                    <img
                      id="4"
                      className="vid"
                      src="https://images.pexels.com/photos/3877660/pexels-photo-3877660.jpeg?cs=srgb&dl=pexels-ricky-esquivel-3877660.jpg&fm=jpg&w=5938&h=3959"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container"
                  >
                    <div className="overlay"></div>
                    <img
                      id="5"
                      className="vid"
                      src="https://images.pexels.com/photos/3877660/pexels-photo-3877660.jpeg?cs=srgb&dl=pexels-ricky-esquivel-3877660.jpg&fm=jpg&w=5938&h=3959"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={(e) => video_click(e)}
                    className="vid-container"
                  >
                    <div className="overlay"></div>
                    <img
                      id="6"
                      className="vid"
                      src="https://images.pexels.com/photos/171428/pexels-photo-171428.jpeg?cs=srgb&dl=pexels-pok-rie-171428.jpg&fm=jpg&w=2300&h=1533"
                    ></img>
                    <div className="vid-link-hover">
                      <Link href="" className="text-md">
                        Clic kHere
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="h-slider">
            <p className="h-slider-text text-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              laboriosam sunt ratione ipsa voluptatum.
            </p>
            <h1 className="h-slider-title text-side-title p-3">
              Lorem ipsum dolor sit amet.
            </h1>
            <ul className="power-level">
              <li className="first-level text-side-title">
                <Link href="">60KV</Link>
              </li>
              <li className="second-level text-side-title">
                <Link href="">220KV</Link>
              </li>
              <li className="third-level text-side-title">
                <Link href="">400KV</Link>
              </li>
            </ul>
            <div className="h-cards-container">
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <h1 className="h-title text-sm">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description">Lorem ipsum dolor sit amet.</p>
                    <h1 className="h-title">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description">Lorem ipsum dolor sit amet.</p>
                    <h1 className="h-title">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description">Lorem ipsum dolor sit amet.</p>
                    <h1 className="h-title">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description">Lorem ipsum dolor sit amet.</p>
                    <h1 className="h-title">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className="h-card">
                <div className="overlay"></div>
                <img
                  src="https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true"
                  className="hcard-image"
                ></img>
                <div className="h-card-info">
                  <div>
                    <p className="h-description">Lorem ipsum dolor sit amet.</p>
                    <h1 className="h-title">300KVA</h1>
                  </div>
                  <FontAwesomeIcon
                    className="arrow h-card-arrow"
                    icon={faArrowRight}
                  />
                </div>
              </div>
            </div>
            <div className="arrow-h-navigation ml-2">
              <Link href="" className="">
                <FontAwesomeIcon
                  className="arrow arrow-light m-2"
                  icon={faArrowLeft}
                />
              </Link>
              <Link href="" className="">
                <FontAwesomeIcon
                  className="arrow arrow-light m-2"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </section>
        </main>
        <footer className="footer bkg-black clr-primary">
          <div className="container">
            <h1 className="credentials">Sonelgaz transport electrique</h1>
            <address className="">700 buraux gue de constantine</address>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;
