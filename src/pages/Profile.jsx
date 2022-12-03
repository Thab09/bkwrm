import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const getUserStatus = async () => {
    if (loading) return;
    if (!user) return navigate("/auth/login");
  };

  useEffect(() => {
    getUserStatus();
  }, [user, loading]);

  return (
    <div>
      <p>HEllo</p>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Profile;
