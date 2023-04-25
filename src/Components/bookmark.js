// import React, { useState } from "react";

const Bookmark = (props) => {
//   const [bookmarks, setBookmarks] = useState(location.state.bookmarks || []);

  return (
    <div>
      <h3>Bookmarks</h3>
      {/* <p>{props}</p> */}
      {/* {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <div key={bookmark.id}>
            <img src={bookmark.url} alt="pic" />
          </div>
        ))
      ) : (
        <p>No bookmarks yet!</p>
      )} */}
    </div>
  );
};

export default Bookmark;
