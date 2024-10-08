// import bluecar from "../../assets/images/Card/car3.png";
// import graycar from "../../assets/images/Card/car2.png";
// import star from "../../assets/images/Card/star.png";
// import user from "../../assets/images/Card/user.png";
// import astric from "../../assets/images/Card/d8wxke_2_.png";
// import doors from "../../assets/images/Card/doors.png";
// import frame from "../../assets/images/Card/Frame.png";
// import right from "../../assets/images/Card/arrow-right.png";
// export default function Card({ currentCars }) {
//   console.log({ currentCars });

//   return (
//     <div className="w-full bg-red-500">
//       {currentCars?.map((ele: {}) => (
//         <div
//           className="col-span-6 md:col-span-4  flex justify-center items-center "
//           key={ele?.id}
//         >
//           <div className="md:w-[80%] bg-white shadow-2xl p-3 rounded-lg">
//             <div className="flex justify-center items-center">
//               {ele.owners === 1 ? (
//                 <img src={bluecar} className="w-[100]" alt={ele.make} />
//               ) : (
//                 <img src={graycar} alt={ele.make} />
//               )}
//             </div>

//             <p className="font-poppins text-[16px] font-medium leading-[17px] text-left my-3">
//               {ele.make} {ele.model}
//             </p>
//             <div className="my-3 flex gap-1">
//               <img src={star} alt="star" />
//               <div className="flex gap-1">
//                 <p className="font-poppins text-[12px] font-medium leading-[17px] text-left">
//                   4.6
//                 </p>
//                 <small className="text-[#808080]">
//                   ({ele.horsepower} review)
//                 </small>
//               </div>
//             </div>
//             <div className="flex justify-between items-center my-3">
//               <div className="flex gap-2 items-center">
//                 <img src={user} alt="user" />
//                 <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
//                   {ele.owners} Passagers
//                 </p>
//               </div>
//               <div className="flex gap-3 items-center ">
//                 <img src={frame} alt="frame" />
//                 <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
//                   auto
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center my-3">
//               <div className="flex gap-2 items-center">
//                 <img src={astric} alt="user" />
//                 <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
//                   Air conditioning{" "}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <img src={doors} alt="doors" />
//                 <p className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
//                   4 doors{" "}
//                 </p>
//               </div>
//             </div>
//             <hr className="bg-gray-500" />
//             <div className="flex justify-between items-center my-3">
//               <p className="text-[#595959] font-poppins text-[14px] font-normal leading-[17px] text-left">
//                 Price
//               </p>
//               <p className="text-[#292929] font-poppins text-[16px] font-semibold leading-[17px] text-left">
//                 {ele.price}{" "}
//                 <span className="text-[#959595] font-poppins text-[12px] font-normal leading-[17px] text-left">
//                   /day
//                 </span>
//               </p>
//             </div>
//             <div className="flex justify-center items-center">
//               <button className="w-[208px] h-[40px] bg-[#1572D3] text-[#fff] p-[8px] gap-4 rounded-lg font-poppins text-[14px] font-medium leading-[17px] text-center flex items-center justify-center">
//                 Rent Now <img src={right} alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
