import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
function useFireStore(userid) {
  const [collectionData, setCollectionData] = useState([]);
  //add user as a doc to firestore when user try to add their first book
  //add one subcollection to the user d
  useEffect(() => {
    const query = collection(db, `users/${userid}/favourites`);
    const [docs, load, error] = useCollectionData(query);
    setCollectionData(docs);
  }, [userid]);

  return { collectionData };
}

export default useFireStore;
