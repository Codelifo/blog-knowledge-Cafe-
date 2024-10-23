import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

import Header from "./Components/Header/Header";


function App() {

  const [bookmark, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)
 
  const handleBookMark = ({blog}) =>{
    const final = bookmark.filter((book) => book.id !== blog.id);
    const newBookmarks = [...final, blog]
    setBookmarks(newBookmarks)
    // console.log(bookmark.length)
  }

  const handleReadTime = ({reading_time}) => {
      setReadTime(reading_time + readTime)
  }

  return (
    <>
      <div className="max-w-6xl mx-auto py-4">
        <Header></Header>
        <div className="md:flex justify-between py-4">
          <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmark={bookmark} readTime={readTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
