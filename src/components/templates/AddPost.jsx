import { useState } from "react";
import { getCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utils/cookie";
import axios from "axios";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });

  const queryKey = ["get-categories"];
  const queryFn = getCategory;

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    //  post/create
    const formData = new FormData();
    // formData.append("title", form["title"]);
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <form
      onChange={changeHandler}
      className="w-full flex flex-col items-start justify-center px-4"
    >
      <h1 className="w-full text-center font-bold text-xl mb-7">افزودن آگهی</h1>
      {/* title */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="title" className="font-bold text-lg ">
          عنوان:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-2 border-red-700 rounded-md w-full outline-0 py-1 px-3"
        />
      </div>
      {/* content */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="content" className="font-bold text-lg">
          توضیحات:
        </label>
        <textarea
          name="content"
          id="content"
          className="w-full border-2 border-red-700 rounded-md resize-none outline-0 px-3 py-1"
        />
      </div>
      {/* amount */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="amount" className="font-bold text-lg">
          قیمت:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="border-2 border-red-700 rounded-md w-full outline-0 py-1 px-3"
        />
      </div>
      {/* city */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="city" className="font-bold text-lg">
          شهر:
        </label>
        <input
          type="text"
          name="city"
          id="city"
          className="border-2 border-red-700 rounded-md w-full outline-0 py-1 px-3"
        />
      </div>
      {/* category */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="category" className="font-bold text-lg">
          دسته بندی:
        </label>
        <select
          name="category"
          id="category"
          className="w-full py-1 px-3 border-2 border-red-700 outline-0 rounded-md"
        >
          {data?.data.map((item) => (
            <option key={item._id}>{item.name}</option>
          ))}
        </select>
      </div>
      {/* file */}
      <div className="w-full md:w-1/3 space-y-2 mb-4">
        <label htmlFor="images" className="font-bold text-lg">
          عکس:
        </label>
        <input
          type="file"
          name="images"
          id="images"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-neutral-200 bg-clip-padding px-3 py-1.5 text-base font-normal text-surface/50 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface/50 focus:border-primary focus:text-white focus:shadow-inset focus:outline-none dark:border-white/70 dark:bg-red-700  dark:text-white file:dark:text-white "
        />
      </div>

      <button
        onClick={addHandler}
        className="px-6 py-1 bg-red-700 text-white font-bold rounded-md mt-6 "
      >
        ثبت آگهی
      </button>
    </form>
  );
}

export default AddPost;
