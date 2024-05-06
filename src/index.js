import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.js";
import GlobalStyle from "./Components/Styles/GlobalStyle.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<BrowserRouter>
<GlobalStyle/>
<App />
</BrowserRouter>

</>
);
