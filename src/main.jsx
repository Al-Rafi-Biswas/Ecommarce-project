import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContaxtApi } from "./Components/ContaxtApi.jsx"; // Corrected import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import Store from "./Store.js";
import firebaseConfig from "./firebase.config.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <ContaxtApi>
        <App />
      </ContaxtApi>
    </Provider>
  </StrictMode>
);
