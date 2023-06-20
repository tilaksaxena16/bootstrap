import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shoppingapp } from "./Components/Shoppingapp";
import { MouseEvents } from "./Events/MouseEvents";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shoppingapp />} />
          <Route exact path="/event" element={<MouseEvents />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
