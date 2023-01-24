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
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="mx-8">
      <div className="flex gap-2 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="px-2 w-full h-8 rounded-sm border-solid border-2 border-orange-400 text-neutral-700 dark:border-purple-main focus:outline-none"
        />
        <button type="submit">
          <BsArrowRightShort
            size={32}
            className="rounded-sm bg-orange-600 dark:bg-purple-main"
            color="white"
          />
        </button>

        <button
          className="hidden font-medium border-solid border border-slate-900 px-2 py-px w-24 h-8 italic "
          type="submit"
        >
          search
        </button>
      </div>
    </form>
  );
}

export default Search;
