import { useState, useEffect, useRef } from 'react'
import { useGetProductsAllQuery } from '../services/ApiQueries'

import { productsData } from '../services/type';
import Card from '../components/Card';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Carousel from '../components/Carousel';
import SearchSection from '../components/SearchSection';

const Home = () => {

    const { data } = useGetProductsAllQuery()
    console.log(data)
    const ref = useRef(null);
    const [allProduct, setAllProduct] = useState<productsData>()
    const [productPerPage, setProductPerPage] = useState<number>(20)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [currentPageData, setCurrentPageData] = useState<productsData>()
    useEffect(() => {
        if (data) {
            setAllProduct(data.products)
        }
        const indexOfLastPost = pageNumber * productPerPage;
        const indexOffFirstPost = indexOfLastPost - productPerPage
        const currentData = allProduct?.slice(indexOffFirstPost, indexOfLastPost)
        setCurrentPageData(currentData)
        console.log(currentPageData)
        ref.current?.scrollIntoView()
    }, [data, pageNumber, allProduct])

    return (
        <div id='head' ref={ref} >
           
            {currentPageData ? <Card customdata={currentPageData} /> : <></>}
            <ul className='flex flex-row justify-around mx-auto w-[70%] p-5 text-center'>
                <button className='font-bold text-[#ffffff] bg-[#000000] p-3 w-[6rem] hover:text-[#e35a38]' onClick={() => {
                    setPageNumber(() => pageNumber - 1)
                }}>Previous</button>
                <li value='1' className={`hover:text-[#e35a38] pt-[0.7rem] h-[3rem] w-[13rem]  ${currentPageData && currentPageData[0].id === 1 ? "bg-[#aba7a7]" : "bg-[#fff]"}`} onClick={() => {
                    setPageNumber(1)
                }}>1</li>
                <li value='2' className={`hover:text-[#e35a38] pt-[0.7rem] h-[3rem] w-[13rem] ${currentPageData && currentPageData[0].id === 21 ? "bg-[#aba7a7]" : "bg-[#fff]"} `} onClick={() => {
                    setPageNumber(2)
                }}>2</li>
                <li value='3' className={`hover:text-[#e35a38] pt-[0.7rem] h-[3rem] w-[13rem] ${currentPageData && currentPageData[0].id === 41 ? "bg-[#aba7a7]" : "bg-[#fff]"} `} onClick={() => {
                    setPageNumber(3)
                }}>3</li>
                <li value='4' className={`hover:text-[#e35a38] pt-[0.7rem] h-[3rem] w-[13rem] ${currentPageData && currentPageData[0].id === 61 ? "bg-[#aba7a7]" : "bg-[#fff]"} `} onClick={() => {
                    setPageNumber(4)
                }}>4</li>
                <li value='5' className={`hover:text-[#e35a38] pt-[0.7rem] h-[3rem] w-[13rem]  ${currentPageData && currentPageData[0].id === 81 ? "bg-[#aba7a7]" : "bg-[#fff]"}  `} onClick={() => {
                    setPageNumber(5)
                }}>5</li>
                <button className='font-bold text-[#ffffff] bg-[#000000] p-3 w-[6rem] hover:text-[#e35a38]' onClick={() => {
                    setPageNumber(() => pageNumber + 1)
                    console.log(pageNumber)
                }}>Next</button>
            </ul>
        </div>
    )
}

export default Home