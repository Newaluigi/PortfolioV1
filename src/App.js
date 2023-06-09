import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/competences" Component={Knowledge} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={NotFound} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
