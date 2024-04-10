import { checkOtp } from "../../services/auth";
import toast from "react-hot-toast";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

function CheckOtpForm({ mobile, setStep, code, setCode }) {
  const queryKey = ["profile"];
  const queryFn = getProfile;

  const { refetch } = useQuery({
    queryKey,
    queryFn,
  });

   

  const navigate = useNavigate();
  //create a handler to handle sendOTP
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;
    //get response & error from auth.js to handle this form
    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });

    // if OK
    if (response) {
      toast.success("خوش آمدید", {
        style: {
          border: "1px solid #008b19",
          padding: "16px",
          color: "#027d00",
        },
        iconTheme: {
          primary: "#005d06",
          secondary: "#96dda7",
        },
      });
      //setCookie for set => refreshToken & accessToken
      setCookie(response.data);
      navigate("/");
      //refetch data("profile") when navigate to home page
      refetch();
    }
    // if not OK
    if (error) {
      return toast.error("کد نادرست است");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full md:max-w-md px-4 flex flex-col mx-auto justify-center items-center mt-12 border-4 border-red-400 bg-red-100 rounded-xl py-6"
    >
      <h1 className="pb-4 text-xl font-bold text-red-600">
        کد تایید را وارد کنید
      </h1>
      <div className="w-full text-center pb-3 flex flex-col justify-center items-center">
        <span> کد تایید به این شماره موبایل ارسال شد:</span>
        <span>({mobile})</span>
      </div>
      <div className="flex justify-center w-full items-center gap-x-3">
        <label htmlFor="MyCode">کد را وارد کنید:</label>
        <input
          className="px-3 py-1 rounded-xl"
          type="text"
          id="MyCode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="کد را وارد کنید"
        />
      </div>
      <div className="w-full flex justify-center items-center gap-x-5 mt-6">
        <button
          className="py-1 bg-red-500 text-white px-3 rounded-xl"
          type="submit"
        >
          ورود
        </button>
        <button
          className="py-1 bg-red-500 text-white px-3 rounded-xl"
          onClick={() => setStep(1)}
        >
          تغییر شماره موبایل
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
