import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGetSingleCatergoryQuery } from '../services/ApiQueries';
import {useEffect} from 'react';
import { productsData } from '../services/type';

const CatePages = () => {
    const { navCate } = useAppSelector((state) => state.DataSlice);
    const { data } = useGetSingleCatergoryQuery(navCate)

    const [cateProd,setCateProd] = useState<productsData[]>([])
    useEffect(() => {
      if(data){
        // data is an array of JsonObj. If you are expecting only one element in this array, you can do:
        const products = data.products;
        if (products) {
            setCateProd(products);
        }
    }
        console.log(navCate)
        console.log(cateProd)
    },[data, cateProd])
  return (
    <div>
        <Navbar />
        <div className='mt-[18rem]'>
           {data?  <Card customdata={cateProd}/>: <h1>Loading</h1>}
        </div>
    </div>
  )
}

export default CatePages