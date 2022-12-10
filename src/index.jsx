import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import RootRoute from "./routes";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RootRoute />
    </React.StrictMode>
);
