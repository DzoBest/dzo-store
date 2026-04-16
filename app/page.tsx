import React from 'react'
import { Navbar } from '@/components/Navbar'
import { HeaderSlider } from '@/components/HeaderSlider'
import { HomeProducts } from '@/components/HomeProducts'
import Footer from '@/components/Footer'

import { fetchProducts } from '@/utils/actions/product.action'

const allProducts = await fetchProducts()
console.log(allProducts)

export default function page() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
        <HomeProducts products={allProducts} />

        <Footer />
      </div>
    </div>
  )
}
