import { addToCart, removeItem } from '../services/CartSlice'
import { category, hideNav, prodId, showCartFunc } from '../services/DataSlice';
import { productsData } from '../services/type';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
const Card = ({ customdata }: { customdata: productsData[] }) => {
   const navigate = useNavigate()
   const { products } = useAppSelector((state) => state.CartStates)
   //    const { productId } = useAppSelector((state) => state.DataSlice)
   const dispatch = useAppDispatch()
   return (
      <div className='w-full p-4 relative  flex flex-wrap justify-center lg:justify-center mx-auto mt-[-12rem] z-40 '>
         {customdata && customdata.map((item) => {
          
            return (
               <div className='bg-white flex flex-col justify-between items-center p-6 m-4 w-full sm:w-80 md:w-96 lg:w-72 xl:w-80' key={item.id} >
                  <div className='w-full mb-4'>
                     <h1 className='font-bold text-2xl'>{item.title}</h1>
                     <p className='text-xl text-[#e35a38] font-extrabold'>Price: ${item.price}</p>
                  </div>
                  <div className='w-full h-64 mb-4'>
                     <img src={item.images ? item.images[0] : "image Error"} alt={item.title} className='w-full h-full object-contain' onClick={() => {
                        dispatch(prodId(item.id))
                        dispatch(category(''))
                        dispatch(showCartFunc(false))
                        dispatch(showCartFunc(true))
                        navigate('/product')
                        dispatch(hideNav())
                     }} />
                  </div>

                  <div className='w-full flex justify-between items-center text-xl'>
                     <h2 className='text-[#e35a38] font-bold cursor-pointer hover:text-[#000000]' onClick={() => dispatch(addToCart(item))}>Add to Cart</h2>
                     <p className='text-[#000000] hover:text-[#e35a38] cursor-pointer' onClick={() => {

                        dispatch(prodId(item.id))
                        dispatch(showCartFunc(false))
                        dispatch(showCartFunc(true))
                        navigate('/product')
                     }}>Explore More</p>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default Card