import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  //gives us the user
  const [user, loading] = useAuthState(auth);

  //Sign in with Google Auth
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="mt-32 p-8 text-gray-700">
      <h2 className="text-2xl font-medium">Join Today</h2>
      <div className="py-4">
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-3 gap-4"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
