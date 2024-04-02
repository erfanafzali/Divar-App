import { useQuery } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "../../services/admin";
import Loader from "../modules/Loader";
function CategoryList() {
  const queryKey = ["get-categories"];
  const queryFn = getCategory;

  const { error, data, isLoading } = useQuery({ queryKey, queryFn });
  console.log({ error, data, isLoading });

  const deleteHandler = (id) => {
    deleteCategory(id);
  };

  return (
    <div className="w-full mb-6">
      <h1 className="w-full text-center font-bold text-lg md:text-xl mb-4">
        Category List
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full space-y-4">
          {data?.data.map((item) => (
            <div
              key={item._id}
              className="w-full border-2 border-red-700 rounded-md flex justify-between px-3 py-1 text-sm md:text-lg items-center"
            >
              <div className="w-full flex justify-start items-center gap-x-1 md:gap-x-3">
                <img src={`${item.icon}.svg`} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <div className="flex justify-end gap-x-2 items-center w-full pl-2">
                <span>{item.slug}</span>
                <span>:slug</span>
              </div>

              <button
                onClick={deleteHandler(item._id)}
                className="bg-red-500 px-4 py-1 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryList;
