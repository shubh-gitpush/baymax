import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css" // Corrected typo here
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
