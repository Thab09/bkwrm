import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, setDoc, collection } from "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function FavouriteButton({ bookObj }) {
  const [isFavourited, setIsFavourited] = useState(false);
  const [user, loading] = useAuthState(auth);
  // const query = collection(db, `users/${user.uid}/favourites`);
  // const [docs, load, error] = useCollectionData(query);

  async function handleFavouriteBook() {
    const docRef = doc(db, `users/${user.uid}/favourites`, bookObj.id);
    await setDoc(docRef, { bookid: bookObj.id });
  }
  return (
    <div className="my-2">
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handleFavouriteBook}
      >
        Add to Favourites
      </button>
    </div>
  );
}

export default FavouriteButton;
