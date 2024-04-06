import { useQuery } from "@tanstack/react-query";
import { deletePost, getPost } from "../../services/user";
import Loader from "../modules/Loader";
import { sp } from "../../utils/numbers";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const queryKey = ["my-post-list "];
  const queryFn = getPost;

  const { data, isLoading, refetch } = useQuery({ queryKey, queryFn });
  console.log(data);

  const deleteHandler = async (id) => {
    await deletePost(id);
    refetch();
  };

  return (
    <div className="w-full mb-32">
      <h3 className="w-full text-center text-lg md:text-xl font-bold my-6 border-b-2 border-black pb-4">
        آگهی های شما
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          {data.data.posts.map((post) => (
            <div key={post._id} className="w-full flex justify-between items-center border border-gray-600 rounded-md mb-5 pl-3">
              <img src={`${baseURL}${post.images[0]}`} className="h-12 w-12 md:h-20 md:w-20"/>
              <div className="flex flex-col justify-center items-center gap-y-1 font-semibold text-xs sm:text-sm md:text-base">
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-1 font-semibold text-xs sm:text-sm md:text-base">
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <div>
                  <span>{sp(post.amount)}</span>
                  <span> تومان</span>
                </div>
              </div>
              <button onClick={() => deleteHandler(post._id)} className="px-3 md:px-5 py-1.5 rounded-md bg-red-700 text-white font-bold text-sm md:text-base">
                 حذف آگهی
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
