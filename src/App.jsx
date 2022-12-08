import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./pages/auth/Login";
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
    <div className="h-screen bg-white dark:bg-gray-800">
      <BrowserRouter>
        <main className="mx-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/planned" element={<Planned />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/book/:name" element={<Book />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Nav className="" />
      </BrowserRouter>
    </div>
  );
}

export default App;
