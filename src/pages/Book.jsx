import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//currently useless page
//the modal is replacing this in the searched page
function Book() {
  const [book, setBook] = useState([]);
  let params = useParams();

  const getBook = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const bookObj = await data.json();
    setBook(bookObj);
  };

  useEffect(() => {
    getBook(params.name);
  }, [params.name]);

  console.log(book);
  return (
    <div>
      <img
        src={
          book.volumeInfo.imageLinks == undefined
            ? null
            : book.volumeInfo.imageLinks.thumbnail
        }
        alt="cover image of the book"
        className="h-72 w-48 rounded-sm"
      />
    </div>
  );
}

export default Book;
