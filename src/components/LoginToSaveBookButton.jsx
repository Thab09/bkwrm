import { useNavigate } from "react-router-dom";

function LoginToSaveBookButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-yellow-700 "
      onClick={() => navigate("/auth/login")}
    >
      Login to Save Book
    </button>
  );
}

export default LoginToSaveBookButton;
