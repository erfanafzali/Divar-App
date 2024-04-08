import { deletePost } from "../../services/user";
import { e2p } from "../../utils/numbers";

function Main({ posts }) {
  console.log(posts.data.posts);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const deleteHandler = (id) => {
    deletePost(id);
  };
  return (
    <div className="w-full">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start gap-x-6 gap-y-4">
        {posts.data.posts.map((post) => (
          <li
            key={post._id}
            className="flex justify-between items-center border-2 border-gray-300 rounded-md"
          >
            <div className="pr-4 flex flex-col justify-between items-start gap-y-12">
              <div className="text-base font-bold">{post.options.title}</div>
              <div>
                <div className="text-sm whitespace-nowrap text-gray-500">
                  <span>{e2p(post.amount)}</span>
                  <span> تومان</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">{post.options.city}</p>
              </div>
            </div>
            <div className="w-full flex justify-end py-4 pl-4">
              <img
                src={`${baseURL}${post.images[0]}`}
                className="w-2/3 h-36 rounded-md object-cover"
              />
            </div>

            <button onClick={() => deleteHandler(post._id)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
