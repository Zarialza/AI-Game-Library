import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <div className='flex flex-col h-screen fixed-bg relative h-[1200px]'>
        <Navbar/>
            <section class="bg-white m-24">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">About Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
                    Welcome to our website! We're excited to share with you that this
                    website is a solo project that hosts AI games. I have been working
                    hard to bring you a unique and innovative gaming experience that's
                    powered by artificial intelligence.
                </p>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
                    My goal is to provide a fun and engaging experience that showcases
                    the power and potential of AI. I believe that games are an excellent
                    way to introduce people to the world of AI and machine learning in a
                    fun and approachable way.
                </p>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
                    I'm constantly working to improve my games and add new ones to my
                    platform. I'm passionate about AI and programming, and I'm excited
                    to share that passion with you through my website.
                </p>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
                    Thank you for visiting my website, and I hope you have a great time
                    playing my AI games!
                </p>        
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default About