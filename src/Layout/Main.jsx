import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Main = () => {
  const location = useLocation();
  return (
    <NavigationBar>
      <Outlet />
      {location.pathname !== "/signin" || location.pathname !== "/register"?null:<Footer />}
    </NavigationBar>
  );
};

export default Main;