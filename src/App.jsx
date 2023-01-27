import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Search from "./components/Search";

function App() {
  //DARK MODE
  //RESPONSIVENES
  //LOADIN WHEN THE RESULT FOR SEARCH IS GOING, REFRESH IF TOO LATE, CANT GET IF ERROR
  //STICKY NAV AND FOOTER IF POSSIBLE
  //FOOTER
  return (
    <div className="h-screen font-nunito bg-white dark:bg-grey-dark">
      <BrowserRouter>
        <Nav />
        <Search />
        <main className="mt-8 mx-6">
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
