import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import BookCardGuest from "../components/BookCardGuest";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Searched() {
  const [user, loading] = useAuthState(auth);
  const [googleBooks, setGoogleBooks] = useState([]);
  let params = useParams();

  const getSearchedBooks = async (bookname) => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookname}&maxResults=4&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const googleList = await data.json();
    setGoogleBooks(googleList.items);
  };

  useEffect(() => {
    getSearchedBooks(params.search);
  }, [params.search]);

  return (
    <div className="grid grid-cols-2 place-items-center">
      {user
        ? googleBooks?.map((book) => {
            return <BookCard key={book.id} bookObj={book} />;
          })
        : googleBooks?.map((book) => {
            return <BookCardGuest key={book.id} bookObj={book} />;
          })}
      <p>hi</p>
    </div>
  );
}

export default Searched;
