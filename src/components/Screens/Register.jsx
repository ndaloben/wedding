import React from 'react'
import honey from '../../assets/honey.jpeg'
import presents from '../../assets/presents.jpg'

const Register = () => {
  return (
    <div className='overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-10 px-2 lg:px-10 lg:h-[30rem] md:h-[70rem] pb-4'>
      <div className='flex flex-col items-center text-left gap-8 pt-4'>
        <div className='w-[25rem] h-[5px] lg bg-[blue]'></div>
        <span className='md:text-4xl text-3xl font-bold uppercase'>register for gifts you actually want</span>
        <div className='w-[25rem] h-[5px] bg-[blue]'></div>
      </div>
      <div className='flex items-center justify-center'>
        <img src={honey} alt="" className='w-[40rem]'/>
        <span className='absolute z-1 flex items-center justify-center bg-[blue] bg-cover rounded-lg bg-opacity-30 text-white h-40 px-8 uppercase font-bold'>honeymoon packages</span>
      </div>
      <div className='flex items-center justify-center '>
        <img src={presents} alt="" className='w-[40rem]'/>
        <span className='absolute z-1 flex items-center justify-center bg-[blue] bg-cover rounded-lg bg-opacity-30 text-white h-40 w-60 px-8 uppercase font-bold'>wedding gifts</span>
      </div>
    </div>
  )
}

export default Register
