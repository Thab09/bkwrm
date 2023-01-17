import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Switch } from "@headlessui/react";

function Profile() {
  //state for toggle switch
  const [darkMode, setDarkMode] = useState("");
  const [enabled, setEnabled] = useState("");

  useEffect(() => {
    const existingPreference = localStorage.getItem("nightMode");
    if (existingPreference) {
      existingPreference === "light"
        ? (setDarkMode("light"), setEnabled(false))
        : (setDarkMode("dark"), setEnabled(true));
    } else {
      setDarkMode("light");
      setEnabled(false);
      localStorage.setItem("nightMode", "light");
    }
  }, []);

  const handleThemeChange = () => {
    setEnabled(enabled === true ? false : true);
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
    <div>
      <p>HEllo</p>
      <div className="flex justify-between">
        <p>Dark Mode</p>
        <Switch
          checked={enabled}
          onChange={handleThemeChange}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-800"
          } relative inline-flex h-6 w-11  items-center rounded-full `}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Profile;
