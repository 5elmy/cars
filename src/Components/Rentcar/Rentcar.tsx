import ios from "../../assets/images/Footer/ios.png";
import andriod from "../../assets/images/Footer/andriod.png";
import car from "../../assets/images/Footer/iPhone-14.png";
export default function Rentcar() {
  return (
    <section className=" pt-3">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div>
            <p className="font-poppins text-[48px] font-semibold leading-[57.6px] text-left my-3">
              Download Rentcars <br /> App for{" "}
              <span className="text-[#1572D3]">FREE</span>
            </p>
            <p className="font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3E3E3E]">
              For faster, easier booking and exclusive deals.
            </p>
            <div className="flex justify-center items-center w-[40%]">
              <div className="flex gap-3 py-3 ">
                <img src={ios} alt="" />
                <img src={andriod} alt="" />
              </div>
            </div>

            <div className="my-3 flex flex-col ">
              <input
                type="text"
                placeholder="Name "
                className=" w-[374px] h-[56px]  border-2 border-[#CEDCFF] gap-0 rounded-[61px]  bg-[#CEDCFF] my-3"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-[374px] h-[56px]  border-none gap-0 rounded-[61px]  bg-[#CEDCFF] my-3"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-[374px] h-[56px]  border-none gap-0 rounded-[61px]  bg-[#CEDCFF] my-3"
              />
              <div className="flex justify-center items-center  w-[87%]">
                <button className="w-[159px] h-[48px]  p-[8px] gap-2 rounded-lg  bg-[#1572D3] text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-end">
          <img src={car} alt="" />
        </div>
      </div>
    </section>
  );
}
