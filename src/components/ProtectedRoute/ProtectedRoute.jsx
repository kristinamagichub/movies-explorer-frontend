import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../currentUserContext";

export const ProtectedRoute = () => {
  const navigate = useNavigate()
  const user = useContext(CurrentUserContext);

  const { isLoggedIn } = user;

  useEffect(() => {
    if (!isLoggedIn) { navigate('/'); }
  }, []);

  return isLoggedIn ? (
    <Outlet />
  ) : null;
};

export default ProtectedRoute;
