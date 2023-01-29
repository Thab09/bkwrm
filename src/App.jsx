import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  //REFRESH IF TOO LATE, CANT GET IF ERROR
  //HOME -> RECENT SEARCHES
  //SHARE PAGE?
  //DIFFERENT SEARCHES
  return (
    <div className="min-h-screen font-nunito bg-neutral-100 dark:bg-black">
      <div className="max-w-5xl mx-auto min-h-screen bg-white dark:bg-grey-dark">
        <BrowserRouter>
          <Nav />
          <Search />
          <main className="mt-8 mx-6 scrollbar">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
