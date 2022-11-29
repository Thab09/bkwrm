import { useState, useEffect } from "react";
import Search from "../components/Search";

function Home() {
  return (
    <div className="">
      <Search />
      <div></div>
      {/* <img
        src={
          "https://covers.openlibrary.org/b/isbn/" + book.isbn_13[0] + "-M.jpg"
        }
        alt=""
      /> */}
    </div>
  );
}

export default Home;
