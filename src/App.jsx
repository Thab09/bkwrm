import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Search from "./components/Search";

function App() {
  return (
    <div className="h-screen font-poppins bg-white dark:bg-gray-800">
      <BrowserRouter>
        <Nav />
        <Search />
        <main className="mt-10 mx-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
