import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

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
    <div className="grid grid-cols-2 place-items-center">
      {searchedBooks.map((book) => {
        return (
          <BookCard
            key={book.isbn[0]}
            title={book.title}
            imgCover={book.cover_i}
            authorName={book.author_name[0]}
          />
        );
      })}
      <p>hi</p>
    </div>
  );
}

export default Searched;
