
// import Style from "./SIgnUp.module.css";
// import car from "../../assets/images/ChooseCar/Audi 1.png";
// import logo from "../../assets/images/login/logo.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import axios from "axios";
// export default function SignUp() {
//   // let validationschema = Yup
//   let navigate  =useNavigate()
//   let signupFormik = useFormik({
//     initialValues: {
//       Name: "",
//       Email: "",
//       Mobile: "",
//       Password: "",
//     },
//     onSubmit: async (values) => {
//       console.log({values});
//       // try {
//       //   const res = await axios.post(
//       //     'https://api.postgait.com/api/auth/SignUp',
//       //     values,
//       //     {
//       //       headers:{"Accept": 'application/json, text/plain, */*', "Content-Type": 'application/json'},
//       //     }
//       //   );
//       //   console.log({res});  
//       // } catch (err) {
//       //   console.log({err});  
      
//       // }
//       navigate("/")
      
//     },
    
//   });
//   return (
//     <div className="">
//       <div className="grid grid-cols-12 gap-3">
//         <div
//           className={`${Style.bg}  col-span-12 md:col-span-7 flex items-center `}
//         >
//           <img src={car} alt="" className={`${Style.animate} w-[70%]`} />
//         </div>
//         <div className="col-span-12 md:col-span-4  flex justify-center  items-center">
//           <form
//             onSubmit={signupFormik.handleSubmit}
//             className={` bg-[--main-bg] rounded-lg p-5  w-[90%]  shadow-lg flex flex-col justify-center  items-center`}
//           >
//             <div className="flex  items-end mb-5   w-full">
//               {" "}
//               <img src={logo} alt="rentcar" className="" />
//             </div>
//             <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-2 edu">
//               Sign Up{" "}
//             </p>
//             <div className="">
//               <label htmlFor="" className="text-[--main-color]">
//                 Name
//               </label>
//               <input
//               onChange={signupFormik.handleChange}
//               onBlur={signupFormik.handleBlur}
//                 name="Name"
//                 placeholder="Name"
//                 type="text"
//                 className=" border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
//               />
//               <label htmlFor="" className="text-[--main-color]">
//                 Email Address
//               </label>
//               <input
//                   onChange={signupFormik.handleChange}
//                   onBlur={signupFormik.handleBlur}
//                 name="Email"
//                 placeholder="Email"
//                 type="email"
//                 className=" border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
//               />
//               <label htmlFor="" className="text-[--main-color]">
//                 Password
//               </label>
//               <input
//                   onChange={signupFormik.handleChange}
//                   onBlur={signupFormik.handleBlur}
//                 name="Password"
//                 placeholder="password"
//                 type="password"
//                 className=" border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
//               />
//               <label htmlFor="" className="text-[--main-color]">
//                 Mobile
//               </label>
//               <input
//                   onChange={signupFormik.handleChange}
//                   onBlur={signupFormik.handleBlur}
//                 name="Mobile"
//                 placeholder="Mobile"
//                 type="text"
//                 className="  border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
//               />

//               <div className="flex justify-center items-center">
//                 <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
//                   {" "}
//                   Sign Up{" "}
//                 </button>
//               </div>
//               <p className="text-center py-3 edu text-gray-400">
//                 If you have account?{" "}
//                 <Link to={"/login"} className="text-[--main-color]">
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import Style from "./SIgnUp.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from "../../assets/images/login/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup
import { toast } from "react-toastify";


export default function SignUp() {
  let navigate = useNavigate();

  // Create validation schema using Yup
  const validationSchema = Yup.object({
    Name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    Email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    Mobile: Yup.string()
      .required("Mobile is required")
      .matches(/^[0-9]+$/, "Mobile must be only digits")
      .min(10, "Mobile must be at least 10 digits")
      .max(15, "Mobile must be at most 15 digits"),
    Password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  let signupFormik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      Password: "",
    },
    validationSchema, // Add validation schema here
    onSubmit: async (values) => {
      console.log({ values });
      // Uncomment and modify the following code to perform the signup request
      // try {
      //   const res = await axios.post(
      //     'https://api.postgait.com/api/auth/SignUp',
      //     values,
      //     {
      //       headers: { "Accept": 'application/json, text/plain, */*', "Content-Type": 'application/json' },
      //     }
      //   );
      //   console.log({ res });
      // } catch (err) {
      //   console.log({ err });
      // }
      navigate("/");
      toast.info("User Added Successfully")
    },
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className={`${Style.bg} col-span-12 md:col-span-7 md:flex hidden items-center`}>
          <img src={car} alt="" className={`${Style.animate} w-[70%]`} />
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center min-h-screen md:min-h-0">
          <form
            onSubmit={signupFormik.handleSubmit}
            className={`bg-[--main-bg] rounded-lg p-5 w-[90%] shadow-lg flex flex-col justify-center items-center`}
          >
            <div className="flex items-end mb-5 w-full">
              <img src={logo} alt="rentcar" className="" />
            </div>
            <p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-2 edu">
              Sign Up
            </p>
            <div className="">
              <label htmlFor="Name" className="text-[--main-color]">Name</label>
              <input
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                name="Name"
                placeholder="Name"
                type="text"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {signupFormik.touched.Name && signupFormik.errors.Name ? (
                <div className="text-red-600">{signupFormik.errors.Name}</div>
              ) : null}

              <label htmlFor="Email" className="text-[--main-color]">Email Address</label>
              <input
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                name="Email"
                placeholder="Email"
                type="email"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {signupFormik.touched.Email && signupFormik.errors.Email ? (
                <div className="text-red-600">{signupFormik.errors.Email}</div>
              ) : null}

              <label htmlFor="Password" className="text-[--main-color]">Password</label>
              <input
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                name="Password"
                placeholder="Password"
                type="password"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {signupFormik.touched.Password && signupFormik.errors.Password ? (
                <div className="text-red-600">{signupFormik.errors.Password}</div>
              ) : null}

              <label htmlFor="Mobile" className="text-[--main-color]">Mobile</label>
              <input
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                name="Mobile"
                placeholder="Mobile"
                type="text"
                className="border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg]"
              />
              {signupFormik.touched.Mobile && signupFormik.errors.Mobile ? (
                <div className="text-red-600">{signupFormik.errors.Mobile}</div>
              ) : null}

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
                  Sign Up
                </button>
              </div>
              <p className="text-center py-3 edu text-gray-400">
                Already have an account?{" "}
                <Link to={"/"} className="text-[--main-color]">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
