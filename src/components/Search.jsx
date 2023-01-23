import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input === "") return;
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className="mx-8">
      <div className="flex gap-2 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="border-solid border-2 border-neutral-700 px-2 w-full h-7 rounded-sm"
        />
        <BsArrowRightShort
          size={28}
          className="bg-neutral-900 rounded-sm"
          color="white"
        />
        <button
          className="hidden font-medium border-solid border border-slate-900 px-2 py-px w-24 h-7 italic "
          type="submit"
        >
          search
        </button>
      </div>
    </form>
  );
}

export default Search;
