import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";
import RegisterModel from "../Components/RegisterModel";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Link from "next/link";

const AuthPage = () => {
  const [authState, setauthState] = useState(true);

  return (
    <div className="auth-container clr-primary">
      <Navbar bg_status={true} />
      <img
        src="https://unsplash.com/photos/V4ZYJZJ3W4M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZW5lcmd5JTIwY29tcGFueXxlbnwwfHx8fDE2OTYyMzQ1MjR8MA&force=true"
        alt=""
        className="auth-img"
      />
      <div className="overlay"></div>
      <div className="auth-panel">
        <div className="auth-panel-container">
          {authState ? (
            <LoginModal authState={authState} setauthState={setauthState} />
          ) : (
            <RegisterModel authState={authState} setauthState={setauthState} />
          )}
        </div>
      </div>
      <div className="auth-slogan">
        <img
          className="auth-slogan-img"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Sonlgaz.png"
          alt=""
        />
        <h1 className="auth-slogan-title text-title">
          Together for a stable, robus and clean Energy
        </h1>
      </div>
    </div>
  );
};
export default AuthPage;
