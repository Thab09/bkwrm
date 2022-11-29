import React from "react";

function BookCard({ title, imgCover, authorName }) {
  return (
    <div className="h-64 w-32 my-2">
      <img
        src={"https://covers.openlibrary.org/b/id/" + imgCover + "-M.jpg"}
        alt="cover image of the book"
        className="h-44 w-32 rounded-sm"
      />
      <p className="text-xs font-bold my-1">{title}</p>
      <p className="text-xs font-medium">{authorName}</p>
    </div>
  );
}

export default BookCard;
