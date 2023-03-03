import "./App.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Firebase/Firebase.config";
import { useDispatch } from "react-redux";
import { logInInfo } from "./Feature/AuthSlice/AuthSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      dispatch(logInInfo(user))
    });
    return () => {
      subscribe();
    };
  }, []);

  return <RouterProvider router={MainRoutes}></RouterProvider>;
}

export default App;
