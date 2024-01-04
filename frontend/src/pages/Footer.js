import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'

function Footer() {
  return (
    <>
        <footer className="bg-white rounded-lg shadow absolute bottom-[0] w-[100%]">
            <div className="w-full container mx-auto p-4 md:px-6 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Ai Games Library </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 
                    <Link to="/" className="hover:underline">AGL</Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    </> 

  )
}

export default Footer