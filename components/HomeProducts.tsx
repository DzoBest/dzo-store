import React from 'react'
import { ProductParams } from '@/shared.types.d'
import ProductCard from '@/components/ProductCard'

interface HomeProductsParams {
  products: ProductParams[];
}
export const HomeProducts = ({products}: HomeProductsParams) => {
    return (
        <div className='flex flex-col items-center pt-14 mr-25 ml-25 m'>
            <p className='text-2xl font-medium text-left w-full'>Popular products</p>
            <div className='
            grid
            max-md:gap-1.5
            gap-3
            mt-6
            pb-14
            w-full
            lg:max-w-[1500px]
            grid-cols-2
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-3
                2xl:grid-cols-3
            '>
                {products.map((product, index: number) => (
                    <div key={product.id}>
                        <ProductCard key={index} product={product} /> 
                    </div>
                ))}

            </div>
        </div>
    )
}
