"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { getCartItems, removeFromCart, updateCartQuantity } from '@/app/action/action';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import TopHeader from '@/components/TopHeader';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Get cart items and ensure each item has a quantity
    const items = getCartItems().map(item => ({
      ...item,
      quantity: item.quantity || 1  // Set default quantity if undefined
    }));
    setCartItems(items);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems((prevCartItems) => 
        prevCartItems.map((item) =>
            item._id === id ? { ...item, quantity } : item
        ));
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, (product.quantity || 1) + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && (product.quantity || 1) > 1) handleQuantityChange(id, (product.quantity || 1) - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      const price = item.price || 0;
      return total + (price * quantity);
    }, 0);
  };

  const router =useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Your order has been successfully processed.', 'success');
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <>
    
    <div className="w-full bg-[#1C1A26] text-white py-3 px-4 text-center text-sm">
        <p className="text-xs md:text-sm">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>
    <TopHeader/>
    <div className="p-4 max-w-4xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 flex items-center justify-between shadow-md">
                
                {item.image && (
                  <Image 
                    src={urlFor(item.image).url()}
                    className='w-16 h-16 object-cover rounded-lg'
                    alt={item.name || "Product image"}
                    width={500}
                    height={500}
                  />
                )}
            
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${(item.price || 0).toFixed(2)}</p>
                  <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 font-bold">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 border-t">
            <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
              onClick={handleProceed}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty!</p>
      )}
    </div>
    </>
  );
};

export default CartPage;