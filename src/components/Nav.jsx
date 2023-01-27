import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";

function Nav() {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    const existingPreference = localStorage.getItem("nightMode");
    if (existingPreference) {
      existingPreference === "light"
        ? (setDarkMode("light"),
          document.documentElement.classList.remove("dark"))
        : (setDarkMode("dark"), document.documentElement.classList.add("dark"));
    } else {
      setDarkMode("light");
      localStorage.setItem("nightMode", "light");
    }
  }, []);

  const handleThemeChange = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("nightMode", "dark");
    } else {
      setDarkMode("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nightMode", "light");
    }
  };

  return (
    <nav className="py-3 mb-3 mx-8">
      <ul>
        <div className="flex text-2xl font-bold items-center justify-between gap-5">
          <Link to={"/"}>
            <h4 className="text-purple-main dark:brightness-125">bkwrm</h4>
          </Link>
          {darkMode === "light" ? (
            <BiMoon
              onClick={handleThemeChange}
              className="cursor-pointer text-neutral-900"
            />
          ) : (
            <BiSun
              onClick={handleThemeChange}
              className="cursor-pointer text-white"
            />
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
