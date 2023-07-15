import React from 'react'
import gaming from "../images/image-gaming-growth.jpg"
import retro from "../images/image-retro-pcs.jpg"
import laptops from "../images/image-top-laptops.jpg"

const Cards = () => {

  return (
    <div class="bg-white mx-auto">
    <div class="flex flex-col justify-between md:flex-row mx-auto max-w-[1240px] px-4 md:px-8">
      <div className='flex flex-col md:flex-row md:gap-12 gap-1 mt-16'>
        {/* First card */}
        <div className='flex flex-row gap-4 mb-16 w-1/3'>
          <img src={retro} className='w-[100px] h-full' />
          <div className='flex flex-col'>
              <h2 className='font-inter font-semibold text-grayish-blue text-3xl mb-3'>01</h2>
              <p className='font-extrabold text-base text-very-dark-blue font-inter mb-3 hover:text-soft-red transition duration-150'>Reviving Retro PCs</p>
              <div className='w-[230px]'>
              <p className='font-inter text-grayish-blue'>What happens when old PC's are given modern upgrades</p>
              </div>
          </div>
        </div>

         {/* second card */}
         <div className='flex flex-row gap-4 mb-16 w-1/3'>
          <img src={laptops} className='w-[100px] h-full' />
          <div className='flex flex-col'>
              <h2 className='font-inter font-semibold text-grayish-blue text-3xl mb-3'>02</h2>
              <p className='font-extrabold text-base text-very-dark-blue font-inter mb-3 hover:text-soft-red transition duration-150'>Top Ten Laptops Of 2022</p>
              <div className='w-[230px]'>
              <p className='font-inter text-grayish-blue'>Our best picks for various needs and budgets</p>
              </div>
          </div>
        </div>

         {/* third card */}
         <div className='flex flex-row gap-4 mb-16 w-1/3'>
          <img src={gaming} className='w-[100px] h-full' />
          <div className='flex flex-col'>
              <h2 className='font-inter font-semibold text-grayish-blue text-3xl mb-3'>03</h2>
              <p className='font-extrabold text-base text-very-dark-blue font-inter mb-3 hover:text-soft-red transition duration-150'>The Growth Of Gaming</p>
              <div className='w-[230px]'>
              <p className='font-inter text-grayish-blue'>How the pandemic has sparked fresh opportunities</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cards