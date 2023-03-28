export type productsData = [
    {
      id?: number | undefined,
      title?: string | undefined,
      description?: string | undefined,
      price?: number | undefined,
      discountPercentage?: number | undefined,
      rating?: number | undefined,
      stock?: number| undefined,
      brand?: string | undefined,
      category?: string | undefined,
      thumbnail?: string | undefined,
      images?:string[] | undefined
      quantity?: number | 0
    }
  ]
  
  
  export interface JsonObj {
      products: productsData[]
      total: number,
      skip: number,
      limit: number
  }
  