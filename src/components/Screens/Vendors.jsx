import React, { useEffect } from 'react'
import bakers from '../../assets/bakers.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";

function Vendors () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div id='vendors' className='overflow-hidden h-[50rem] flex flex-col items-center justify-center bg-center bg-fixed bg-cover bg-[url(https://img.freepik.com/free-photo/delicious-cake-with-fruits-cream_23-2148972058.jpg?size=626&ext=jpg&uid=R101835304&ga=GA1.2.2025824122.1683209503&semt=sph)]'>
   <div className='flex flex-col items-center justify-center bg-[blue] bg-opacity-40 bg-cover w-screen h-[50rem]'>
    <div className='flex items-center  gap-2 pb-20'>
        <h1 className='text-5xl text-white font-bold'>Bakers</h1>
        <img src={bakers} alt="" className='w-8'/>
    </div>
      <ul data-aos="fade-up" className='grid grid-cols-2 items-center justify-center md:grid-cols-3 gap-2 px-2 md:px-4 md:gap-8 w-screen'>
        <a href="https://www.instagram.com/lapatisseriedejoie/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white '/>
            <li className='text-white text-xl lg:text-3xl '> La Patisserie de Joie</li>
        </a>
        <a href="https://www.instagram.com/lynns_bakes254/" className='flex flex-col text-white hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-left text-white '/>
            <li className='text-white text-xl lg:text-3xl '> ynn Bakes</li>
        </a>
         <a href="https://www.instagram.com/cakecouturekenya/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white'/>
            <li className='text-white text-xl lg:text-3xl '> Cake Couture Kenya</li>
        </a> 
        <a href="https://www.instagram.com/littlecakegirl.ke/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white'/>
            <li className='text-white text-xl lg:text-3xl '> Little Cake Girl Ltd.</li>
        </a>
         <a href="https://www.instagram.com/mix_and_whisk_bakery/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white'/>
            <li className='text-white text-xl lg:text-3xl '> Mix and Whisk</li>
        </a> 
        <a href="https://www.instagram.com/thetipsybakery/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white'/>
            <li className='text-white text-xl lg:text-3xl '> The Tipsy Bakery</li>
        </a>
         <a href="https://www.instagram.com/keky_tamu/" className='flex flex-col hover:text-[orange]'>
            <AiOutlineInstagram  className='text-4xl text-white'/>
            <li className='text-white text-xl lg:text-3xl '> Keky Tamu</li>
        </a>
{/* L
Tamima´s Tam Tam
Ginah´s Bakes
Sweetart Luxury Cakes
Kui Thuo
Taji Cake
Sweethings254
Lizbakes254
Princess & the Cake */}
      </ul>
      </div>
    </div>
  )
}

export default Vendors
