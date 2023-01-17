import { useState, useEffect } from "react";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, setDoc, collection, deleteDoc } from "firebase/firestore";

function Favourites() {
  const [favouritesList, setFavouritesList] = useState([]);
  const [user, loading] = useAuthState(auth);
  const query = collection(db, `users/${user.uid}/favourites`);
  const [docs, load, error] = useCollectionData(query);
  //pass useruid from app (higher level)??
  const getBookbyID = async () => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    console.log(data);
    // setFavouritesList()
  };

  useEffect(async () => {
    // docs?.map((doc) => {
    //   getBookbyID();
    // });
    getBookbyID();
  });
  console.log(docs);
  return (
    <div>
      <p>favs</p>
    </div>
  );
}

export default Favourites;
