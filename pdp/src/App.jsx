import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Use of suspense is an example of async loading*/}
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowHeader(prevState => !prevState) }>Show Header</button>
        <div className="my-10">PDP Page Content</div>
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
