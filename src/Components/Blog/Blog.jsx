import { CiBookmark } from "react-icons/ci";
const Blog = () => {
  return (
    // Blog container
    <div className="w-2/3  p-2">
      {/* Blog img */}
      <img src="../../../src/assets/images/2.png" alt="" />
      {/* author section */}
      <div className="flex items-center justify-between py-5 pr-3">
        <div className="flex gap-6 items-center ">
          <img
            className="size-12"
            src="../../../src/assets/images/boy1.png"
            alt=""
          />
          <div className="space-y-1">
            <h4 className="text-2xl font-bold">Mr. Raju</h4>
            <p className="text-base font-semibold text-gray-500">
              Mar 14 (4 Days ago)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <h6 className="text-base font-medium text-gray-600">05 min read</h6>
          <span className="text-2xl text-gray-600">
            <CiBookmark />
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">
          How to get your first job as a self-taught programmer
        </h1>
        <p className="font-medium text-lg text-gray-500">#beginners #beginners</p>
        <h6 className="text-base underline text-sky-600 font-semibold">Mark as read</h6>
      </div>
    </div>
  );
};

export default Blog;
