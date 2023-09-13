import type { NextPage, } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import styles from '../styles/globals.css'
import React, { Fragment, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
                  <li><Link href="/" ref={nav_btn} className="p-3 button  button-primary clr-black font-bold">Login</Link></li>
                  <li ><Link href="/" className="p-1">Dash </Link></li>
                  <li><Link href="/"></Link></li>
                </ul>
              </div>
            </nav>
            <div className="showcase z-0">
              <img className="showcase-img" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
              <div className="overlay ov-1"></div>
            </div>
            <div className="nav-body z-10 absolute bottom-10 left-0 right-0">
              <div className="left-nav-body p-5 h-fit">
                <h1 className="nav-title color-primary" >Welcome to our company</h1>
                <div className="stats flex flex-row justify-between w-4/5 mx-auto ">
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
                <div className="news-slider-body p-3 m-3">
                  <h2 className="color-primary">This the new objectives of the enterprise based on new decisions</h2>
                </div>
              </div>
              <div className='c_container'>
                <Link href="" className="button button-primary m-3 ml-3 block w-1/2 text-center clr-black bold ">Click for reading more</Link>
              </div>
            </div>

          </div>
        </header>

        <main className="clr-primary grid relative">
          <div className="showcase absolute">
            <img src="https://unsplash.com/photos/E72PVn1qi30/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YWxnZXJpYXxlbnwwfHx8fDE2ODUxODMzODN8MA&force=true" className="showcase-img"></img>
            <div className="overlay ov-2"></div>
          </div>

          <div className="main-content relative top-0 bottom-0">
          <section className="grid-show c_container clr-primary">
              <div className="side-grid">
                <h1 className="side-grid-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, atque?</h1>
                <p className="side-grid-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Link rel="stylesheet" href="" className="side-grid-btn">learn more</Link>
              </div>
              <div className="mosaic grid">
                <Link className='mosaic-view-panel col-span-2 row-span-1' href=""><img src="https://unsplash.com/photos/a1Lm99Kkqtg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true&w=2400" alt="" /></Link>
                <Link className='row-span-1' href=""><img src="https://unsplash.com/photos/WYGhTLym344/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cG93ZXIlMjBlbmVyZ3klMjB2aWRlb3xmcnwwfHx8fDE2OTM5MDUzNzl8MA&force=true" alt="" /></Link>
                <video src="https://www.pexels.com/fr-fr/download/video/6522668/?fps=29.97&h=1080&w=1920"></video>
              </div>
              <div className="grid-show-info p-1">
                <p className="grid-show-info-text p-3 m-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, cumque?</p>
                <Link href="" className="button button-secondary m-5 mt-10 font-bold px-10 flex flex-row space-between">  <p className=''>Meher Shehn</p>  <FontAwesomeIcon className='arrow-primary p-2 mx-3 border-white-500' icon={faArrowRight} /> </Link>
              </div>
            </section>
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
            <section className="video-section">
              <div className="video-grid">
                <div className="main-grid-view">
                <img className='main-vid vid' src='https://pixabay.com/get/gf3f0e2196a6a2a6041fcf2289921997effb879763b4f0d9ae6a7a1514549c43959ef4e343d970bc3e0c9cfe9eb28d479.jpg'></img>
                </div>
                <div className="grid-slider-view">
                <img className='vid' src="https://pixabay.com/get/g45ca4cfbebe0a84fd0d78ab12a0aaf00a257b3107916710addbcab1d206bb11dda04098778836d0c12888ca76b55b00a.jpg"></img>
                <img className='vid' src="https://pixabay.com/get/gabff973796e3428ba65810173a8897b5440ecc62f0dfccd9100f5363dccf59662a033ae6a4a69b471e5ee4d81671ce23.jpg"></img>
                <img className='vid' src="https://pixabay.com/get/g45ca4cfbebe0a84fd0d78ab12a0aaf00a257b3107916710addbcab1d206bb11dda04098778836d0c12888ca76b55b00a.jpg"></img>
                <img className='vid' src="https://pixabay.com/get/g2342d332c6aca5f60411222374193a358944cf59a1fc84f58260973cc2a484245871e228fc3b270915e098cd6dced8e5.jpg"></img>
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
      </div>

    </>
  );
}
export default Home
