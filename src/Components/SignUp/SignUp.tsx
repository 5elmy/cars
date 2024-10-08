import React from 'react'
import Style from "./SIgnUp.module.css";
import car from "../../assets/images/ChooseCar/Audi 1.png";
import logo from '../../assets/images/login/logo.svg'
import { Link } from 'react-router-dom';
export default function SignUp() {
  return (
    <div className=''>

<div className="grid grid-cols-12 gap-3">
      <div
        className={`${Style.bg}  col-span-12 md:col-span-7 flex items-center `}
      >
        <img src={car} alt="" className={`${Style.animate} w-[70%]`} />
      </div>
      <div className="col-span-12 md:col-span-4  flex justify-center  items-center">


        <div className={` bg-[--main-bg] rounded-lg p-5  w-[90%]  shadow-lg flex flex-col justify-center  items-center`}>
          
            <div className='flex  items-end mb-5   w-full'>   <img src={logo} alt="rentcar" className='' /></div>
            <p className='text-center leading-[21px] font-semibold text-[20px] text-[--main-color] my-2 edu'>Sign Up  </p>
          <div  className=''>
            <label htmlFor="" className='text-[--main-color]'>Name</label>
          <input placeholder='Email' type='email' className=' border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] '/>
            <label htmlFor="" className='text-[--main-color]'>Email Address</label>
          <input placeholder='Email' type='email' className=' border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] '/>
            <label htmlFor="" className='text-[--main-color]'>Password</label>
          <input placeholder='Email' type='email' className=' border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] '/>
          <label htmlFor="" className='text-[--main-color]'>Confirm Password</label>
          <input placeholder='password' type='password' className='  border-none focus:outline-none w-full shadow-md h-[44px] rounded-lg my-5 bg-[--main-bg] '/>

<div className='flex justify-center items-center'>
    <button className='bg-[--main-color] px-8 text-white h-[44px] w-[161px] rounded-lg edu'> Sign Up </button>
</div>
                <p className='text-center py-3 edu text-gray-400'>If you have account? <Link to={"/login"} className='text-[--main-color]'>Sign in</Link></p>
          </div>
        </div>
      
      </div>
     
    </div>
      
    </div>
  )
}

