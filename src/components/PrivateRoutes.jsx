import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function PrivateRoutes() {
  const [user, loading] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoutes;
