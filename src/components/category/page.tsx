"use client"
import React, { useEffect, useState } from 'react'
import { Product, Category } from '../../../types/product' // Make sure to include Category type
import { client } from '@/sanity/lib/client'
import { allProduct, allCategories } from '@/lib/queries' // Ensure you have a query for all categories
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const Categories = () => {
  const [product, setProduct] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([]) // State for categories

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(allProduct)
      setProduct(fetchedProduct)
    }

    async function fetchCategories() {
      const fetchedCategories: Category[] = await client.fetch(allCategories) // Fetch categories
      setCategories(fetchedCategories)
    }

    fetchProducts()
    fetchCategories() // Call the fetchCategories function
  }, [])

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {product.map((product) => (
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-2" key={product._id}>
            <div className="border border-gray-300 rounded-lg p-4 text-center">
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
              <p className="text-lg font-bold">{product.price}</p>
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Categories</h2>
        <ul className="list-disc pl-5">
          {categories.map((category) => (
            <li key={category._id}>{category.name}</li> // Render category names
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
