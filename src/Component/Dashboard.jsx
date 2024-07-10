/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/Image/logo.png'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="">
      <nav className="bg-blue-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-14 w-14 sm:h-17 sm:w-17" src={logo} alt="Your Company" />
              </div>
              <div className="hidden sm:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link to="/Dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Dashboard
                  </Link> */}
                  <Link to="Home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Home
                  </Link>
                  <Link to="About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    About
                  </Link>
                  <Link to="Booking" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"> Booking </Link>
                  <Link to="Admin" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"> BookingList </Link>
                </div>
              </div>
            </div>
            <div>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Log Out
              </Link>
            </div>
          </div> 
        </div>
      </nav>
    </div>
    
  )
}

export default Dashboard