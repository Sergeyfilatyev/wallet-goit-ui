import { useSelector, Outlet } from "react-redux";
import { isUserLogin } from "../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = () => {
  const isAuth = useSelector(isUserLogin);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default PublicRoute;
