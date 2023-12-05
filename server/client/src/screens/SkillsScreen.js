import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai';
import {DiCss3,DiJavascript,DiReact,DiNodejsSmall,DiGit} from 'react-icons/di';
import {HiOutlineCode} from 'react-icons/hi';
import {SiMongodb,SiMysql,SiBlockchaindotcom,SiTailwindcss,SiBootstrap,SiFigma} from 'react-icons/si';
import { FaPython } from "react-icons/fa";

const SkillsScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 rounded-3xl shadow-md shadow-white/50 border-2 border-solid border-[#8154db] flex md:flex-row flex-col flex-wrap justify-between items-center gap-10 mx-4 my-10 md:m-20 px-4 py-10 md:p-20'>
        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-between'>
            <section>
              <AiFillHtml5 className='md:text-9xl text-8xl fill-[#dc4d25]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>HTML</h1>
            </section>
            <h1 className='md:text-8xl text-7xl text-white'>/</h1>
            <section>
              <DiCss3 className='md:text-9xl text-8xl fill-[#126db0]'/>
              <h1 className='text-xl font-semibold text-white text-center'>CSS</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "70%"}}> 70%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <DiJavascript className='md:text-9xl text-8xl fill-[#d3b32b]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>JavaScript</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "60%"}}> 60%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <HiOutlineCode className='md:text-9xl text-8xl'/> 
              <h1 className='text-xl font-semibold text-white text-center'>C/C++</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "70%"}}> 70%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <DiReact className='md:text-9xl text-8xl fill-[#5ed3f3]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>React JS</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "80%"}}> 80%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <DiNodejsSmall className='md:text-9xl text-8xl fill-[#509941]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Node JS</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "60%"}}> 60%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <SiMongodb className='md:text-9xl text-8xl fill-[#3e9737]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>MongoDB</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "70%"}}> 70%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <SiMysql className='md:text-9xl text-8xl fill-[#4e7d9c]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>My SQL</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "100%"}}> 100%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <SiBlockchaindotcom className='md:text-9xl text-8xl fill-[#1553b3]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Blockchain</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "60%"}}> 60%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-between'>
            <section>
              <DiGit className='md:text-9xl text-8xl fill-[#e84d31]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Git</h1>
            </section>
            <h1 className='md:text-8xl text-7xl text-white'>/</h1>
            <section>
              <AiFillGithub className='md:text-9xl text-8xl fill-black'/>
              <h1 className='text-xl font-semibold text-white text-center'>GitHub</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "80%"}}> 80%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <SiTailwindcss className='md:text-9xl text-8xl fill-[#19b3b7]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Tailwind</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "80%"}}> 80%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <FaPython className='md:text-9xl text-8xl fill-[#4f70ad]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Python</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "80%"}}> 80%</div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/4'>
          <div className='flex justify-center'>
            <section>
              <SiFigma className='md:text-9xl text-8xl fill-[#eb4c1c]'/> 
              <h1 className='text-xl font-semibold text-white text-center'>Figma</h1>
            </section>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#8154db] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : "80%"}}> 80%</div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default SkillsScreen;
