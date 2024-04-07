import { useQuery } from "@tanstack/react-query";
import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";
import { getAllPost } from "../services/user";
import { getCategory } from "../services/admin";
import Loader from "../components/modules/Loader";

function HomePage() {
  // My function
  const postQueryFn = getAllPost;
  const categoryQueryFn = getCategory;
  // My queryKey
  const postQueryKey = ["my-post-list"];
  const categoryQueryKey = ["get-categories"];
  // get All Post Data to pass Main section
  const { data: postData, isLoading: postIsLoading } = useQuery({
    queryKey: postQueryKey,
    queryFn: postQueryFn,
  });
  // get category data to pass Sidebar section
  const { data: categoryData, isLoading: categoryIsLoading } = useQuery({
    queryKey: categoryQueryKey,
    queryFn: categoryQueryFn,
  });

  return (
    <div className="w-full">
      {postIsLoading || categoryIsLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col md:flex-row md:justify-between justify-center gap-x-2 items-start">
          <Sidebar category={categoryData} isLoading={categoryIsLoading} />
          <Main posts={postData} isLoading={postIsLoading} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
