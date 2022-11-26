import { useState, useEffect } from "react";
import Search from "../components/Search";

function Home() {
  const [book, setBook] = useState([]);
  const fetchBooks = async () => {
    const api = await fetch("https://openlibrary.org/books/OL7353617M.json");
    const data = await api.json();
    setBook(data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  // console.log(book.isbn_13[0]);
  return (
    <div>
      <Search />
      {/* <img
        src={
          "https://covers.openlibrary.org/b/isbn/" + book.isbn_13[0] + "-M.jpg"
        }
        alt=""
      /> */}
      <p>{book.title}</p>
    </div>
  );
}

export default Home;
