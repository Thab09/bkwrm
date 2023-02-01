import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input === "") return;

    const recentSearches = localStorage.getItem("recentSearches");
    if (recentSearches) {
      const prevSearches = localStorage.getItem("recentSearches");
      localStorage.setItem("recentSearches", prevSearches + "," + input);
    } else {
      localStorage.setItem("recentSearches", input);
    }

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
          className="px-2 w-full h-8 font-medium rounded-sm border-solid border-2 border-neutral-300 text-neutral-700 dark:border-white focus:outline-none focus:border-2 focus:border-slate-600"
        />
        <button type="submit">
          <BsArrowRightShort
            size={32}
            className="rounded-sm  bg-purple-main md:hidden"
            color="white"
          />
        </button>

        <button
          className="hidden md:block py-px w-24 h-8 font-semibold rounded-sm border-2 border-purple-main dark:bg-purple-main dark:text-white dark:hover:brightness-125 hover:bg-purple-main hover:text-white"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
