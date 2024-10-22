

// import Style from "./ResetPassword.module.css";
// import car from "../../assets/images/ChooseCar/Audi 1.png";
// import logo from "../../assets/images/login/logo.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// export default function ResetPassword() {
//   let navigate = useNavigate();

//   const validationSchema = Yup.object({
//     Password: Yup.string()
//       .min(8, "Password must be at least 8 characters long")
//       .required("Password is required"),
//     ConfirmPassword: Yup.string()
//       .oneOf([Yup.ref('Password')], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const loginFormik = useFormik({
//     initialValues: {
//       Password: "",
//       ConfirmPassword: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       console.log({ values });

//       // Perform your password reset API call here
//       // try {
//       //   const res = await axios.post(
//       //     'https://api.postgait.com/api/auth/Login',
//       //     values,
//       //     {
//       //       headers: { "Accept": 'application/json, text/plain, */*', "Content-Type": 'application/json' },
//       //     }
//       //   );
//       //   console.log({ res });
//       //   // Redirect user on successful login
//       //   navigate("/");
//       // } catch (err) {
//       //   console.log({ err });
//       // }

//       navigate("/login");
//     },
//   });

//   return (
//     <div>
//       <div className="grid grid-cols-12 gap-3">
//         <div className={`${Style.bg} col-span-12 md:col-span-7 flex items-center`}>
//           <img src={car} alt="" className={`${Style.animate}`} />
//         </div>
//         <div className="col-span-12 md:col-span-4 flex justify-center items-center">
//           <div className={`bg-[--main-bg] rounded-lg p-5 py-10 w-[90%] shadow-lg flex flex-col justify-center items-center`}>
//             <div className="mb-10 w-full">
//               <img src={logo} alt="rentcar" className="" />
//             </div>
//             <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-3 edu">
//               Reset Password
//             </p>
//             <form onSubmit={loginFormik.handleSubmit} className="mt-5">
//               <label htmlFor="Password" className="text-[--main-color]">Password</label>
//               <input
//                 name="Password"
//                 onChange={loginFormik.handleChange}
//                 onBlur={loginFormik.handleBlur}
//                 value={loginFormik.values.Password}
//                 placeholder="New Password"
//                 type="password"
//                 className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
//               />
//               {loginFormik.touched.Password && loginFormik.errors.Password ? (
//                 <div className="text-red-600">{loginFormik.errors.Password}</div>
//               ) : null}

//               <label htmlFor="ConfirmPassword" className="text-[--main-color]">Confirm Password</label>
//               <input
//                 name="ConfirmPassword"
//                 onChange={loginFormik.handleChange}
//                 onBlur={loginFormik.handleBlur}
//                 value={loginFormik.values.ConfirmPassword}
//                 placeholder="Confirm Password"
//                 type="password"
//                 className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg mt-5 mb-3 bg-[--main-bg]"
//               />
//               {loginFormik.touched.ConfirmPassword && loginFormik.errors.ConfirmPassword ? (
//                 <div className="text-red-600">{loginFormik.errors.ConfirmPassword}</div>
//               ) : null}

//               <div className="flex justify-center items-center">
//                 <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
//                   Submit
//                 </button>
//               </div>
//               <p className="text-center py-3 text-gray-400 edu">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-[--main-color]">
//                   Login
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Style from "./ResetPassword.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from "../../assets/images/login/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react"; // For managing password visibility
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from react-icons

export default function ResetPassword() {
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object({
    Password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log({ values });

      navigate("/login");
    },
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className={`${Style.bg} col-span-12 md:col-span-7 flex items-center`}>
          <img src={car} alt="" className={`${Style.animate}`} />
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <div className={`bg-[--main-bg] rounded-lg p-5 py-10 w-[90%] shadow-lg flex flex-col justify-center items-center`}>
            <div className="mb-10 w-full">
              <img src={logo} alt="rentcar" className="" />
            </div>
            <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-3 edu">
              Reset Password
            </p>
            <form onSubmit={loginFormik.handleSubmit} className="mt-5 w-full">
              <label htmlFor="Password" className="text-[--main-color]">Password</label>
              <div className="relative w-full">
                <input
                  name="Password"
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.Password}
                  placeholder="New Password"
                  type={showPassword ? "text" : "password"}
                  className="border-none  focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
                />
                <span className="absolute right-3 top-[45%] cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {loginFormik.touched.Password && loginFormik.errors.Password ? (
                <div className="text-red-600 my-2">{loginFormik.errors.Password}</div>
              ) : null}

              <label htmlFor="ConfirmPassword" className="text-[--main-color]">Confirm Password</label>
              <div className="relative">
                <input
                  name="ConfirmPassword"
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.ConfirmPassword}
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg mt-5 mb-3 bg-[--main-bg]"
                />
                <span className="absolute right-3 top-[45%] cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {loginFormik.touched.ConfirmPassword && loginFormik.errors.ConfirmPassword ? (
                <div className="text-red-600 my-2">{loginFormik.errors.ConfirmPassword}</div>
              ) : null}

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
                  Submit
                </button>
              </div>
              <p className="text-center py-3 text-gray-400 edu">
                Already have an account?{" "}
                <Link to="/login" className="text-[--main-color]">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
