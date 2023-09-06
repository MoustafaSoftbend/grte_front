import type { NextPage, } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import React, { Fragment, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home: NextPage = () => {
  const nav = useRef(null)
  const nav_btn = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset!== 0) {
        nav.current.style.backgroundColor = 'rgba(43, 55, 64)';
      }
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
      <div className='layout'>
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
                  <li><Link href="/"></Link></li>
                </ul>
              </div>
            </nav>
            <div className="showcase z-0">
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

        <main className="clr-primary relative flex flex-row">
          <div className="showcase absolute">
            <img src="https://unsplash.com/photos/E72PVn1qi30/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YWxnZXJpYXxlbnwwfHx8fDE2ODUxODMzODN8MA&force=true" className="showcase-img"></img>
            <div className="overlay ov-2"></div>
          </div>

          <div className="main-content relative top-0 bottom-0">
            <section className='card-section'>
              <div className="c_container">
              <div className="card-section-content">
              <div className='article'>
                <div className="article-head">
                  <h2 className='article-title'>Lorem ipsum dolor sit amet.</h2>
                  <h3 className='article-subtitle' >Lorem ipsum dolor sit.</h3>
                  <div className='article-separation'></div>
                </div>
                <p className='article-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
                <div className="article-footer"><small className='article'>#Lorem ipsum dolor sit amet.</small></div>
                <div className="global-separation"></div>
              </div>
              
              <div className='card'>
                <div className="card-header">
                <h2 className='card-title'>Lorem ipsum dolor sit amet.</h2>
                </div>
                <Link className='card-link' href="/"><img className='card-image' src='https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true'></img></Link>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
                <div className="global-separation"></div>
              </div>
              
              <div className='article'>
                <div className="article-head">
                  <h2 className='article-title'>Lorem ipsum dolor sit amet.</h2>
                  <h3 className='article-subtitle' >Lorem ipsum dolor sit.</h3>
                  <div className='article-separation'></div>
                </div>
                <p className='article-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
                <div className="article-footer"><small className='article'>#Lorem ipsum dolor sit amet.</small></div>
                <div className="global-separation"></div>
              </div>
              
              <div className='card'>
                <div className="card-header">
                <h2 className='card-title'>Lorem ipsum dolor sit amet.</h2>
                </div>
                <Link className='card-link' href="/"><img className='card-image' src='https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true'></img></Link>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
                <div className="global-separation"></div>
              </div>
              <div className='article'>
                <div className="article-head">
                  <h2 className='article-title'>Lorem ipsum dolor sit amet.</h2>
                  <h3 className='article-subtitle' >Lorem ipsum dolor sit.</h3>
                  <div className='article-separation'></div>
                </div>
                <p className='article-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
                <div className="article-footer"><small className='article'>#Lorem ipsum dolor sit amet.</small></div>
                <div className="global-separation"></div>
              </div>
              
              <div className='card'>
                <div className="card-header">
                <h2 className='card-title'>Lorem ipsum dolor sit amet.</h2>
                </div>
                <Link className='card-link' href="/"><img className='card-image' src='https://unsplash.com/photos/eIBTh5DXW9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwb3dlcnxlbnwwfHx8fDE2ODUyNzU4ODZ8MA&force=true'></img></Link>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis id, sed distinctio consequuntur assumenda omnis amet culpa obcaecati deserunt.</p>
              </div>
              </div>

              </div>

            </section>
            <section className="grid-show c_container clr-primary">
              <div className="side-grid">
              <h1 className="side-grid-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, atque?</h1>
              <p className="side-grid-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <Link rel="stylesheet" href="" className="side-grid-btn">learn more</Link>
              </div>
              <div className="grid-view">
                <Link href=""><img src="https://unsplash.com/photos/a1Lm99Kkqtg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true&w=2400" alt="" /></Link>
                <Link href=""><img src="https://unsplash.com/photos/WYGhTLym344/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true" alt="" /></Link>
                <video src="https://www.pexels.com/fr-fr/download/video/6522668/?fps=29.97&h=1080&w=1920"></video>
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
      </div>

    </>
  );
}
export default Home
