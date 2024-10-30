

import Style from "./Login.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from "../../assets/images/login/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup
import { toast } from "react-toastify";


export default function Login() {
  let navigate = useNavigate();


  const validationSchema = Yup.object({
    Email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    Password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const loginFormik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
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

      toast.info("Sign In successfully")
      navigate("/all")

    },
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className={`${Style.bg} col-span-12 md:col-span-7 md:flex items-center hidden `}>
          <img src={car} alt="" className={`${Style.animate}`} />
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center min-h-screen md:min-h-0">
          <div className={`bg-[--main-bg] rounded-lg p-5 py-10 w-[90%] shadow-lg flex flex-col justify-center items-center`}>
            <div className="mb-10 w-full">
              <img src={logo} alt="rentcar" className="" />
            </div>
            <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-3 edu">
              Sign in 
            </p>
            <form onSubmit={loginFormik.handleSubmit} className="mt-5">
              <label htmlFor="Email" className="text-[--main-color]">Email Address</label>
              <input
                name="Email"
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                placeholder="Email"
                type="email"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {loginFormik.touched.Email && loginFormik.errors.Email ? (
                <div className="text-red-600">{loginFormik.errors.Email}</div>
              ) : null}

              <label htmlFor="Password" className="text-[--main-color]">Password</label>
              <input
                name="Password"
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                placeholder="Password"
                type="password"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg mt-5 mb-3 bg-[--main-bg]"
              />
              {loginFormik.touched.Password && loginFormik.errors.Password ? (
                <div className="text-red-600">{loginFormik.errors.Password}</div>
              ) : null}

              <div className="flex justify-end items-center">
                <Link to={"/forget-password"}>
                <p className="  text-blue-400 edu mb-1 cursor-pointer">Forget Password ?</p>
                
                </Link>
              </div>

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
                  Sign In
                </button>
              </div>
              <p className="text-center py-3 text-gray-400 edu">
                If Not have an account?{" "}
                <Link to="/signup" className="text-[--main-color]">
                  Sign Up Free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
