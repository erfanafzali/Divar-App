function Main({ posts }) {
  console.log(posts.data.posts);
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="w-full">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start ">
        {posts.data.posts.map((post) => (
          <li key={post._id} className="flex justify-center items-center">
            hh
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
