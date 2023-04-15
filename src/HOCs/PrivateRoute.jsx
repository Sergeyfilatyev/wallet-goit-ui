import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getAuth).isAuth;

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
