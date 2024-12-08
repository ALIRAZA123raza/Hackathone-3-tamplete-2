import React from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div>
      {/* Header with logo */}
      <div className='w-full border-b-2 border-gray-300 p-4 relative'>
        <h1 className='text-center text-2xl mb-2'>Avion</h1>
        <Search className='absolute left-2 top-2 mt-6' />
        {/* Shopping Cart and User */}
        <div className='absolute right-2 top-2 mt-6 flex items-center gap-4'>
          <ShoppingCart />
          <span><User/></span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='max-w-7xl mx-auto flex justify-center items-center'>
        <div className='flex gap-6 text-center text-[#726E8D]'>
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
