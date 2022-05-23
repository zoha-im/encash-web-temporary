import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles"
import { GlobalTheme } from "./utils/GlobalMaterialTheme"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      {/* <StyledEngineProvider injectFirst> */}
      <ThemeProvider theme={GlobalTheme}>
        <App />
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </React.StrictMode>
  </Router>
)
