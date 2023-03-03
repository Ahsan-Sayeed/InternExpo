import React from "react";
import { useSelector } from "react-redux";

const svgLogo = {
  open: (
    <svg
      className="w-5 h-5"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  close: (
    <svg
      className="swap-on fill-current w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
  ),
};

const MenuBar = () => {
  const isOpen = useSelector(state=>state.sideNav.isOpen);

  return (
    <div className="sm:hidden">
      <label htmlFor="my-drawer-4" className="btn btn-ghost btn-sm btn-circle">
        {isOpen ? svgLogo.close:svgLogo.open }
      </label>
    </div>
  );
};

export default MenuBar;
