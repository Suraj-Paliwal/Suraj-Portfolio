import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className='flex md:px-20 px-4'>
        <div className='md:w-1/3 w-2/5 pt-10'>
          <img src='../images/portfolio-logo.png' alt='not valid logo' className='md:w-1/3 w-5/6'/>
        </div>
        <div className='md:w-2/3 w-3/5 flex items-center justify-end'>
            <ul className='md:flex hidden md:gap-10 gap-4 md:text-xl text-md font-bold text-white'>
                <NavLink to='/' end
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Home</li>
                </NavLink>
                <NavLink to='/education'
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Education</li>
                </NavLink>
                <NavLink to='/skills'
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Skills</li>
                </NavLink>
                <NavLink to='/internships'
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Internships</li>
                </NavLink>
                <NavLink to='/projects'
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Projects</li>
                </NavLink>

                <NavLink to='/achievements'
                    className={({ isActive }) => isActive ? 'text-[#8154db]' : null }
                > 
                <li className=' cursor-pointer hover:text-[#8154db]'>Achievements</li>
                </NavLink>
            </ul>
            <div className="flex relative">
    {!menu && (
      <HiMenuAlt4 fontSize={28} className="bg-[#8154db] rounded fill-white md:hidden cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-black fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className='stroke-2' onClick={() => setMenu(false)} /></li>
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#8154db] font-black' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Home</li>
            </NavLink>
            <NavLink to='/education'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Education</li>
            </NavLink>
            <NavLink to='/skills'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Skills</li>
            </NavLink>
            <NavLink to='/internships'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Internships</li>
            </NavLink>
            <NavLink to='/projects'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Projects</li>
            </NavLink>
            <NavLink to='/codingprofiles'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Coding Profiles</li>
            </NavLink>
            <NavLink to='/achievements'
               className={({ isActive }) => isActive ? 'text-[#8154db] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#8154db]'>Achievements</li>
            </NavLink>
          </ul>
        )}
        </div> 
        </div>
      </div>
    </>
  )
}

export default Navbar
