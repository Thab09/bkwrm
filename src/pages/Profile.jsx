import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";

function Profile() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  //state for toggle switch
  const [enabled, setEnabled] = useState(
    localStorage.getItem("nightMode") !== null
      ? localStorage.getItem("nightMode")
      : "false"
  );

  const getUserStatus = async () => {
    if (loading) return;
    if (!user) return navigate("/auth/login");
  };

  useEffect(() => {
    getUserStatus();
  }, [user, loading]);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nightMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nightMode", "false");
    }

    const test = localStorage.getItem("nightMode");
    console.log(test);
  }, [enabled]);

  return (
    <div>
      <p>HEllo</p>
      <div className="flex justify-between">
        <p>Dark Mode</p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
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
