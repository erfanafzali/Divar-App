import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/user";
import Loader from "../modules/Loader";

function PostList() {
  const basUrl = import.meta.env.VITE_BASE_URL;
  const queryKey = ["my-post-list "];
  const queryFn = getPost;

  const { data, isLoading } = useQuery({ queryKey, queryFn });
  console.log(data);

  return (
    <div>
      <h3>آگهی های شما</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {data?.data.posts.map((post) => (
            <div key={post._id}>
              <img src={`${basUrl}${post.images[0]}`} />
              <div>
                <p></p>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
