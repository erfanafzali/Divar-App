import { sendOtp } from "../../services/auth";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile?.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) return setStep(2);
    if (error) console.log(error.response.data.message);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full md:max-w-md px-4 flex flex-col mx-auto justify-center items-center mt-12 border-4 border-red-400 bg-red-100 rounded-xl py-6"
    >
      <h1 className="text-xl font-bold text-red-500 pb-4">
        ورود به حساب کاربری
      </h1>
      <p>لطفا شماره موبایل خود را وارد کنید</p>
      <div className="w-full flex justify-center items-center gap-x-2 py-4">
        <label htmlFor="number" className="pb-2 text-base whitespace-nowrap">
          شماره موبایل :
        </label>
        <input
          className="w-full py-1 px-4 rounded-xl border-0 outline-0"
          type="text"
          id="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="شماره موبایل خود را وارد کنید"
        />
      </div>
      <button type="submit" className="py-1 mt-2 px-4 rounded-xl bg-red-500 font-bold text-white ">
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtpForm;
