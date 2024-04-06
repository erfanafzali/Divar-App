import { Link, useNavigate } from "react-router-dom";
import { deleteCookies } from "../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Header() {
  const navigate = useNavigate();
  const exitHandler = () => {
    deleteCookies();
    navigate("/auth");
    window.location.reload();
  };

  const queryKey = ["profile"];
  const queryFn = getProfile;

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className="w-full flex justify-between items-center px-2 md:px-6 mb-6 border-b-2 py-2">
      <div className="flex justify-center items-center gap-x-4 md:gap-x-10 ">
        <Link to="/">
          <img src="/public/divar.svg" alt="" className="w-10 md:w-12" />
        </Link>
        <div className="flex justify-center items-center gap-x-1 md:gap-x-2">
          <img src="/public/location.svg" alt="" />
          <p className="text-base md:text-lg text-gray-500">تهران</p>
        </div>
      </div>
      {/* exit button */}
      <button
        className="bg-red-700 text-white font-bold px-6 py-1.5 rounded-md"
        onClick={() => exitHandler()}
      >
        خروج
      </button>
      {/* admin button */}
      {data && data.data.role === "ADMIN" ? (
        <Link to="/admin">ادمین</Link>
      ) : null}
      <div className="flex justify-center items-center gap-x-4 md:gap-x-6 text-sm md:text-lg text-gray-500">
        <Link
          to="/auth"
          className="flex justify-center items-center gap-x-1 md:gap-x-2"
        >
          <img src="/public/profile.svg" alt="" />
          <p>دیوار من</p>
        </Link>
        <Link to="/dashboard">
          <button className="bg-red-700 px-3 py-1.5 rounded-md text-white whitespace-nowrap font-bold">
            ثبت آگهی
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
