import React from "react";
import coteright from ".././assets/images/people/bg-sec6.png";
import coteleft from ".././assets/images/people/cote.png";
import image1 from ".././assets/images/people/Frame 984.png";
import imageman from ".././assets/images/people/Rectangle 8.svg";
import image3 from ".././assets/images/people/girl.png";

export default function People() {
  return (
    <div className="bg-[#F7FBFF] relative  ">
      <div className="flex  justify-center  items-center">
        <div className="w-[90%] flex justify-between  ">
          <div className=" flex items-start ">
            <img src={coteleft} alt="cote" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-poppins text-[14px] font-medium leading-[21px] pt-3 bg-[--main-bg] text-[--main-color] w-[161px] h-[42px] text-center px-8  rounded-lg ">
              TESTIMONIALS
            </div>
            <p className="font-poppins text-[38px] font-medium leading-[49.4px] text-center">
              What people say about us?
            </p>
          </div>
          <div className="">
            <img src={coteright} alt="" />
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center ">
        <div className="w-[90%] xl:w-full lg:flex justify-around items-center gap-5 ">
          <div className="grid grid-cols-12 bg-[#FFFFFF] rounded-[20px] lg:h-[400px] shadow-xl mt-10 lg:mt-0 ">
            <div className="col-span-12 lg:col-span-6 ">
              <img src={imageman} className="lg:h-[400px] min-w-full " alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <div className=" p-5">
                <div>
                  <h1 className="font-poppins text-[64px] font-medium leading-[96px] text-left">
                    5.0
                    <small className="font-poppins text-[24px] font-medium leading-[36px] text-left">
                      stars
                    </small>
                  </h1>
                  {/* star */}
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                {/*  */}
                <p className="font-poppins text-[18px] font-normal leading-[27px] text-left my-5">
                  “I feel very secure when using <br /> caretall's services.
                  Your customer <br /> care team is very enthusiastic and <br />{" "}
                  the driver is always on time.”
                </p>

                <div>
                  <p className="font-poppins text-[24px] font-medium leading-[36px] text-left">
                    Charlie Johnson
                  </p>
                  <small className="font-poppins text-[14px] font-normal leading-[21px] text-left">
                    From New York, US
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  bg-[#FFFFFF] rounded-[20px] shadow-xl lg:h-[400px] mt-5 lg:mt-0">
            <div className="col-span-12 lg:col-span-6 ">
              <img src={image3} className="lg:h-[400px] min-w-full " alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-5">
                <div>
                  <h1 className="font-poppins text-[64px] font-medium leading-[96px] text-left">
                    5.0
                    <small className="font-poppins text-[24px] font-medium leading-[36px] text-left">
                      stars
                    </small>
                  </h1>
                  {/* star */}
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                {/*  */}
                <p className="font-poppins text-[18px] font-normal leading-[27px] text-left my-5">
                  “I feel very secure when using <br /> caretall's services.
                  Your customer <br /> care team is very enthusiastic and <br />{" "}
                  the driver is always on time.”
                </p>

                <div>
                  <p className="font-poppins text-[24px] font-medium leading-[36px] text-left">
                    Charlie Johnson
                  </p>
                  <small className="font-poppins text-[14px] font-normal leading-[21px] text-left">
                    From New York, US
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
