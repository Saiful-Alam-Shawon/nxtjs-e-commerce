import { data } from './utils/data'
import ProductItem from './Component/ProductItem'
import Carousel from './Component/Carousel'

export default function Home() {
  const { products } = data
  return (
    <>
      <Carousel ></Carousel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4  ">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>


  )
}
