import React from "react";
import { createRoot } from "react-dom/client";

// Cargar las variables de entorno desde el archivo .env
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
