import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Reading from "./pages/Reading";
import Planned from "./pages/Planned";
import Completed from "./pages/Completed";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Searched from "./pages/Searched";
import Book from "./pages/Book";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/planned" element={<Planned />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/book/:name" element={<Book />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;