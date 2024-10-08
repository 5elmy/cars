import React, { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../Context/Cars.context";
import bluecar from "../../assets/images/Card/car3.png";
import graycar from "../../assets/images/Card/car2.png";
import star from "../../assets/images/Card/star.png";
import user from "../../assets/images/Card/user.png";
import astric from "../../assets/images/Card/d8wxke_2_.png";
import doors from "../../assets/images/Card/doors.png";
import frame from "../../assets/images/Card/Frame.png";
import right from "../../assets/images/Card/arrow-right.png";
import Search from "../Search/Search";

export default function AllCars() {
  let { getAllCars, carsList } = useContext(CarsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  const totalPages = Math.ceil(carsList?.length / carsPerPage);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carsList?.slice(indexOfFirstCar, indexOfLastCar);

  // Fetch all cars
  useEffect(() => {
    getAllCars("");
  }, []);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="pt-10">
      <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 pb-10 w-[90%] ms-10">
        <a href="#" className="text-blue-500 hover:underline">
          Home
        </a>
        <span>/</span>
        <span className="text-gray-500">Cars</span>
      </div>
      <Search />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-12 gap-3 pt-10 md:w-[80%]">
          {currentCars?.map((ele: {}, index: number) => (
            <div
              className="col-span-6 md:col-span-3  flex justify-center items-center "
              key={ele?.id}
            >
              <div className="md:w-[80%] bg-white shadow-2xl p-3 rounded-lg">
                <div className="flex justify-center items-center">
                  {ele.owners === 1 ? (
                    <img src={bluecar} className="w-[100]" alt={ele.make} />
                  ) : (
                    <img src={graycar} alt={ele.make} />
                  )}
                </div>

                <p className="font-poppins text-[16px] font-medium leading-[17px] text-left my-3">
                  {ele.make} {ele.model}
                </p>
                <div className="my-3 flex gap-1">
                  <img src={star} alt="star" />
                  <div className="flex gap-1">
                    <p className="font-poppins text-[12px] font-medium leading-[17px] text-left">
                      4.6
                    </p>
                    <small className="text-[#808080]">
                      ({ele.horsepower} review)
                    </small>
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex gap-2 items-center">
                    <img src={user} alt="user" />
                    <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
                      {ele.owners} Passagers
                    </p>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <img src={frame} alt="frame" />
                    <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
                      auto
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex gap-2 items-center">
                    <img src={astric} alt="user" />
                    <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
                      Air conditioning{" "}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={doors} alt="doors" />
                    <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
                      4 doors{" "}
                    </p>
                  </div>
                </div>
                <hr className="bg-gray-500" />
                <div className="flex justify-between items-center my-3">
                  <p className="text-[#595959] font-poppins text-[14px] font-normal leading-[17px] text-left">
                    Price
                  </p>
                  <p className="text-[#292929] font-poppins text-[16px] font-semibold leading-[17px] text-left">
                    {ele.price}{" "}
                    <span className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
                      /day
                    </span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="w-[208px] h-[40px] bg-[#1572D3] text-[#fff] p-[8px] gap-4 rounded-lg font-poppins text-[14px] font-medium leading-[17px] text-center flex items-center justify-center">
                    Rent Now <img src={right} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded-md mx-1 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded-md mx-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
