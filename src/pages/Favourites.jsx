import { useState, useEffect } from "react";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, setDoc, collection, deleteDoc } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen";

function Favourites() {
  const [favouritesList, setFavouritesList] = useState([]);
  const [user, loading] = useAuthState(auth);

  const query = collection(db, `users/${user.uid}/favourites`);

  const [docs, load, error] = useCollectionData(query);

  const getBookbyID = async (bookid) => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${bookid}?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    // console.log(data);
    const googleList = await data.json();
    setFavouritesList([...favouritesList, googleList]);
  };

  useEffect(() => {
    docs?.map((doc) => {
      getBookbyID(doc.bookid);
    });
  }, [user]);
  console.log(docs);
  console.log(favouritesList);
  return <div>{docs == undefined ? <LoadingScreen /> : <p></p>}</div>;
}

export default Favourites;
