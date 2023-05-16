import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* import { PayloadAction } from "@reduxjs/toolkit";
import {DataState } from '../app/store';
 */
import { JsonObj, productsData } from "./type";
// interFace type for slice state;

export const fetchData = createApi({
    reducerPath: 'fetchData',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getProductsAll: builder.query<JsonObj, void>({
            query: () => `products?limit=100`,
        }),
        getSingleProduct: builder.query<productsData, number>({
            query:(id) =>  `products/${id}`
        }),
        getCaroProducts: builder.query<string[],void>({
            query:() => `products?limit=50`
        }),
        getAllCategory: builder.query<string[], void>({
            query: () => `products/categories`
        }),
        getSingleCatergory: builder.query<JsonObj, string>({
            query:(cate) =>  `/products/category/${cate}`
          
        }),
        getSearchData: builder.query<productsData[],string>({
            query:(searchQuery) => `products/search?q=${searchQuery}`
        })

    })
})


export const {useGetProductsAllQuery,useGetAllCategoryQuery,useGetSingleProductQuery, useGetSingleCatergoryQuery, useGetCaroProductsQuery,useLazyGetSearchDataQuery} = fetchData