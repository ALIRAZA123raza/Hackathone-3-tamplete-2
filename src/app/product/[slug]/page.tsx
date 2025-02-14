"use client";

import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/action/action";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

// Fetch product from Sanity database
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        description,
        image,
        price,
      }`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Unwrap params
    const resolveParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug) {
        try {
          const fetchedProduct = await getProduct(slug);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square mt-11">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-8 mt-12">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-sans">Price: ${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
