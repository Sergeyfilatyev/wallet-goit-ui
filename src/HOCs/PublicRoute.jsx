import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children, restricted = false }) => {
  const location = useLocation();
  console.log(location);
  const isAuth = useSelector(getAuth);
  const shouldRedirect = isAuth && restricted;
  return shouldRedirect ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
