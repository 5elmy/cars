import Style from "./VerificationCode.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from "../../assets/images/login/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; 
import { toast } from "react-toastify";


export default function VerificationCode() {
  let navigate = useNavigate();


  const validationSchema = Yup.object({
    otp: Yup.number()
      .required("OTP is required")
     

  });

  const loginFormik = useFormik({
    initialValues: {
      otp: "",
     
    },
    validationSchema, // Add validation schema here
    onSubmit: async (values) => {
      console.log({ values });
      // Uncomment and modify the following code to perform the login request
      // try {
      //   const res = await axios.post(
      //     'https://api.postgait.com/api/auth/Login',
      //     values,
      //     {
      //       headers: { "Accept": 'application/json, text/plain, */*', "Content-Type": 'application/json' },
      //     }
      //   );
      //   console.log({ res });
      //   // Redirect user on successful login
      //   navigate("/");
      // } catch (err) {
      //   console.log({ err });
      // }
    
        toast.info("OTP Successfully")
       
        navigate("/reset-password")
  


    },
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className={`${Style.bg} col-span-12 md:col-span-7 md:flex hidden items-center`}>
          <img src={car} alt="" className={`${Style.animate}`} />
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center min-h-screen md:min-h-0">
          <div className={`bg-[--main-bg] rounded-lg p-5 py-10 w-[90%] shadow-lg flex flex-col justify-center items-center`}>
            <div className="mb-10 w-full">
              <img src={logo} alt="rentcar" className="" />
            </div>
            <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-3 edu">
            Verification Code
            </p>
            <form onSubmit={loginFormik.handleSubmit} className="mt-5 w-full">
              <label htmlFor="otp" className="text-[--main-color]">OTP</label>
              <input
                name="otp"
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                placeholder="Enter OTP"
                type="text"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {loginFormik.touched.otp && loginFormik.errors.otp ? (
                <div className="text-red-600 pb-2">{loginFormik.errors.otp}</div>
              ) : null}

             

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
                  Verify
                </button>
              </div>
              <p className="text-center py-3 edu text-gray-400">
                Already have an account?{" "}
                <Link to={"/"} className="text-[--main-color]">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
