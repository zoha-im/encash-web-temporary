import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import { Dashboard, ERROR404, Landing } from "./Pages"
import { Login, SignUp } from "./Components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        {/* Landing contains both login and signup public-child routes */}
        <Route path="/*" element={<Landing />} />
        {/** Wrap all Internal Routes under ProtectedRoutes element */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* ERROR 404 Page route shown  */}
        <Route path="*" element={<ERROR404 />} />
      </Routes>
    </div>
  )
}

export default App
