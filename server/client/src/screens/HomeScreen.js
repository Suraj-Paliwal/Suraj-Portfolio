import React,{useRef} from 'react'
import {BsGithub} from "react-icons/bs";
import {FaLinkedinIn,FaPhoneAlt} from "react-icons/fa";
import {SiGmail} from 'react-icons/si';
import {MdLocationOn} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeScreen = () => {
   const footerRef = useRef(null);

  const ScrollDown = () => {
   //  window.scrollTo({top:700,behavior:"smooth"});
   if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex md:flex-row flex-col mt-12 md:mb-24 mb-14 md:gap-0 gap-8 md:px-20 px-4 items-center'>
        <div className='md:w-1/2 w-full md:items-start items-center flex flex-col gap-10'>
            <h1 className='md:text-left md:text-4xl text-3xl flex md:flex-row flex-col gap-3 text-center text-white'><span>Hey! I am</span><section className='flex gap-3'><span className='color1 font-bold'>Software</span><span className='color2 font-bold'>Developer</span></section></h1>
            <h1 className='md:w-5/6 w-full text-white text-justify'>A passionate and self-motivated individual pursuing B.Tech (focused in Computer Science and Engineering) from Dronacharya College
            of Engineering, Gurugram. Aiming to utilize the best of my knowledge that I have acquired from my coursework and self-studies for a
            reputed firm to nourish my skills further. Actively looking for a job opportunity.</h1>
            <button onClick={ScrollDown} className='bg-[#8154db] text-white hover:bg-[#733381] md:w-1/5 w-2/5 py-2 rounded-3xl font-bold'>Hire Me</button>
        </div>
        <div className='bg-white/5 md:w-1/2 w-full flex flex-col gap-4 justify-center items-center 
        rounded-3xl py-8 text-white shadow-md shadow-white/50 border-2 border-solid border-[#8154db]'>
            <div className='rounded-full overflow-hidden md:h-72 h-52 md:w-72 w-52 border-white/50 border-2 shadow-md shadow-white/50'>
                <img src='../../images/suraj-portfolio.jpg' alt='not valid'/>
            </div>
            <h1 className='text-3xl'>Suraj Paliwal</h1>
            <div className='flex md:flex-row flex-col md:gap-10 gap-2 justify-center items-center'>
            <span className='flex justify-center items-center gap-3'>
               <MdLocationOn className='fill-red-600 text-xl' />
               <h1>Delhi, India</h1>
            </span>
            <span className='flex justify-center items-center gap-3'>
               <FaPhoneAlt className='fill-blue-600' />
               <h1>9599874644</h1>
            </span>
            <span className='flex justify-center items-center gap-3'>
               <SiGmail className='fill-[#dc4f42]' />
               <h1>surajpaliwal.developer@gmail.com</h1>
            </span>
            </div>
            <div className='flex md:flex-row flex-col md:gap-10 gap-2 justify-center items-center'>
            <span className='flex justify-center items-center gap-3'>
               <FaLinkedinIn className='fill-blue-600 text-xl' />
               <NavLink className='hover:text-[#df8df1]' to='https://www.linkedin.com/in/suraj-paliwal-133232270/' target='_blank'><h1>linkedin.com/in/suraj-paliwal</h1></NavLink>
            </span>
            <span className='flex justify-center items-center gap-3'>
               <BsGithub className='fill-black' />
               <NavLink className='hover:text-[#df8df1]' to='https://github.com/Suraj-Paliwal' target='_blank'><h1>github.com/Suraj</h1></NavLink>
            </span>
            </div>
        </div>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  )
}

export default HomeScreen;
