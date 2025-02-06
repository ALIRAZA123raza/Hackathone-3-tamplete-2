"use client"
import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import Link from 'next/link'

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className='w-full px-4 py-3 md:py-4 flex items-center justify-between max-w-7xl mx-auto'>
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

        
        <div className='hidden lg:flex items-center gap-8'>
          <Link href={"/newsSection"} className='text-gray-600 hover:text-black'>
            About us
          </Link>
          <Link href="/contact" className='text-gray-600 hover:text-black'>
            Contact
          </Link>
          <Link href="/blog" className='text-gray-600 hover:text-black'>
            Blog
          </Link>
          <Search className='text-gray-600 hover:text-black cursor-pointer' />
          <Link href="/cart">
            <ShoppingCart className='text-gray-600 hover:text-black' />
          </Link>
          <User className='text-gray-600 hover:text-black cursor-pointer' />
        </div>

       <div className='flex lg:hidden items-center gap-4'>
          <Search className='text-gray-600' size={20} />
          <Link href="/cart">
            <ShoppingCart className='text-gray-600' size={20} />
          </Link>
          <User className='text-gray-600' size={20} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="p-4 flex flex-col gap-4">
            <Link href="/about-us" className='text-gray-600 hover:text-black text-lg'>
              About us
            </Link>
            <Link href="/contact" className='text-gray-600 hover:text-black text-lg'>
              Contact
            </Link>
            <Link href="/blog" className='text-gray-600 hover:text-black text-lg'>
              Blog
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
    </>
  )
}

export default TopHeader