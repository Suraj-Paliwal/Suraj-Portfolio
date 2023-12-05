import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {sendEmail} from '../actions/recruiterAction';
import Loader from "./Loader";
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const recruiterState = useSelector((state) => state.sendEmailRecruiterReducer);
  const { error, loading } = recruiterState;

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {email,subject,message};
    if(email === "" || subject === "" || message === ""){
      toast.error("Empty input details.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      toast.error("Please enter valid email.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else{
      dispatch(sendEmail(data));
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && toast.error(<h1>Something Went Wrong</h1>, {
          position: toast.POSITION.TOP_RIGHT
        })}
      <div className="md:px-20 px-4 flex flex-col items-center gap-10 pb-10">
        <h1 className="text-5xl font-bold text-[#8154db]">Get In Touch</h1>
        <h1 className="text-white text-justify">
          Do you have a new project or job for me ? or just want to have a chat,
          feel free to connect.
        </h1>
        <section className="bg-white/5 border-2 border-solid border-[#8154db] rounded-3xl shadow-md shadow-white/50 w-full">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-medium text-[#8154db] dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white/5 border border-[#8154db] text-white text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#8154db] mb-2 text-xl font-medium dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block bg-white/5 p-3 w-full text-md text-white rounded-lg border border-[#8154db] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-xl font-medium text-[#8154db] dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-md text-white bg-white/5 rounded-lg shadow-sm border border-[#8154db] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                onClick={submitHandler}
                className="bg-[#8154db] text-white hover:bg-[#733381] md:w-1/5 w-1/2 py-2 rounded-3xl font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        <div className="text-center flex text-white">
          © 2023 Copyright : &nbsp;
          <p className="text-reset fw-bold">Suraj Paliwal PortFolio</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
