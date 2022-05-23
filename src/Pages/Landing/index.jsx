import React, { useState } from "react"
import logo from "../../assets/logo-white.svg"
import splash from "../../assets/splash.svg"
import { Routes, Route, Navigate } from "react-router-dom"
import SignUp from "../../Components/SignUp"
import Login from "../../Components/Login"

const Landing = () => {
  // Login form selected by default -> false will show SignUp
  const [loginToggle, setLoginToggle] = useState(true)

  return (
    <div className="flex justify-center w-full h-screen m-auto bg-neutral-100">
      <div className="flex flex-col items-center justify-center w-3/5 px-20">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <div className="flex flex-col items-center justify-center w-2/5  bg-info relative">
        <img className="absolute top-12" src={logo} alt="logo" />
        <img src={splash} alt="splash" />
        <h2 className="font-semibold mt-6 text-center text-2xl text-neutral-100">
          Access to capital <br /> was never this simple!
        </h2>
      </div>
    </div>
  )
}

export default Landing
