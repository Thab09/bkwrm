import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Home() {
  const recentSearches = localStorage.getItem("recentSearches");
  const [searches, setSearches] = useState([]);
  const navigate = useNavigate();

  const handleClearSearchHistory = () => {
    localStorage.removeItem("recentSearches");
    setSearches();
  };

  useEffect(() => {
    if (recentSearches) {
      const prevSearches = localStorage.getItem("recentSearches").split(",");
      setSearches(prevSearches);
    }
  }, []);

  return (
    <div className="p-4 bg-neutral-100  dark:bg-neutral-800 rounded-sm">
      <p className="font-bold mb-1 text-slate-700 dark:text-neutral-100">
        Recent Searches
      </p>
      {searches &&
        [...searches].reverse().map((search) => {
          return (
            <p
              className="pt-2 text-slate-500 text-sm md:text-base cursor-pointer dark:text-neutral-300 border-b border-slate-200 dark:border-neutral-700"
              key={Math.random()}
              onClick={() => navigate("/searched/" + search)}
            >
              {search}
            </p>
          );
        })}
      <div
        className="flex items-center gap-2 mt-6 cursor-pointer dark:text-neutral-400"
        onClick={() => handleClearSearchHistory()}
      >
        <AiOutlineDelete />
        <p className="text-sm font-extralight ">Clear Search History</p>
      </div>
    </div>
  );
}

export default Home;
