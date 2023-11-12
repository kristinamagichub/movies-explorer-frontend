import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../currentUserContext";

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const navigate = useNavigate()
  const user = useContext(CurrentUserContext);

  const isLoggedIn = user.email?.length > 1;

  useEffect(() => {
    if (!isLoggedIn) { navigate('/'); }
  }, []);

  return props.loggedIn ? (
    // <Component {...props} />
    <Outlet />
  ) : (
    <Navigate to="/" replace /> //signup
  );
};

export default ProtectedRoute;
