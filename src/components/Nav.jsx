import React from "react";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen, FaUserCircle } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { ImBooks } from "react-icons/im";

function Nav() {
  const [user, loading] = useAuthState(auth);
  //change icons to outline later
  //add a line on top ie: divider
  return (
    <nav className="fixed inset-x-0 bottom-0 py-3 bg-white">
      <ul>
        {!user && (
          <div className="flex items-center justify-center gap-5">
            <Link to={"/"}>
              <AiFillHome className="" size={24} />
              <h4 className="hidden md:block">Home</h4>
            </Link>
            <Link
              to={"/auth/login"}
              className="py-2 px-4 text-sm bg-lime-700 text-white rounded-md font-medium ml-4"
            >
              Join Now
            </Link>
          </div>
        )}
        {user && (
          <div className="flex items-center justify-center gap-10">
            <NavLink to="/" className="">
              <AiFillHome className="" size={24} />
              <h4 className="hidden md:block">Home</h4>
            </NavLink>
            {/* <NavLink to="/reading">
              <FaBookOpen size={24} />
              <h4 className="hidden md:block">Reading</h4>
            </NavLink>
            <NavLink to="/planned">
              <MdCollectionsBookmark size={24} />
              <h4 className="hidden md:block">Planned</h4>
            </NavLink> */}
            <NavLink to="/favourites">
              <ImBooks size={24} />
              <h4 className="hidden md:block">Favourites</h4>
            </NavLink>
            <NavLink to="/profile">
              <FaUserCircle size={24} />
              <h4 className="hidden md:block">Profile</h4>
            </NavLink>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
