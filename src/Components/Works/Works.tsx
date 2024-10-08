import calender from "../../assets/images/works/calender.png";
import car from "../../assets/images/works/car-icon.png";
import location from "../../assets/images/works/location.png";
import volvo from "../../assets/images/works/volvo.png";
import audi from "../../assets/images/works/audi.png";
import nissan from "../../assets/images/works/nissan.png";
import jaguar from "../../assets/images/works/jaguar.png";
export default function Works() {
  return (
    <section className="p-5 ">
      <div className="flex flex-col justify-center items-center my-5 md:my-0  ">
        <button className="md:w-[161px] h-[42px] pt-1 px-8 bg-[--main-bg] gap-2 rounded-lg  font-poppins text-sm font-medium leading-[21px] text-center text-[--main-color]">
          HOW IT WORK
        </button>
        <p className="text-[#333333]  font-poppins text-3xl font-medium leading-[49.4px] text-center my-10">
          Rent with following 3 working steps
        </p>
      </div>
      <div className="md:w-[45%] mx-auto flex justify-between items-center py-10">
        <img src={car} alt="car" />
        <img src={calender} alt="calender" />
        <img src={location} alt="location" />
      </div>
      {/* <div className="w-[75%] mx-auto flex justify-between items-center  py-10">
        <img src={jaguar} alt="jaguar" />
        <img src={nissan} alt="nissan" />
        <img src={volvo} alt="volvo" />
        <img src={audi} alt="audi" />
      </div> */}
      <div className="w-[90%] lg:w-[75%] mx-auto py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between items-center gap-4">
          <img
            src={jaguar}
            alt="jaguar"
            className="w-[120px] my-5 md:my-0 sm:w-[150px] lg:w-[180px]"
          />
          <img
            src={nissan}
            alt="nissan"
            className="w-[120px] my-5 md:my-0 sm:w-[150px] lg:w-[180px]"
          />
          <img
            src={volvo}
            alt="volvo"
            className="w-[120px] my-5 md:my-0 sm:w-[150px] lg:w-[180px]"
          />
          <img
            src={audi}
            alt="audi"
            className="w-[120px] my-5 md:my-0 sm:w-[150px] lg:w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}
