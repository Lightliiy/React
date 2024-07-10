/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-blue-500 rounded-lg">
        <div className="container mx-auto px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-center justify-between">
            <span className="text-sm text-black-500 sm:text-center dark:text-black-400">©2024 <a href="https://suza.ac.tz/" className="hover:underline">@suza.ac.tz</a>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-white sm:mt-0">
              <li>
                <Link to="/home" className="px-4 py-2">Home</Link>
              </li>
              <li>
                <Link to="/about" className="px-4 py-2">About</Link>
              </li>
              <li>
                <Link to="/booking" className="px-4 py-2">Booking</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
