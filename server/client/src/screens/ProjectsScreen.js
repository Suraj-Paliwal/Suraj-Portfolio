import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai';

const ProjectsScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col md:gap-20 gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl h-full border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/block4health.png' alt='invalid'/>
        </div>
        <div className='flex flex-col gap-10 justify-center md:w-1/2 w-full'>
          <h1 className='md:text-4xl text-3xl text-[#8154db] text-center font-semibold'>Block4Health</h1>
          <ul className='list-disc text-white text-justify text-md md:text-lg font-semibold pl-5'>
            <li>Developed a software that provide the patients to store and share their EHR having full control on who can view or edit their health records also to provide a platform for sharing of their health record with research institutes.</li>
            <li>Technologies Used : Blockchain, IPFS, Web3, MERN, Redux, Tailwind.</li>
          </ul>
          <section className='flex flex-row justify-center gap-10 items-center'>
            <NavLink target='_blank' to='https://github.com/nerdTushar/Block4Health' className='text-3xl'>
              <AiFillGithub />
            </NavLink>
            <NavLink target='_blank' to='https://long-blue-rhinoceros.cyclic.app/' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Live Site link</button>
            </NavLink>
          </section>
        </div>
      </div>

      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col md:gap-20 gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl h-full border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/apnapizza.png' alt='invalid'/>
        </div>
        <div className='flex flex-col gap-10 justify-center md:w-1/2 w-full'>
          <h1 className='md:text-4xl text-3xl text-[#8154db] text-center font-semibold'>ApnaPizza</h1>
          <ul className='list-disc text-white text-justify text-md md:text-lg font-semibold pl-5'>
            <li>This project is user authenticated web app in which user can order their favourite pizza and can view their order history with a support of an admin panel.</li>
            <li>Technologies Used : MERN, Redux, Stripe, Bootstrap.</li>
          </ul>
          <section className='flex flex-row justify-center gap-10 items-center'>
            <NavLink target='_blank' to='https://github.com/nerdTushar/ApnaPizza' className='text-3xl'>
              <AiFillGithub />
            </NavLink>
            <NavLink target='_blank' to='https://real-gray-bear-sari.cyclic.app/' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Live Site link</button>
            </NavLink>
          </section>
        </div>
      </div>

      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex md:flex-row flex-col md:gap-20 gap-10 md:m-20 mx-4 my-10 p-4 md:p-20'>
        <div className='md:w-1/2 w-full'>
          <img className='rounded-3xl h-full border-2 border-solid border-[#8154db] shadow-md shadow-white/50' src='../../images/parkingspae.png' alt='invalid'/>
        </div>
        <div className='flex flex-col gap-10 justify-center md:w-1/2 w-full'>
          <h1 className='md:text-4xl text-3xl text-[#8154db] text-center font-semibold'>Parking Space Detection</h1>
          <ul className='list-disc text-white text-justify text-md md:text-lg font-semibold pl-5'>
            <li>Designed and implemented a Parking Space Detector and Counter utilizing advanced computer vision techniques.Demonstrated proficiency in computer vision, image processing, and Python programming through this project.</li>
            <li>Technologies used : OpenCV, Python.</li>
          </ul>
          <section className='flex flex-row justify-center gap-10 items-center'>
            <NavLink target='_blank' to='https://github.com/Suraj-Paliwal/Parking-Space-Counter' className='text-3xl'>
              <AiFillGithub />
            </NavLink>
            <NavLink target='_blank' to='' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Live Site link</button>
            </NavLink>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectsScreen;
