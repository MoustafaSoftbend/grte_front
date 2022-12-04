import { NextPage } from "next"
import { Head } from "next/document"
import React from "react"
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dasboard: NextPage = () => {
  return (
    <>
      <div calssName="dash-side-bar">
        <img scr="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" clasName="logo-img"></img>
        <ul className="dash-list">
          <li className="list-item"><FontAwesomeIcon icon="fa-solid fa-house" /> </li>
        </ul>
      </div>
    </>

  )
}
export default Dasboard