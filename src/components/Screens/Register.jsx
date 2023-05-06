import React, { useEffect } from 'react'
import honey from '../../assets/honey.png'
import presents from '../../assets/presents.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Register () {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-center bg-fixed bg-cover bg-white/70 gap-8 px-2 lg:px-10 lg:h-[30rem] md:h-[50rem] pb-4'>
      <div data-aos="fade-up" className='flex px-2 w-screen flex-col lg:text-left gap-6 pt-4'>
        <div className='md:w-[25rem] h-[5px] lg bg-[blue]'></div>
        <span className='md:text-4xl text-3xl font-bold uppercase'>register for gifts you actually want</span>
        <div className='md:w-[25rem] h-[5px] bg-[blue]'></div>
        <span className='text-xl md:w-[30rem]'>This allows you to create a list personalized to your couple goals. Then allow it go live! We deliver your items at your convenience.</span>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4'>
      <div data-aos="fade-up" className='flex flex-col items-center justify-center'>
        <img src={honey} alt="" className='w-[40rem]'/>
        <div className="blur h-[12rem] w-[14rem]"></div>
        <span className='flex text-black uppercase font-bold shadow-lg'>honeymoon packages</span>
      </div>
      <div data-aos="fade-left" className='flex flex-col items-center justify-center'>
        <img src={presents} alt="" className='w-[40rem] pb-20'/>
        <div className="blur-1 h-[12rem] w-[14rem]"></div>
        <span className='text-black uppercase font-bold shadow-lg'>wedding gifts</span>
      </div>
    </div>
    </div>
  )
}

export default Register
