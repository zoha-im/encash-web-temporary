import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, InputGroup } from "../index"

const Login = () => {
  let navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-Inter font-bold p-2 pb-10 text-5xl">Login</h1>

      <form className="flex flex-col items-center justify-center">
        <InputGroup label="username" type="text" />
        <InputGroup label="Password" type="password" />
        <Button variant="primary" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
      </form>
      <p
        className="text-sm text-neutral-60 mt-5 cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        Create an account
      </p>
    </div>
  )
}

export default Login
