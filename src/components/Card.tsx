import { addToCart, removeItem } from '../services/CartSlice'
import { category, prodId, showCartFunc } from '../services/DataSlice';
import { productsData } from '../services/type';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
const Card = ({ customdata }: { customdata: productsData }) => {
   const navigate = useNavigate()
   const { products } = useAppSelector((state) => state.CartStates)
//    const { productId } = useAppSelector((state) => state.DataSlice)
   const dispatch = useAppDispatch()
   console.log(products)
   return (
      <div className='w-[100%] p-4 flex cursor-pointer flex-wrap flex-col mx-auto lg:flex-row items-center' >
         {customdata && customdata.map((item) => {
            return (
               <div className='bg-[#FFFFFF] p-[2rem]' key={item.id} >
                  <div onClick={() => {
                  dispatch(prodId(item.id))
                  navigate('/product')
                  dispatch(category(''))
                  dispatch(showCartFunc(false))
                  dispatch(showCartFunc(true))
                  console.log('first')
               }}>

                     <div>
                        <h1 className='font-bold text-2xl'>{item.title}</h1>
                        <p className=' text-xl'><span className='text-[#e35a38] font-extrabold'>Price: </span>${item.price}</p>
                     </div>
                     <img src={item.images[0]} alt={item.title} className='w-[80%] pt-9 mx-auto' />
                  </div>
                  <div className='w-[100%] flex flex-row justify-between text-xl pt-9'>
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