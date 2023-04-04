import { iteratorSymbol } from 'immer/dist/internal'
import React, {useState} from 'react'
import { useAppSelector } from '../app/hooks'
import { productsData } from '../services/type';
import {useEffect} from 'react';

const Cart = () => {
  const { products } = useAppSelector((state) => state.CartStates)
  const [cartDetails, setCartDetails] = useState<productsData>()
  useEffect(() => {
    if(products){
      setCartDetails(products)
    }
  },[])
  console.log(cartDetails)
  console.log(products)
  return (
    <div className='bg-[#ddd8d8] flex flex-row mx-auto '>
      <div className='p-[1rem] bg-[#ffffff] m-[4rem] w-[50%] mx-auto'>
        {products && products.map((item) => {
          return (

            <div className='flex flex-row p-7'>
              <img src={item.images[0]} alt={item.title} className='w-[10rem] h-[10rem]' />
              <div className='flex-flex-col content-between pl-7'>
                <p>Name: {item.title}</p>
                <p>Category: {item.category}</p>
                <p>Price: <span className='line-through'> {item.price}</span></p>
                <p>Discount: {item.discountPercentage}</p>
                <p>Save: {Math.round(item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                <p>Pay: {item.price - ((item.discountPercentage / 100) * item.price).toFixed(2)}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='w-[30%]  bg-[#ffffff] m-[4rem] p-7'>

      <h1>{products.length}</h1>
      <p className="total">
        {`Total: ${products.reduce((total, cartItem) => {
          console.log(cartItem.quantity)
          return (total + ((cartItem.price*(100-cartItem.discountPercentage))/100) * cartItem.quantity);
        }, 0).toFixed(2)}`}
      </p>
        </div>
    </div>
  )
}

export default Cart