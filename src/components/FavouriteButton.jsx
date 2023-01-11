import { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, setDoc, collection } from "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function FavouriteButton({ bookObj, isFavourited }) {
  const [isFav, setIsFav] = useState(isFavourited);
  const [user, loading] = useAuthState(auth);
  // const query = collection(db, `users/${user.uid}/favourites`);
  // const [docs, load, error] = useCollectionData(query);

  async function handleFavourite() {
    console.log(isFav);
    if (isFav == true) {
      console.log(
        "zustand for to change upon close. or can do here but it changes every time."
      );
    } else {
      const docRef = doc(db, `users/${user.uid}/favourites`, bookObj.id);
      await setDoc(docRef, { bookid: bookObj.id });
    }
  }

  // useEffect(() => {
  //   docs?.map((doc) => {
  //     doc.bookid == bookObj.id ? console.log("yes") : console.log("no");
  //   });
  // }, [bookObj]);

  // console.log(isFavourited);
  return (
    <div className="my-2">
      {isFav ? (
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleFavourite}
        >
          Favourited
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleFavourite}
        >
          Add to Favourites
        </button>
      )}
      {/* <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handleFavouriteBook}
      >
        Add to Favourites
      </button> */}
    </div>
  );
}

export default FavouriteButton;
