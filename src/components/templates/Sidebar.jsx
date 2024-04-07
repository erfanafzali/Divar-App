function Sidebar({ category }) {
   

  return (
    <div className="w-full md:w-[20%] overflow-x-auto">
      <ul className="w-full flex justify-center items-center md:flex-col md:justify-center md:items-start gap-x-8 md:gap-x-0 text-xs md:text-base gap-y-6 md:mt-4">
        {category.data.map((item) => (
          <li
            key={item._id}
            className=" flex justify-center text-gray-500 items-center gap-x-1 md:gap-x-2 whitespace-nowrap"
          >
            <img src={`${item.icon}.svg`} className="w-5" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;