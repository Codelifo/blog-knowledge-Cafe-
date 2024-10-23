import PropTypes from "prop-types";

const Bookmark = ({ bookmark, readTime }) => {
  return (
    <div className="">
      <div className="border border-purple-700 p-4 m-2 rounded-lg bg-purple-100">
        <h1 className="font-bold text-xl text-center text-purple-700">
          Spent time on read : {readTime}
        </h1>
      </div>
      <div className="bg-gray-100 m-2 rounded-lg">
        <h1 className="font-bold text-2xl ml-4 p-3">Bookmarked Blogs : {bookmark.length}</h1>

        {bookmark.map((bm, idx) => (
          <div className="bg-white rounded-lg m-3 " key={idx}>
            <h4 className="text-lg font-semibold p-3" >
              {bm.title}
            </h4>
          </div>
        ))}

        <br />
        <br />
 
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.array,
  readTime: PropTypes.number

};
export default Bookmark;
