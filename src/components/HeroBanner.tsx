"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


export default function Feutures() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className={`mr-96 text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      Our popular products
      </h2>
      
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
           <Card className="border-0 shadow-none group">
  <div
    className={`aspect-square relative overflow-hidden mb-3 ${
      product.id === 1 ? 'scale-110' : ''
    }`} 
  >
    <Image
      src={product.image}
      alt={product.name}
      className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ${
        product.id === 1 ? 'h-[100%] w-[160%]' : ''
      }`} 
    />
  </div>
  <h3 className="font-clash font-medium text-lg">{product.name}</h3>
  <p className="text-muted-foreground mb-3">£{product.price}</p>
</Card>

          </div>
        ))}
      </div>

      <div 
        className={`text-center mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '500ms' }}
      >
       <Button 
          variant="outline" 
          size="lg" 
          className="font-clash transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          View collection
        </Button>
        
      </div>
    </section>
  )
}


const products = [
    {
        id: 1,
        name: "The poplar suecle sofa",
        price: "980",
        image: "/popler sofa.png",
      },
  {
    id: 2,
    name: "The Dandy chair",
    price: "250",
    image: "/Product Card.png"
  },
  {
    id: 3,
    name: "The Dandy chair",
    price: "250",
    image: "/dandy chair.png"
  }
]
