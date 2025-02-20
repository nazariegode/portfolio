import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde "react-dom/client"
import "../styles/index.css";
import Home from "./component/home";

// Obtiene el elemento del DOM donde se montará la app
const rootElement = document.querySelector("#app");

// Crea el root y renderiza el componente
const root = ReactDOM.createRoot(rootElement);
root.render(<Home />);
