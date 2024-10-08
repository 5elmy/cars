import React from "react";
import Style from "./Login.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from "../../assets/images/login/logo.svg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div
          className={`${Style.bg}  col-span-12 md:col-span-7 flex items-center `}
        >
          <img src={car} alt="" className={`${Style.animate}`} />
        </div>
        <div className="col-span-12 md:col-span-4  flex justify-center  items-center">
          <div
            className={` bg-[--main-bg] rounded-lg p-5 py-10 w-[90%]  shadow-lg flex flex-col justify-center  items-center`}
          >
            
            <div className="   mb-10 w-full ">
{" "}
<img src={logo} alt="rentcar" className="" />
</div> 
<p className="text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-3 edu ">
              Sign in 
            </p>
            <div className="mt-5">
              <label htmlFor="" className="text-[--main-color]">
                Email Address
              </label>
              <input
                placeholder="Email"
                type="email"
                className=" border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
              />
              <label htmlFor="" className="text-[--main-color]">
                Password
              </label>
              <input
                placeholder="password"
                type="password"
                className="  border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] "
              />

              <div className="flex justify-center items-center">
                <button className="bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu">
                  {" "}
                  Sign In{" "}
                </button>
              </div>
              <p className="text-center py-3 text-gray-400 edu">
                If Not have account?{" "}
                <Link to="/signup" className="text-[--main-color]">
                  SignUp Free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
