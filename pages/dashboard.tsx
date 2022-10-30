import { NextPage } from "next"
import { Head } from "next/document"
import React from "react"
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

export const Dasboard: NextPage = () => {
  return (
    <React.Fragment>
      <Head className="container">
        <nav className="bg-blue flex flex-row justify-between">
          <div className="left-navigation">
            <img className="logo-pic" src=""></img>
          </div>
          <div className="right-navigation"></div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </Head >
    </React.Fragment >

  )}
export default Dasboard