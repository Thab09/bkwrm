import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./pages/auth/Login";
import Favourites from "./pages/Favourites";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Searched from "./pages/Searched";

function App() {
  // need filtering in auth
  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <BrowserRouter>
        <main className="mx-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/searched/:search" element={<Searched />} />
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
