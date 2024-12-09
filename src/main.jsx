import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContaxtApi } from "./Components/ContaxtApi.jsx"; // Corrected import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContaxtApi>
      {" "}
      {/* Corrected */}
      <App />
    </ContaxtApi>
  </StrictMode>
);
