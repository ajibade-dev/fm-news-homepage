import React, {useState, useContext } from 'react'
import { MyContext } from '../MyContext'
import desktop from '../images/image-web-3-desktop.jpg'

const Hero = () => {
 const{ nav, setNav } = useContext(MyContext)

  return (
    <div class={nav ? "relative overlay-gray bg-white mx-auto" : "bg-white mx-auto"}>
    <div class="flex flex-col justify-between gap-10 md:flex-row mx-auto max-w-[1240px] px-4 md:px-8">
        <div className='md:w-2/3 w-full'>
          <img src={desktop} alt="" />
          <div className='flex flex-col md:flex-row gap-2 mt-8'>
            <div className='md:w-1/2 w-full'>
            <h1 className=' md:text-6xl text-4xl font-extrabold text-very-dark-blue font-inter'>The Bright Future of Web 3.0?</h1>
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-6'>
              <h4 className='font-inter text-dark-grayish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fuffiling its promise?</h4>
              <a className='bg-very-dark-blue text-white font-inter font-medium text-center w-[50%] py-4 tracking-widest hover:bg-soft-red transition duration-300 cursor-pointer'>READ MORE</a>
            </div>
            
          </div>
        </div>
        <div className='bg-very-dark-blue flex flex-col p-8 md:w-1/3 w-full md:mx-0'>
          {/* first part */}
          <h1 className='md:text-4xl text-3xl text-soft-orange font-inter font-bold mb-6'>New</h1>
          <div className='flex flex-col'>
            <h3 className='font-inter text-xl font-bold text-white hover:text-soft-orange transition duration-200'>Hydrogen VS Electric Cars</h3>
          </div>

          <p className='font-inter text-off-white mt-2 font-thin'>Will hydrogen fueled cars ever catch up to EVS?</p>

            <hr className='text-white mt-8'/>

              {/* second part */}
          <h1 className='text-xl hover:text-soft-orange text-white font-inter font-bold mb-2 mt-6 transition duration-200'>The Downside of A.I history</h1>

          <p className='font-inter text-off-white mt-2 font-thin'>What are the possible adverse effects of on-demand AI image generation.</p>

            <hr className='text-white mt-8'/>

              {/* third part */}
          <div className='flex flex-col mt-4'>
            <h3 className='font-inter text-xl font-bold text-white hover:text-soft-orange transition duration-200'>Is VC Funding Drying Up?</h3>
          </div>

          <p className='font-inter text-off-white mt-2 font-thin'>Will hydrogen fueled cars ever catch up to EVS?</p>

            
        </div>
      </div>
      </div>
  )
}

export default Hero