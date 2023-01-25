import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Searched() {
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
    <div className="">
      {googleBooks?.map((book) => {
        return <Card key={book.id} bookObj={book} />;
      })}
    </div>
  );
}

export default Searched;
