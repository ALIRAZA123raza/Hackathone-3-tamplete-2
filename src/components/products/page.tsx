"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { client } from '@/sanity/lib/client'
import { allProduct,  } from '@/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { addToCart } from '@/app/action/action'
import swal from 'sweetalert2'

const PRODUCT = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProduct,)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, []);

const handleAddToCart = (e: React.MouseEvent, product :Product) => {
  e.preventDefault()
  swal.fire({
    position : "top-right",
    icon : "success",
    title : `${product.name} added to cart `,
    showConfirmButton : false,
    timer : 1000
  })
  addToCart(product)
  
}

  return (
    <>
        <h1 className="text-3xl font-bold text-center my-6">ALL Products</h1>
    <div className="flex flex-wrap justify-between">
      
      {product.map((product) => (
        
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-2" key={product._id}>
       <div className="border border-gray-300 rounded-lg p-4 text-center">
        <Link href={`/product/${product.slug.current}`}>
                    <h2 className="font-semibold">{product.productName}</h2>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={200}
                        height={200}
                        className="mb-2"
                      />
                    )}
                    <p className="text-lg font-bold">${product.price}</p>
                    <p>{product.name}</p>
                    

                   
                   
                    <button 
                    className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
                       hover:scale-110 transition-transform duration-300 ease-in-out'
                       onClick={(e)=> handleAddToCart(e, product)}
                    >
                    Add To Cart
                    </button>
                   
                   
                   
                    </Link>
                  </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default PRODUCT
