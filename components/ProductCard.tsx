import React from 'react'
import { ProductParams } from '@/shared.types.d'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ product }: { product: ProductParams }) => {
    return (
        <Link href={`product/${product.id}`}
            className='flex flex-col items-start gap-0.5 w-full cursor-pointer'
        >
            <div className='cursor-pointer group relative bg-gray-500/10 w-full flex items-center justify-center'>
                <div className=''>
                    <Image
                        src={product.image_url_array[0]}
                        alt={product.name}
                        className='group-hover:scale-105 transition object-contain'
                        width={400}
                        height={400}
                    />
                </div>

            </div>
            <p className='md:text-base font-medium pt-2 w-full truncate'>
                {product.name}
            </p>
            <p className='w-full text-xs text-gray-500/70 max-sm:truncate truncate'>
                {product.description}
            </p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{4.5}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-base font-medium'>
                    {process.env.currency}
                    {product.price}
                </p>
                <button className='max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs cursor-pointer hover:bg-slate-50 transition'>
                    Buy now
                </button>
            </div>
        </Link>
    )
}

export default ProductCard;
