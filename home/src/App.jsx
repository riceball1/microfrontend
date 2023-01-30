import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="flex flex-col h-screen justify-between">
  <Header/>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="my-10">

    Home Page Content
    </div>
  </div>
  <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
