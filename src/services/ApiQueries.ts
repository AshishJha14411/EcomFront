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
        getProductsAll: builder.query<JsonObj[], void>({
            query: () => `products?limit=100`,
        }),
        getSingleProduct: builder.query<JsonObj[], void>({
            query:(id) =>  `products/${id}`
        }),
    /*     getAllCatergory: builder.query<string[],void>({
            query:() => `products/categories`
        }), */
        getAllCategory: builder.query<string[], void>({
            query: () => `products/categories`
        }),
        getSingleCatergory: builder.query<productsData[], string>({
            query:(cate) =>  `/products/category/${cate}`
          
        })

    })
})


export const {useGetProductsAllQuery,useGetAllCategoryQuery,useGetSingleProductQuery, useGetSingleCatergoryQuery} = fetchData