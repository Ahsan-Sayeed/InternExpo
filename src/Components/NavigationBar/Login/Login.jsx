import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const {isLoggedIn} = useSelector((state) => state.Auth);
  return (
    <Link to={'/signin'} className={`btn btn-outline ${isLoggedIn && "hidden"} mx-2`}>
      Login
    </Link>
  );
};

export default Login;
