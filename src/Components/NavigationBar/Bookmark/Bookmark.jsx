import React from "react";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const {isLoggedIn} = useSelector(state=>state.Auth);
  return (
    <label tabIndex={0} className={`${!isLoggedIn&&'hidden'} btn btn-primary sm:btn-ghost btn-circle p-1`}>
    <button className="btn btn-sm btn-primary sm:btn-ghost btn-circle">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z"></path>
        <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6"></path>
      </svg>
    </button>
    </label>
  );
};

export default Bookmark;
