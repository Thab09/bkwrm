import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  let params = useParams();

  const getSearchedBooks = async (bookname) => {
    const data = await fetch(
      "http://openlibrary.org/search.json?title=" +
        bookname +
        "&fields=*,availability&limit=10"
    );
    const booklist = await data.json();
    setSearchedBooks(booklist.docs);
  };

  useEffect(() => {
    getSearchedBooks(params.search);
  }, [params.search]);

  console.log(searchedBooks);
  return (
    <div>
      {searchedBooks.map((book) => {
        return (
          <div>
            <img
              src={
                "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"
              }
              alt="fds"
            />
            <p>{book.title}</p>
            <p>{book.author_name[0]}</p>
          </div>
        );
      })}
      <p>hi</p>
    </div>
  );
}

export default Searched;
