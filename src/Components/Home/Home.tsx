import Styles from "./Home.module.css";
import carimage from "../../assets/images/HomePage/car.png";
import googlePlay from "../../assets/images/HomePage/andriod.png";
import appstore from "../../assets/images/HomePage/ios.png";
import Works from "../Works/Works";
import Search from "../Search/Search";
export default function Home() {
  return (
    <>
      <section className={`${Styles.bgHome} pt-[50px]`}>
        <div className={`grid grid-cols-12 gap-2 `}>
          <div className="col-span-12 md:col-span-5 ms-[30px] pt-20 md:mt-0 flex justify-center items-center ">
            <div>
              <p className="font-poppins text-4xl font-semibold leading-[48px] text-left  mb-5">
                Find, book and <br /> rent a car{" "}
                <span className="text-[#1572D3]"> Easily</span>
              </p>
              <p className="font-poppins text-base font-normal leading-[27px] text-left my-5 ">
                Get a car wherever and whenever you <br /> need it with your IOS
                and Android device.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <img src={googlePlay} alt="google play" />
                <img src={appstore} alt="app store" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7  pt-20">
            <div className={`flex justify-end items-center `}>
              <img
                src={carimage}
                alt="blue car"
                className={`${Styles.img_animate}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
