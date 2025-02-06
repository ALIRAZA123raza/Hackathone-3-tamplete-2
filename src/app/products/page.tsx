"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { client } from '@/sanity/lib/client'
import { allProduct } from '@/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { addToCart } from '@/app/action/action'
import swal from 'sweetalert2'
import Footer from '@/components/Footer'

const PRODUCT = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProduct)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart `,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product)
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ALL Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {product.map((product) => (
          <Link href={`/product/${product.slug.current}`} passHref>
          <div key={product._id} className="flex flex-col items-center cursor-pointer">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name || "Product image"}
                width={255}
                height={255}
                className="w-[255px] h-[255px] object-cover rounded-lg"
                priority
              />
            )}
            <h2 className="text-lg font-semibold mt-3 text-center">{product.name}</h2>
            <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
            <button
          className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
            hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[200px]"
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add To Cart
        </button>
          </div>

          
         
        </Link>
        
        ))}



        
      </div>
     
    </div>
    <div className='w-full'>
      <Footer/>
      </div>
    </>
  )
}

export default PRODUCT