import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import React, { Fragment } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = () => {
  return (

    <>
      <nav className='bg-blue p-0 w-fit absolute'>
        <div className="top-navigation flex flex-row justify-between relative w-auto">
          <div className='left-navigation p-1 flex justify-start bg-transparent'>
            <img className='logo-pic w-10 h-10 p-0.5 rounded-full' src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
            <Link className="logo-name p-0.5" href="/">Sonelgaz TE</Link>

          </div>
          <div className='right-navigation '>
            <ul className="flex justify-start">
              <li><button type="button" className="">Login</button></li>
              <li>Dash</li>
            </ul>
          </div>
        </div>
        <div className="showcase relative top-0 left-0 right-0 z-0">
          <div className="showcase-content">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
          </div>
        </div>
        <div className="overlay relative top-0 left-0 right-0 bg-blue-50 z-10"></div>

        <div className="nav-body flex flex-row">
          <div className="left-nav-body flex-row">
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
        </div>
        <div className="right-nav-body flex-row">
          <div className="news-slider flex-col">
            <button className="">Vistes</button>
            <button className="">Developpement</button>
          </div>
          <div className="news-slider-body">
            <h2 className="color-primary">This the new objectives of the enterprise based on new decisions</h2>
          </div>
          <button type="button" className="btn-btn-invisible">Click for reading more</button>
        </div>
      </nav>
      <body>
        <section className="flex flex-row">
          <div className="container flex flex-row">
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

            <div className="grid-view grid grid-flow-row-dense grid-cols-2 grid-rows-2">
              <Link className="col-span-2" href="/">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
              </Link>
              <Link className="col-span-1" href="/">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img></Link>
              <Link className="col-span-1" href="/">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
              </Link>
            </div>
          </div>
        </section>
        <section className="H-slider flex flex-row">
          <h1 className="title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
          <div className="H-slider-heading">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <h3>10kwp+</h3>
            <h3>1mWp</h3>
            <h3>10mWp+</h3>
          </div>
          <div className="H-slider-container">
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

        </section>

        <footer className="page-footer container" >
          <div className="">
            <h1 className="credentials">Sonelgaz transport electrique</h1>
            <address className="">700 buraux gue de constantine</address>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Home
