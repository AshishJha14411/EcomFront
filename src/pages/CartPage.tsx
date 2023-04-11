import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { productsData } from '../services/type';
import { useEffect } from 'react';
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../services/CartSlice';
import { useNavigate } from 'react-router-dom';
import { prodId } from '../services/DataSlice';
const Cart = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { products } = useAppSelector((state) => state.CartStates)
  const [cartDetails, setCartDetails] = useState<productsData>()
  useEffect(() => {
    if (products) {
      setCartDetails(products)
    }
  }, [])
  // console.log(cartDetails)
  // console.log(products)
  return (
    <div className='bg-[#ddd8d8] flex xl:flex-row flex-col mx-auto '>
      <div className='p-[1rem] bg-[#ffffff] m-[4rem] xl:w-[60%] border w-[80%] mx-auto'>
        {products.length!==0 ? products.map((item) => {
          return (

            <div className='flex xl:flex-row flex-col justify-between py-6 border-b-2 border-[#E65A38]'>
              <div className='flex xl:flex-row xl:w-[50%] flex-col '>

                <img src={item.images[0]} alt={item.title} className='w-[10rem] cursor-pointer h-[10rem]' onClick={() => {
                  dispatch(prodId(item.id))
                  navigate('/product')
                  dispatch(hideNav())
                }} />
                <div className='flex-flex-col content-between pl-7'>
                  <p className='font-semibold lg:text-xl text-lg'>Name: <span className='font-semibold text-xl lg:text-2xl'>{item.title}</span></p>
                  <p className='font-semibold'>Category: <span className='font-normal'>{item.category}</span></p>

                  <p className='text-xl'>Price: <span className='text-2xl font-semibold'>
                    ${(item.price - ((item.discountPercentage / 100) * item.price)).toFixed(2)}
                  </span>
                  </p>
                  <p className='font-semibold text-[#959495]'><span className='line-through font-normal'> $ {item.price}</span></p>
                  <p className='font-bold text-[#E65A38]'>Discount: {item.discountPercentage}%</p>
                  <p className='font-bold text-[#E65A38]'>Save: ${Math.round(item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                </div>
              </div>
              <div className='p-4 xl:w-[40%] w-[100%] flex border  xl:flex-col flex-row'>

                <p className='mb-5 flex flex-row w-full  pt-4'>Quantity:
                  <button className='px-3 py-1 ml-3 bg-[#E65A38] mr-2 xl:h-[2rem]' onClick={() => {
                    dispatch(decrementQuantity(item.id))
                  }}>-</button>
                  {item.quantity}
                  <button className='px-3 py-1 bg-[#6bcafa] ml-2 xl:h-[2rem]' onClick={() => {
                    dispatch(incrementQuantity(item.id))
                  }}>+</button> </p>
                <button className='px-3 text-white ml-4 bg-[#E65A38] w-[10rem] xl:h-[4rem]' onClick={() => {
                  dispatch(removeItem(item.id))
                }}>Remove From Cart</button>
              </div>
            </div>
          )
        }) : <p className='text-[#E65A38] text-center mt-[10%] text-2xl'>Nothing to Show in Cart.<br></br> Please Add Some Items</p>
      }
      </div>
      <div className='lg:w-[30%] text-center w-[80%] lg:h-[100%] m-[4rem] lg:ml-[1rem] bg-[#ffffff] p-[1rem] mx-auto'>

        <h1 className='text-xl'>Total Items: {products.reduce((total,item) => {
          return total = item.quantity+total
        },0)}</h1>
        <p className="total text-2xl font-semibold">
          {`Total: ${products.reduce((total, cartItem) => {
            // console.log(cartItem.quantity)
            return (total + ((cartItem.price * (100 - cartItem.discountPercentage)) / 100) * cartItem.quantity);
          }, 0).toFixed(2)}`}
        </p>
        <button className='text-sm ml-[1rem] w-[15rem] m-4 font-bold transition ease-in delay-150 text-[#ffffff] bg-[#E65A38] hover:bg-[#000000] hover:text-[#E65A38] py-3 px-6' onClick={() => {
          alert(`Thank You for your Purchase of ${`Total: ${products.reduce((total, cartItem) => {
            // console.log(cartItem.quantity)
            return (total + ((cartItem.price * (100 - cartItem.discountPercentage)) / 100) * cartItem.quantity);
          }, 0).toFixed(2)}`}. You will be redirected to homePage`);
          dispatch(clearCart())
          navigate('/')
          }}>Check Out</button>
            <button className='text-sm w-[15rem] my-4 font-bold transition ease-in delay-150 text-[#ffffff] bg-[#000000] hover:bg-[#E65A38] hover:text-[#000000] py-3 px-6' onClick={() => {
          dispatch(clearCart())
          navigate('/')
          }}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart