import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

import Nav from "./components/Nav";
import Login from "./pages/auth/Login";
import Favourites from "./pages/Favourites";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Searched from "./pages/Searched";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    console.log(user ? "ya" : "na");
  }, []);

  console.log(user ? "ya" : "na");
  // need filtering in auth
  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <BrowserRouter>
        <main className="mx-3">
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/favourites" element={<Favourites user={user} />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
