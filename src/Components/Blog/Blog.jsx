import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";

const Blog = ({blog, handleBookMark, handleReadTime}) => {
  const {title, author, author_Img, cover, hashtags, posted_date, reading_time} = blog
  return (
  
    <div className="mb-20 border p-2 rounded-lg">
   
      <img className="w-full" src={cover} alt="" />
      
      <div className="flex items-center justify-between py-5 pr-3">
        <div className="flex gap-6 items-center ">
          <img
            className="size-14 rounded-full border "
            src={author_Img}
            alt=""
          />
          <div className="space-y-1">
            <h4 className="text-2xl font-bold">Mr. {author}</h4>
            <p className="text-base font-semibold text-gray-500">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <h6 className="text-base font-medium text-gray-600">{reading_time} min read</h6>
          <button onClick={()=> handleBookMark({blog})} className="text-2xl text-gray-600">
            <CiBookmark />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">
          {title}
        </h1>
        <p className="font-medium text-lg text-gray-500">{hashtags.map((hash, idx) => <span key={idx}>#{hash}  </span>)}</p>
        <button onClick={()=> handleReadTime({reading_time})} className="text-base underline text-sky-600 font-semibold">Mark as read</button>
      </div>
    </div>
 
  );
};

Blog.propTypes = {
  blog : PropTypes.object,
  handleBookMark: PropTypes.func,
  handleReadTime: PropTypes.number
}

export default Blog;


