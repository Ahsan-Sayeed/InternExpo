import React from "react";
import { useSelector } from "react-redux";
const Message = () => {
  const {isLoggedIn} = useSelector(state=>state.Auth);
  return (
    <label tabIndex={0} className={`${!isLoggedIn&&'hidden'} btn sm:btn-ghost sm:shadow-none shadow-lg btn-accent btn-circle  sm:static fixed bottom-2 right-5 `}>
    <button className="btn btn-sm btn-ghost btn-circle">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
      </svg>
    </button>
    </label>
  );
};

export default Message;
