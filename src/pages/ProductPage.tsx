import { useGetSingleProductQuery } from '../services/ApiQueries'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { productsData } from '../services/type';
import { useEffect, useState } from 'react';
import { incrementQuantity, decrementQuantity, addToCart, CartStates } from '../services/CartSlice';
import { useNavigate } from 'react-router-dom';
import { hideNav } from '../services/DataSlice';

const ProductPage = () => {
  
  const { productId } = useAppSelector((state) => state.DataSlice);
  console.log(productId)
  const { data } = useGetSingleProductQuery(productId)
  
  console.log(data)
  const [imageState, setImageState] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
  if(data && imageState===''){
    setImageState(data.images[0])
  }

  }, [imageState, data])

  return (
    <div className=''>
      {data?
        <div className='flex lg:flex-row flex-col'>
          <div className='flex flex-col p-9 lg:w-[50%] w-[70%] lg:pl-[10%]'>
            <div className='w-[100%] h-[100%] ml-[30%] lg:ml-[0] '>
            <img src={imageState} alt="main image" className='w-[80%] h-[100%] rounded-lg lg:ml-[30%] xl:ml-[20%]' />
            </div>
            <div className='w-[100%] pt-[3rem] ml-[5rem] flex flex-row'>
              {data.images && data.images.map((item) => {
                return (
                  <div className={`flex flex-row  justify-start mt-2 ${imageState === item ? 'border-4 border-[#E6B94A]' : ''}  w-[100%] h-[80%] p-4`}>
                    <img src={item} alt="" onClick={() => {
                      setImageState(item)
                    }
                    } />
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col p-9 lg:pt-[7rem] pl-[10%] lg:w-[40%] w-[80%] ml-[4rem]'>
              <p className='text-2xl font-semibold text-[#E65A38]'>{data.brand}</p>
              <p className='text-3xl font-extrabold pt-7'>{data.title?.toUpperCase()}</p>
              <p className='text-xl pt-7 text-[#7d7878] font-regular'>{data.description}</p>
              <div className='flex flex-row '>
              <p className='pr-7 pt-7 font-bold text-4xl'>${(data.price - ((data.discountPercentage / 100) * data.price)).toFixed(2)}</p>
              <p className='mt-7 font-semibold text-sm px-2 py-2 text-[#E65A38] bg-[#ebc5ab]'>{data.discountPercentage}%</p>
              </div>
              <p className='line-through text-xl pt-3  text-[#7d7878]'>${data.price}</p>
              <div className='flex flex-row mt-4'>
              
                <button className='text-sm w-[10rem] font-bold text-[#ffffff] bg-[#E65A38] transition ease-in-out delay-150 hover:bg-[#000000] hover:text-[#E65A38] py-3 px-6' onClick={() => {
                  navigate('/cart')
                  dispatch(addToCart(data))
                  dispatch(hideNav())
                  } }>Buy Now</button>
                <button className='text-sm ml-[1rem] w-[15rem] font-bold transition ease-in delay-150 text-[#ffffff] bg-[#E65A38] hover:bg-[#000000] hover:text-[#E65A38] py-3 px-6' onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
              </div>
          </div>
        </div> : <></>}
    </div>
  )
}

export default ProductPage