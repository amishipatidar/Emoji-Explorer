import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Add icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-cyan-400 font-semibold" : "text-white";

  return (
    <nav style={{ backgroundColor: '#222C3F' }} className="shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Emoji Explorer</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/explorer" className={navLinkClass}>Explorer</NavLink>
          <NavLink to="/popular" className={navLinkClass}>Popular</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#222C3F] px-4 pb-4 space-y-3">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink><br/>
          <NavLink to="/explorer" className={navLinkClass} onClick={closeMenu}>Explorer</NavLink><br/>
          <NavLink to="/popular" className={navLinkClass} onClick={closeMenu}>Popular</NavLink><br/>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink><br/>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink><br/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

