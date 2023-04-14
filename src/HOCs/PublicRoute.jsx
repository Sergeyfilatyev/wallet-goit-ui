import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, restricted = false }) => {
  /* 

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />; */
  const isAuth = useSelector(getAuth).isAuth;;
  const shouldRedirect = isAuth && restricted;
  return shouldRedirect ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
