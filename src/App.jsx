import "./App.css";
import Blog from "./Components/Blog/Blog";
import Blogs from "./Components/Blogs/Blogs";
import Bookmark from "./Components/Bookmark/Bookmark";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-4">
        <Header></Header>
        <div className="flex justify-between py-4">
          <Blog></Blog>
          <Bookmark></Bookmark>
        </div>
      </div>
      {/* data fetching  */}
      <Blogs></Blogs>

    </>
  );
}

export default App;
