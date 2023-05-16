export type productsData = 
    {
      id: number | 0,
      title?: string ,
      description?: string,
      price: number ,
      discountPercentage: number ,
      rating?: number,
      stock?: number,
      brand?: string ,
      category?: string ,
      thumbnail?: string ,
      images:string[] 
      quantity?: number | 0
    }
  
  
  
  export interface JsonObj {
      products: productsData[]
      total: number,
      skip: number,
      limit: number
  }
  export type CartState = {
    products: (productsData & { quantity: number })[];
    total: number | 0;
  }