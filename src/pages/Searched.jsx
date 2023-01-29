import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import LoadingScreen from "../components/LoadingScreen";

function Searched() {
  const [googleBooks, setGoogleBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  let params = useParams();

  const getSearchedBooks = async (bookname) => {
    setLoading(true);
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookname}&maxResults=40&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const googleList = await data.json();
    setLoading(false);
    setGoogleBooks(googleList.items);
  };

  useEffect(() => {
    getSearchedBooks(params.search);
  }, [params.search]);
  if (loading) return <LoadingScreen />;
  return (
    <div className="grid md:grid-cols-2 gap-2 md:gap-3">
      {googleBooks?.map((book) => {
        return <Card key={book.id} bookObj={book} />;
      })}
    </div>
  );
}

export default Searched;
