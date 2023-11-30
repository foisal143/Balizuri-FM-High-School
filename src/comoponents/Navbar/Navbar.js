import React, { useState } from 'react';
import logo from '../../logo.jpeg';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="h-20 sticky top-0 z-50 text-white  bg-blue-400 px-5 md:px-12 flex justify-between items-center">
      <div className="w-14 z-20 h-14 rounded-full">
        <Link to="/">
          <img className="w-full rounded-full" src={logo} alt="" />
        </Link>
      </div>
      {/* responsive icon for small devaice */}
      <div
        onClick={() => setIsopen(!isOpen)}
        className="md:hidden z-20 cursor-pointer"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6"></XMarkIcon>
        ) : (
          <Bars3Icon className="w-6 h-6"></Bars3Icon>
        )}
      </div>
      {/* link here */}
      <div
        className={`md:w-1/3 z-10 flex-col w-full h-fit  p-5 md:flex-row flex md:static absolute -top-96 right-0 duration-500 font-semibold gap-10 md:gap-0 md:justify-evenly items-center ${
          isOpen ? 'top-20 bg-blue-400' : '-top-96'
        }`}
      >
        <NavLink to="/" className={({ isActive }) => isActive && 'text-black'}>
          Home
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) => isActive && 'text-black'}
        >
          Board Result
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) => isActive && 'text-black'}
        >
          Teachers
        </NavLink>
        <NavLink
          to="/gallary"
          className={({ isActive }) => isActive && 'text-black'}
        >
          Gallary
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
