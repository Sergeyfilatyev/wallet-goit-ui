import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  /* const { token, isAuth } = useSelector(getAuth);

  if (!isAuth && token) {
    return <p>.....Loading</p>;
  }

  if (!isAuth && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; */

  const isAuth = useSelector(getAuth).isAuth;

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
