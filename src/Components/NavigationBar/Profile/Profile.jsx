import React from "react";
import { useSelector,useDispatch } from "react-redux";
import AvatarImg from "../../../Assets/Avatar/avatar.jpg";
import { logOut } from '../../../Feature/AuthSlice/AuthSlice.js';

const Profile = () => {
  const {isLoggedIn} = useSelector(state=>state.Auth);
  const dispatch = useDispatch();

  const handleLogOut = () =>{
    dispatch(logOut());
  }

  return (
    <div className={`dropdown dropdown-end ${!isLoggedIn&&'hidden'}`}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={AvatarImg} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li onClick={handleLogOut}>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
