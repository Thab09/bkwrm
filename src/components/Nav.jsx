import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen, FaUserCircle } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { ImBooks } from "react-icons/im";

function Nav() {
  //change icons to outline later
  //add a line on top ie: divider
  return (
    <nav className="flex justify-center gap-8 absolute left-0 right-0 bottom-4">
      <NavLink to="/" className="">
        <AiFillHome className="" size={24} />
        <h4 className="hidden md:block">Home</h4>
      </NavLink>
      <NavLink to="/reading">
        <FaBookOpen size={24} />
        <h4 className="hidden md:block">Reading</h4>
      </NavLink>
      <NavLink to="/planned">
        <MdCollectionsBookmark size={24} />
        <h4 className="hidden md:block">Planned</h4>
      </NavLink>
      <NavLink to="/completed">
        <ImBooks size={24} />
        <h4 className="hidden md:block">Completed</h4>
      </NavLink>
      <NavLink to="/profile">
        <FaUserCircle size={24} />
        <h4 className="hidden md:block">Profile</h4>
      </NavLink>
    </nav>
  );
}

export default Nav;
