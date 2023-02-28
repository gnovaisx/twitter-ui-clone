import "./Sidebar.css";
import twitterLogo from "../assets/logo-twitter.svg";
import {
  Hash,
  House,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react";
import { Link, NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
        <NavLink to="/explore">
          <Hash />
          Explore
        </NavLink>
        <NavLink to="/notifications">
          <Bell />
          Notifications
        </NavLink>
        <NavLink to="/messages">
          <Envelope />
          Messages
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple />
          Bookmarks
        </NavLink>
        <NavLink to="/lists">
          <FileText />
          Lists
        </NavLink>
        <NavLink to="/profile">
          <User />
          Profile
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle />
          More
        </NavLink>
      </nav>

      <button type="button" className="new-tweet">
        Tweet
      </button>
    </aside>
  );
}
