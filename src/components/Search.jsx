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
          className="px-2 w-full h-8 font-medium rounded-sm border-solid border border-neutral-300 text-neutral-700 dark:border-white focus:outline-none focus:border-2 focus:border-purple-main"
        />
        <button type="submit">
          <BsArrowRightShort
            size={32}
            className="rounded-sm  bg-purple-main"
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
