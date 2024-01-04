import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
  };
  return (
    <div className='flex flex-col h-screen fixed-bg relative h-[1200px]'>
        <Navbar/>
        <section class="bg-white m-24">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 ">Any Issues or bugs! Let us Know</p>
                <form onSubmit={handleSubmit} class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 ">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@mail.com" required 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-semibold text-gray-900 ">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Title to your subject matter" required 
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-semibold text-gray-900 ">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  " placeholder="Tell us about..."
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}></textarea>
                </div>
                    <button type="submit" class="px-4 py-2 font-semibold text-sm rounded-full bg-cyan-500 text-white text-center sm:w-fit hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-primary-300">Send Message</button>
                </form>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact