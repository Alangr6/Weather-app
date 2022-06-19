import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search-location" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};
