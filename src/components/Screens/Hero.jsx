import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Hero () {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='overflow-hidden h-screen flex flex-col items-center justify-center bg-center bg-fixed bg-cover bg-[url(https://img.freepik.com/free-photo/cropped-photo-hands-black-man-wearing-engagement-ring-his-girlfriend-s-finger_1157-52016.jpg?size=626&ext=jpg)]'>

      <div className='flex flex-col-reverse md:flex-row items-center justify-evenly bg-[blue] bg-opacity-40 bg-cover w-screen h-screen'>
        <div className='flex flex-col items-center justify-center gap-12'>
        <span data-aos="fade-up" className='flex text-white text-4xl font-bold md:text-5xl px-2 text-left'>Say 'I do' to the perfect wedding gift</span>
      <span data-aos="fade-up-left" className=' text-white text-3xl lg:text-4xl w-screen text-left px-2 md:w-[42rem] lg:w-[60rem]'>Couples use Doros to create gift registries and send wedding invites to their guests. It`s free simple and fast</span>
        <button data-aos="fade-up-right" className='bg-[blue] text-white font-semibold text-center text-sm h-12 w-36 p-4 rounded-lg mr-36
        '>Get Started</button>
        </div>
        <div>
          {/* <img src={} alt="" /> */}
        </div>
      
      </div>
      
    </div>
  )
}

export default Hero
