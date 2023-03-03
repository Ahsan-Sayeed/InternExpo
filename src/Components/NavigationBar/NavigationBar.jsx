import React from "react";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import Message from "./Message/Message";
import Bookmark from "./Bookmark/Bookmark";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import MenuBar from "./MenuBar/MenuBar";
import uuid from "react-uuid";
import MobileViewNav from "./MobileViewNav/MobileViewNav";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../../Feature/SideNavSlice/SideNavSlice";
import Login from "./Login/Login";
import Jobs from "./Jobs/Jobs";

const menuItems = [
  <li key={uuid()}>
    <Bookmark />
  </li>,
  <li key={uuid()}>
    <Profile />
  </li>,
  <li key={uuid()}>
    <Jobs />
  </li>,
  <li key={uuid()}>
    <Login />
  </li>,
];

const NavigationBar = ({ children }) => {
  const isOpen = useSelector((state) => state.sideNav.isOpen);
  const { isLoggedIn } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        onClick={() => dispatch(setIsOpen(!isOpen))}
      />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <ThemeChanger />
            <Notification />
            <Message />
            <MenuBar />
            <ul className="hidden sm:flex">{menuItems}</ul>
          </div>
        </div>
        {children}
        {/* <!-- Page content End here --> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay sm:hidden"
        ></label>
        <ul className="p-4 w-30 bg-inherit text-base-content sm:hidden p-0 rounded-full flex justify-center items-center h-48 transform translate-y-48">
          {/* <!-- Sidebar content here --> */}
          <MobileViewNav>{menuItems}</MobileViewNav>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
