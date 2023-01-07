import type { NextPage, } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import React, { Fragment, useEffect, useRef } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home: NextPage = () => {
  const nav = useRef(null)
  const nav_btn = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (e) {
        console.log(e.target.offsetY)
      }
      nav.current.style.backgroundColor = 'rgba(43, 55, 64, 0.9)';
      // nav_btn.current.style.backgroundColor = '#18ede5';
      // nav_btn.current.style.backgroundColor = '#2b3740';
    })

  }, [])
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.google.com/download?family=Chivo%20Mono" />
        <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
      </head>
      <body className="layout">
        <header className="navbar clr-primary">
          <div className="nav-content relative">
            <nav ref={nav} className="top-navigation flex flex-row justify-between bg-transparent fixed">
              <div className='left-navigation p-2 flex justify-start'>
                <img className='logo-pic w-10 h-10 p-1 rounded-full' src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
                <Link className="logo-name p-1 sm:text-sm font-bold" href="/">Sonelgaz TE</Link>

              </div>
              <div className='right-navigation pt-2 z-150'>
                <ul className="side-ul flex justify-start">
                  <li><Link href="/" ref={nav_btn} className="p-3 btn btn-primary clr-black font-bold">Login</Link></li>
                  <li ><Link href="/" className="p-1">Dash </Link></li>
                  <li><Link href="/"><FontAwesomeIcon icon="fa-solid fa-bars-sort" /></Link></li>
                </ul>
              </div>
            </nav>
            <div className="showcase h-fit z-0">
              <img className="showcase-img" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
              <div className="overlay ov-1"></div>
            </div>
            <div className="nav-body z-10 absolute top-20 left-0 h-fit w-fit sm:m-5">
              <div className="left-nav-body p-5 mr-10 h-fit">
                <h1 className="nav-title color-primary" >Welcome to our company</h1>
                <div className="stats flex flex-row justify-between">
                  <div className="stats-box">
                    <h3 className="stats-num">21 MWp</h3>
                    <p className="Stat-description">
                      Energy Production
                    </p>
                  </div>
                  <div className="stats-box">
                    <h3 className="stats-num">211</h3>
                    <p className="Stat-description">
                      Facilities
                    </p>
                  </div>
                  <div className="stats-box">
                    <h3 className="stats-num">17 MWp</h3>
                    <p className="Stat-description">
                      Energy Consumption
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-nav-body">
                <div className="news-slider">
                  <button type="button" className="btn btn-invisible news-slider-btn">Vistes</button>
                  <div className="v-seperation"></div>
                  <button className="news-slider-title">Developpement</button>
                </div>
                <div className="news-slider-body">
                  <h2 className="color-primary">This the new objectives of the enterprise based on new decisions</h2>
                </div>
                <button type="button" className="btn-btn-invisible">Click for reading more</button>
              </div>
            </div>

          </div>
        </header>

        <main className="clr-primary relative">
          <div className="showcase absolute">
            <img src="https://unsplash.com/photos/NEBiauphveY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzF8fGFsZ2llcnN8ZW58MHx8fHwxNjcxNDQxNjk4&force=true" className="showcase-img"></img>
          </div>
          <div className="overlay ov-2"></div>

          <div className="main-content absolute">

            <section className="news-feed p-2 clr-primary">

              <div className="container flex flex-row p1">
                <div className="container p-2">
                  <div className="grid-view">
                    <Link className="grid-news-item-1" href="/">
                      <img className="object-fill overflow-y-atou" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </Link>
                    <Link className="grid-news-item-2" href="/">
                      <img className="object-fill" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img></Link>
                    <Link className="grid-news-item-3 " href="/">
                      <img className="object-fill" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </Link>
                  </div>
                  <div className="card flex flex-col">
                    <h1 className="card-title">
                      Come to explore our diferrent structures and services
                    </h1>
                    <p className="card-text">
                      we offer plenty of services in different countris for more info consult the link.
                    </p>
                    <button type="button" className="btn btn-invisible">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="slider">
              <div className="container p-2">
                <h1 className="title">Lorem Ipsum is simply dummy text of the printing and                   typesetting industry.Lorem Ipsum has been the industry's standard dummy                  text ever since the 1500s, when an unknown printer took a galley of type and              scrambled it to make a type specimen book.</h1>
                <div className="H-slider">
                  <div className="H-slider-heading">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <h3>10kwp+</h3>
                    <h3>1mWp</h3>
                    <h3>10mWp+</h3>
                  </div>
                  <div className="H-slider-wrapper">
                    <div className="H-card">
                      <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="H-card-img"></img>
                      <div className="H-card-body flex flex-row ">
                        <div className="H-card-text">
                          <p>title</p>
                          <h4>1MWP</h4>
                        </div>
                        <button className="round-button"></button>
                      </div>
                    </div>
                    <div className="H-card">
                      <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="H-card-img"></img>
                      <div className="H-card-body flex flex-row ">
                        <div className="H-card-text">
                          <p>title</p>
                          <h4>1MWP</h4>
                        </div>
                        <button className="round-button"></button>
                      </div>
                    </div>
                    <div className="H-card">
                      <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="H-card-img"></img>
                      <div className="H-card-body flex flex-row ">
                        <div className="H-card-text">
                          <p>title</p>
                          <h4>1MWP</h4>
                        </div>
                        <button className="round-button"></button>
                      </div>
                    </div>
                    <div className="H-card">
                      <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="H-card-img"></img>
                      <div className="H-card-body flex flex-row ">
                        <div className="H-card-text">
                          <p>title</p>
                          <h4>1MWP</h4>
                        </div>
                        <button className="round-button"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </main>
        <footer className="footer bkg-black clr-primary">
          <div className="container">
            <h1 className="credentials">Sonelgaz transport electrique</h1>
            <address className="">700 buraux gue de constantine</address>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Home
