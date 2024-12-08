import React from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div>
      {/* Header with logo */}
      <div className='w-full border-b-2 border-gray-300 p-4 flex items-center justify-between'>
        {/* Search Icon */}
        <div className='flex items-center'>
          <Search className='hidden sm:block text-gray-600' />
        </div>
        {/* Logo */}
        <h1 className='text-center text-xl sm:text-2xl flex-1 text-gray-800'>Avion</h1>
        {/* Shopping Cart and User */}
        <div className='flex items-center gap-4'>
          <ShoppingCart className='text-gray-600' />
          <User className='text-gray-600' />
        </div>
      </div>

      {/* Navigation Links */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-wrap justify-center gap-6 py-4 text-sm sm:text-base text-[#726E8D]'>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Plants Pots
          </Link>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Ceramics
          </Link>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Tables
          </Link>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Chairs
          </Link>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Crockery
          </Link>
          <Link href={"#"} className='hover:text-gray-800 transition'>
            Tableware
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
