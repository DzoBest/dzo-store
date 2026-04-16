
import { fetchProductById } from '@/utils/actions/product.action'
import ProductDetails from '@/components/ProductDetails'
export default async function Product({params}: {params: Promise<{id: string}>}) {

    const {id} = await params

    const product = await fetchProductById(id)
    if (!product) {
        return <h1>Product not found</h1>
    }

  return (
    <div>
        <ProductDetails product={product} />
    </div>
  )
}

    