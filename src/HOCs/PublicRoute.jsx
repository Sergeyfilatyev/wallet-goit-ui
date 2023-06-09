import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(getAuth);
  const shouldRedirect = isAuth && restricted;
  return shouldRedirect ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
