import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { hideNav, showNav, showCartFunc, showProductFunc } from '../services/DataSlice';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
const SearchSection = () => {

  const navigate = useNavigate()

  const { value } = useAppSelector((state) => state.DataSlice);
  const dispatch = useAppDispatch();

  return (
    <div className='w-[100%]  h-[30vh] pt-[4rem] p-10 '>
      <div className='flex flex-row justify-between mx-auto  w-[100%]'>
        <div className='flex flex-col w-[100%] mt-[-2.5rem]'>
          <div className='flex flex-row w-[90%] text-xl justify-between py-4 px-4  text-[#ffffff]'>
            <img src={logo} alt="website-logo" className='w-[30%] pt-5' />
            <div className='flex flex-row-reverse cursor-pointer pt-7 ' onClick={() => {
              navigate('/cart')
              dispatch(showCartFunc(true))
              dispatch(showProductFunc(false))
            }}>

              <p className=''>Cart</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </div>
          </div>
          <div className='flex flex-row justify-end w-[100%] '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[5rem] mt-[-0.9rem] h-[5rem] cursor-pointer font-extrabold text-[#ffffff]" onClick={() => {
              if (value) {
                dispatch(hideNav())
              } else {
                dispatch(showNav())
              }
            }} >
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            <input
              className='w-[80%] p-5 h-[3rem]'
              placeholder='Enter the Search item you want'
            />
            <div className='bg-[#F26522] mb-4 px-[1rem]'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2rem] h-[1.2rem] mt-[0.8rem] font-extrabold text-[#ffffff]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchSection