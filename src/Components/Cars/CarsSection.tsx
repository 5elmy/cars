
import Style from "./Cars.module.css"
import car from "../../assets/images/ChooseCar/Audi 1.png";
import star from "../../assets/images/Card/star.png";
import user from "../../assets/images/Card/user.png";
import astric from "../../assets/images/Card/d8wxke_2_.png";
import doors from "../../assets/images/Card/doors.png";
import frame from "../../assets/images/Card/Frame.png";
import right from "../../assets/images/Card/arrow-right.png";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CarsContext } from "../../Context/Cars.context";
export default function CarsSection() {
  let {getspecificCar, specificCar} =useContext(CarsContext);
  let {id} = useParams()
  useEffect(()=>{
    getspecificCar(id)
  },[])
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div
          className={`${Style.bg}  col-span-12 md:col-span-7 flex items-center `}
        >
          <img src={car} alt="" className={`${Style.animate}`} />
        </div>
        <div className="col-span-12 md:col-span-4  flex justify-center  items-center">
        <div className="mt-10 ">
          <div className="flex md:block justify-center items-center">
            <div className="w-[181px] h-[42px] p-4 px-8 gap-2 rounded-lg  bg-[--main-bg] text-center my-3">
              <p className="font-poppins text-[14px] font-medium leading-[21px] text-left text-[--main-color]">
                WHY CHOOSE US
              </p>
            </div>
          </div>
          <p className="my-5 font-poppins text-[38px] font-medium leading-[49.4px] text-center md:text-left">
            We offer the best experience with our rental deals
          </p>
          <p className="my-5">Name : {specificCar.car}{" "}{specificCar.car_model}</p>
          <p className="my-5">Car Model : {specificCar.car_model} {specificCar.car_vin}</p>
          <p className="my-5">Car Model Year : {specificCar.car_model_year}</p>
          <p className="my-5">Price:{specificCar.price}</p>
        


          <div className="flex my-5 gap-3">
            <img src={astric} alt="" />
            <p className="font-poppins text-base font-normal leading-[17px] text-left text-[#959595]">Air Conditioning</p>
          </div>
          <div className="flex my-5 gap-3">
            <img src={user} alt="" />
            <p className="font-poppins text-base font-normal leading-[17px] text-left text-[#959595]">4 Passgers</p>
          </div>
          <div className="flex my-5 gap-3">
            <img src={frame} alt="" />
            <p className="font-poppins text-base font-normal leading-[17px] text-left text-[#959595]">auto</p>
          </div>
          <div className="flex my-5 gap-3">
            <img src={doors} alt="" />
            <p className="font-poppins text-base font-normal leading-[17px] text-left text-[#959595]">2 Doors </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
