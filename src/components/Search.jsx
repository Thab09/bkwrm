import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../utils/firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (user) {
      const docRef = doc(
        db,
        `users/${user.uid}/favourites`,
        "Used to create out of nowhere"
      );
      await setDoc(docRef, {
        createdFor: "To set up the subcollection for each user",
      });

      navigate("/searched/" + input);
    }
    navigate("/searched/" + input);
  };

  //dont let the input be null

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Search;
