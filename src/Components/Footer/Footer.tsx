import logo from "../../assets/images/Footer/logo-footer.png";
import location from "../../assets/images/Footer/location.png";
import call from "../../assets/images/Footer/call.png";
import message from "../../assets/images/Footer/sms.png";
import facebook from "../../assets/images/Footer/facebook.png";
import youtube from "../../assets/images/Footer/youtube.png";
import insta from "../../assets/images/Footer/instagram.png";
export default function Footer() {
  return (
    <section className="bg-[#051C34] ">
      {/*--footer-bg: #051C34 */}

      <div className="flex  justify-center items-center">
        <div className="w-[90%] grid grid-cols-12 gap-2">
          <div className="col-span-6 md:col-span-4 flex justify-center items-center">
            <div>
              <img src={logo} className="mb-3" alt="logo" />
              <div className="flex gap-2 my-3">
                <img src={location} className="w-[20px] h-[20px]" alt="" />
                <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left">
                  25566 Hc 1, Glenallen, Alaska, 99588, USA
                </p>
              </div>
              <div className="flex gap-2 my-3">
                <img src={call} alt="" />
                <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left">
                  +603 4784 273 12
                </p>
              </div>

              <div className="flex gap-2 my-3">
                <img src={message} alt="" />
                <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left">
                  rentcars@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <p className="font-poppins text-[16px] font-medium leading-[24px] text-left text-white mt-2">
              Our Product
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Career
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Car
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Packages
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Features
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Priceline
            </p>
          </div>
          <div className="col-span-3 md:col-span-2">
            <p className="font-poppins text-[16px] font-medium leading-[24px] text-left text-white mt-2">
              Resources
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Download
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Help Centre
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Guides
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Partner Network
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Cruises
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Developer
            </p>
          </div>
          <div className="col-span-3 md:col-span-2">
            <p className="font-poppins text-[16px] font-medium leading-[24px] text-left text-white mt-2">
              About Rentcars
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Why choose us
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Our Story
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Investor Relations
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Press Center
            </p>
            <p className="text-[#D6D6D6] font-poppins text-[14px] font-normal leading-[21px] text-left my-2">
              Advertise
            </p>
          </div>

          <div className="col-span-3 md:col-span-2">
            <p className="font-poppins text-[16px] font-medium leading-[24px] text-left text-white mt-2">
              Follow Us
            </p>
            <div className="flex gap-3 my-2">
              <img className="" src={facebook} alt="" />
              <img className="" src={insta} alt="" />
              <img className="" src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-[77%]  mb-2" />
      </div>
      <div className="flex justify-center items-center pb-10">
        <div className="w-[77%]">
          <small className="font-poppins text-[12px] font-normal leading-[18px] text-left text-[#D6D6D6]">
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </small>
        </div>
      </div>
    </section>
  );
}