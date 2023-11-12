import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../currentUserContext";

export const ProtectedRoute = () => {
  const navigate = useNavigate()
  const user = useContext(CurrentUserContext);

  const isLoggedIn = user.email?.length > 1;

  useEffect(() => {
    if (!isLoggedIn) { navigate('/'); }
  }, []);

  return isLoggedIn ? (
    <Outlet />
  ) : null;
};

export default ProtectedRoute;
