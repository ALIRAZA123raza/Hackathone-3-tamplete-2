import React from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div>
      {/* Header with logo */}
      <div className='w-full border-b-2 border-gray-300 p-4 relative flex items-center justify-between'>
        <Search className='hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2' />
        <h1 className='text-center text-xl sm:text-2xl flex-1'>Avion</h1>
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4'>
          <ShoppingCart />
          <User />
        </div>
      </div>

      {/* Navigation Links */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-wrap gap-4 justify-center p-4 text-sm sm:text-base text-[#726E8D]'>
          <Link href={"#"}>Plants Pots</Link>
          <Link href={"#"}>Ceramics</Link>
          <Link href={"#"}>Tables</Link>
          <Link href={"#"}>Chairs</Link>
          <Link href={"#"}>Crockery</Link>
          <Link href={"#"}>Tableware</Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
