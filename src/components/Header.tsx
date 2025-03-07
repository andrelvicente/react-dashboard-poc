import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white text-black p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Minha Landing Page</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={`lg:flex lg:block space-x-6 sm${isMobileMenuOpen ? 'block' : 'hidden'} md${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#features" className="hover:text-gray-200">Features</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
