import React, { useEffect } from 'react'
import { useState } from 'react';
import { showNav, hideNav, category, showCartFunc, showProductFunc } from '../services/DataSlice'
import { useGetAllCategoryQuery, useGetProductsAllQuery } from '../services/ApiQueries';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
// import { allProd } from '../services/DataStates';
const Navbar = () => {
    const { value, navCate } = useAppSelector((state) => state.DataSlice);
    const { data } = useGetAllCategoryQuery()
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [navList, setNavList] = useState<string[]>([])
    useEffect(() => {
        if (data) {
            const formatData = data.map((item: any) => item[0].toUpperCase() + item.substring(1))
            setNavList(formatData)
        }
        // console.log(navList)
    }, [data])
    /* 
    console.log(dispatch) */
    return (
        <div className='center'>

            <div className={`bg-[#000000] z-50 float-top top-0 absolute transition ease-in-out duration-700 p-10 left-0 h-auto max-w-[15rem] ${value ? '' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-[10rem] cursor-pointer mt-[-1rem] mb-[2rem] text-[#ffffff]" onClick={() => dispatch(hideNav())}>
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

                <ul className='text-[#ffffff] ml-[0]' aria-colspan={0}>

                    <li className='pb-5 cursor-pointer' onClick={() => {
                        dispatch(showCartFunc(false))
                        dispatch(showProductFunc(false))
                        dispatch(category(''))
                        navigate('/')
                    }}>Home</li>
                    {navList && navList.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <li className='pb-5 cursor-pointer' onClick={() => {
                                    dispatch(category(item.toLowerCase()))
                                    navigate('/')
                                }}>{item}</li>

                            </div>

                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar