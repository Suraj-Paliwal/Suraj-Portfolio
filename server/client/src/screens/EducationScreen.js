import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EducationScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/dce.png' alt='invalid'/>
        </div>
        <div className='flex flex-col md:gap-20 gap-14 justify-center md:w-1/2 w-full'>
          <div className='text-center text-2xl md:text-4xl flex flex-col gap-4 font-semibold text-white'>
            <h1>Bachelor of Technology (B.Tech.)</h1>
            <h1>Computer Science Engineering</h1>
            <h1 className='text-[#8154db]'>Dronacharya College of Engineering</h1>
          </div>
          <div className='flex gap-4 justify-between text-white font-semibold text-md md:text-xl'>
            <h1>07/2020 - Present</h1>
            <h1>80% (till 6th sem)</h1>
          </div>
        </div>
      </div>

      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/school.png' alt='invalid'/>
        </div>
        <div className='flex flex-col md:gap-20 gap-14 justify-center md:w-1/2 w-full'>
          <div className='text-center text-2xl md:text-4xl flex flex-col gap-4 font-semibold text-white'>
            <h1>Intermediate (12th)</h1>
            <h1 className='text-[#8154db]'>Smt. Misri Devi Gyan Niketan, Najafgarh, Delhi</h1>
          </div>
          <div className='flex gap-4 justify-between text-white font-semibold text-md md:text-xl'>
            <h1>04/2018 - 05/2019</h1>
            <h1>85%</h1>
          </div>
        </div>
      </div>

      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/school.png' alt='invalid'/>
        </div>
        <div className='flex flex-col md:gap-20 gap-14 justify-center md:w-1/2 w-full'>
          <div className='text-center text-2xl md:text-4xl flex flex-col gap-4 font-semibold text-white'>
            <h1>Matriculation (10th)</h1>
            <h1 className='text-[#8154db]'>Smt. Misri Devi Gyan Niketan, Najafgarh, Delhi</h1>
          </div>
          <div className='flex gap-4 justify-between text-white font-semibold text-md md:text-xl'>
            <h1>03/2016 - 04/2017</h1>
            <h1>95%</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EducationScreen;
