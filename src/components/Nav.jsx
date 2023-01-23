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
    <nav className="py-3 bg-white mx-8">
      <ul>
        <div className="font-lora flex text-3xl font-bold items-center justify-between gap-5">
          <Link to={"/"}>
            <h4 className="">bkwrm</h4>
          </Link>
          {darkMode === "light" ? (
            <BiSun onClick={handleThemeChange} className="cursor-pointer" />
          ) : (
            <BiMoon onClick={handleThemeChange} className="cursor-pointer" />
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
