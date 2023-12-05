import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';

const AchievementsScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 rounded-3xl border-2 border-solid border-[#8154db] shadow-md shadow-white/50 flex flex-col gap-10 md:m-20 mx-4 my-10 px-4 py-10 md:p-20'>
        
        
        <section className='flex md:flex-row gap-4 md:gap-10 flex-col'>
        <div className='md:w-1/2 w-full'>
          <h1 className='text-white text-justify font-semibold text-md md:text-3xl'>Published a <span className='text-[#8154db]'>Research Paper</span> in International Conference Researchfora in Dubai, UAE entitled Block4Health using Blockchain Technology ( 26-27 March, 2023 ).</h1>
        </div>
        <div className='flex flex-col justify-center gap-4 md:gap-10 items-center md:w-1/2 w-full'>
          <NavLink target='_blank' to='https://drive.google.com/file/d/19NWRlFOoc4QuVSf3HFOUfrkUivaPg1z4/view' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
            <button>Research Paper link</button>
          </NavLink>
          <NavLink target='_blank' to='https://drive.google.com/file/d/13_y4do1OI5tv7uejQisopCYdVQ3jglcT/view?usp=sharing' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
            <button>Certificate link</button>
          </NavLink>
        </div>
        </section>
        <hr />
        <section className='flex md:flex-row gap-4 md:gap-10 flex-col'>
        <div className='md:w-1/2 w-full'>
          <h1 className='text-white text-justify font-semibold text-md md:text-3xl'>Selected for Innovation, Design and Entrepreneurship (IDE) <span className='text-[#8154db]'>Bootcamp</span> at NITTTR, Chandigarh for project Block4Health (22-26 June, 2023).</h1>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full'>
          <NavLink target='_blank' to='https://drive.google.com/file/d/1Ao4sE2vVRe_Fp3l3Ugma_YZuag-ELsof/view?usp=sharing' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
            <button>Certificate link</button>
          </NavLink>
        </div>
        </section>
       <hr/>
        <section className='flex md:flex-row gap-4 md:gap-10 flex-col'>
        <div className='md:w-1/2 w-full'>
          <h1 className='text-white text-justify font-semibold text-md md:text-3xl'>Winner of GFG technical hackathon <span className='text-[#8154db]'>TechPreksha 2.0 </span> hosted by GFG Studen Chapter DCE.</h1>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full'>
          <NavLink target='_blank' to='https://drive.google.com/file/d/1f4hzJL0TZq0HIUcoZo0veckJzyhTJYfX/view?usp=sharing' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
            <button>Certificate link</button>
          </NavLink>
        </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AchievementsScreen;
