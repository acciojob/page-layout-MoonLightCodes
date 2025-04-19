import React from "react";
import "./../styles/App.css";
import { Header } from "./Header";
import { Child } from "./Child";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Header />
       <Child />
      <Footer />
    </>
  );
};

export default App;
