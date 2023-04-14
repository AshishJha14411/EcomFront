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
      <div className='w-[100%]  p-4 flex cursor-pointer flex-wrap flex-col mx-auto lg:flex-row lg:justify-around items-center' >
         {customdata && customdata.map((item) => {
            return (
               <div className='bg-[#FFFFFF] p-[2rem] text-center m-[1rem] lg:w-[30%] 2xl:w-[20%]' key={item.id} >
                  <div onClick={() => {
                  dispatch(prodId(item.id))
                  dispatch(category(''))
                  dispatch(showCartFunc(false))
                  dispatch(showCartFunc(true))
                  navigate('/product')
                  dispatch(hideNav())
               }}>

                     <div>
                        <h1 className='font-bold text-2xl lg:text-xl'>{item.title}</h1>
                        <p className=' text-xl'><span className='text-[#e35a38] font-extrabold'>Price: </span>${item.price}</p>
                     </div>
                     <img src={item.images?item.images[0]:"image Error"} alt={item.title} className='w-[100%] pt-9 mx-auto' />
                  </div>
                  <div className='w-[100%] flex flex-row justify-between text-xl lg:text-lg pt-9'>
                  {/* // eslint-disable-next-line */}
                     <h2 className='text-[#e35a38] font-bold cursor-pointer hover:text-[#000000]' onClick={() => dispatch(addToCart(item))}>Add to Cart</h2>
                     <p className='hover:text-[#e35a38] text-[#000000] cursor-pointer' onClick={() => dispatch(removeItem(item.id))}>Explore More</p>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default Card