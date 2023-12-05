import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';

const CodingProfilesScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 shadow-md shadow-white/50 gap-6 md:gap-10 rounded-3xl border-2 border-solid border-[#8154db] flex md:flex-row flex-col md:m-20 mx-4 my-10 px-4 py-10 md:p-20'>
        <div className='flex flex-row justify-center items-center gap-10 md:gap-20 md:w-1/2 w-full'>
          <img className='md:w-1/3 w-1/4' src='../../images/leetcode.png' alt='invalid'/>
          <h1 className='text-white md:text-4xl text-2xl font-semibold'>LeetCode</h1>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full'>
        <NavLink target='_blank' to='https://leetcode.com/tushadpatodia13/' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
          <button>Profile link</button>
        </NavLink>
        </div>
      </div>

      <div className='bg-white/10 shadow-md shadow-white/50 gap-6 md:gap-10 rounded-3xl border-2 border-solid border-[#8154db] flex md:flex-row flex-col md:m-20 mx-4 my-10 px-4 py-10 md:p-20'>
        <div className='flex flex-row justify-center items-center md:gap-6 md:w-1/2 w-full'>
          <img className='md:w-1/3 w-1/4' src='../../images/codingninjas.png' alt='invalid'/>
          <h1 className='text-white text-center md:text-4xl text-2xl font-semibold'>Coding Ninjas Studio</h1>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full'>
        <NavLink target='_blank' to='https://www.codingninjas.com/studio/profile/95672078-2cbb-4de1-84f8-c22944beb1c3' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
          <button>Profile link</button>
        </NavLink>
        </div>
      </div>

      <div className='bg-white/10 shadow-md shadow-white/50 gap-6 md:gap-10 rounded-3xl border-2 border-solid border-[#8154db] flex md:flex-row flex-col md:m-20 mx-4 my-10 px-4 py-10 md:p-20'>
        <div className='flex flex-row justify-center items-center md:gap-20 gap-10 md:w-1/2 w-full'>
          <img className='md:w-1/3 w-1/4' src='../../images/gfg.png' alt='invalid'/>
          <h1 className='text-white text-center md:text-4xl text-2xl font-semibold'>GeeksForGeeks</h1>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full'>
        <NavLink target='_blank' to='https://auth.geeksforgeeks.org/user/tushadpatodia13' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
          <button>Profile link</button>
        </NavLink>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CodingProfilesScreen;


