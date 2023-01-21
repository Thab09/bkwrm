import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingScreen from "./LoadingScreen";

function PrivateRoutes() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <LoadingScreen />;
  return user ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoutes;
