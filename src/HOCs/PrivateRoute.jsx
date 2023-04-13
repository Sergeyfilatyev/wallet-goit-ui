import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token, isAuth } = useSelector(getAuth);

  if (!isAuth && token) {
    return <p>.....Loading</p>;
  }

  if (!isAuth && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
