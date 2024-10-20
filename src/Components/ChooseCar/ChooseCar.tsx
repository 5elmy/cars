
import Style from "./ChooseCar.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import user from "../../assets/images/ChooseCar/user.png";
import message from "../../assets/images/ChooseCar/message.png";
import chat from "../../assets/images/ChooseCar/chat.png";
import dollar from "../../assets/images/ChooseCar/Frame 35.svg";

export default function ChooseCar() {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div
        className={`${Style.bg} col-span-12 md:col-span-7 flex items-center `}
      >
        <img src={car} alt="" />
      </div>
      <div className="col-span-12 md:col-span-4">
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
          <div className="my-3">
            <div className="flex justify-center items-center gap-5">
              <img src={dollar} alt="dollar bag" />
              <div>
                <p className="font-poppins text-[20px] font-medium leading-[30px] text-left text-[#000000] my-3">
                  Best price guaranteed
                </p>
                <p className="font-poppins text-[16px] font-normal leading-[24px] text-left text-[#6D6D6D] my-3">
                  Find a lower price? We’ll refund you 100% <br />
                  of the difference.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <img src={user} alt="User" />
              <div>
                <p className="font-poppins text-[20px] font-medium leading-[30px] text-left text-[#000000] my-3">
                  Experience driver
                </p>
                <p className="font-poppins text-[16px] font-normal leading-[24px] text-left text-[#6D6D6D] my-3">
                  Don’t have driver? Don’t worry, we have many
                  <br />
                  experienced driver for you.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <img src={message} alt="message" />
              <div>
                <p className="font-poppins text-[20px] font-medium leading-[30px] text-left text-[#000000] my-3">
                  24 hour car delivery
                </p>
                <p className="font-poppins text-[16px] font-normal leading-[24px] text-left text-[#6D6D6D] my-3">
                  Book your car anytime and we will deliver it <br />
                  directly to you.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <img src={chat} alt="chat" />
              <div>
                <p className="font-poppins text-[20px] font-medium leading-[30px] text-left text-[#000000] my-3">
                  24/7 technical support
                </p>
                <p className="font-poppins text-[16px] font-normal leading-[24px] text-left text-[#6D6D6D] my-3">
                  Have a question? Contact Rentcars support
                  <br />
                  any time when you have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
