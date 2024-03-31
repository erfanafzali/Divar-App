import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const mutationFn = addCategory;

  const { mutate, error, isPending, data } = useMutation({ mutationFn });
  console.log({ error, isPending, data });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className="w-full flex flex-col justify-start items-start"
    >
      <h1 className="text-lg md:text-xl font-bold">دسته بندی جدید</h1>
      {!!error && <p>{error.message}</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}

      {/* name */}
      <div className="w-full flex justify-center gap-x-2 items-start flex-col mt-5">
        <label htmlFor="name">دسته بندی</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 border-red-700 rounded-md py-1 px-2 font-bold mt-2 w-full md:max-w-[400px]"
        />
      </div>
      {/* slug */}
      <div className="w-full flex justify-center gap-x-2 items-start flex-col mt-5">
        <label htmlFor="slug" className="">
          اسلاگ
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          className="border-2 border-red-700 rounded-md py-1 px-2 font-bold mt-2 w-full md:max-w-[400px]"
        />
      </div>
      {/* icon */}
      <div className="w-full flex justify-center gap-x-2 items-start flex-col mt-5">
        <label htmlFor="icon" className="">
          آیکون
        </label>
        <input
          type="text"
          name="icon"
          id="icon"
          className="border-2 border-red-700 rounded-md py-1 px-2 font-bold mt-2 w-full md:max-w-[400px]"
        />
      </div>
      {/* submit form */}
      <button
        disabled={isPending}
        type="submit"
        className="mt-8 bg-red-700 px-8 py-1 rounded-md text-white font-bold"
      >
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
