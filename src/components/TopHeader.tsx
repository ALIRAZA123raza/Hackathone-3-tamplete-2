"use client"
import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import Link from 'next/link'

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "/category/plant-pots", label: "Plant pots" },
    { href: "/category/ceramics", label: "Ceramics" },
    { href: "/category/tables", label: "Tables" },
    { href: "/category/chairs", label: "Chairs" },
    { href: "/category/crockery", label: "Crockery" },
    { href: "/category/tableware", label: "Tableware" },
    { href: "/category/cutlery", label: "Cutlery" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className='w-full px-4 py-3 md:py-4 flex items-center justify-between max-w-7xl mx-auto'>
        {/* Logo and Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className='text-xl md:text-2xl font-medium'>
            Avion
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <Link href="./" className='text-gray-600 hover:text-black'>
            Home
          </Link>
          <Link href={"/newsSection"} className='text-gray-600 hover:text-black'>
            About us
          </Link>
          <Link href="/contact" className='text-gray-600 hover:text-black'>
            Contact
          </Link>
          <Search className='text-gray-600 hover:text-black cursor-pointer' />
          <Link href="/cart">
            <ShoppingCart className='text-gray-600 hover:text-black' />
          </Link>
          <button onClick={() => setIsModalOpen(true)}>
            <User className='text-gray-600 hover:text-black cursor-pointer' />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className='flex lg:hidden items-center gap-4'>
          <Search className='text-gray-600' size={20} />
          <Link href="/cart">
            <ShoppingCart className='text-gray-600' size={20} />
          </Link>
          <button onClick={() => setIsModalOpen(true)}>
            <User className='text-gray-600' size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="p-4 flex flex-col gap-4">
            <Link href="./" className='text-gray-600 hover:text-black text-lg'>
              Home
            </Link>
            <Link href="/newsSection" className='text-gray-600 hover:text-black text-lg'>
              About us
            </Link>
            <Link href="/contact" className='text-gray-600 hover:text-black text-lg'>
              Contact
            </Link>
            <div className="h-px bg-gray-200 my-2"></div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-600 hover:text-black text-lg'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navbar for Categories */}
      <div className='hidden lg:block w-full border-t border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center gap-12 py-4'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-600 hover:text-black'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Login/Signup */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative">
      <button 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" 
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Welcome!</h2>
        <p className="text-center text-gray-600">Choose an option below:</p>
        <Link
          href="/login"
          className="bg-blue-500 text-white py-3 rounded-lg text-center hover:bg-blue-600"
          onClick={() => setIsModalOpen(false)}
        >
          Login
        </Link>
        <Link
          href="/signUp"
          className="bg-green-500 text-white py-3 rounded-lg text-center hover:bg-green-600"
          onClick={() => setIsModalOpen(false)}
        >
          Signup
        </Link>
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default TopHeader;
