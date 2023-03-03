import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {isLoggedIn} = useSelector(state=>state.Auth);
    // const path = useLocation();
    
    if(isLoggedIn){
        return <Navigate to='/' />;
    }
    else{
        return children;
    }
};

export default PrivateRouter;